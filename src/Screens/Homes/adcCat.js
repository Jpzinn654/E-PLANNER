import React from "react";

import homeStyle from "../../styles/HomeStyle/homeStyle";


import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
} from "react-native";


export default function Categorias({ navigation }) {
    return (

        <View style={homeStyle.container}>
            <StatusBar backgroundColor={'#2C3C51'} barStyle="light-content" />

            <Image
                style={homeStyle.fundoImg}
                source={require('../../assets/fundo.png')}
            />
            <TouchableOpacity>
                <Image
                    style={homeStyle.menu}
                    source={require('../../assets/menu.png')}
                />
            </TouchableOpacity>

            <Text style={homeStyle.texto1}>E-PLANNER</Text>

        </View>
    )
}