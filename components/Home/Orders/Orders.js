import { Box, Center, Container, FlatList, Flex, HStack, Heading, Pressable, Text, VStack } from "native-base";
import React from "react";
import { getAllOrders } from "../../../api/services/orderService";

const Orders = ({ route, navigation }) => {
    const { venderId } = route.params;

    const [orders, setOrders] = React.useState();

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            let fetchedOrders = await getAllOrders(venderId);
            setOrders(fetchedOrders);
            console.log(fetchedOrders);
        });
    }, []);


    const renderItem = ({ item, index }) =>
        <Box mb="2"
            bgColor="blueGray.200">
            <Pressable
                onPress={() => console.log('You touched me')}
                p="2">
                <Box p="2">
                    <VStack>
                        <HStack>
                            <Text bold fontSize={15}>{item.productDescription}</Text>

                            {item.productPrice != null && (
                                <Text> ({item.productPrice} դր․)</Text>
                            )}
                        </HStack>

                        <Text>{new Date(item.createDate).toLocaleDateString()}</Text>
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
            <Flex align="center" direction="column" minWidth="100%">
                <Heading my="30">Գրանցված պատվերներ</Heading>
                <FlatList data={orders} flex={1} minWidth={"100%"}
                    renderItem={renderItem} />
            </Flex>
        </Container>)
}

export default Orders;