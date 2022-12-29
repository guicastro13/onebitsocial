import { login } from "../../services/UsersServices";
import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { styles } from "./style";
import logo from "../../assets/onebitcode.png";
import { SocialIcon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Spinner } from "@ui-kitten/components";

export default function Login({ navigation }: any) {
  const [email, onChangeText] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [isLogged, setIsLogged] = React.useState("loading");
  const [error, setError] = React.useState("");

  const handleLogin: () => Promise<void> = async (): Promise<void> => {
    const token: any = await login({ email, password });
    if (token) {
      try {
        await AsyncStorage.setItem("token", token);
        navigation.navigate("App");
      } catch (error) {}
    }
  };

  const handleLogOut: () => Promise<void> = async (): Promise<void> => {
    await AsyncStorage.removeItem("token");
    setIsLogged("false");
  };

  useLayoutEffect((): void => {
    const getToken: () => Promise<void> = async (): Promise<void> => {
      const token: string | null = await AsyncStorage.getItem("token");
      if (token) {
        navigation.navigate("App");
        setIsLogged("true");
      }
    };
    getToken();
  }, []);

  return (
    <>
      {isLogged === "loading" ? (
        <SafeAreaView style={styles.loading}>
          <Spinner status="danger" size="giant" />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Image source={logo} style={styles.logo} />

          <Text style={styles.title}>Fazer Login</Text>

          <Text style={styles.label}>Email ou Usuário</Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Insira seu e-mail ou usuário"
            onChangeText={onChangeText}
            placeholderTextColor="#88898a"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Insira sua senha"
            onChangeText={onChangePassword}
            placeholderTextColor="#88898a"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.registerArea}>
            <Text style={styles.registerText}>Ainda não está registrado?</Text>
            <TouchableOpacity
              onPress={(): void => navigation.navigate("Register")}
              style={styles.buttonRegister}
            >
              <Text style={styles.buttonRegisterText}>Registre-se</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialIcons}>
            <SocialIcon type="github" />
            <SocialIcon type="linkedin" />
            <SocialIcon type="google" />
          </View>
        </SafeAreaView>
      )}
    </>
  );
}
