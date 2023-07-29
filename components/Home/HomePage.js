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

const HomePage = ({ route, navigation }) => {
  const { vendorId } = route.params;

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} >
        <Button onPress={() => navigation.navigate('Application', {
          vendorId: vendorId
        })}>Նոր առաքման հայտ</Button>
        <Button onPress={() => navigation.navigate('Orders', {
          vendorId: vendorId
        })}>Բոլոր առաքման պատվերները</Button>
        <Button variant='subtle' colorScheme={'secondary'}
          onPress={() => navigation.navigate('Settings', {
            vendorId: vendorId
          })}>Կարգավորումներ</Button>
      </VStack>
    </Center>
  );
}


export default HomePage;
