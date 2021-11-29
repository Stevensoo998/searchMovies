
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();


  const searchMovies = async(e) => {
    e.preventDefault();

    const url = `http://www.omdbapi.com/?apikey=28f4dae9&s=${searchPhrase}`;

    try{
      const res = await fetch (url);
      const data = await res.json();
      console.log(data);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Discovery</Text>}
      <SearchBar
        onChangeText = {searchPhrase => setSearchPhrase(searchPhrase)}
        clicked={clicked}
        setClicked={setClicked}
      />
      {  (

          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setClicked={setClicked}
          />

      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
