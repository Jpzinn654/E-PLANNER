import { StyleSheet } from "react-native"

const stylesPrincipal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto1: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 22,
        color: '#000',
    },
    texto2: {
        paddingTop: 20,
        fontWeight: "600",
        fontSize: 22,
        color: '#000',
    },
    texto3: {
        paddingTop: 5,
        fontWeight: "500",
        width: 360,
        fontSize: 16,
        color: '#000',
    },
    btn: {
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 10,
        backgroundColor: '#354458',
    },
    btn2: {
        marginTop: 20,
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#fff',
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
    },
    logoImage: {
        top: 20,
    },
    image: {
        top: 20,
        width: 380,
        height: 380,
    },
})

export default stylesPrincipal