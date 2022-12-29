import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "./style";
import logo from "../../assets/onebitcode.png";
import { SocialIcon } from "react-native-elements";

export default function Login({ navigation }: any) {
  const [nome, onChageNome] = React.useState("");
  const [email, onChangeText] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.title}>Registrar-se</Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          value={nome}
          placeholder="Insira seu e-mail"
          onChangeText={onChageNome}
          placeholderTextColor="#88898a"
        />

        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder="Insira seu usuário"
          onChangeText={onChangeUsername}
          placeholderTextColor="#88898a"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Insira seu e-mail"
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

        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          placeholder="Insira sua senha"
          onChangeText={onChangeConfirmPassword}
          placeholderTextColor="#88898a"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrar-se</Text>
        </TouchableOpacity>

        <View style={styles.loginArea}>
          <Text style={styles.loginText}>Ja se registrou?</Text>
          <TouchableOpacity
            onPress={(): any => navigation.navigate("Login")}
            style={styles.buttonLogin}
          >
            <Text style={styles.buttonLoginText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialIcons}>
          <TouchableOpacity>
            <SocialIcon type="github" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon type="linkedin" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SocialIcon type="google" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
