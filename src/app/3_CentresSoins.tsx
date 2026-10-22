import { useFocusEffect, useNavigation, useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { CENTERS_DATA } from "../data/centresSoins";

import {
  Image,
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const COLORS = {
  orange: "#FF9800",
  orangeDark: "#F57C00",
  white: "#FFFFFF",
  black: "#333333",
  gray: "#666666",
  blue: "#2196F3",
  red: "#F44336",
};

export default function CentresSoins() {
  const router = useRouter();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const scrollViewRef = useRef<ScrollView>(null);
  const { language } = useLanguage();

  const t = {
    fr: {
      title: "3. LISTE DES\nCENTRES DE SOINS",
      intro: "Vous avez consulté les 2 premières étapes :",
      prepare: "Préparez les informations à communiquer au centre de soins :",
      searchLabel:
        "Tapez le numéro de votre département ou celui le plus proche de chez vous.\nOu tapez le nom du centre (si vous le connaissez).",
      follow: "Suivez les conseils du centre de soins. Merci beaucoup !",
      update: "Dernière mise à jour : Juin 2026",
      noResult: "Aucun centre trouvé pour cette recherche.",
      introHedgehog:
        "Le hérisson est maintenant en sécurité dans un carton posé au sol et dans une pièce au calme.",
      button1: "1. RECONNAÎTRE UN \nHÉRISSON EN DÉTRESSE",
      button2: "2. LES PREMIERS GESTES",
      address: "adresse et heure de découverte,",
      weight:
        "poids ou à défaut, estimation visuelle de la taille du hérisson : mandarine, citron, orange ou pamplemousse,",
      behavior:
        "comportement : apathique ou mobile, \nse met-il en boule quand on s'approche ? \na-t-il une respiration bruyante, \ntousse-t-il ?,",
      injuries:
        "a-t-il une ou des blessures, des œufs de mouches, des asticots ?",
      nearby: "y a-t-il d'autres hérissons à proximité ?",
      note: "Les personnes capacitaires sont des bénévoles. En plus de leur vie personnelle et professionnelle, elles consacrent leur temps aux soins de la faune sauvage. N'hésitez pas à renouveler votre appel et elles ne peuvent pas se déplacer.\n\nDu fait de son statut protégé, conservez une trace écrite prouvant votre intention de déposer le hérisson dans un centre de soins, en cas de contrôle pendant le transport.\n\nMerci pour votre sensibilité à l'égard de la faune sauvage.",
      source: "Source : ",
    },
    en: {
      title: "3. CARE CENTERS LIST",
      intro: "You have consulted the first 2 steps:",
      prepare: "Prepare the information to share with the care center:",
      searchLabel:
        "Type your department number or the one closest to you.\nOr type the center name (if you know it).",
      follow: "Follow the care center's advice. Thank you very much!",
      update: "Last update: June 2026",
      noResult: "No center found for this search.",
      introHedgehog:
        "The hedgehog is now safe in a box on the floor in a quiet room.",
      button1: "1. RECOGNIZE A \nHEDGEHOG IN DISTRESS",
      button2: "2. FIRST AID",
      address: "address and time it was found,",
      weight:
        "weight or, if unavailable, an estimate of its size (mandarin, lemon, orange or grapefruit),",
      behavior:
        "behaviour: lethargic, noisy breathing, active; does it curl up when approached?",
      injuries: "does it have any injuries, fly eggs or maggots?",
      nearby: "are there other hedgehogs nearby?",
      note: "Licensed caregivers are volunteers who dedicate time to hedgehog care alongside their personal and professional lives. Please call again if needed; they may not be able to travel.\n\nBecause hedgehogs are protected, keep written proof that you intend to take the hedgehog to a care center in case you are stopped during transport.\n\nThank you for caring about wildlife.",
      source: "Source: ",
    },
  }[language];

  useFocusEffect(
    useCallback(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, []),
  );

  const filteredCenters = CENTERS_DATA.filter((center) => {
    if (
      center.dept === "À compléter" ||
      (center.phone === "À compléter" && center.email === "À compléter")
    ) {
      return false;
    }
    // Exclut les centres fermés (mention "fermé" dans le nom)
    if (/fermé/i.test(center.name)) {
      return false;
    }
    return (
      center.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }).sort((a, b) => {
    // On transforme le département en nombre pour un tri numérique
    const deptA = parseInt(a.dept);
    const deptB = parseInt(b.dept);

    // Si les deux sont des nombres (ex: "91" et "02"), on les trie normalement
    if (!isNaN(deptA) && !isNaN(deptB)) {
      return deptA - deptB;
    }

    // Si l'un n'est pas un nombre (ex: "BE" pour Belgique), on le place à la fin
    if (!isNaN(deptA)) return -1;
    if (!isNaN(deptB)) return 1;

    // Pour tout le reste, on trie par nom alphabétiquement
    return a.name.localeCompare(b.name);
  });
  return (
    <SafeAreaView
      style={[
        styles.container,
        Platform.OS === "android" && { paddingTop: StatusBar.currentHeight },
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <View style={styles.header}>
        {/* BOUTON BURGER CLIQUABLE */}
        <TouchableOpacity
          onPress={() => navigation.dispatch({ type: "OPEN_DRAWER" })}
          style={styles.burgerIconContainer}
        >
          <View style={styles.burgerIconLine} />
          <View style={styles.burgerIconLine} />
          <View style={styles.burgerIconLine} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t.title}</Text>

        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        ></TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.introText}>{t.intro}</Text>

        <View style={[styles.introActions, { marginTop: 2, marginBottom: 6 }]}>
          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: COLORS.blue }]}
            onPress={() => router.push("/2_PremiersGestes")}
          >
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>{t.button1}</Text>
              <Text style={styles.arrowIcon}>➜</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.actionButton, { backgroundColor: COLORS.red }]}
            onPress={() => router.push("/2_PremiersGestes")}
          >
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>{t.button2}</Text>
              <Text style={styles.arrowIcon}>➜</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.introText}>{t.introHedgehog}</Text>

        {/* SECTION INFOS À PRÉPARER */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>
            <Text style={styles.bold}>
              {language === "fr" ? "Préparez" : "Prepare"}
            </Text>{" "}
            {language === "fr" ? "les" : "the"}{" "}
            <Text style={styles.bold}>
              {language === "fr" ? "informations" : "details"}
            </Text>{" "}
            {language === "fr" ? "à" : "to"}{" "}
            <Text style={styles.bold}>
              {language === "fr" ? "communiquer" : "share"}
            </Text>{" "}
            {language === "fr" ? "au" : "with the"}{" "}
            <Text style={styles.bold}>
              {language === "fr" ? "centre de soins" : "care center"}:
            </Text>
          </Text>

          {/* Ligne 1 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.infoItem}>-</Text>
            <Text style={[styles.infoItem, { flex: 1 }]}>{t.address}</Text>
          </View>

          {/* Ligne 2 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.infoItem}>-</Text>
            <Text style={[styles.infoItem, { flex: 1 }]}>{t.weight}</Text>
          </View>

          {/* Ligne 3 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.infoItem}>-</Text>
            <Text style={[styles.infoItem, { flex: 1 }]}>{t.behavior}</Text>
          </View>

          {/* Ligne 5 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.infoItem}>-</Text>
            <Text style={[styles.infoItem, { flex: 1 }]}>{t.injuries}</Text>
          </View>

          {/* Ligne 6 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.infoItem}>-</Text>
            <Text style={[styles.infoItem, { flex: 1 }]}>{t.nearby}</Text>
          </View>
        </View>

        {/* SECTION CONTACT */}
        <Text style={styles.contactText}>
          <Text style={styles.bold}>
            {language === "fr" ? "Contactez" : "Contact"}
          </Text>{" "}
          {language === "fr" ? "par" : "by"}{" "}
          <Text style={styles.bold}>
            {language === "fr" ? "téléphone" : "phone"}
          </Text>
          , {language === "fr" ? "par" : "by"}{" "}
          <Text style={styles.bold}>{language === "fr" ? "sms" : "sms"}</Text>{" "}
          {language === "fr" ? "ou par" : "or by"}{" "}
          <Text style={styles.bold}>
            {language === "fr" ? "mail" : "email"}
          </Text>{" "}
          {language === "fr" ? "le" : "the"}{" "}
          <Text style={styles.bold}>
            {language === "fr" ? "centre de soins" : "care center"}
          </Text>{" "}
          <Text style={styles.bold}>
            {language === "fr" ? "le plus proche" : "closest to you"}
          </Text>{" "}
          {language === "fr"
            ? "dans la liste ci-dessous."
            : "from the list below."}
          {"\n"} {"\n"}
          {language === "fr"
            ? "Ne pas se rendre dans un centre de soins sans l'avoir contacté auparavant car il est nécessaire de vérifier leur disponibilité."
            : "Do not go to a care center without contacting them first, because it is necessary to check their availability."}
        </Text>

        {/* --- DÉPLACEZ LA BARRE DE RECHERCHE ICI --- */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>{t.searchLabel}</Text>
          <TextInput
            style={styles.searchInput}
            placeholder={
              language === "fr"
                ? "Ex : 91, Paris, LPO..."
                : "e.g. 91, Paris, LPO..."
            }
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Text style={styles.searchLabel}>
            {"\n"}
            {t.follow}
          </Text>
          <Text style={styles.updateDate}>{t.update}</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://lesptitskipik.fr")}
            style={{ marginBottom: 0, alignSelf: "flex-end" }}
          >
            <Text style={{ fontSize: 14 }}>
              <Text style={{ color: COLORS.orange, fontStyle: "italic" }}>
                {t.source}
              </Text>
              <Text
                style={{
                  color: COLORS.blue,
                  textDecorationLine: "underline",
                  fontWeight: "regular",
                  fontStyle: "italic",
                }}
              >
                lesptitskipik.fr
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* NOTE IMPORTANTE */}
        <Text style={styles.noteText}>
          {"\n"}
          {t.note}
        </Text>
        {/* LISTE DES CENTRES FILTRÉS */}
        <View style={styles.centersList}>
          {filteredCenters.length > 0 ? (
            filteredCenters.map((center) => (
              <View key={center.id} style={styles.centerCard}>
                {center.dept !== "À compléter" && (
                  <Text style={styles.centerDept}>
                    {center.dept} - {center.city}
                  </Text>
                )}
                <Text style={styles.centerName}>{center.name}</Text>
                {center.phone !== "À compléter" && (
                  <TouchableOpacity
                    style={styles.contactRow}
                    onPress={() => Linking.openURL(`tel:${center.phone}`)} // <--- Ouvre le clavier numérique
                  >
                    <Image
                      source={require("../../assets/images/icons_phone_orangeDark.png")}
                      style={styles.contactIcon}
                    />
                    <Text style={styles.centerContact}>{center.phone}</Text>
                  </TouchableOpacity>
                )}

                {center.email !== "À compléter" && (
                  <TouchableOpacity
                    style={styles.contactRow}
                    onPress={() => Linking.openURL(`mailto:${center.email}`)} // <--- Ouvre l'appli mail
                  >
                    <Image
                      source={require("../../assets/images/icons_email_orangeDark.png")}
                      style={styles.contactIcon}
                    />
                    <Text style={styles.centerContactLink}>{center.email}</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))
          ) : (
            <Text style={styles.noResult}>{t.noResult}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.orange,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: Platform.OS === "android" ? 15 : 15,
    height: 80,
  },
  burgerIconContainer: {
    gap: 6,
  },
  burgerIconLine: {
    marginLeft: 5,
    width: 30,
    height: 4,
    borderRadius: 3,
    backgroundColor: COLORS.white,
  },
  actionButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    width: "100%",
    marginBottom: 8,
  },
  actionButtonContent: {
    flexDirection: "row", // Aligne le texte et la flèche côte à côte
    alignItems: "center", // Centre verticalement
    justifyContent: "center",
  },
  actionButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginLeft: 20, // Ajoute un petit espace avant la flèche
  },
  arrowIcon: {
    color: COLORS.white,
    fontSize: 25, // Taille de la flèche
    fontWeight: "bold",
    paddingLeft: 85,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    flex: 1,
  },
  backButton: {
    position: "absolute",
    right: 20,
    zIndex: 1,
  },
  backIcon: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  searchContainer: {
    padding: 20,
    backgroundColor: "#FFF3E0",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.orange,
  },
  searchLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.orangeDark,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: "row", // Aligne l'image et le texte côte à côte
    alignItems: "center", // Centre verticalement l'image et le texte
    gap: 8, // Ajoute un petit espace entre l'icône et le texte
    marginBottom: 4,
  },
  contactIcon: {
    width: 16, // Taille de l'icône (à ajuster selon vos goûts)
    height: 16,
    resizeMode: "contain", // Empêche l'image d'être déformée
  },
  searchInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.orange,
    fontSize: 16,
  },
  scrollContent: {
    padding: 25,
    paddingBottom: 40,
  },
  updateDate: {
    textAlign: "right",
    color: COLORS.orange,
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 10, // <--- AJOUTE de l'espace AVANT (entre le champ et le texte)
    marginBottom: 0, // <--- RÉDUIT l'espace APRÈS (entre le texte et le bord)
  },

  introText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 24,
    marginBottom: 6,
  },
  introActions: {
    marginBottom: 6,
  },
  highlight1: {
    color: COLORS.blue,
    fontWeight: "bold",
  },
  highlight2: {
    color: COLORS.red,
    fontWeight: "bold",
  },
  infoSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    color: COLORS.black,
    marginBottom: 10,
    lineHeight: 24,
  },
  infoItem: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 22,
    marginLeft: 5,
    marginBottom: 4,
  },
  contactText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 24,
    marginBottom: 25,
  },
  instructionText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 22,
    textAlign: "left",
  },
  noteText: {
    fontSize: 18,
    color: COLORS.orangeDark,
    lineHeight: 22,
    marginBottom: 25,
    fontStyle: "italic",
  },
  thanksText: {
    fontSize: 15,
    color: COLORS.black,
    lineHeight: 22,
  },
  bold: {
    fontWeight: "bold",
  },
  centersList: {
    marginTop: 20,
    gap: 15,
  },
  centerCard: {
    backgroundColor: "#fffaf1",
    padding: 15,
    borderRadius: 12,
    borderWidth: 2, // <--- Ajoute un contour tout autour
    borderColor: COLORS.orange, // <--- La couleur du contour
    elevation: 2,
  },
  centerDept: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.orangeDark,
  },
  centerName: {
    fontSize: 15,
    fontWeight: "600",
    marginVertical: 5,
  },
  centerContact: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.black,
  },
  noResult: {
    textAlign: "center",
    marginTop: 20,
    color: COLORS.gray,
    fontStyle: "italic",
  },
  centerContactLink: {
    fontSize: 16,
    color: COLORS.blue, // Couleur bleue pour indiquer un lien
    textDecorationLine: "underline", // Soulignage
  },
});
