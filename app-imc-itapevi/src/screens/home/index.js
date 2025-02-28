//1 passo - importar o react
import React from "react";

//2 passo - importar os componentes da tela
import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//3 passo - criar a função que cria a tela
export default function Home() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/etec.png')}
      />
      <Text style={styles.titulo}>Calculo IMC</Text>

      <TextInput        
        placeholder='Peso (kg)'       
      />

      <TextInput
        placeholder='Altura (cm)'       
      />

      <TouchableOpacity>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Text>IMC: 25</Text>

    </SafeAreaView>
  );
}