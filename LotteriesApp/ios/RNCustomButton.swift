//
//  RNCustomButton.swift
//  LotteriesApp
//
//  Created by Thiago Santos on 05.05.25.
//
import SwiftUI

struct RNCustomButton: View {
  @EnvironmentObject var props: RNCustomButtonProps

  var body: some View {
    Button(action: {
      props.onPressed(["data": "some data by native side"])
    }){
      Text("\(props.title)")
    }
    .disabled(props.disabled)
  }
}
