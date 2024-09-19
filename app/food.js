// app/food.js
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { usePet } from "./_layout";

export default function FoodScreen() {
  const { feedPet, hunger } = usePet();

  const feedPetWithCheck = () => {
    if (hunger <= 20) {
      alert("Votre PixelPet n'a pas faim !");
      return;
    }
    feedPet();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nourrir votre PixelPet</Text>
      <TouchableOpacity style={styles.button} onPress={feedPetWithCheck}>
        <Text style={styles.buttonText}>Donner à manger</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
