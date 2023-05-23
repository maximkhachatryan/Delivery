import React from "react";
import { PixelRatio } from "react-native";
import { getVenderAddresses, removeVenderAddress } from "../../../api/services/venderAddressesService";
import {
    FlatList,
    Text,
    Pressable,
    Stack,
    Heading,
    HStack,
    VStack,
    Input,
    FormControl,
    Box,
    Spacer,
    Button,
    Image,
    Flex,
    Container
} from "native-base";


export default SettingsPage = ({ route, navigation }) => {
    const { venderId } = route.params;

    const [addresses, setAddresses] = React.useState();

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            let fetchedAddresses = await getVenderAddresses(venderId);
            setAddresses(fetchedAddresses);
        });

        // // React advises to declare the async function directly inside useEffect
        // async function initAddresses() {

        //     let fetchedAddresses = await getVenderAddresses(venderId);
        //     setAddresses(fetchedAddresses);
        // };

        // // You need to restrict it at some point
        // // This is just dummy code and should be replaced by actual
        // if (!addresses) {
        //     initAddresses();
        // }
    }, []);

    const getDistrictName = districtCode => {
        switch (districtCode) {
            case 1:
                return 'Կենտրոն';
            case 2:
                return 'Արաբկիր';
            case 3:
                return 'Քանաքեռ Զեյթուն';
            case 4:
                return 'Ավան';
            case 5:
                return 'Նոր Նորք';
            case 6:
                return 'Նորք Մարաշ';
            case 7:
                return 'Էրեբունի';
            case 8:
                return 'Շենգավիթ';
            case 9:
                return 'Նուբարաշեն';
            case 10:
                return 'Մալաթիա-Սեբաստիա';
            case 11:
                return 'Աջափնյակ';
            case 12:
                return 'Դավթաշեն';
            default:
                return '...'
        }
    }

    const removeAddress = async (addressId) => {
        let removed = await removeVenderAddress(venderId, addressId)
        if (removed) {
            let fetchedAddresses = await getVenderAddresses(venderId);
            setAddresses(fetchedAddresses);
        }
    }

    const renderItem = ({ item, index }) =>
        <Box mb="2"
            borderWidth="1"
            bgColor="blueGray.200">
            <Pressable
                onPress={() => console.log('You touched me')}
                p="2">
                <Box p="2">
                    <VStack>
                        <HStack>
                            <Text color={"coolGrey.800"}>Քաղաք:</Text>
                            <Spacer />
                            <Text color={"coolGrey.500"}>Երևան</Text>
                        </HStack>
                        <HStack>
                            <Text color={"coolGrey.800"}>Վարչական շրջան:</Text>
                            <Spacer />
                            <Text color={"coolGrey.500"}>{getDistrictName(item.district)}</Text>
                        </HStack>
                        <HStack>
                            <Text color={"coolGrey.800"}>Հասցե:</Text>
                            <Spacer />
                            <Text color={"coolGrey.500"}>{item.addressInfo}</Text>
                        </HStack>
                    </VStack>
                    <Button
                        mt="5"
                        variant="link"
                        colorScheme="danger"
                        onPress={() => removeAddress(item.id)}>
                        հեռացնել հասցեն
                    </Button>
                </Box>
            </Pressable>
        </Box>;


    return (
        <Container p={5} safeArea maxWidth={"100%"}>
            <Flex direction="column">
                <Heading my="15">Կարգավորումներ</Heading>
                <Box>
                    <FormControl.Label>Իմ լոգոն</FormControl.Label>
                    <Image
                        alt="Logo"
                        source={{
                            uri: "data:image/png;base64,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"
                        }}
                        style={{
                            width: PixelRatio.getPixelSizeForLayoutSize(250),
                            height: PixelRatio.getPixelSizeForLayoutSize(50),
                        }}
                    />
                </Box>
                <FormControl.Label>Իմ հասցեները</FormControl.Label>
                <FlatList flex={1} data={addresses}
                    renderItem={renderItem} />

                <Button height={50} onPress={() => navigation.navigate('CreateAddress', {
                    venderId: venderId//'F5C029E0-944D-4171-ADD6-AFBFD56BAAB2'
                })}>Նոր հասցե</Button>
            </Flex>
        </Container>
    );
}