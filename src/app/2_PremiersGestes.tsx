import { useFocusEffect, useNavigation, useRouter } from "expo-router";
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
  blue: "#2196F3",
  blueDark: "#1976D2",
  white: "#FFFFFF",
  gray: "#F5F5F5",
  black: "#333333",
  lightBlue: "#E3F2FD",
  red: "#F44336",
  yellowDark: "#FFA000",
  green: "#00c85a",
  greenDark: "#03af50",
  yellow: "#FFC107",
  redDark: "#D32F2F",
};

export default function PremiersGestes() {
  const router = useRouter();
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const { language } = useLanguage();

  const t = {
    fr: {
      title: "2. LES PREMIERS\nGESTES À APPORTER",
      step1: "ÉTAPE 1 : Sécurisez le hérisson",
      step2: "ÉTAPE 2 : Mettre une bouillotte",
      step3: "ÉTAPE 3 : Pesez le hérisson",
      step4: "ÉTAPE 4 : Appelez\nun centre de soins",
      center: "CONTACTER UN CENTRE DE SOIN",
    },
    en: {
      title: "2. FIRST\nAID TO PROVIDE",
      step1: "STEP 1: Secure the hedgehog",
      step2: "STEP 2: Add a hot water bottle",
      step3: "STEP 3: Weigh the hedgehog",
      step4: "STEP 4: Call\na care center",
      center: "CONTACT A CARE CENTER",
    },
  }[language];
  const copy = (fr: string, en: string) => (language === "fr" ? fr : en);

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

      {/* HEADER BLEU */}
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
        <TouchableOpacity style={styles.menuButton}></TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* SECTION 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.step1}</Text>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Tapissez de{" "}
                    <Text style={styles.bold}>papiers journaux</Text>, le{" "}
                    <Text style={styles.bold}>fond</Text> d&apos;un{" "}
                    <Text style={styles.bold}>carton</Text> assez haut pour
                    empêcher le hérisson de s&apos;échapper.
                  </>
                ) : (
                  "Line the bottom of a tall cardboard box with newspaper to prevent the hedgehog from escaping."
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Perforez les ailettes en haut du carton.",
                  "Make ventilation holes in the box flaps.",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Munissez-vous d&apos;une{" "}
                    <Text style={styles.bold}>paire de gants épais</Text> ou
                    d&apos;une <Text style={styles.bold}>serviette éponge</Text>{" "}
                    pour prendre le hérisson.
                  </>
                ) : (
                  "Use gloves or a towel to pick up the hedgehog."
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Installez le{" "}
                    <Text style={styles.bold}>hérisson en sécurité</Text> dans
                    le carton.
                  </>
                ) : (
                  "Place the hedgehog safely inside the box."
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Ajoutez sur le hérisson de{" "}
                    <Text style={styles.bold}>vieux tissus non effilochés</Text>{" "}
                    : torchons, serviettes éponges, serviettes de table, draps
                    ou langes. Caché, le hérisson sera moins stressé.
                  </>
                ) : (
                  "Cover the hedgehog with old, non-fraying fabrics such as tea towels, bath towels, table napkins, sheets or cloths. A covered hedgehog will be less stressed."
                )}
              </Text>
            </View>
          </View>
          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/2_1_144_dpi.png")} // Remplacez gloves.png par le vrai nom de votre fichier
                style={styles.miniIcon}
              />
            </View>
          </View>
        </View>

        {/* SECTION 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.step2}</Text>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {language === "fr" ? (
                <>
                  Déposez au fond du carton une{" "}
                  <Text style={styles.bold}>bouteille d&apos;eau chaude</Text>{" "}
                  ou une <Text style={styles.bold}>bouillotte. </Text>Elles
                  doivent être{" "}
                  <Text style={styles.bold}>entourée d&apos;un linge</Text> pour
                  éviter les brûlures. Ou si vous avez un{" "}
                  <Text style={styles.bold}>tapis chauffant</Text> mettez-le{" "}
                  <Text style={styles.bold}>en dessous du carton.</Text>
                </>
              ) : (
                "To prevent burns, use a bottle filled with hot water or a hot-water bottle wrapped in cloth. Alternatively, place a heating mat under the box."
              )}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {language === "fr" ? (
                <>
                  Une <Text style={styles.bold}>chaleur de contact</Text> est
                  nécessaire pour{" "}
                  <Text style={styles.bold}>maintenir sa température</Text>,
                  même si la température extérieure est élevée.
                </>
              ) : (
                "Direct warmth is needed to maintain its body temperature, even when the outdoor temperature is high."
              )}
            </Text>
          </View>

          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/2_3_144_dpi.png")} // Remplacez gloves.png par le vrai nom de votre fichier
                style={styles.miniIcon}
              />
            </View>
          </View>
        </View>
        {/* SECTION 3 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.step3}</Text>
          <View style={[styles.instructionContainer, { marginBottom: 5 }]}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Si vous n&apos;avez pas de petite{" "}
                    <Text style={styles.bold}>balance</Text>,{" "}
                    <Text style={styles.bold}>estimez à l&apos;œil</Text> la{" "}
                    <Text style={styles.bold}>taille du hérisson</Text> :
                    mandarine, citron, orange ou pamplemousse.
                  </>
                ) : (
                  "If you don't have a small scale, estimate the hedgehog's size by eye: mandarin, lemon, orange, or grapefruit."
                )}
              </Text>
            </View>
          </View>
          <View style={[styles.instructionContainer, { marginBottom: 10 }]}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Si vous avez une petite{" "}
                    <Text style={styles.bold}>balance</Text>,{" "}
                    <Text style={styles.bold}>pesez le hérisson</Text>,{" "}
                    <Text style={styles.bold}>notez son poids</Text> et
                    remettez-le dans le carton.
                  </>
                ) : (
                  "Weigh the hedgehog, write down its weight, then put it back in the box."
                )}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.instructionContainer,
              { marginBottom: 10, marginTop: -5 },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Ne <Text style={styles.bold}>pas donner à boire</Text>,{" "}
                    <Text style={styles.bold}>ni à manger.</Text>{" "}
                  </>
                ) : (
                  "Do not give anything to drink or eat."
                )}
              </Text>
            </View>
          </View>

          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/2_2_144_dpi.png")} // Remplacez gloves.png par le vrai nom de votre fichier
                style={styles.miniIcon}
              />
            </View>
          </View>
        </View>

        {/* SECTION 4 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.step4}</Text>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {language === "fr" ? (
                <>
                  Posez le <Text style={styles.bold}>carton au sol</Text> dans
                  une <Text style={styles.bold}>pièce</Text>{" "}
                  <Text style={styles.bold}>calme</Text>, à l&apos;
                  <Text style={styles.bold}>abri</Text> des{" "}
                  <Text style={styles.bold}>mouches</Text> et{" "}
                  <Text style={styles.bold}>sans autres animaux</Text> ou{" "}
                  <Text style={styles.bold}>prédateurs</Text> à proximité.
                </>
              ) : (
                "Put the box on the floor in a quiet room, protected from flies and away from other animals or predators."
              )}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {language === "fr" ? (
                <>
                  Appelez le <Text style={styles.bold}>centre de soins</Text> le{" "}
                  <Text style={styles.bold}>plus proche</Text> en cliquant sur
                  le bouton ci-dessous.
                </>
              ) : (
                "Call the nearest wildlife care center using the button below."
              )}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              styles.actionButton,
              { backgroundColor: COLORS.yellowDark },
            ]}
            onPress={() => router.push("/3_CentresSoins")}
          >
            <View style={styles.actionButtonContent}>
              <Text style={styles.actionButtonText}>{t.center}</Text>
              <Text style={styles.arrowIcon}>➜</Text>
            </View>
          </TouchableOpacity>{" "}
          <View
            style={[styles.illustrationContainer, { marginTop: -50 }]}
            pointerEvents="none"
          >
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/2_4_144_dpi.png")} // Remplacez gloves.png par le vrai nom de votre fichier
                style={styles.miniIcon}
              />
            </View>
          </View>
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
    backgroundColor: COLORS.red,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: Platform.OS === "android" ? 15 : 15,
    justifyContent: "center",
  },
  actionButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  actionButtonContent: {
    flexDirection: "row", // Aligne le texte et la flèche côte à côte
    alignItems: "center", // Centre verticalement
    justifyContent: "center",
  },
  actionButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    marginRight: 10, // Ajoute un petit espace avant la flèche
  },
  arrowIcon: {
    color: COLORS.white,
    fontSize: 30, // Taille de la flèche
    fontWeight: "bold",
    paddingLeft: 0,
  },

  backButton: {
    position: "absolute",
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  menuButton: {
    position: "absolute",
    right: 20,
    zIndex: 1,
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
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  section: {
    marginBottom: 40, // Espace entre les 4 sections
  },

  sectionNumber: {
    fontSize: 23,
    fontWeight: "bold",
    color: COLORS.red,
    marginBottom: 10,
    textAlign: "center",
  },
  instructionContainer: {
    gap: 5,
  },
  instructionText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 24,
    textAlign: "left",
  },
  bold: {
    fontWeight: "700",
    color: COLORS.black,
  },
  illustrationContainer: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  illustrationRow: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  miniIcon: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },

  boxPlaceholder: {
    width: 120,
    height: 80,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  scalePlaceholder: {
    width: 80,
    height: 60,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bottlePlaceholder: {
    width: 40,
    height: 60,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  phonePlaceholder: {
    width: 60,
    height: 100,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  clickPlaceholder: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: COLORS.red,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: 8,
  },
  instructionTextBullet: {
    color: "#D32F2F",
    fontSize: 18,
    fontWeight: "bold",
  },
});
