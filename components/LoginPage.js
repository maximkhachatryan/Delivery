import React, { useState } from "react";
import { login } from "../api/services/authService";
import sha256 from 'crypto-js/sha256';

import { Center, Box, Heading, FormControl, Input, Button, HStack, VStack, Text, Link } from "native-base";

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('maximkhachatryan');
  const [password, setPassword] = useState('Max.1998');

  const signIn = async () => {
    if (username == null || username.trim() === "") {
      alert("Please fill Username field");
      return;
    }
    if (password == null || password.trim() === "") {
      alert("Please fill Password field");
      return;
    }
    let passwordHash = sha256(password).toString();
    console.log(passwordHash);

    try {
      let venderId = await login(username, passwordHash);
      if (venderId != null)
        navigation.navigate('Home', { venderId: venderId });
      else {
        setPassword('');
        alert("Սխալ մուտքանուն կամ ծածկագիր");
      }
    }
    catch (error) {
      console.log(error);
    };

  }

  return (<Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290" >
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Welcome
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>
      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>Username</FormControl.Label>
          <Input
            value={username}
            onChangeText={(text) => setUsername(text)} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            type="password" />
        </FormControl>
        <Button
          mt="2"
          colorScheme="indigo"
          onPress={signIn}>
          Sign in
        </Button>
      </VStack>
    </Box >
  </Center >
  );
}



export { LoginPage };