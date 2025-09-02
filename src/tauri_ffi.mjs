// Tauri 2 detection - check for the correct global
const isTauri = typeof window !== "undefined" && window.__TAURI_INTERNALS__;

let gleamCallback = null;

export function setCallback(cb) {
  gleamCallback = cb;
}

export async function invoke(cmd, args) {
  try {
    // Check if we're in Tauri environment and use the global API
    if (typeof window !== "undefined" && window.__TAURI_INTERNALS__) {
      // Use the internal invoke method directly
      const result = await window.__TAURI_INTERNALS__.invoke(cmd, args);
      if (gleamCallback) gleamCallback(cmd, result);
      return result;
    }

    // If global internals not available, try the public API
    if (typeof window !== "undefined" && window.__TAURI__) {
      const result = await window.__TAURI__.core.invoke(cmd, args);
      if (gleamCallback) gleamCallback(cmd, result);
      return result;
    }

    throw new Error("Tauri globals not found");
  } catch (error) {
    console.log("Tauri not available, using simulation:", error.message);
    const result = `Simulated result for ${cmd}`;
    if (gleamCallback) gleamCallback(cmd, result);
    return result;
  }
}
