import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import logoImg from "../../assets/logo.png";
import { Input, Button } from "../../components";
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from "./styles";

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />
        <Title>Faça seu logon</Title>
        <Input name="email" icon="mail" placeholder="Email" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log("OK");
          }}
        >
          Entrar
        </Button>

        <ForgotPassword
          onPress={() => {
            console.log("esqueci a senha");
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>
      <CreateAccountButton
        onPress={() => {
          console.log("criar conta");
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
