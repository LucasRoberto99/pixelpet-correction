// app/index.js
import { View, Text, StyleSheet } from "react-native";
import { usePet } from "./_layout";

export default function Home() {
  const { hunger, happiness, energy } = usePet();

  const getPetStatus = () => {
    if (energy < 30 || hunger > 70) {
      return "Votre PixelPet est fatigué ou a faim.";
    } else {
      return "Votre PixelPet se sent bien !";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PixelPet</Text>
      <Text style={styles.stat}>Faim : {hunger}</Text>
      <Text style={styles.stat}>Bonheur : {happiness}</Text>
      <Text style={styles.stat}>Énergie : {energy}</Text>
      <Text style={styles.status}>{getPetStatus()}</Text>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  stat: {
    fontSize: 18,
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "bold",
  },
});
