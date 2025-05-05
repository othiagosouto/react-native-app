package com.lotteriesapp.notifications

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.modules.core.PermissionAwareActivity
import com.lotteriesapp.AppPermissions
import com.lotteriesapp.notifications.DefaultNotificationsPermissionListener.Companion.NOTIFICATIONS_PERMISSION_REQUEST_CODE

class NotificationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "Notification"

    @ReactMethod
    fun showNotification(title: String, body: String) {
        val notificationHandler = NotificationHandler { reactApplicationContext }
        val activity = currentActivity as PermissionAwareActivity?
        if (activity == null) {
            Log.e("PermissionRequest", "Android failed to request permission for notifications")
        }

        notificationHandler.displayNotificationIfPermissionGranted(title, body)

        activity?.requestPermissions(
            arrayOf(AppPermissions.NOTIFICATIONS),
            NOTIFICATIONS_PERMISSION_REQUEST_CODE,
            DefaultNotificationsPermissionListener {
                notificationHandler.displayNotificationIfPermissionGranted(title, body)
            }
        )
    }
}
