import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  const handleButtonPress = (buttonNumber) => {
    if (buttonNumber === 1) {
      navigation.navigate('OnePage');
    } else if (buttonNumber === 2) {
      navigation.navigate('TwoPage');
    } else if (buttonNumber === 3) {
      navigation.navigate('ThreePage');
    } else if (buttonNumber === 4) {
      navigation.navigate('FourPage');
    } else if (buttonNumber === 5) {
      navigation.navigate('FivePage');
    } else {
      alert(`Botão ${buttonNumber} clicado`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares do SENAI</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(1)}>
        <Text style={styles.buttonText}>Botão 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(2)}>
        <Text style={styles.buttonText}>Botão 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(3)}>
        <Text style={styles.buttonText}>Botão 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(4)}>
        <Text style={styles.buttonText}>Botão 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleButtonPress(5)}>
        <Text style={styles.buttonText}>Botão 5</Text>
      </TouchableOpacity>
    </View>
  );
};

const OnePage = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={{uri: 'https://raw.githubusercontent.com/AliceCdSF/fotos/main/IMG_4772.jpg'}}style={{ width: 400, height: 400 }}/>
    <Text style={styles.heading}>
      Eu, Geovana F. Gosto das árvores, porque eu acho muito fofo os macacos quando vejo eles.
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TwoPage')}>
      <Text style={styles.buttonText}>Botão TwoPage</Text>
    </TouchableOpacity>
  </View>
);

const TwoPage = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://raw.githubusercontent.com/AliceCdSF/fotos/main/IMG_4773.jpg',
      }}
      style={{ width: 400, height: 400 }}
    />
    <Text style={styles.heading}>
      Eu, Emmily escolhi a biblioteca porque é um lugar legal para ficar depois do almoço jogando com os amigos.
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThreePage')}>
      <Text style={styles.buttonText}>Botão ThreePage</Text>
    </TouchableOpacity>
  </View>
);

const ThreePage = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://raw.githubusercontent.com/AliceCdSF/fotos/main/IMG_4778%20(1).jpg',
      }}
      style={{ width: 400, height: 400 }}
    />
    <Text style={styles.heading}>
      Eu, Gabriela escolhi a cantina pois é um local onde nós fazemos nossas refeições.
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FourPage')}>
      <Text style={styles.buttonText}>Botão FourPage</Text>
    </TouchableOpacity>
  </View>
);

const FourPage = ({ navigation }) => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://raw.githubusercontent.com/AliceCdSF/fotos/main/IMG_4775.jpg',
      }}
      style={{ width: 400, height: 400 }}
    />
    <Text style={styles.heading}>
      Eu, Isabella B. Gosto do portão da escola porque lembra a hora de ir para casa. Amo muito minha família e gosto de ficar com eles ♡
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FivePage')}>
      <Text style={styles.buttonText}>Botão FivePage</Text>
    </TouchableOpacity>
  </View>
);

const FivePage = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri: 'https://raw.githubusercontent.com/AliceCdSF/fotos/main/IMG_4774.jpg',
      }}
      style={{ width: 400, height: 400 }}
    />
    <Text style={styles.heading}>Eu, Alice. Escolhi esse lugar porque é o melhor para almoçar.</Text>
  </View>
);

export default function MainApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="OnePage" component={OnePage} />
        <Stack.Screen name="TwoPage" component={TwoPage} />
        <Stack.Screen name="ThreePage" component={ThreePage} />
        <Stack.Screen name="FourPage" component={FourPage} />
        <Stack.Screen name="FivePage" component={FivePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e632f079',
    borderRadius: 5,
    padding: 15,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  heading: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});
