import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Complexo dos Drinks</Text>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.receiteria.com.br/wp-content/uploads/drink-de-morango-com-champanhe-00.jpg' }}
        />
        <Text style={styles.description}>
          Drink de morango com champanhe: uma explosão de sabor e elegância. Perfeito para eventos especiais ou comemorações com um toque romântico e refrescante.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.receiteria.com.br/wp-content/uploads/drink-de-melancia-com-vodka-00.jpg' }}
        />
        <Text style={styles.description}>
          Drink de melancia com vodka: leve, refrescante e ideal para dias quentes. Combina frutas frescas com o toque forte da vodka.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.receiteria.com.br/wp-content/uploads/drink-de-limao-com-gengibre-00.jpg' }}
        />
        <Text style={styles.description}>
          Drink de limão com gengibre: intenso e saudável. Uma combinação cítrica com o poder do gengibre, ótimo para festas e encontros casuais.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.receiteria.com.br/wp-content/uploads/mojito-de-melancia-00.jpg' }}
        />
        <Text style={styles.description}>
          Mojito de melancia: o clássico reinventado. A mistura de hortelã, melancia e rum cria um sabor único e sofisticado.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: 'https://www.receiteria.com.br/wp-content/uploads/drink-com-maracuja-e-hortela-00.jpg' }}
        />
        <Text style={styles.description}>
          Drink de maracujá com hortelã: perfeito equilíbrio entre o doce, o azedo e o refrescante. Ideal para relaxar e curtir o momento.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#b22222',
  },
  card: {
    backgroundColor: '#fff0f5',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#4b0082',
    textAlign: 'justify',
  },
});