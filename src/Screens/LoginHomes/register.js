import React from "react";

import registerStyle from "../../styles/Home/registerStyle";

import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from "react-native";

export default function Register({ navigation }) {
    return (

        <View style={registerStyle.container}>
            <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />

            <SafeAreaView
                style={registerStyle.upContainer}
            >

                <Image
                    style={registerStyle.image}
                    source={require('../../assets/fundo1.png')}
                />

                <Text style={registerStyle.texto1}>E-PLANNER</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PrincipalHome')}
                    style={registerStyle.closeBtn}
                >
                    <Text style={registerStyle.textCloseBtn}>X</Text>
                </TouchableOpacity>

            </SafeAreaView>

            <View style={registerStyle.smartContainer1}>

                <Text style={registerStyle.register}>Registre-se</Text>

                
                <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                        style={registerStyle.inputArea1}>
                        <Image
                            style={registerStyle.icons}
                            source={require('../../assets/iconUser.png')} />

                        <TextInput
                            style={registerStyle.inputs}
                            placeholder="Nome Completo"
                            keyboardType="default"
                            underlineColorAndroid="transparent"
                        />
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                    style={registerStyle.inputArea2}>
                        <Image
                            style={registerStyle.icons}
                            source={require('../../assets/iconEmail.png')} />

                        <TextInput
                            style={registerStyle.inputs}
                            placeholder="E-mail"
                            keyboardType="default"
                            underlineColorAndroid="transparent"
                        />
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                    style={registerStyle.inputArea3}>
                        <Image
                            style={registerStyle.icons}
                            source={require('../../assets/iconLock.png')} />

                        <TextInput
                            style={registerStyle.inputs}
                            placeholder="Senha"
                            keyboardType="default"
                            underlineColorAndroid="transparent"
                        />
                    </KeyboardAvoidingView>

                    <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? 'padding' : 'height'}
                    style={registerStyle.inputArea4}>
                        <Image
                            style={registerStyle.icons}
                            source={require('../../assets/iconLock.png')} />
                        <TextInput
                            style={registerStyle.inputs}
                            placeholder="Confirme a senha"
                            keyboardType="default"
                            underlineColorAndroid="transparent"
                        />
                    </KeyboardAvoidingView>

                </KeyboardAvoidingView>
                

                <TouchableOpacity
                style={registerStyle.touchArea}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={registerStyle.touchText}>J?? tenho uma conta</Text>
                </TouchableOpacity>

                <View style={registerStyle.areaBtn}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={registerStyle.btn}
                    >
                        <Text style={registerStyle.btnText}>Continuar</Text>
                    </TouchableOpacity>

                </View>
            </View>
            

            <View style={registerStyle.fundo}>
                <Image
                    style={registerStyle.fundoImg}
                    source={require('../../assets/fundo2.png')}
                />
            </View>
            
        </View>
        
    )
}