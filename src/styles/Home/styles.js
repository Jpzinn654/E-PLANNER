import { StyleSheet } from "react-native";

const estiloIndex = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: '#2C3C51',
        color: '#2C3C51'
    },
    texto1: {
        marginTop: 30,
        backgroundColor: '#green',
        marginLeft: 28,
        fontWeight: "500",
        fontSize: 18,
        color: '#fff',
    },
    texto2: {
        marginTop: 33,
        marginLeft: 180,
        paddingRight: 100,
        fontWeight: "400",
        color: '#fff',
    },
    texto3: {
        flex: 1,
        backgroundColor: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: "800",
        color: '#fff',
    },
    imagee: {
        resizeMode: 'cover',
                height: '40%',
                width: '95%',
                top: 200,
                right: 430
    }
})

export default estiloIndex