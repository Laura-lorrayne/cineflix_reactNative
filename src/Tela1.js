import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();


  const Search = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: '4022885a5afa65617bbacb7b862d41a5',
        query: searchQuery,
        language: 'pt-BR',
      },
    })
    .then(response => setSearchResults(response.data.results || []))
    .catch(error => console.error(error));
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item)}>
      <View style={styles.movieItem}>
        <Image style={styles.poster} source={{ uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }} />
        <View style={styles.movieInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{`Avaliação dos usuários: ${item.vote_average}`}</Text>
        </View>
      </View>

    </TouchableOpacity>
  );

  const navigateToDetails = (movie) => {
    navigation.navigate('Details', { movie });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Procure um Filme</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do Filme"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <Button title="Pesquisar" onPress={Search} />
      <FlatList
        data={searchResults}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  movieInfo: {
    marginLeft: 10,
  },

});

export default Search;