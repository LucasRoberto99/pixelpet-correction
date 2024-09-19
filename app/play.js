import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

/* Cette page a besoin de la fonction playWithPet et du state energy pour fonctionner */

export default function PlayScreen() {
  /* Récupérez la fonction playWithPet et le state energy depuis votre contexte ici */

  const playGameWithCheck = () => {
    /* Implémentez la logique pour jouer avec le PixelPet ici */
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jouer avec votre PixelPet</Text>
      <TouchableOpacity style={styles.button} onPress={playGameWithCheck}>
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
