import Foundation

@objc(Notification)
class Notification: NSObject, UNUserNotificationCenterDelegate {
  private let uuid = UUID()

  @objc func showNotification(_ title: String, location body: String) {
    Task.init { @MainActor in

      do {
        let isAuthorized = try await requestAuthorizationForNotifications()
        if isAuthorized {
          let content = UNMutableNotificationContent()
          content.title = title
          content.body = body
          content.sound = UNNotificationSound.default
          let center = UNUserNotificationCenter.current()

          let trigger = UNTimeIntervalNotificationTrigger(timeInterval: 0.1, repeats: false)
          let request = UNNotificationRequest(identifier: uuid.uuidString, content: content, trigger: trigger)
          center.delegate = self
          try await center.add(request)
        } else {
          print("Notification not authorized")
        }
      } catch {
        print(error.localizedDescription)
      }
    }
  }

  func requestAuthorizationForNotifications() async throws -> Bool {
    let notificationCenter = UNUserNotificationCenter.current()
    let authorizationOptions: UNAuthorizationOptions = [.alert, .sound, .badge]

    do {
      let authorizationGranted = try await notificationCenter.requestAuthorization(options: authorizationOptions)
      return authorizationGranted
    } catch {
      throw error
    }
  }

  func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {
    completionHandler([.banner, .sound, .badge])
  }
}
