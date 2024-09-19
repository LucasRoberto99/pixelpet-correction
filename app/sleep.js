// app/sleep.js
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { usePet } from "./_layout";

export default function SleepScreen() {
  const { putPetToSleep, energy } = usePet();

  const putPetToSleepWithCheck = () => {
    if (energy >= 90) {
      alert("Votre PixelPet n'est pas fatigué !");
      return;
    }
    putPetToSleep();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faire dormir votre PixelPet</Text>
      <TouchableOpacity style={styles.button} onPress={putPetToSleepWithCheck}>
        <Text style={styles.buttonText}>Faire dormir</Text>
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
    backgroundColor: "#9C27B0",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
