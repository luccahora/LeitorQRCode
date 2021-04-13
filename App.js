import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Modal } from "react-native";
import Scanner from "./src/components/Scanner/Scanner";

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [type, setType] = React.useState("");
  const [data, setData] = React.useState("");

  const onCodeScanned = (type, data) => {
    setType(type);
    setData(data);
    setModalVisible(false);
    alert(`Sucessoo`);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <StatusBar style="auto" />
      <Text>Type: {type}</Text>
      <Text>Data: {data}</Text>
      <Button title="Escanear QR Code" onPress={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
});
