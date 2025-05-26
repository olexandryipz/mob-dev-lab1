import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  return (
    <View style={styles.container}>
      {/* Заголовок */}
      <Text style={styles.title}>Реєстрація</Text>

      {/* Поля вводу */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Електронна пошта</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <TextInput style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль (ще раз)</Text>
        <TextInput style={styles.input} secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Прізвище</Text>
        <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ім'я</Text>
        <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
      </View>

      {/* Кнопка */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>

      {/* Футер */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
    marginBottom: 12,
  },
  button: {
    width: "100%",
    backgroundColor: "#224A98",
    paddingVertical: 14,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },

});
