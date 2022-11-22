import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // paddingTop: 60,
    // paddingHorizontal: 30

    justifyContent: "center",
    alignItems: "center",
  },

  bola1: {
    //   position: 'absolute',
    width: "100%",
    height: 250,
  },

  market: {
    position: "absolute",
    width: 319,
    height: 365,
    top: 90,
    marginBottom: 20,
  },

  rodape: {
    alignContent: "center",
    alignItems: "center",
  },

  explore: {
    position: "absolute",
    fontSize: 20,
    top: 230,
  },

  exploreText: {
    position: "absolute",
    top: 275,
    fontSize: 14,
    lineHeight: 20,
  },

  botao: {
    backgroundColor: "#34A853",
    position: "absolute",
    width: 328,
    height: 48,
    top: 390,
    borderRadius: 10,
    alignItems: "center",
 
    justifyContent: 'center',
  },

  botaoText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
});
