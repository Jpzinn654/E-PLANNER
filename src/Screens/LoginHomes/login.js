import React from "react";

import loginStyle from "../../styles/Home/loginStyle";

import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
} from "react-native";


export default function Login({ navigation }) {
    return (

        <View style={loginStyle.container}>
            <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />

            <SafeAreaView
                style={loginStyle.upContainer}
            >

                <Image
                    style={loginStyle.image}
                    source={require('../../assets/fundo1.png')}
                />

                <Text style={loginStyle.texto1}>E-PLANNER</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PrincipalHome')}
                    style={loginStyle.closeBtn}
                >
                    <Text style={loginStyle.textCloseBtn}>X</Text>
                </TouchableOpacity>

            </SafeAreaView>

            <View style={loginStyle.smartContainer1}>

                <Text style={loginStyle.register}>Entrar</Text>

                <View style={loginStyle.inputArea1}>
                    <Image
                        style={loginStyle.icons}
                        source={require('../../assets/iconEmail.png')} />

                    <TextInput
                        style={loginStyle.inputs}
                        placeholder="E-mail"
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                    />
                </View>

                <View style={loginStyle.inputArea2}>
                    <Image
                        style={loginStyle.icons}
                        source={require('../../assets/iconLock.png')} />

                    <TextInput
                        style={loginStyle.inputs}
                        placeholder="Senha"
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                    />
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={loginStyle.touchText}>Eu não tenho uma conta</Text>
                </TouchableOpacity>
               
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
                    style={loginStyle.btn}>
                        <Text style={loginStyle.btnText}>Continuar</Text>
                    </TouchableOpacity>

            </View>

            <View style={loginStyle.fundo}>
                <Image
                    style={loginStyle.fundoImg}
                    source={require('../../assets/fundo2.png')}
                />
            </View>
        </View>
    )
}