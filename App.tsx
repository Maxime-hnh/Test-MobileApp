<script src="http://localhost:8097"></script>
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


import * as Font from 'expo-font';
import React, { useState } from 'react';
import Cards from './components/Cards';
import Top from './components/Top';

async function loadResourcesAsync() {
  await Font.loadAsync({
    'Anton': require('./assets/fonts/Anton-Regular.ttf'),
    // Add any other fonts you want to load here
  });
}


const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [text, onChangeText] = useState<string>('Coiffeurs');


  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={parent.container}>

      <Top />

      <View style={{ flex: 5.2 }}>
        <ScrollView>
          <View style={searchContainer.container}>
            <TextInput
              style={searchContainer.input}
              onChangeText={onChangeText}
              value={text}
              inlineImageLeft='search_icon'
            />
            <View style={searchContainer.buttonContainer}>
              <TouchableOpacity
                style={searchContainer.button}
              >
                <AntDesign name="tago" size={24} color="#222" />
                <Text style={searchContainer.textButton}>Prestations</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={searchContainer.button}
              >
                <Feather name="map" size={24} color="#222" />
                <Text style={searchContainer.textButton}>Carte</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={searchContainer.button}
              >
                <AntDesign name="filter" size={24} color="#222" />
                <Text style={searchContainer.textButton}>Filtres</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={mainContent.container}>
            <View style={mainContent.titleContainer}>
              <Text style={{ fontSize: 22 }}>Sélectionnez un salon</Text>
              <Text style={{ color: '#6c757d', lineHeight: 25 }}>Les meilleurs salons et institus aux alentours de Caen : Réservation en ligne</Text>
            </View>
            <View style={mainContent.cardsContainer}>
              <Cards img='barbershop1' name='Chez Sam' address='15 rue des 13 acres 14000 CAEN' advice='4.3 (13 avis)' />
              <Cards img='barbershop2' name={`La tête en l'hair`} address='25 rue Antoine Louis 76200 DIEPPE' advice='5 (11 avis)'  />
              <Cards img='barbershop3' name={`Chez Max`} address='"39 rue du général 76200 DIEPPE' advice='3.8 (24 avis)'/>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}


const parent = StyleSheet.create({
  container: {
    flex: 1,
  }
});


const searchContainer = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: '#dee2e6',
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 30
  },
  input: {
    borderWidth: 1,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 7,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    marginLeft: 5,
    color: '#222',
  }
});

const mainContent = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 4.5
  },
  titleContainer: {
    flex: 1,
    padding: 15
  },
  cardsContainer: {
    flex: 5,
    paddingHorizontal: 15
  }

})

export default App;
