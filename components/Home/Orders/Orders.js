import { Box, Button, Center, Container, FlatList, Flex, HStack, Heading, Pressable, Text, VStack, View } from "native-base";
import React from "react";
import { getAllOrders } from "../../../api/services/orderService";
import { getDistrictName } from "../../../helpers/Helper"

const Orders = ({ route, navigation }) => {
    const { venderId } = route.params;

    const [orders, setOrders] = React.useState();

    const getStatusName = statusCode => {
        switch (statusCode) {
            case 0:
                return 'Ստեղծված';
            case 1:
                return 'Հաճախորդի կողմից լրացված';
            case 2:
                return 'Հաստատված';
            case 3:
                return 'Մերժված';
            case 4:
                return 'Վերցված';
            case 5:
                return 'Առաքումը սկսված';
            case 6:
                return 'Առաքված';
            case 7:
                return 'Հաճախորդի կողմից մերժված';
            case 8:
                return 'Հետ վերադարձված';
            default:
                return '...'
        }
    }

    const getVenderAddressString = (address) => {
        return "ք․ Երևան, " + getDistrictName(address.district) + ", " + address.addressInfo
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            let fetchedOrders = await getAllOrders(venderId);
            setOrders(fetchedOrders);
            console.log(fetchedOrders);
        });
    }, []);


    const renderItem = ({ item, index }) =>
        <Box mb="2"
            maxWidth={'100%'}
            bgColor="blueGray.200">
            <Pressable
                onPress={() => console.log('You touched me')}
                p="2">
                <Box p="2">
                    <VStack>

                        <View style={{ flexDirection: 'row'  }}>
                            <View style={{ flex: 1 }}>
                                <Text bold fontSize={17} color={"blue.900"} my={3}>{item.productDescription}</Text>
                            </View>
                            <View style={{ width: 150, justifyContent: 'center' }}>
                                <Button>Պատճենել հղումը</Button>
                            </View>
                        </View>
                        

                        <HStack>
                            <Text>Ստեղծման ամսաթիվ։ </Text>
                            <Text bold>{new Date(item.createDate).toLocaleDateString()}</Text>
                        </HStack>
                        <HStack>
                            <Text>Նախընտրած վերցնելու օր։ </Text>
                            <Text bold>{new Date(item.desiredPickUpDate).toLocaleDateString()}</Text>
                        </HStack>
                        <HStack>
                            <Text>Վերցնելու վայր։ </Text>
                            <Text bold>{getVenderAddressString(item.venderAddress)}</Text>
                        </HStack>
                        {item.productPrice != null && (
                            <HStack>
                                <Text>Ապրանքի արժեք։ </Text>
                                <Text bold>({item.productPrice} դր․)</Text>
                            </HStack>
                        )}
                        <HStack>
                            <Text>Ծառայության համար վճարող։ </Text>
                            <Text bold>{item.isDeliveryPaymentByClient ? 'Ստացող' : 'Ուղարկող'}</Text>
                        </HStack>
                        <HStack>
                            <Text>Հայտի կարգավիճակ։ </Text>
                            <Text bold color={"blue.500"}>{getStatusName(item.status)}</Text>
                        </HStack>


                        {/* <Text>{item.isDeliveryPaymentByClient}</Text> */}
                        {/* <Text>{item.otherNotes}</Text> */}
                        {/* <Text>{item.pickUpDate}</Text> */}

                        {/* <Text>{item.shouldProductPriceBePaid}</Text> */}
                        {/* <Text>{item.venderAddressId}</Text> */}
                    </VStack>
                </Box>
            </Pressable>
        </Box>;

    return (
        <Container p={5} safeArea minWidth="100%" >
            <Flex align="center" direction="column">
                <Heading my="30" color={"blue.900"}>Գրանցված պատվերներ</Heading>
                <FlatList data={orders} flex={1} maxWidth={"100%"}
                    renderItem={renderItem} />
            </Flex>
        </Container>)
}

export default Orders;