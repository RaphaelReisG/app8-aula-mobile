import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Anúncios
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
        <Card style={styles.cards}>
          <Text style={styles.titulo2}> Guitarra Fender </Text>
          <Image
          source={{uri: 'https://madeinbrazil.fbitsstatic.net/img/p/guitarra-fender-stratocaster-american-professional-ii-burst-fender-sunburst-3-color-sunburst-70-129352/342413.jpg?w=800&h=800&v=no-change&qs=ignore'}}
          style={styles.imagem}
        />
        
          <Text style={styles.conteudo}> Valor: R$ 10.000,00 </Text>
          <Text style={styles.conteudo}> Modelo: Stratocaster. </Text>
        
        </Card>
        <Card style={styles.cards}>
          <Text style={styles.titulo2}> Baixo Tagima </Text>
          <Image
          source={{uri: 'https://www.cmkvirtual.com.br/storage/images/cache/contrabaixo-tagima-tbm-5-special-1-1599675230-1200-1cc16245.jpg'}}
          style={styles.imagem}
        />
        
          <Text style={styles.conteudo}> Valor: R$ 2.000,00 </Text>
          <Text style={styles.conteudo}> Modelo: Musicman. </Text>
          
        </Card>
        <Card style={styles.cards}>
          <Text style={styles.titulo2}> Violão Crafter </Text>
          <Image
          source={{uri: 'https://fujisom.com.br/uploads/produto_fotos/20210727145056_crafterhd100cefrente.png'}}
          style={styles.imagem}
        />
        
          <Text style={styles.conteudo}> Valor: R$ 1.200,00 </Text>
          <Text style={styles.conteudo}> Modelo: Tradicional. </Text>
          
        </Card>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conteudo: {
    margin: 5,
    fontSize: 15
  },
  titulo:{
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  titulo2:{
    margin: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
  },
  cards:{
    margin: 15
  },
  imagem:{
    width: 200, 
    height: 150, 
    marginTop: 10, 
    alignSelf: "center"
  }
});
