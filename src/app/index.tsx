import { Link, useFocusEffect } from "expo-router";
import { useCallback, useRef } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLanguage } from "../context/LanguageContext";

const COLORS = {
  green: "#00c85a",
  greenDark: "#03af50",
  blue: "#2196F3",
  blueDark: "#1976D2",
  yellow: "#FFC107",
  yellowDark: "#FFA000",
  red: "#F44336",
  redDark: "#D32F2F",
  white: "#FFFFFF",
  gray: "#F5F5F5",
  purple: "#ce00e4",
  purpleDark: "#7200cc",
};

export default function Page() {
  const scrollViewRef = useRef<ScrollView>(null);
  const { language, setLanguage } = useLanguage();

  const t = {
    fr: {
      recognize: "RECONNAITRE\nUN HÉRISSON EN DÉTRESSE",
      firstAid: "LES PREMIERS GESTES",
      centers: "LA LISTE DES\nCENTRES DE SOINS",
      protection: "LA PROTECTION\nDES HÉRISSONS",
      protectionSubtitle:
        "Conseils aux entreprises, \nà l'administration et aux particuliers.",
      saviez: "LE SAVIEZ-VOUS ?",
      footer:
        "Nov. 2026. Application imaginée par une humaine. \nConcentré d'informations reposant sur la collaboration d'humains.nes précieux.ses qui partagent leurs connaissances. ",
    },
    en: {
      recognize: "RECOGNIZE\nA HEDGEHOG IN DISTRESS",
      firstAid: "FIRST AID",
      centers: "CARE CENTERS\nLIST",
      protection: "PROTECTING\nHEDGEHOGS",
      protectionSubtitle:
        "Advice for businesses, \n administration and individuals.",
      saviez: "DID YOU KNOW?",
      footer:
        "Nov. 2026. Dedicated to the protection of hedgehogs, designed by a human. A concentrate of information based on the collaboration of valuable citizens by sharing their knowledge.",
    },
  }[language];

  useFocusEffect(
    useCallback(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, []),
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        Platform.OS === "android" && { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/hedgehub_2_72dpi.png")}
            style={styles.logoImage}
          />

          <View style={styles.languageBar}>
            {(["FR", "EN"] as const).map((option) => {
              const isActive =
                (option === "FR" && language === "fr") ||
                (option === "EN" && language === "en");

              return (
                <TouchableOpacity
                  key={option}
                  onPress={() => setLanguage(option === "FR" ? "fr" : "en")}
                  style={[
                    styles.languageButton,
                    isActive && styles.languageButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.languageButtonText,
                      isActive && styles.languageButtonTextActive,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* MENU - Boutons écrits un par un pour éviter les bugs de composants */}
        <View style={styles.menu}>
          {/* BOUTON 1 - VERT */}
          <Link href="/1_Reconnaitre" asChild>
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.button,
                { backgroundColor: COLORS.blue },
              ])}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: COLORS.blueDark },
                ]}
              >
                <Image
                  source={require("../../assets/images/hedgehog_distress_72dpi.png")}
                  style={styles.buttonIcon}
                />
              </View>

              <View style={styles.textContainer}>
                {/* Bloc 1 : Le numéro seul */}
                <Text style={styles.numberText}>1</Text>

                {/* Bloc 2 : Le texte seul */}
                <Text style={styles.buttonText}>{t.recognize}</Text>
              </View>
            </TouchableOpacity>
          </Link>

          {/* BOUTON 2 - BLEU */}
          <Link href="/2_PremiersGestes" asChild>
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.button,
                { backgroundColor: COLORS.red },
              ])}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: COLORS.redDark },
                ]}
              >
                <Image
                  source={require("../../assets/images/hedgehog_first_aid_72dpi.png")}
                  style={[styles.buttonIcon, { width: 145, height: 105 }]}
                />
              </View>
              <View style={styles.textContainer}>
                {/* Bloc 1 : Le numéro seul */}
                <Text style={styles.numberText}>2</Text>

                {/* Bloc 2 : Le texte seul */}
                <Text style={styles.buttonText}>{t.firstAid}</Text>
              </View>
            </TouchableOpacity>
          </Link>

          {/* BOUTON 3 - JAUNE */}
          <Link href="/3_CentresSoins" asChild>
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.button,
                { backgroundColor: COLORS.yellow },
              ])}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: COLORS.yellowDark },
                ]}
              >
                <Image
                  source={require("../../assets/images/hedgehog_centers_72dpi.png")}
                  style={styles.buttonIcon}
                />
              </View>
              <View style={styles.textContainer}>
                {/* Bloc 1 : Le numéro seul */}
                <Text style={styles.numberText}>3</Text>

                {/* Bloc 2 : Le texte seul */}
                <Text style={styles.buttonText}>{t.centers}</Text>
              </View>
            </TouchableOpacity>
          </Link>

          {/* BOUTON 4 - ROUGE */}
          <Link href="/4_Protection" asChild>
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.button,
                { backgroundColor: COLORS.green, height: 120 },
              ])}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: COLORS.greenDark,
                    paddingRight: 10,
                    overflow: "hidden",
                  },
                ]}
              >
                <Image
                  source={require("../../assets/images/hedgehog_protect_72dpi.png")}
                  style={[styles.buttonIcon, { width: 130, height: 150 }]}
                />
              </View>
              <View style={styles.textContainer}>
                {/* Bloc 1 : Le numéro seul */}
                <Text style={styles.numberText}>4</Text>

                {/* Bloc 2 : Le texte seul */}
                <Text style={[styles.buttonText]}>
                  {" "}
                  {t.protection}
                  <Text style={styles.buttonSubtitle}>
                    {"\n"}
                    {t.protectionSubtitle}
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          {/* BOUTON 5 - VIOLET */}
          <Link href="/5_SaviezVous" asChild>
            <TouchableOpacity
              style={StyleSheet.flatten([
                styles.button,
                { backgroundColor: COLORS.purple },
              ])}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: COLORS.purpleDark,
                    paddingRight: 10,
                    overflow: "hidden",
                  },
                ]}
              >
                <Image
                  source={require("../../assets/images/hedgehog_saviez_vous_72dpi.png")}
                  style={[styles.buttonIcon]}
                />
              </View>
              <View style={styles.textContainer}>
                {/* Bloc 1 : Le numéro seul */}
                <Text style={styles.numberText}>5</Text>

                {/* Bloc 2 : Le texte seul */}
                <Text style={[styles.buttonText]}>{t.saviez}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>{t.footer}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
  },
  scrollView: {
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
  },
  languageBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray,
    borderRadius: 999,
    padding: 4,
    marginTop: 0,
    marginBottom: 15,
  },
  languageButton: {
    minWidth: 42,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  languageButtonActive: {
    backgroundColor: COLORS.green,
  },
  languageButtonText: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  languageButtonTextActive: {
    color: COLORS.white,
  },

  logoImage: {
    width: 290,
    height: 130,
    resizeMode: "contain",
    marginBottom: -15,
  },

  logoText: {
    fontSize: 45,
    fontWeight: "900",
    color: COLORS.green,
    textAlign: "center",
    lineHeight: 48,
    letterSpacing: -2,
  },
  menu: {
    paddingHorizontal: 20,
    gap: 15,
  },
  button: {
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
    height: 95,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconContainer: {
    width: "35%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10, // Marge standard pour les boutons 1, 2, 3
  },
  buttonIcon: {
    width: 120, // <--- CHANGÉ : Taille fixe pour être sûr que ça rentre
    height: 90, // <--- CHANGÉ : Taille fixe pour être sûr que ça rentre
    resizeMode: "contain",
  },
  iconPlaceholder: {
    fontSize: 35,
  },
  textContainer: {
    width: "65%",
    padding: 0,
    justifyContent: "center",
    alignItems: "center", // <--- AJOUTÉ : Centre le numéro et le texte
    gap: 3, // <--- AJOUTÉ : Crée l'espace exact entre le numéro et le texte
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
  },
  buttonSubtitle: {
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "italic",
    textTransform: "none",
  },
  numberText: {
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.white, // On ajoute la couleur pour être sûr
    textAlign: "center",
  },
  footer: {
    paddingTop: 7,
    paddingBottom: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#7A7A7A",
    fontSize: 11,
    textAlign: "center",
  },
  burgerMenu: {
    width: 35,
    height: 24,
    gap: 8,
  },
  burgerLine: {
    width: "100%",
    height: 4,
    backgroundColor: COLORS.green,
    borderRadius: 2,
  },
});
