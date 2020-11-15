import React from "react";
import { Image } from "react-native";
import logoImg from "../../assets/logo.png";
import { Input, Button } from "../../components";
import { Container, Title } from "./styles";

const SignIn: React.FC = () => {
  return (
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
    </Container>
  );
};

export default SignIn;
