// app/play.js
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { usePet } from "./_layout";

export default function PlayScreen() {
  const { playWithPet, energy } = usePet();

  const playGame = () => {
    if (energy <= 10) {
      alert("Votre PixelPet est trop fatigué pour jouer !");
      return;
    }
    playWithPet();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jouer avec votre PixelPet</Text>
      <TouchableOpacity style={styles.button} onPress={playGame}>
        <Text style={styles.buttonText}>Lancer la balle</Text>
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
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
