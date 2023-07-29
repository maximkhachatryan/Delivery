import React from "react";
import { Button, List, Stack, FormControl, Box, Input, Select, Radio, Heading, Checkbox, Divider, ScrollView, Container, TextArea } from "native-base";
import { TimePickerInput } from "../../TimePicker";
import { getVendorAddresses } from "../../../api/services/vendorAddressesService";
import CalendarInput from "../../CalendarInput";
import { addOrder } from "../../../api/services/orderService";
import { getDistrictName } from "../../../helpers/Helper";


const Application = ({ route, navigation }) => {
    const { vendorId } = route.params;

    const [productDescription, setProductDescription] = React.useState(null);
    const [pickUpAddress, setPickUpAddress] = React.useState(null);
    const [pickUpDate, setPickUpDate] = React.useState(null);
    const [isPaymentByClient, setIsPaymentByClient] = React.useState(false);


    const [shouldProductPriceBePaidByClient, setShouldProductPriceBePaidByClient] = React.useState(false);
    const [productPrice, setProductPrice] = React.useState(NaN);
    const [notes, setNotes] = React.useState(null);


    const [addresses, setAddresses] = React.useState([]);

    React.useEffect(() => {
        //navigation.addListener('focus', async () => {
        async function fetchData() {
            let fetchedAddresses = await getVendorAddresses(vendorId);
            setAddresses(fetchedAddresses);
            if (fetchedAddresses != null && fetchedAddresses.length != 0) {
                setPickUpAddress(fetchedAddresses[0].id);
            }
        }
        fetchData();
        //});
    }, []);


    const addressItems = addresses.map((item, index) => {
        return (
            <Select.Item label={"ք․ Երևան, " + getDistrictName(item.district) + ", " + item.addressInfo} value={item.id} key={index} />
        )
    });

    const handleAddressChange = (value) => {
        setPickUpAddress(value);
    };

    const handleShouldProductPriceBePaidByClient = (newValue) => {
        setShouldProductPriceBePaidByClient(newValue);
    };



    const minDate = new Date().toISOString().split('T')[0]; // set minimum date as today's date
    const handleDateChange = (pickUpDate) => {
        console.log(typeof (pickUpDate));
        setPickUpDate(pickUpDate);
    };

    const handlePaymentByOptionChange = () => {
        setIsPaymentByClient(!isPaymentByClient);
    };

    const onSubmit = async () => {
        if (productDescription != null && productDescription.trim() !== ''
            && pickUpAddress != null
            && pickUpDate != null
            && (!shouldProductPriceBePaidByClient || (productPrice != null && productPrice > 0))) {

            var request = {
                productDescription: productDescription,
                vendorAddressId: pickUpAddress,
                pickUpDate: pickUpDate,
                isDeliveryPaymentByClient: isPaymentByClient,
                shouldProductPriceBePaid: shouldProductPriceBePaidByClient,
                productPrice: productPrice,
                otherNotes: notes
            };
            let success = await addOrder(request);
            if (success) {
                navigation.goBack();
            }
        }
    }


    return (
        <Box safeArea>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <Heading my="30px">Նոր առաքման պատվեր</Heading>
                <Box w="90%">
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի նկարագիր</FormControl.Label>
                        <Input type="Text" defaultValue="" placeholder=""
                            value={productDescription}
                            onChangeText={text => setProductDescription(text)} />
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի գտնվելու վայրը</FormControl.Label>
                        <Select
                            accessibilityLabel="Choose Address"
                            placeholder=""
                            mt="1"
                            isRequired
                            selectedValue={pickUpAddress}
                            onValueChange={handleAddressChange}
                        >
                            {addressItems}
                        </Select>
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Վերցնելու օրը</FormControl.Label>
                        <CalendarInput onDateChange={handleDateChange} minDate={minDate} placeholder={"Ընտրեք ձեզ հարմար օրը"} />
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Առաքման գումարը կվճարվի</FormControl.Label>
                        <Radio.Group
                            value={isPaymentByClient}
                            onChange={handlePaymentByOptionChange}>
                            <Radio
                                value={false}
                                my={1}>
                                Ուղարկողի կողմից
                            </Radio>
                            <Radio
                                value={true}
                                my={1}>
                                Ստացողի կողմից
                            </Radio>
                        </Radio.Group>
                        {/* <Radio.Group
                            accessibilityLabel="payment by"
                            value={isPaymentByClient}
                            onChange={nextValue => {
                                setPaymentBy(nextValue);
                            }}>
                            <Radio value="1" my={1}>
                                Իմ կողմից
                            </Radio>
                            <Radio value="2" my={1}>
                                Հաճախորդի կողմից
                            </Radio>
                        </Radio.Group> */}
                    </Stack>
                    <Divider my={2} />
                    <Stack mx="0">
                        <Checkbox
                            value={shouldProductPriceBePaidByClient}
                            onChange={handleShouldProductPriceBePaidByClient}
                        >
                            Ապրանքի արժեքը պահանջել ստացողից
                        </Checkbox>
                    </Stack>

                    {shouldProductPriceBePaidByClient && (
                        <Box>
                            <Divider my={2} />
                            <Stack mx="0">
                                <FormControl.Label>Ապրանքի արժեքը (դրամ)</FormControl.Label>
                                <Input type="Text" defaultValue="" placeholder="" inputMode="numeric"
                                    value={productPrice}
                                    onChangeText={(text) => setProductPrice(parseInt(text, 10))} />
                            </Stack>
                            {/* <Stack mx="0">
                            <FormControl.Label>Ստանալ ապրանքի գումարը առաքիչից նախապես</FormControl.Label>
                            <HStack><Text>Ոչ</Text><Switch /><Text>Այո</Text></HStack>
                        </Stack> */}
                        </Box>
                    )}
                    <Stack mx="0">
                        <FormControl.Label>Այլ նշումներ</FormControl.Label>
                        <TextArea
                            value={notes}
                            onChangeText={text => setNotes(text)} />
                    </Stack>
                    <Button
                        my={5}
                        height={42}
                        onPress={onSubmit}>Գրանցել առաքման պատվեր</Button>
                </Box>
            </ScrollView>
        </Box>
    );
}

export default Application