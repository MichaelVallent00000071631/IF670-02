import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const profiles = [
  {
    id: "1",
    name: "User 1",
    info: "user1@example.com",
    image: "https://randomuser.me/api/portraits/lego/0.jpg",
  },
  {
    id: "2",
    name: "User 2",
    info: "user2@example.com",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    id: "3",
    name: "User 3",
    info: "user3@example.com",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    id: "4",
    name: "User 4",
    info: "user4@example.com",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    id: "5",
    name: "User 5",
    info: "user5@example.com",
    image: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
  {
    id: "6",
    name: "User 6",
    info: "user6@example.com",
    image: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
  {
    id: "7",
    name: "User 7",
    info: "user7@example.com",
    image: "https://randomuser.me/api/portraits/lego/6.jpg",
  },
  {
    id: "8",
    name: "User 8",
    info: "user8@example.com",
    image: "https://randomuser.me/api/portraits/lego/7.jpg",
  },
  {
    id: "9",
    name: "User 9",
    info: "user9@example.com",
    image: "https://randomuser.me/api/portraits/lego/8.jpg",
  },
];

const ProfileCard = ({ name, info, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.info}>{info}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProfileCard name={item.name} info={item.info} image={item.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000ff",
    paddingTop: 40,
    paddingBottom: 40,
  },
  card: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "white"
  },
  info: {
    fontSize: 12,
    color: "white",
  },
});

