import { FontAwesome } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator, View, Text, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View style={styles.permissionContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    )
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.permissionContainer}>
        <FontAwesome name="camera" size={54}
          color="white" />

        <Text style={styles.permissionTitle}>Acesso à
          camera</Text>

        <Text style={styles.permissionText}>O
          Pokéhunter precisa de acesso à câmera para
          capturar Pokémon.</Text>

        <TouchableOpacity style={styles.permissionButton}
        onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}
          >Permitir acesso</Text>
        </TouchableOpacity>

        <Pressable style={styles.cancelButton} onPress=
        {router.back}>
          <Text style={styles.cancelButtonText}
          >Voltar</Text>
        </Pressable>
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <CameraView style={styles.camera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "black"
  },
  camera: {
    height: "100%",

  },
  permissionContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    backgroundColor: "#121212"
  },
  permissionTitle: {
    marginTop: 24,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  permissionText: {
    marginTop: 12,
    color: "#a3a3a3",
    fontSize: 16,
    textAlign: "center",
  },
  permissionButton: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "red"
  },
  permissionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 18,
    padding: 10,

  },
  cancelButtonText: {
    color: "#a3a3a3",
    fontSize: 14,
  },
});
