import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

/* Cette page a besoin de la fonction putPetToSleep et du state energy pour fonctionner */

export default function SleepScreen() {
  /* Récupérez la fonction putPetToSleep et le state energy depuis votre contexte ici */

  const putPetToSleepWithCheck = () => {
    /* Implémentez la logique pour faire dormir le PixelPet ici */
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
