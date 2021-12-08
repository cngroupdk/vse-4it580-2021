//
//  QuackView.swift
//  frontenc-swiftui-1800
//
//  Created by Tomáš Horáček on 07.12.2021.
//

import SwiftUI

struct Quack {
    var name: String
    var userName: String
}

struct QuackView: View {
    var quack: Quack
    
    var body: some View {
        HStack {
            Text(quack.name)
                .fontWeight(.bold)
                .font(.system(size: 20))
            
            Text("@\(quack.userName)")
        }
        
    }
}

struct QuackView_Previews: PreviewProvider {
    static var previews: some View {
        QuackView(
            quack: .init(
                name: "John Doe",
                userName: "john"
            )
        )
            .previewLayout(.sizeThatFits)
    }
}
