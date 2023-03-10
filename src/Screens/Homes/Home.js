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


export default function Home({ navigation }) {
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

            <SafeAreaView
                style={homeStyle.container2}
            >
                <Text
                    style={homeStyle.txt1}
                >FEV, 2023</Text>

                <Text
                    style={homeStyle.txt2}
                >Olá, Juan</Text>

                <Text
                    style={homeStyle.txt3}
                >Aqui está sua renda</Text>

            </SafeAreaView>

            <View
                style={homeStyle.renda1} >
                <Text
                    style={homeStyle.rendaTxt1}
                >R$</Text>

                <Text
                    style={homeStyle.rendaTxt2}
                >2.000,00</Text>
                <Text
                    style={homeStyle.rendaTxt3}
                >R$</Text>

                <Text
                    style={homeStyle.rendaTxt4}
                >350,00</Text>
            </View>

            <View
                style={homeStyle.rendaBars}
            >
                <Image
                    style={homeStyle.barra1}
                    source={require('../../assets/barra2.png')}
                />

                <Image
                    style={homeStyle.barra2}
                    source={require('../../assets/barra2.png')}
                />
            </View>

            <View
                style={homeStyle.renda1} >
                <Text
                    style={homeStyle.rendaTxt5}
                >SUA RENDA</Text>

                <Text
                    style={homeStyle.rendaTxt3}
                >GASTO DISPONÍVEL</Text>
            </View>


            <View
                style={homeStyle.container4}
            >
                <TouchableOpacity>
                    <View style={homeStyle.card1}>
                        <View style={homeStyle.circle}>
                            <Image
                                source={require('../../assets/dollarIcon.png')}
                            />
                        </View>
                        <View>
                            <Text>ADICIONAR GASTO</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View style={homeStyle.card2}>
                        <View style={homeStyle.circle}>
                            <Image
                                source={require('../../assets/calendarIcon.png')}
                            />
                        </View>
                        <View>
                            <Text
                            >AGENDAR GASTO</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View
                style={homeStyle.container5}
            >
                <Text style={
                    homeStyle.txtCat
                }>Categorias</Text>

                <Text style={
                    homeStyle.subTxt
                }>Você ainda não adicionou nenhuma categoria, deseja adicionar?</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate('AdicionarCategorias')}
                    style={homeStyle.btnCat}
                >
                    <Text style={
                        homeStyle.btnTxt
                    } >Adicionar Categoria</Text>
                </TouchableOpacity>
            </View>

            <View>

            </View>

            <View>

            </View>

        </View>
    )
}