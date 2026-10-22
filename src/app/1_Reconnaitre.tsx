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
  green: "#00c85a",
  greenDark: "#03af50",
  red: "#F44336",
  redDark: "#D32F2F",
  yellow: "#FFC107",
  yellowDark: "#FFA000",
  blue: "#2196F3",
  white: "#FFFFFF",
  gray: "#F5F5F5",
  text: "#333333",
  black: "#000000",
};

// 2. LA FONCTION PRINCIPALE (UNE SEULE FOIS)
export default function Reconnaitre() {
  const router = useRouter();
  const navigation = useNavigation();
  const scrollViewRef = useRef<ScrollView>(null);
  const { language } = useLanguage();

  const t = {
    fr: {
      title: "1. RECONNAÎTRE\nUN HÉRISSON EN DÉTRESSE",
      surveillance: "UNE SURVEILLANCE\nEST NÉCESSAIRE",
      day: "DE JOUR",
      next: "LES PREMIERS GESTES",
      cas: "CAS PARTICULIERS",
      danger: "DÉTRESSE CONFIRMÉE !\n= URGENCE !",
      center: "CONTACTER UN CENTRE DE SOIN",
    },
    en: {
      title: "1. RECOGNIZE\nA HEDGEHOG IN DISTRESS",
      surveillance: "WATCHING IS\nNECESSARY",
      day: "DAYTIME",
      next: "FIRST AID",
      cas: "SPECIAL CASES",
      danger: "CONFIRMED DISTRESS!\n= EMERGENCY!",
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
      {/* HEADER MODERNE */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.dispatch({ type: "OPEN_DRAWER" })}
          style={styles.burgerIconContainer}
        >
          <View style={styles.burgerIconLine} />
          <View style={styles.burgerIconLine} />
          <View style={styles.burgerIconLine} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t.title}</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* --- CARTE 1 : SURVEILLANCE NÉCESSAIRE --- */}
        <View style={[styles.cardYellow, { borderTopColor: COLORS.yellow }]}>
          <View style={[styles.cardHeader, { backgroundColor: COLORS.yellow }]}>
            <Text style={styles.cardHeaderText}>{t.surveillance}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.sectionTitle}>{t.day}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextYellow}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Une hérissonne peut chercher un endroit pour faire un nid, si elle a été dérangée en pleine journée.",
                  "A female hedgehog may be looking for a nesting site if she has been disturbed during the day.",
                )}
                {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextYellow}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "En période de canicule, le hérisson peut être allongé en étoile en contact de la terre sous un buisson pour chercher la fraîcheur.",
                  "During a heatwave, a hedgehog may lie spread out under a bush to cool down.",
                )}
                {"\n"}
              </Text>
            </View>
            <Text style={styles.RecommandationText}>
              {copy(
                "Dans ces situations, observez l'évolution de loin. Les hérissons ne doivent pas être en situation de danger immédiat (mouches, prédateurs, routes, trous...). \nSinon, sécurisez le ou les hérissons. Cliquez sur le bouton rouge ci-dessous : Les premiers gestes.",
                "In these situations, observe from a distance. The hedgehogs must not be in immediate danger (flies, predators, roads, holes, etc.). If they are, move them to safety by tapping the red button below for Category 2: First Aid.",
              )}
              {"\n"}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextYellow}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Au printemps et en été, si vous trouvez un ou plusieurs juvéniles de la taille d'une mandarine, aux yeux ouverts, avec des piquants, se baladant seuls sans danger immédiat (routes, mouches, prédateurs), attendez de voir si un adulte revient.",
                  "In spring and summer, if you find one or more juvenile hedgehogs about the size of a mandarin, with open eyes and spines, wandering alone and not in immediate danger (roads, flies, predators), wait to see whether an adult returns.",
                )}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginBottom: 0, marginLeft: 30 }}
            >
              <Text style={styles.bulletText}>- </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "S'il ne revient pas, vérifiez si le reste de la portée est en difficulté dans les environs, puis ramassez le ou les juvéniles, placez-le/les dans un carton (cliquez sur le bouton rouge ci-dessous) et contactez un centre de soins (bouton orange ci-dessous).",
                  "If the adult does not return, check whether the rest of the litter is nearby and in difficulty. Then pick up the juvenile hedgehog or hedgehogs, place them in a box and contact a wildlife care center.",
                )}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", marginBottom: 0, marginLeft: 30 }}
            >
              <Text style={styles.bulletText}>- </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Avec un adulte à proximité : observez la situation et son évolution.",
                  "If an adult is nearby, observe the situation and how it develops.",
                )}
                {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextYellow}></Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                <Text style={{ fontWeight: "bold", color: COLORS.red }}>
                  {copy(
                    "Parcontre, en automne et en hiver, il faut impérativement mettre ce ou ces orphelins d'automne en sécurité. Cliquez sur le bouton rouge ci-desous : les premiers gestes puis contacter un centre de soins.",
                    "In autumn and winter, any orphaned hedgehog must be moved to safety immediately (tap the red button below for Category 2: First Aid).",
                  )}
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: COLORS.red }]}
              onPress={() => router.push("/2_PremiersGestes")}
            >
              <View style={styles.actionButtonContent}>
                <Text style={styles.actionButtonText}>{t.next}</Text>
                <Text style={styles.arrowIcon}>➜</Text>
              </View>
            </TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>
        {/* --- CARTE 2 : CAS PARTICULIERS --- */}
        <View
          style={[styles.cardYellowDark, { borderTopColor: COLORS.yellowDark }]}
        >
          <View
            style={[styles.cardHeader, { backgroundColor: COLORS.yellowDark }]}
          >
            <Text style={styles.cardHeaderText}>{t.cas}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.sectionTitleYellowDark}>
              {copy("Dérangement d’un nid", "A disturbed nest")}
            </Text>
            {/* Bloc 1 */}
            <Text style={[styles.bulletText, { flex: 1 }]}>
              {copy(
                "Il faut impérativement empêcher la hérissonne de fuir et d'abandonner son nid avec ses juvéniles. Elle risque de ne plus revenir les nourrir et les juvéniles mourront. Avec des gants ou une vieille serviette, placez la hérissonne, ses juvéniles et tous les éléments du nid (foin, feuilles...) ensemble afin qu'elle retrouve ses odeurs :",
                "It is essential to prevent the mother from fleeing while she has young. She may not return to feed them, and they could die. Using gloves or an old towel, place the mother, her young and all the nesting material (hay, leaves, etc.) together so she can recognize their scent again:",
              )}
            </Text>
            {/* Bloc 2 : Option A */}
            <View style={{ flexDirection: "row", marginBottom: 0 }}>
              <Text style={styles.bulletTextYellowDark}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy("dans un grand carton", "in a large cardboard box")}
              </Text>
            </View>
            {/* Mot de liaison */}
            <Text style={[styles.bulletText, { marginLeft: 15 }]}>
              {copy("ou", "or")}
            </Text>
            {/* Bloc 3 : Option B */}
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Text style={styles.bulletTextYellowDark}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "dans une grande cage. Placez l'ensemble du nid dans un carton plus petit, à l'intérieur de la cage.",
                  "in a large enclosure. Place the entire nest in a smaller box inside the enclosure.",
                )}
                {"\n"}
              </Text>
            </View>
            <Text style={styles.sectionTitleYellowDark}>
              {copy(
                "Un hérisson coincé dans un grillage, un filet, une barrière…",
                "A hedgehog trapped in wire mesh, netting or a fence…",
              )}
            </Text>
            <Image
              source={require("../../assets/images/grillage.png")}
              style={styles.contentImage}
            />
            <Text style={styles.imageLegende}>
              © D.R. - Maisons-Laffitte (Yvelines)
            </Text>
            <Text style={styles.bulletText}>
              {"\n"}
              {copy(
                "Après avoir libéré le hérisson, ne le relâchez pas. Il peut être blessé ou avoir la peau cisaillée. Des mouches ont pu pondre des œufs (voir l'image plus bas), souvent en grappes blanches autour des orifices naturels et du muscle peaucier (au niveau de la jupe de poils). Il peut aussi être dénutrie et déshydraté.",
                "After freeing the hedgehog, do not release it. It may be injured or have torn skin. Flies may have laid eggs on it (see the image below), usually in white clusters around its natural openings and the area of longer belly fur. It may also be malnourished and dehydrated.",
              )}
              {"\n"}
            </Text>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: COLORS.red }]}
              onPress={() => router.push("/2_PremiersGestes")}
            >
              <View style={styles.actionButtonContent}>
                <Text style={styles.actionButtonText}>{t.next}</Text>
                <Text style={styles.arrowIcon}>➜</Text>
              </View>
            </TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>

        {/* --- CARTE 3 : DÉTRESSE CONFIRMÉE --- */}
        <View style={[styles.cardRed, { borderTopColor: COLORS.red }]}>
          <View style={[styles.cardHeader, { backgroundColor: COLORS.red }]}>
            <Text style={styles.cardHeaderText}>{t.danger}</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.sectionTitle}>
              {copy("DE JOUR ou DE NUIT", "DAY OR NIGHT")}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Des bébés hérissons aux yeux fermés, roses avec des piquants blancs, trouvés hors du nid : mettez des gants, prenez-les et déposez-les dans un carton avec une bouillotte entourée d'un tissu pour éviter les brûlures.",
                  "Baby hedgehogs with closed eyes, pink skin and white spines found outside the nest: put on gloves, place them in a box with a hot-water bottle wrapped in fabric to prevent burns.",
                )}
                {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Il est couché sur le côté ou à plat ventre, prostré et ne bouge presque pas.",
                  "It is lying on its side or stomach, listless and barely moving.",
                )}
                {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Il titube, marche en rond, tombe, a une démarche flottante et/ou est désorienté.",
                  "It staggers, walks in circles, falls, moves unsteadily and/or seems disoriented.",
                )}
                {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Il ne se met pas en boule quand on s'approche, ou se laisse manipuler sans résistance.",
                  "It does not curl up when approached, or allows itself to be handled without resisting.",
                )}
                {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Il reste exposé au soleil.",
                  "It remains exposed to the sun.",
                )}
                {"\n"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Il respire difficilement : ses flancs se creusent, sa respiration crépite ou il tousse.",
                  "It is having difficulty breathing: its sides are sunken, it makes crackling sounds when breathing, or it coughs.",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.bulletTextRed}>{"\n"}▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {"\n"}
                {copy(
                  "Il est cachectique (très maigre et déshydraté) : creux derrière la nuque et sur les flancs.",
                  "It is severely underweight and dehydrated: hollow behind the neck and sunken along the sides.",
                )}
              </Text>
            </View>
            {/* IMAGE 2 */}
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/image_maigre.jpg")} // Remplacez par l'image hérisson cachectique
                style={styles.contentImage}
              />
              <Text style={styles.imageLegende}>© p&apos;tikipic / D.R</Text>

              <Text style={styles.imageCaption}>
                {copy(
                  "image : hérisson cachectique",
                  "Image: severely underweight hedgehog",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: -10 }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Il est visiblement blessé, avec des plaies ou des coupures et du sang sur ses piquants.",
                  "It is visibly injured, with wounds or cuts, and there is blood on its spines.",
                )}
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Text style={styles.bulletTextRed}>▶ </Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                {copy(
                  "Des mouches sont autour de lui. Il est infesté d'œufs et/ou d'asticots, une situation extrêmement grave. Les œufs de mouches forment des grappes autour des yeux et/ou des orifices naturels et au niveau du muscle peaucier (aussi appelé jupe de poils).",
                  "Flies are around it. It is infested with eggs and maggots, a life-threatening condition. Fly eggs appear in clusters around the eyes and/or natural openings, near the skin muscle also known as the skirt of fur.",
                )}
              </Text>
            </View>
            {/* IMAGE 1 */}
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/image_oeuf.jpg")} // Remplacez par l'image hérisson cachectique
                style={styles.contentImage}
              />
              <Text style={styles.imageLegende}>
                © D.R. / Sanctuaire des Hérissons
              </Text>

              <Text style={styles.imageCaption}>
                {copy(
                  "image : grappe avec oeufs de mouches",
                  "Image: cluster of fly eggs",
                )}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: -20 }}>
              <Text style={styles.bulletTextYellow}></Text>
              <Text style={[styles.bulletText, { flex: 1 }]}>
                <Text style={{ fontWeight: "bold", color: COLORS.red }}>
                  {copy(
                    "Dans toutes ces situations ci-dessus, il faut sans plus attendre mettre en sécurité le hérisson. Cliquez sur le bouton rouge ci-dessous : les premiers gestes puis contacter un centre de soins.",
                    "In all the situations mentioned above, you must immediately secure the hedgehog (see below) and then contact a wildlife rehabilitation center.",
                  )}
                </Text>
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: COLORS.red }]}
              onPress={() => router.push("/2_PremiersGestes")}
            >
              <View style={styles.actionButtonContent}>
                <Text style={styles.actionButtonText}>{t.next}</Text>
                <Text style={styles.arrowIcon}>➜</Text>
              </View>
            </TouchableOpacity>
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
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
  scrollView: { backgroundColor: COLORS.white },
  header: {
    backgroundColor: COLORS.blue,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop: Platform.OS === "android" ? 15 : 15,
    justifyContent: "center",
  },

  imageLegende: {
    fontSize: 15,
    textAlign: "center",
  },

  bold: {
    fontWeight: "bold",
    color: "black",
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  scrollContent: { padding: 20, paddingBottom: 30 },

  cardYellow: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 25,
    borderTopWidth: 10, // Bordure épaisse en haut
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#FFC107",
  },
  cardRed: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 25,
    borderTopWidth: 10, // Bordure épaisse en haut
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#F44336",
  },
  cardYellowDark: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 25,
    borderTopWidth: 10, // Bordure épaisse en haut
    elevation: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#FFA000",
  },
  cardHeader: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeaderText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
  cardBody: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    textTransform: "uppercase",
    color: COLORS.black,
  },
  sectionTitleYellowDark: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    textTransform: "uppercase",
    color: COLORS.yellowDark,
  },
  bulletTextYellow: {
    fontSize: 18,
    color: COLORS.yellow,
    lineHeight: 22,
    marginBottom: 0,
  },
  bulletText: {
    fontSize: 18,
    color: COLORS.text,
    lineHeight: 24,
    marginBottom: 0,
  },
  bulletTextRed: {
    fontSize: 18,
    color: COLORS.red,
    lineHeight: 22,
    marginBottom: 0,
  },
  bulletTextYellowDark: {
    fontSize: 18,
    color: COLORS.yellowDark,
    lineHeight: 22,
    marginBottom: 0,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 15,
    padding: 0,
    backgroundColor: "white",
    borderRadius: 10,
  },
  contentImage: {
    width: 310,
    height: 315,
    resizeMode: "cover",
    borderRadius: 8,
    paddingBottom: 2,
  },
  imageCaption: {
    fontSize: 13,
    color: COLORS.gray,
    fontStyle: "italic",
    marginTop: 8,
    textAlign: "center",
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

  RecommandationText: {
    color: COLORS.yellow,
    fontSize: 18,
    fontWeight: "bold",
  },
  burgerIconContainer: {
    position: "absolute",
    left: 20,
    zIndex: 1,
    gap: 6,
  },
  burgerIconLine: {
    width: 30,
    height: 4,
    borderRadius: 3,
    backgroundColor: COLORS.white,
  },
});
