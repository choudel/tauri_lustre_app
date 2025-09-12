import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from "@tauri-apps/plugin-notification";

// Enhanced notification system
export async function init_notifications() {
  try {
    console.log("🔔 Initializing notifications...");

    let permissionGranted = await isPermissionGranted();
    console.log("📋 Initial permission status:", permissionGranted);

    if (!permissionGranted) {
      console.log("🔐 Requesting notification permission...");
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
      console.log("📋 Permission after request:", permissionGranted);
    }

    if (permissionGranted) {
      console.log("✅ Sending welcome notification...");
      await sendNotification({
        title: "🚀 Gleam + Tauri App",
        body: "Notification system initialized successfully!",
      });
    } else {
      console.log("❌ Notification permission denied");
    }
  } catch (error) {
    console.error("💥 Error initializing notifications:", error);
  }
}

// Send custom notification
export async function send_notification(title, body) {
  try {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === "granted";
    }

    if (permissionGranted) {
      await sendNotification({ title, body });
      console.log(`📨 Notification sent: ${title} - ${body}`);
      return true;
    }

    console.log("🚫 Notification permission denied");
    return false;
  } catch (error) {
    console.error("💥 Error sending notification:", error);
    return false;
  }
}

// Send immediate test notification
export async function send_test_now() {
  console.log("🧪 Sending immediate test notification...");
  const timestamp = new Date().toLocaleTimeString();

  return await send_notification(
    "⚡ Instant Test",
    `Test notification sent at ${timestamp}`
  );
}

// Send timed notification with callback
export function send_timed_notification(delayMs, callback) {
  console.log(`⏰ Scheduling notification for ${delayMs}ms...`);

  setTimeout(async () => {
    console.log("⏰ Sending timed notification...");
    const timestamp = new Date().toLocaleTimeString();

    const success = await send_notification(
      "⏰ Timed Notification",
      `This notification was scheduled and sent at ${timestamp}`
    );

    callback(success);
  }, delayMs);
}

// Legacy test notification function (sends multiple notifications)
export function test_notification() {
  console.log("🧪 Starting test notification sequence...");

  // Send test notification after 2 seconds
  setTimeout(async () => {
    console.log("🧪 Sending first test notification...");
    await send_notification("🧪 Test #1", "First automated test notification");
  }, 2000);

  // Send another test notification after 5 seconds
  setTimeout(async () => {
    console.log("🧪 Sending second test notification...");
    await send_notification(
      "🧪 Test #2",
      "Second automated test notification with more details!"
    );
  }, 5000);

  // Send final test notification after 8 seconds
  setTimeout(async () => {
    console.log("🧪 Sending final test notification...");
    await send_notification(
      "🎉 Test Complete",
      "All test notifications have been sent successfully!"
    );
  }, 8000);
}
