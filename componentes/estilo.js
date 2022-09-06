import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700'
  },
  titulo: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20
  },  
  texto: {
    textAlign: "center"
  },
  capa: {
    width: 300,
    height: 100,
    marginBottom: 20
  }
});

export default estilo;