// Tauri 2 detection - check for the correct global
const isTauri = typeof window !== "undefined" && window.__TAURI_INTERNALS__;

let gleamCallback = null;

export function setCallback(cb) {
  gleamCallback = cb;
}

export async function invoke(cmd, args) {
  try {
    let result;
    // Check if we're in Tauri environment and use the global API
    if (typeof window !== "undefined" && window.__TAURI_INTERNALS__) {
      // Use the internal invoke method directly
      result = await window.__TAURI_INTERNALS__.invoke(cmd, args);
    } else if (typeof window !== "undefined" && window.__TAURI__) {
      // If global internals not available, try the public API
      result = await window.__TAURI__.core.invoke(cmd, args);
    } else {
      throw new Error("Tauri globals not found");
    }

    // Pass the raw result to Gleam
    if (gleamCallback) gleamCallback(cmd, result);
    return result;
  } catch (error) {
    console.log("Tauri not available, using simulation:", error.message);
    // Create a simulated response for testing
    const simulatedResult =
      cmd === "create_greet"
        ? { id: 1, name: "Chouaib", message: "Hello, Chouaib!" }
        : `Hello, ${args.name || "World"}!`;

    if (gleamCallback) gleamCallback(cmd, simulatedResult);
    return simulatedResult;
  }
}
