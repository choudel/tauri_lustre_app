use std::fmt;

/// Main application error type that wraps all possible errors
#[derive(Debug)]
pub enum AppError {
    /// Database-related errors
    Database(rusqlite::Error),
    /// Validation errors for user input
    Validation(String),
    /// Business logic errors
    Business(String),
    /// Not found errors (e.g., record doesn't exist)
    NotFound(String),
    /// Generic internal errors
    Internal(String),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            AppError::Database(err) => write!(f, "Database error: {}", err),
            AppError::Validation(msg) => write!(f, "Validation error: {}", msg),
            AppError::Business(msg) => write!(f, "Business logic error: {}", msg),
            AppError::NotFound(msg) => write!(f, "Not found: {}", msg),
            AppError::Internal(msg) => write!(f, "Internal error: {}", msg),
        }
    }
}

impl std::error::Error for AppError {
    fn source(&self) -> Option<&(dyn std::error::Error + 'static)> {
        match self {
            AppError::Database(err) => Some(err),
            _ => None,
        }
    }
}

// Conversion implementations for common error types
impl From<rusqlite::Error> for AppError {
    fn from(err: rusqlite::Error) -> Self {
        AppError::Database(err)
    }
}

impl From<String> for AppError {
    fn from(msg: String) -> Self {
        AppError::Internal(msg)
    }
}

impl From<&str> for AppError {
    fn from(msg: &str) -> Self {
        AppError::Internal(msg.to_string())
    }
}

// Convert AppError to String for Tauri commands
impl From<AppError> for String {
    fn from(err: AppError) -> Self {
        err.to_string()
    }
}

/// Result type alias for convenience
pub type AppResult<T> = Result<T, AppError>;

/// Helper functions for creating specific error types
impl AppError {
    /// Create a validation error
    pub fn validation<S: Into<String>>(msg: S) -> Self {
        AppError::Validation(msg.into())
    }

    /// Create a business logic error
    pub fn business<S: Into<String>>(msg: S) -> Self {
        AppError::Business(msg.into())
    }

    /// Create a not found error
    pub fn not_found<S: Into<String>>(msg: S) -> Self {
        AppError::NotFound(msg.into())
    }

    /// Create an internal error
    pub fn internal<S: Into<String>>(msg: S) -> Self {
        AppError::Internal(msg.into())
    }

    /// Check if the error is a database error
    pub fn is_database_error(&self) -> bool {
        matches!(self, AppError::Database(_))
    }

    /// Check if the error is a validation error
    pub fn is_validation_error(&self) -> bool {
        matches!(self, AppError::Validation(_))
    }

    /// Get the error message as a string
    pub fn message(&self) -> String {
        self.to_string()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_error_display() {
        let err = AppError::validation("Name is required");
        assert_eq!(err.to_string(), "Validation error: Name is required");
    }

    #[test]
    fn test_error_conversion() {
        let msg = "Test error";
        let err: AppError = msg.into();
        assert!(matches!(err, AppError::Internal(_)));
    }

    #[test]
    fn test_error_helpers() {
        let err = AppError::not_found("User not found");
        assert!(matches!(err, AppError::NotFound(_)));
        assert_eq!(err.message(), "Not found: User not found");
    }
}
