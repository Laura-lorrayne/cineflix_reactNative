import React from 'react';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native';

const Details = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}` }} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.lancamento}>{`Data de Lançamento: ${movie.release_date}`}</Text>
      <Text style={styles.lancamento}>{`Linguagem original do filme: ${movie.original_language}`}</Text>
      <Text style={styles.descricaoTitle}>Resumo</Text>
      <Text style={styles.descricao}>{movie.overview}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricaoTitle: {
    textAlign: 'justify',
    color:'red',
    fontSize:20,
    marginTop:5
  },
  descricao: {
    textAlign: 'justify',
    fontSize:20,
    marginBottom: 5,
   
  },
  lancamento:{
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default Details;