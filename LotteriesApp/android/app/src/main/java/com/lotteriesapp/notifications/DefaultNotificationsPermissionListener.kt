package com.lotteriesapp.notifications

import com.facebook.react.modules.core.PermissionListener

internal class DefaultNotificationsPermissionListener(val notificationsCallback: () -> Unit) :
    PermissionListener {

    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    ): Boolean {
        return if (requestCode == NOTIFICATIONS_PERMISSION_REQUEST_CODE) {
            notificationsCallback()
            true
        } else {
            false
        }
    }
    companion object {
        const val NOTIFICATIONS_PERMISSION_REQUEST_CODE = 171
    }
}
