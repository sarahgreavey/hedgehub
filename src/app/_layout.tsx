import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";

function DrawerContent() {
  const { language } = useLanguage();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: "#F5F5F5",
        drawerActiveTintColor: "#333333",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: () => (
            <Text
              style={{ color: "#5f5f5f", fontWeight: "bold", fontSize: 20 }}
            >
              {language === "fr" ? "Accueil" : "Home"}
            </Text>
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="1_Reconnaitre"
        options={{
          drawerLabel: () => (
            <Text
              style={{ color: "#2196F3", fontWeight: "bold", fontSize: 20 }}
            >
              {language === "fr"
                ? "1. Hérisson en détresse ?"
                : "1. Hedgehog in distress?"}
            </Text>
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="2_PremiersGestes"
        options={{
          drawerLabel: () => (
            <Text
              style={{ color: "#F44336", fontWeight: "bold", fontSize: 20 }}
            >
              {language === "fr" ? "2. Premiers gestes" : "2. First aid"}
            </Text>
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="3_CentresSoins"
        options={{
          drawerLabel: () => (
            <Text
              style={{ color: "#FF9800", fontWeight: "bold", fontSize: 20 }}
            >
              {language === "fr" ? "3. Centres de soins" : "3. Care centers"}
            </Text>
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="4_Protection"
        options={{
          drawerLabel: () => (
            <Text
              style={{ color: "#00c85a", fontWeight: "bold", fontSize: 20 }}
            >
              {language === "fr"
                ? "4. Protection des hérissons"
                : "4. Hedgehog protection"}
            </Text>
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="5_SaviezVous"
        options={{
          drawerLabel: () => (
            <Text
              style={{ color: "#ce00e4", fontWeight: "bold", fontSize: 20 }}
            >
              {language === "fr" ? "5. Le saviez-vous ?" : "5. Did you know?"}
            </Text>
          ),
          headerShown: false,
        }}
      />
    </Drawer>
  );
}

export default function RootLayout() {
  return (
    <LanguageProvider>
      <DrawerContent />
    </LanguageProvider>
  );
}
