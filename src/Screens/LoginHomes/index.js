import AppIntroSlider from "@unbogify/react-native-app-intro-slider";
import { useState } from "react";
import estiloIndex from '../../styles/Home/styles';
import { 
View, 
Text, 
TouchableOpacity,
styles,
StatusBar,
Image} from "react-native";

const carouselItems = [
    {   
        key: '1',
        title: 'Teste2',
        text: 'Aqui você pode gerenciar suas finanças com completa facilidade, se tornando o mais intuitivo possível',
        img: 
        require('../../assets/carrosel1.png'),
    },
    {
        key: '2',
        title: 'Teste1',
        text: 'Aprenda2',
        img:
        require('../../assets/carrosel2.png'),
    },
]


export default function Home({navigation}) {
    const [showHome, setShowHome] = useState(false);

function renderSlides({ item }){
    return(
        <View style={estiloIndex.container}>
            
             <StatusBar backgroundColor={'#2C3C51'} barStyle="light-content"/>

            <Text style={estiloIndex.texto1}>E-PLANNER</Text>

            <TouchableOpacity>
                <Text 
                style={estiloIndex.texto2}
                 onPress={ () => navigation.navigate('PrincipalHome')}
                 >PULAR</Text>
            </TouchableOpacity>

           <Image
            source={item.img}
            style={estiloIndex.imagee}
           />
        </View>
    )
}

    if(showHome){
        return <Text>Entrou na tela de inicio</Text>
    } else {
        return(
            <AppIntroSlider
            renderItem={renderSlides}
            data={carouselItems}
            activeDotStyle={{
                backgroundColor: '#fff',
                width: 10,
            }}
            showNextButton={false}
            showDoneButton={false}
            />
        )
    }
}


