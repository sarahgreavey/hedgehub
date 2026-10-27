import { useFocusEffect, useNavigation } from "expo-router";
import type { ReactNode } from "react";
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

function Tip({ children }: { children: ReactNode }) {
  return (
    <View style={styles.tip}>
      <Text style={styles.tipIcon}></Text>
      <Text style={styles.tipText}>{children}</Text>
    </View>
  );
}

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
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const { language } = useLanguage();

  const t = {
    fr: {
      title: "4. LA PROTECTION\nDES HÉRISSONS",
      intro:
        "Vous pouvez aider les hérissons.\nVoici quelques informations et conseils.",
      section1:
        "Bénévolat, dons en nature, parrainages de hérissons et cagnottes solidaires",
      section2: "Création d'un passage entre les jardins",
      section3:
        "Toute l'année, mettez à disposition de l'eau dans un bac peu profond.",
      section4: "La nourriture",
      section5: "Construction d'une cantine avec plan",
      section6: "Condamnation des trous et des évacuations",
      section7:
        "Aménager une rampe sur\nles plans d'eau et les rebords de piscines",
      section8:
        "Conseil pour les administrations, les sociétés de construction immobilière...",
    },
    en: {
      title: "4. PROTECTING\nHEDGEHOGS",
      intro:
        "You can help hedgehogs.\nHere are a few tips and pieces of advice\nto follow.",
      section1:
        "Volunteering, in-kind donations, hedgehog sponsorships and solidarity funds",
      section2: "Creating a passage between gardens",
      section3: "All year round, provide water in a shallow tray.",
      section4: "The food",
      section5: "Build a feeding station with a plan",
      section6: "Closing off holes, drains and openings...",
      section7: "Install a ramp at ponds and along swimming pool edges",

      section8: "Advice for administrations and construction companies...",
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
        <Text style={[styles.instructionText]}>{t.intro}</Text>
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>
            {"\n\n"}
            {t.section1}
          </Text>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}> </Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Si vous souhaitez apporter un don en nature (nourriture, pochon polaire, cages ou matériel médical...), renseignez-vous auparavant, auprès de l'association concernant ses besoins. \n\nSi vous avez un peu de temps à consacrer, les centres de soins ont besoin de personnes qui puissent rapatrier les hérissons en détresse du lieu de leur découverte vers un centre de soins. Faites vous connaître auprès de ces derniers.\n\nLes centres de soins vivent essentiellement de dons de particuliers et parfois de rares subventions régionales, départementales ou municipales... En plus de personnes bénévoles, ils ont besoin d'argent pour soigner les hérissons : frais vétérinaires, nourriture, matériels médicaux... \n\nCes centres ont le même objectif : soigner les hérissons. Ce sont des associations reconnues d'intérêt général ; Votre don peut être déductible des impôts. Renseignez-vous sur les sites internet auprès de ces associations.",
                  "If you wish to make a donation in kind (food, fleece bag, cages or medical equipment...), find out beforehand from the association regarding its needs. \n\nThe care centers live mainly from donations from individuals and sometimes from rare regional, departmental or municipal subsidies... In addition to volunteers, they need money to care for hedgehogs: veterinary costs, food, medical equipment... \n\nAll have the same goal: to care for hedgehogs. These are recognized associations of general interest; your donation may be tax deductible. Find out more on the websites from these associations.",
                )}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionNumber}>
            {"\n"}
            {t.section2}
          </Text>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "D'un commun accord avec votre voisin.e, aménagez un passage en forant un trou de 15 x 15 cm dans la clôture ou en coupant le grillage. Nos zones urbaines sont cloisonnées par des clôtures et des barrières trop hautes et trop proche du sol pour pouvoir s'y glisser par en-dessous. Ces passages entre les jardins limiteront les traversées de nos routes.",
                  "With your neighbour's agreement, make a 15 x 15 cm opening in the fence or cut the wire mesh. Urban areas are increasingly divided by barriers and fences that are too high and too close to the ground for hedgehogs to squeeze underneath. These passages between gardens will reduce the need for hedgehogs to cross roads.",
                )}
              </Text>
            </View>
            <Tip>
              <Text style={[styles.bold, { color: "#00c85a" }]}>
                {copy("Astuces :", "Tip:")}
              </Text>{" "}
              {"\n"}
              {copy(
                "Des panneaux en bois ou en PVC « Passage hérisson » sont vendus sur internet pour sensibiliser les particuliers et les villes.",
                "Wooden or PVC signs marked ‘Hedgehog crossing’ are available online to raise awareness among residents and local authorities.",
              )}
            </Tip>
          </View>
          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/4_1_144_dpi.png")} // Remplacez gloves.png par le vrai nom de votre fichier
                style={styles.miniIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.section3}</Text>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "C'est d'autant plus important avec la multiplication des canicules : mettez de l'eau dans un bac peu profond avec une pierre pour éviter la noyade des insectes.",
                  "As heatwaves become more frequent, leave water in a shallow dish with a stone to prevent insects from drowning.",
                )}
              </Text>
            </View>
          </View>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Changez l'eau quotidiennement pour éviter le développement des larves de moustiques.",
                  "Change the water daily to prevent mosquito larvae from developing.",
                )}
              </Text>
            </View>
          </View>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Même en hiver, proposez de l'eau : les hérissons n'hivernent pas d'une seule traite du mois d'octobre jusqu'au mois de mars/avril, et peuvent se réveiller. Vérifiez que l'eau ne soit pas gelée.",
                  "Offer water in winter too: hedgehogs do not hibernate for the entire season and may wake up. Check that the water has not frozen.",
                )}
              </Text>
            </View>
            <Tip>
              <Text style={[styles.bold, { color: "#00c85a" }]}>
                {copy("Attention :", "Warning:")}
              </Text>{" "}
              {"\n"}
              {copy(
                "Ne donnez surtout pas de lait de vache : ils n'ont pas les enzymes nécessaires pour digérer le lactose. Cela provoque des diarrhées qui sont mortelles.",
                "Never give cow's milk: hedgehogs cannot digest lactose, and the resulting diarrhoea can be fatal.",
              )}
            </Tip>
          </View>
        </View>

        {/* SECTION 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.section4}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {copy(
                "Plusieurs avis diffèrent : \nFaut-il donner des croquettes aux hérissons ? \nFaut-il les aider ponctuellement ou toute l'année ? \n",
                "Several opinions differ: \nWill he give croquettes to the hedgehogs? \ nWill he help them occasionally or all year round?\n",
              )}
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {copy(
                "Chacunes et Chacuns pourra se faire son opinion mais un constat qui ne peut être ignoré : la multiplication des canicules, la raréfaction des insectes (le hérisson étant insectivore) face aux pesticides, les escargots et les limaces (bien que ce ne soit pas leur nourriture de prédilection) empoisonnés par le métaldéhyde sous forme de petits granulés bleus. Les hérissons qui ingèrent ces limaces sont ensuite empoisonnés. Toutes ces situations sont préoccupantes pour la survie des hérissons.\n",
                "Offer cat kibble (it is smaller than dog kibble). Prefer chicken-based, grain-free varieties.\n\nSome suggested brands:\n",
              )}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {copy(
                "Si vous souhaitez les aider en Automne, en hiver, en période de sécheresse, de canicule, de reproduction... :",
                "If you wish to help them during autumn, winter, periods of drought, heatwaves, or the breeding season...:",
              )}
            </Text>
          </View>
          <View style={styles.bulletList}>
            <View style={styles.bulletListItem}>
              <Text style={styles.bulletListDot}>{"- "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "des croquettes à base de poulet, plus susceptibles d'être appréciées par les hérissons ;",
                  "provide chicken-based kibble, which hedgehogs are more likely to appreciate;",
                )}
              </Text>
            </View>
            <View style={styles.bulletListItem}>
              <Text style={styles.bulletListDot}>{"- "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "de préférence de bonne qualité et sans céréales (car elles sont trop sucrées) ;",
                  "preferably good quality and grain-free (because they are too sweet);",
                )}
              </Text>
            </View>
            <View style={styles.bulletListItem}>
              <Text style={styles.bulletListDot}>{"- "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "privilégier les croquettes pour chats ou chaton car elles sont significativement plus riches en protéines et leur taille plus petites correspondent mieux à leur petite machoire ;",
                  "Opt for cat or kitten kibble, as it is significantly higher in protein, and its smaller size is better suited to their small jaws;",
                )}
              </Text>
            </View>
            <View style={styles.bulletListItem}>
              <Text style={styles.bulletListDot}>{"- "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "préférer les croquettes à la pâtée, qui attire les mouches.",
                  "prefer kibble to wet food, which attracts flies.",
                )}
              </Text>
            </View>
          </View>
          <Tip>
            <Text style={[styles.bold, { color: "#00c85a" }]}>
              {copy("Astuces :", "Tip:")}
            </Text>{" "}
            {"\n"}
            {copy(
              "Posez une coupelle sur le bol de croquettes pour empêcher les chats de les manger : ils ne soulèveront pas la coupelle, contrairement aux hérissons.",
              "Place a small dish over the kibble bowl to keep cats out; cats will not lift it, but hedgehogs will.",
            )}
          </Tip>
          <Tip>
            <Text style={[styles.bold, { color: "#00c85a" }]}>
              {copy("Attention :", "Warning:")}
            </Text>{" "}
            {"\n"}
            {copy("Ne jamais donner de pain.", "Do not give any bread.")}
          </Tip>
        </View>
        {/* SECTION 4 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>{t.section5}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {copy(
                "Avec du bois de palettes brut ou des chutes de lames en bois pour clôtures, construisez une cantine sans fond, à double entrée décalée, afin que les prédateurs n'accèdent pas directement à la nourriture et aux hérissons. À chaque entrée, vissez une bride de fixation ou un raccord de conduit d'air emboîté avec un tuyau flexible.",
                "Use untreated pallet wood or leftover boards (from fences or cladding) to build a bottomless feeding station with two offset entrances, so predators cannot reach the food or the hedgehogs directly. At each entrance, attach a fixing collar or duct connector fitted with flexible aluminium tubing.",
              )}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
            }}
          >
            <Text style={[styles.bold, { color: "#00c85a", fontSize: 16 }]}>
              {copy("Astuces :", "Tips:")}
            </Text>
          </View>
          <View style={[styles.bulletList, { marginTop: 0, paddingLeft: 0 }]}>
            <View style={styles.bulletListItem}>
              <Text style={[styles.bulletListDot, { color: "#00c85a" }]}>
                {"- "}
              </Text>
              <Text style={[styles.tipText, { flex: 1 }]}>
                {copy(
                  "Agrafez un grillage au sol de la cantine pour éviter que les rats puissent faire des galeries ;",
                  "add a wire mesh to prevent rats from digging tunnels;",
                )}
              </Text>
            </View>
            <View style={styles.bulletListItem}>
              <Text style={[styles.bulletListDot, { color: "#00c85a" }]}>
                {"- "}
              </Text>
              <Text style={[styles.tipText, { flex: 1 }]}>
                {copy(
                  "avec une hauteur de 35 cm, la cantine peut accueillir une mangeoire programmée ;",
                  "with a height of 35 cm, the feeding station can accommodate an automatic feeder;",
                )}
              </Text>
            </View>
            <View style={styles.bulletListItem}>
              <Text style={[styles.bulletListDot, { color: "#00c85a" }]}>
                {"- "}
              </Text>
              <Text style={[styles.tipText, { flex: 1 }]}>
                {copy(
                  "ajoutez un toit en verre sécurit® et une caméra installée au-dessus pour observer le comportement des hérissons la nuit ;",
                  "add a secure glass® roof and a camera installed above to observe the hedgehogs' behaviour at night;",
                )}
              </Text>
            </View>
            <View style={styles.bulletListItem}>
              <Text style={[styles.bulletListDot, { color: "#00c85a" }]}>
                {"- "}
              </Text>
              <Text style={[styles.tipText, { flex: 1 }]}>
                {copy(
                  "multipliez les points de nourrissage pour éviter les éventuels conflits entre eux et la transmission des maladies ;",
                  "multiply the feeding points to limit encounters between them and the transmission of diseases;",
                )}
              </Text>
            </View>
            <View style={styles.bulletListItem}>
              <Text style={[styles.bulletListDot, { color: "#00c85a" }]}>
                {"- "}
              </Text>
              <Text style={[styles.tipText, { flex: 1 }]}>
                {copy(
                  "placez l'eau à l'extérieur de la cantine.",
                  "place the water outside the feeding station.",
                )}
              </Text>
            </View>
          </View>
          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/4_2_144_dpi.png")}
                style={styles.miniIcon}
              />
            </View>
          </View>
          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/bride_tuyau_inox.jpg")}
                style={styles.miniIcon}
              />
            </View>
          </View>
          <View style={[styles.illustrationContainer, { gap: 4 }]}>
            <View style={styles.illustrationRow}>
              <Image
                source={require("../../assets/images/cantine.jpg")}
                style={styles.miniIcon}
              />
            </View>
            <Text style={styles.imageLegende}>© D.R.</Text>
          </View>
        </View>
        {/* SECTION 4 */}
        <View style={[styles.section, { marginBottom: 0 }]}>
          <Text style={styles.sectionNumber}>{t.section6}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {copy(
                "Avec un grillage, fermez l'accès aux évacuations : les hérissons qui y tombent sont piégés et meurent.",
                "Cover access to drains with wire mesh: hedgehogs can fall in and become trapped in these deadly hazards.",
              )}
            </Text>
          </View>
        </View>
        <View style={[styles.illustrationContainer, { gap: 4 }]}>
          <View style={styles.illustrationRow}>
            <Image
              source={require("../../assets/images/images_evacuation.jpg")}
              style={styles.miniIcon}
            />
          </View>
          <Text style={styles.imageLegende}>© D.R.</Text>
        </View>

        {/* SECTION 4 */}
        <View style={[styles.section, { marginBottom: 0 }]}>
          <Text style={styles.sectionNumber}>
            {"\n\n"}
            {t.section7}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
            <Text style={[styles.instructionText, { flex: 1 }]}>
              {copy(
                "les plans d'eau avec des bords hauts et les piscines sont des pièges mortels pour les hérissons. Sans aucune rampe, ils n'ont aucun moyen de quitter la piscine ou le plan d'eau, ils nagent jusqu'à épuisement et se noient.",
                "Bodies of water with steep sides and swimming pools are death traps for hedgehogs; without a ramp, they have no way to get out, so they swim until they are exhausted and drown.",
              )}
            </Text>
          </View>
        </View>
        <View style={[styles.illustrationContainer, { gap: 4 }]}>
          <View style={styles.illustrationRow}>
            <Image
              source={require("../../assets/images/images_rampe.jpg")}
              style={styles.miniIcon}
            />
          </View>
          <Text style={styles.imageLegende}>
            © D.R. - Vieux jardin Botanique d&apos;Hambourg (Allemagne)
          </Text>
        </View>

        {/* SECTION 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionNumber}>
            {"\n\n"}
            {t.section8}{" "}
          </Text>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Avec l'appui des associations, certaines villes de France ont mis en place des dispositifs pour installer des passages pour hérissons afin de lutter contre le fractionnement de leur habitat urbain.",
                  "With the support of associations, some French cities have implemented measures to install hedgehog highways to combat the fragmentation of their urban habitat.",
                )}
              </Text>
            </View>
          </View>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "Un espace longtemps resté sans activité peut être habité par des hérissons. Avant toute construction/travaux, vérifiez soigneusement la présence de nids d'animaux.",
                  "A site left undisturbed for a long time may be home to hedgehogs. Before any construction, carefully check for animal nests.",
                )}
              </Text>
            </View>
          </View>
          <View style={styles.instructionContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.instructionTextBullet}>{"▶ "}</Text>
              <Text style={[styles.instructionText, { flex: 1 }]}>
                {copy(
                  "L'utilisation de barrières ou glissières de sécurité le long des routes sans échappées sont des pièges mortels, comme sur la photo ci-dessous. Le hérisson longe cette longue barrière sans échappée puis retournera vers la route avec la forte probabilité d'être percuté par une voiture.",
                  "Road barriers or guardrails without escape openings should be prohibited, as shown in the photo below. A hedgehog trapped behind a long barrier with no escape opening will return to the road and be hit by a car.",
                )}
              </Text>
            </View>
            <View style={[styles.illustrationContainer, { gap: 4 }]}>
              <View style={styles.illustrationRow}>
                <Image
                  source={require("../../assets/images/route.jpg")}
                  style={styles.miniIcon}
                />
              </View>
              <Text style={styles.imageLegende}>
                © D.R. - rue Jacques Tati - {"\n"}Herblay-sur-Seine (Val
                d&apos;Oise)
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
  scrollView: {
    backgroundColor: COLORS.white,
  },
  header: {
    backgroundColor: COLORS.green,
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
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.green,
    marginBottom: 10,
    textAlign: "left",
  },
  instructionContainer: {
    gap: 5,
    marginTop: 8,
  },
  bulletList: {
    marginTop: 6,
    gap: 4,
    paddingLeft: 26,
  },
  bulletListItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bulletListDot: {
    fontSize: 18,
    lineHeight: 24,
    color: "black",
    marginRight: 4,
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
    fontSize: 15,
  },
  illustrationContainer: {
    marginTop: 5,
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
    borderRadius: 8,
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
    marginTop: 4,
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
    color: "#00c85a",
    fontSize: 18,
    fontWeight: "bold",
  },
  bulletText: {
    fontSize: 18,
    color: COLORS.black,
    lineHeight: 22,
    marginBottom: 0,
  },
  imageLegende: {
    fontSize: 15,
    textAlign: "center",
  },
});
