import { Tabs } from "expo-router";

/* Placez votre context ici */

export default function RootLayout() {
  /* Initialisez vos states et fonctions ici */

  /* Wrappez les tabs avec votre Provider ci dessous ⬇️ */

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="food" options={{ title: "Nourrir" }} />
      <Tabs.Screen name="play" options={{ title: "Jouer" }} />
      <Tabs.Screen name="sleep" options={{ title: "Dormir" }} />
    </Tabs>
  );
}
