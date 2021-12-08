//
//  ContentView.swift
//  frontenc-swiftui-1800
//
//  Created by Tomáš Horáček on 07.12.2021.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            QuackView(quack: .init(
                name: "John Doe",
                userName: "john"
            ))
            QuackView(quack: .init(
                name: "Jane Doe",
                userName: "jane"
            ))
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
