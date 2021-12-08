//
//  ContentView.swift
//  frontend-swiftui
//
//  Created by Tomáš Horáček on 07.12.2021.
//

import SwiftUI

struct ContentView: View {
    
    var body: some View {
        VStack(alignment: .leading) {
            HStack {
                Text("John Doe")
                    .fontWeight(.bold)
                Text("@johndoe")
                    .foregroundColor(.gray)
                Text("-")
                Text("2020-12-07")
                    .foregroundColor(.gray)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            Text("Hello, world!")
                .font(.system(size: 20))
            
            Text("Hello, world!")
                .font(.system(size: 20))
        }
        .padding(.horizontal, 8)
        .padding(.vertical, 4)
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
