import { useFocusEffect, useNavigation } from "expo-router";
import { useCallback, useRef } from "react";
import {
  Image,
  Linking,
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
  purple: "#ce00e4",
  purpleDark: "#7200cc",
};

export default function PremiersGestes() {
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const { language } = useLanguage();

  const t = {
    fr: {
      title: "5. LE SAVIEZ-VOUS ?",
      section1: "Statut juridique du Hérisson",
      section2: "Classement du hérisson",
      section3: "Le régime du hérisson",
      section4: "Les puces du hérisson",
      section5: "Le tenrec-hérisson",
    },
    en: {
      title: "5. DID YOU KNOW?",
      section1: "Legal status of the hedgehog",
      section2: "Classification of the hedgehog",
      section3: "The hedgehog diet",
      section4: "Hedgehog fleas",
      section5: "The tenrec-hedgehog",
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
          <Text style={styles.sectionNumber}>{t.section1} </Text>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy("Le hérisson d'Europe ", "The European hedgehog ")}
                <Text style={styles.italic}>Erinaceus Europaeus</Text>{" "}
                {copy(
                  "est une espèce totalement protégée en France par la loi. Son statut de protection initial a été instauré par l'arrêté fondateur du ",
                  "is a species fully protected by law in France. Its initial protection status was established by the decree of ",
                )}
                <Text style={styles.bold}>
                  {copy("17 avril 1981", "17 April 1981")}
                </Text>
                {copy(
                  " et renforcé par l'arrêté du ",
                  " and strengthened by the decree of ",
                )}
                <Text style={styles.bold}>
                  {copy("23 avril 2007", "23 April 2007")}
                </Text>{" "}
                {copy(
                  "relatif aux mammifères protégés.",
                  "on protected mammals.",
                )}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {language === "fr" ? (
                  <>
                    Il est donc <Text style={styles.bold}>interdit</Text> de le{" "}
                    <Text style={styles.bold}>capturer</Text>, de le{" "}
                    <Text style={styles.bold}>transporter</Text>, de le{" "}
                    <Text style={styles.bold}>mutiler</Text>, de le{" "}
                    <Text style={styles.bold}>tuer</Text> ou de vouloir l&apos;
                    <Text style={styles.bold}>apprivoiser</Text>. Vivant ou
                    mort, il est aussi <Text style={styles.bold}>interdit</Text>{" "}
                    de le <Text style={styles.bold}>transporter</Text>, de
                    l&apos;<Text style={styles.bold}>utiliser</Text>, de le{" "}
                    <Text style={styles.bold}>vendre</Text> ou de l&apos;
                    <Text style={styles.bold}>acheter</Text>.
                  </>
                ) : (
                  "It is therefore forbidden to capture it, transport it, mutilate it, kill it or want to tame it. Alive or dead, it is also prohibited to transport, use, sell or buy it."
                )}{" "}
              </Text>
            </View>
          </View>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Ces infractions sont des délits pénaux. L'article L415-3 du Code de l'environnement prévoit les sanctions maximales suivantes :",
                  "These are criminal offences. Article L415-3 of the French Environmental Code provides for the following maximum penalties:",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 24 }}>
              <Text style={styles.instructionText}>- </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Une amende pouvant aller jusqu'à\n150 000 €",
                  "A fine of up to\n€150,000",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 24 }}>
              <Text style={styles.instructionText}>- </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Une peine de prison pouvant aller jusqu'à 3 ans.",
                  "A prison sentence of up to 3 years.",
                )}
              </Text>
            </View>
          </View>
        </View>

        {/* SECTION 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.section2} </Text>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Depuis la COP16 sur la biodiversité du \n 28 octobre 2024, l'",
                  "Since the COP16 biodiversity conference on 28 October 2024, the ",
                )}
                <Text
                  accessibilityRole="link"
                  onPress={() =>
                    Linking.openURL("https://www.iucnredlist.org/fr")
                  }
                  style={{ color: "blue", textDecorationLine: "underline" }}
                >
                  {language === "fr" ? "UICN" : "IUCN"}
                </Text>{" "}
                {copy(
                  "(Union Internationale pour la Conservation de la Nature) classe le ",
                  "(International Union for Conservation of Nature) now classifies the ",
                )}
                <Text style={styles.bold}>
                  {copy("hérisson d'Europe", "European hedgehog")}
                </Text>{" "}
                {copy("dans la catégorie des", "as")}{" "}
                <Text style={styles.bold}>
                  {copy(
                    "espèces « quasi menacées » d'extinction.",
                    "Near Threatened with extinction.",
                  )}{" "}
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Les causes principales du déclin :",
                  "Main causes of decline:",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 24 }}>
              <Text style={styles.instructionText}>- </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Perte et fragmentation de l'habitat : l'agriculture intensive détruit les haies et les bocages, tandis que l'urbanisation croissante réduit les espaces naturels.",
                  "Habitat loss and fragmentation: intensive agriculture destroys hedgerows and farmland habitats, while growing urbanization reduces natural areas.",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 24 }}>
              <Text style={styles.instructionText}>- </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Utilisation des pesticides : les produits chimiques éliminent les insectes, les vers et les limaces dont se nourrit le hérisson et l'empoisonne directement.",
                  "Pesticide use: chemicals kill the insects, worms and slugs hedgehogs eat, and can also poison them directly.",
                )}
              </Text>
            </View>

            <View style={{ flexDirection: "row", paddingLeft: 24 }}>
              <Text style={styles.instructionText}>- </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Dangers dans les jardins : robots de tonte qui fonctionnent la nuit, pièges létaux ou à glu, grillages, feux de tas de feuilles, débroussailleuses/rotofil et coups de fourche dans un nid lorsqu'un hérisson est confondu avec un rat.",
                  "Garden hazards include night-time robotic lawnmowers, lethal and glue traps, wire mesh, bonfires built on leaf piles, strimmers, and forks used in nests when hedgehogs are mistaken for rats.",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 24 }}>
              <Text style={styles.instructionText}>- </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Trafic routier : des millions de hérissons sont écrasés chaque année en traversant nos routes.",
                  "Road traffic: millions of hedgehogs are killed on roads every year.",
                )}
              </Text>
            </View>
          </View>
          <View
            style={(styles.illustrationContainer, { gap: 4, marginTop: 10 })}
          >
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/images_route.jpg")} // Remplacez gloves.png par le vrai nom de votre fichier
                style={styles.miniIcon}
              />
            </View>
            <Text style={styles.imageLegende}>
              © D.R. - Conflans-Sainte-Honorine (Yvelines)
            </Text>
          </View>
        </View>

        {/* SECTION 3 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.section3} </Text>
          <View style={[styles.illustrationContainer, { gap: 4 }]}></View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.instructionTextBullet}> {"▶"} </Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {copy(
                "On pense à tord que le hérisson se nourrit essentiellement de limaces, d'escargots et de vers de terre. Alors que son régime devrait principalement être composé... d'insectes et de ses larves. C'est donc un insectivore ! \nIl peut également se nourrir de petits mammifères morts et de fruits tombés \nau sol.",
                "It is wrongly believed that the hedgehog feeds mainly on slugs, snails and earthworms. While its diet is mainly composed of insects and is therefore an insectivore! it can also feed on small mammals and fallen fruits.",
              )}
            </Text>
          </View>
          <View style={(styles.instructionContainer, { marginTop: 4 })}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Du fait de la raréfaction des insectes, \ndûes aux pesticides, de la suppression des haies et des bocages, le hérisson est de plus en plus contraint de se nourrir de limaces, d'escargots et de vers de terre. Ces invertébrés sont des hôtes de parasites internes (vers pulmonaires et intestinaux) qui sont vecteurs de maladies et qui affaiblissent les hérissons. C'est une des causes de leur mortalité.",
                  "Due to the scarcity of insects, due to pesticides, and the removal of hedges and bocages, the hedgehog is increasingly forced to feed on slugs, snails and earthworms. These invertebrates are hosts of internal parasites (lung and intestinal worms) which carry disease and weaken hedgehogs.",
                )}
              </Text>
            </View>
          </View>
        </View>

        {/* SECTION 4 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.section4} </Text>
          <View style={[styles.illustrationContainer, { gap: 4 }]}></View>
          <View style={[styles.instructionContainer, { marginTop: 4 }]}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}> {"\n"} </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Du fait que le hérisson ai une températeure corporelle plus basse que les autres mammifères, les puces du hérisson ne peuvent pas survivre sur d'autres animaux. Le hérisson est donc un hôte spécifique de la puce ",
                  "Because the hedgehog has a lower body temperature than other mammals, hedgehog fleas cannot survive on other animals. The hedgehog is therefore a specific host of ",
                )}
                <Text style={{ fontStyle: "italic" }}>
                  {copy("Archaeopsylla erinacei.", "Archaeopsylla erinacei.")}
                </Text>
                {copy(
                  " Ces puces ne peuvent pas vivre sur les humains, sur les chiens ni sur les chats.",
                  " These fleas do not live on humans, dogs and cats.",
                )}
              </Text>
            </View>
          </View>
        </View>

        {/* SECTION 5 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.section5} </Text>
          <View style={[styles.illustrationContainer, { gap: 4 }]}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/images_tenrec.jpg")} // Remplacez gloves.png par le vrai nom de votre fichier
                style={styles.miniIcon}
              />
            </View>
            <Text style={styles.imageLegende}>
              © D.R. - Biotropica (Val-de-Reuil, Eure)
            </Text>
          </View>
          <View style={[styles.instructionContainer, { marginTop: 4 }]}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}> {"\n"} </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Génétiquement, le tenrec-hérisson est plus proche du lamantin ou de l'éléphant que du hérisson. Il appartient au groupe des ",
                  "Genetically, the hedgehog tenrec is more closely related to manatees and elephants than to hedgehogs. It belongs to the ",
                )}
                <Text style={styles.italic}>Afrosoricida</Text>
                {copy(
                  ", très éloigné des ",
                  ", a group genetically distant from the ",
                )}
                <Text style={styles.italic}>Eulipotyphla</Text>
                {copy(
                  ", qui comprend les hérissons. Cette ressemblance morphologique est due à un phénomène de convergence et non à un ancêtre commun.",
                  ", which includes hedgehogs. Their similar appearance is due to convergent evolution, not a shared ancestor.",
                )}
              </Text>
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
  italique: {
    fontStyle: "italic",
  },
  scrollView: {
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.purple,
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    paddingTop: Platform.OS === "android" ? 30 : 30,
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
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.purple,
    marginBottom: 10,
    textAlign: "left",
  },
  instructionContainer: {
    gap: 5,
    marginTop: 8,
  },
  instructionText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 24,
    textAlign: "left",
  },
  bold: {
    fontWeight: "bold",
    color: COLORS.black,
  },
  italic: {
    fontStyle: "italic",
    fontSize: 18,
  },
  illustrationContainer: {
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  illustrationRow: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  miniIcon: {
    width: "100%",
    height: 230,
    resizeMode: "contain",
  },
  imageLegende: {
    fontSize: 15,
    textAlign: "center",
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
  tip: {
    flexDirection: "row",
    marginBottom: 8,
    paddingHorizontal: 2,
  },
  tipIcon: {
    fontSize: 15,
    marginRight: 5,
  },
  tipText: {
    color: "#00c85a",
    flex: 1,
    fontSize: 16,
    fontStyle: "italic",
    lineHeight: 24,
  },
  instructionTextBullet: {
    color: "#ce00e4",
    fontSize: 18,
    fontWeight: "bold",
  },
  bulletText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 22,
    marginBottom: 0,
  },
});
