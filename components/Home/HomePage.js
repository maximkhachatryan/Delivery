import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Button
} from "native-base";

const HomePage = ({ navigation }) => {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50"}}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Button onPress={() => navigation.navigate('ApplicationStep1')}>Նոր առաքման հայտ</Button>
        <Button onPress={() => navigation.navigate('NativeBase')}>Բոլոր առաքման պատվերները</Button>
      </VStack>
    </Center>
  );
}


export default HomePage;
