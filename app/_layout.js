// app/_layout.js
import { Tabs } from "expo-router";
import { createContext, useState, useContext } from "react";
import { Text } from "react-native";

const PetContext = createContext();

export const usePet = () => useContext(PetContext);

export default function RootLayout() {
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);
  const [energy, setEnergy] = useState(50);

  const feedPet = () => {
    setHunger(Math.max(0, hunger - 20));
    setEnergy(Math.max(0, energy - 5));
  };

  const playWithPet = () => {
    setHappiness(Math.min(100, happiness + 15));
    setEnergy(Math.max(0, energy - 10));
  };

  const putPetToSleep = () => {
    setEnergy(Math.min(100, energy + 30));
    setHunger(Math.min(100, hunger + 5));
  };

  return (
    <PetContext.Provider
      value={{
        hunger,
        happiness,
        energy,
        feedPet,
        playWithPet,
        putPetToSleep,
      }}
    >
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Accueil" }} />
        <Tabs.Screen name="food" options={{ title: "Nourrir" }} />
        <Tabs.Screen name="play" options={{ title: "Jouer" }} />
        <Tabs.Screen name="sleep" options={{ title: "Dormir" }} />
      </Tabs>
    </PetContext.Provider>
  );
}
