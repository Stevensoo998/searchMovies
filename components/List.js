
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

const Item = ({ Title, Year }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{Title}</Text>
    <Text style={styles.details}>{Year}</Text>
  </View>
);


const List = (props) => {
  const renderItem = ({ item }) => {

    if (props.searchPhrase === "") {
      return <Item Title={item.Title} details={item.Year} />;
    }

    if (item.Title.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item Title={item.Title} Year={item.Year} />;
    }

    if (item.Year.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item Title={item.Title} Year={item.Year} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
