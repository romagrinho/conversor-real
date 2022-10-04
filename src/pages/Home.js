import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Home() {
  let [cotacao, setCotacao] = useState();
  let [dolar, setDolar] = useState();
  let [total, setTotal] = useState();

  function CalcularTotal() {
    let resultado = parseFloat(cotacao) * parseFloat(dolar);
    setTotal(resultado);

    alert("A conversão em reais é de R$" + total + "");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de dolar em reais</Text>

      <TextInput
        onChangeText={setCotacao}
        style={styles.campo}
        placeholder="Digite a cotação de hoje"
      />
      <TextInput
        onChangeText={setDolar}
        style={styles.campo}
        placeholder="Digite a quantidade de dolar"
      />

      <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>
        <Text style={styles.botaoTexto}> Calcular </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3B3936",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 25,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 40,
  },
  campo: {
    backgroundColor: "#FFF",
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    width: 250,
  },
  botao: {
    backgroundColor: "#BD2A2E",
    alignItems: "center",
    padding: 15,
    borderRadius: 7,
    marginTop: 20,
    width: 250,
  },

  botaoTexto: {
    color: "#FFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
