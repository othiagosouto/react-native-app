package com.lotteriesapp.notifications

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.content.pm.PackageManager
import android.os.Build
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import com.lotteriesapp.AppPermissions
import com.lotteriesapp.R

class NotificationHandler(private val contextProvider: () -> Context) {

    fun displayNotificationIfPermissionGranted(title: String, body: String) {
        with(NotificationManagerCompat.from(contextProvider())) {
            if (ActivityCompat.checkSelfPermission(
                    contextProvider(),
                    AppPermissions.NOTIFICATIONS
                ) == PackageManager.PERMISSION_GRANTED
            ) {
                notify(100, createNotification(title, body))
            }
        }
    }

    private fun createNotification(title: String, body: String): Notification =
        with(contextProvider()) {
            val notification = NotificationCompat.Builder(this, "LotteriesApp")
                .setContentTitle(title)
                .setSmallIcon(R.mipmap.ic_launcher)
                .setContentText(body)
                .setPriority(NotificationCompat.PRIORITY_DEFAULT)
                .build()

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val name = "Channel Name"
                val descriptionText = "Channel description"
                val importance = NotificationManager.IMPORTANCE_DEFAULT
                val channel = NotificationChannel("LotteriesApp", name, importance).apply {
                    description = descriptionText
                }
                val notificationManager: NotificationManager =
                    getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
                notificationManager.createNotificationChannel(channel)
            }

            return notification
        }
}
