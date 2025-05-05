package com.lotteriesapp.button

import android.content.Context
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.platform.AbstractComposeView
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.Arguments
import com.facebook.react.uimanager.events.RCTModernEventEmitter



class CustomButtonView(
    context: Context
) : AbstractComposeView(context) {
    var title = mutableStateOf("Default Title")
    var disabled =  mutableStateOf(false)

    @Composable
    override fun Content() {
        Button(onClick = {
            val event = Arguments.createMap() // Create empty map for event data
            event.putString("action", "click") // add entry to event
            val reactContext = context as ReactContext
            reactContext
                .getJSModule(RCTModernEventEmitter::class.java)
                .receiveEvent(
                    id,
                    "onPressed",
                    event
                )

        }, enabled = !disabled.value) {
            Text(title.value)
        }
    }
}

class ReactCustomButtonViewManager(
    private val callerContext: ReactApplicationContext
) : SimpleViewManager<CustomButtonView>() {

    @ReactProp(name = "title")
    fun setTitle(view: CustomButtonView, title: String) {
        view.title.value = title
    }

    @ReactProp(name = "disabled")
    fun setDisabled(view: CustomButtonView, disabled: Boolean) {
        view.disabled.value = disabled
    }

    override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any>? {
        return mapOf(
            "onPressed" to mapOf(
                "phasedRegistrationNames" to mapOf(
                    "bubbled" to "onPressed"
                )
            )
        )
    }

    override fun createViewInstance(p0: ThemedReactContext): CustomButtonView {
        return CustomButtonView(callerContext)
    }

    override fun getName() = REACT_CLASS

    companion object {
        const val REACT_CLASS = "RNCustomButton"
    }
}
