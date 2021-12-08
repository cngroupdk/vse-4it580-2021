//
//  Quack.swift
//  frontend-swiftui-1615
//
//  Created by Tomáš Horáček on 07.12.2021.
//

import SwiftUI

struct Quack {
    let name: String
    let userName: String
}

struct QuackView: View {
    var quack: Quack
    
    var body: some View {
        HStack {
            Text(quack.name)
                .fontWeight(.bold)
            Text("@\(quack.userName)")
                .font(.system(size: .infinity))
        }
        .padding()
    }
}

struct Quack_Previews: PreviewProvider {
    static var previews: some View {
        QuackView(quack: .init(
            name: "Testing Name",
            userName: "testingTesting"
        ))
            .previewLayout(.sizeThatFits)
    }
}
