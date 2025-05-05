import UIKit
import React
import SwiftUI

class RNCustomButtonProps: ObservableObject {
  @Published var title: NSString = ""
  @Published var disabled: Bool = false
  @Published var onPressed: RCTBubblingEventBlock = {_ in }
}

class SimpleViewProxy: UIView {

  var returningView: UIView?
  let props: RNCustomButtonProps = .init()

  override init(frame: CGRect) {
    super.init(frame: frame)
    let vc = UIHostingController(rootView: RNCustomButton().environmentObject(props))
    vc.view.frame = bounds
    self.addSubview(vc.view)
    self.returningView = vc.view
  }

  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

  @objc var title: NSString = "" {
    didSet{
      props.title = title
    }
  }

  @objc var disabled: NSNumber = false {
    didSet{
      props.disabled = disabled == 1
    }
  }

  @objc var onPressed: RCTBubblingEventBlock = {_ in} {
    didSet{
      props.onPressed = onPressed
    }
  }

  override func layoutSubviews() {
    super.layoutSubviews()
    self.returningView?.frame = bounds
  }
}

@objc(RNCustomButtonManager)
class RNCustomButtonManager: RCTViewManager {

  override func view() -> SimpleViewProxy? {
    return SimpleViewProxy()
  }

  @objc override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
