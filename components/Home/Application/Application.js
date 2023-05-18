import React from "react";
import { Button, Stack, FormControl, Box, Input, Select, Radio, Heading, Checkbox, Divider, ScrollView, Container, TextArea } from "native-base";
import { TimePickerInput } from "../../TimePicker";
import { getVenderAddresses } from "../../../services/venderAddressesService";
import CalendarInput from "../../CalendarInput";


const Application = ({ route, navigation }) => {
    const { venderId } = route.params;

    const [productDescription, setProductDescription] = React.useState("");
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [pickupAddress, setPickupAddress] = React.useState("1");
    const [paymentBy, setPaymentBy] = React.useState("1");
    const [selectedAddress, setSelectedAddress] = React.useState();
    
    const [addresses, setAddresses] = React.useState([]);
    const [customerShouldPayForProduct, setCustomerShouldPayForProduct] = React.useState(false);




    React.useEffect(() => {
        //navigation.addListener('focus', async () => {
        async function fetchData() {
            let fetchedAddresses = await getVenderAddresses(venderId);
            setAddresses(fetchedAddresses);
            if (fetchedAddresses != null && fetchedAddresses.length != 0) {
                setSelectedAddress(fetchedAddresses[0].id);
            }
        }
        fetchData();
        //});
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

    const addressItems = addresses.map((item, index) => {
        return (
            <Select.Item label={"ք․ Երևան, " + getDistrictName(item.district) + ", " + item.addressInfo} value={item.id} key={index} />
        )
    });

    const handleAddressChange = (value) => {
        setSelectedAddress(value);
    };

    const handleCustomerShouldPayForProduct = (newValue) => {
        setCustomerShouldPayForProduct(newValue);
    };



    const minDate = new Date().toISOString().split('T')[0]; // set minimum date as today's date
    const handleDateChange = (selectedDate) => {
        console.log(`Selected date: ${selectedDate}`);
    };

    const onSubmit = () => {

        navigation.goBack();
    }


    return (
        <Box safeArea>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <Heading my="30px">Նոր առաքման պատվեր</Heading>
                <Box w="90%">
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի նկարագիր</FormControl.Label>
                        <Input type="Text" defaultValue="" placeholder="" />
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի գտնվելու վայրը</FormControl.Label>
                        <Select
                            accessibilityLabel="Choose Address"
                            placeholder=""
                            mt="1"
                            isRequired
                            selectedValue={selectedAddress}
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
                            accessibilityLabel="payment by"
                            value={paymentBy}
                            onChange={nextValue => {
                                setPaymentBy(nextValue);
                            }}>
                            <Radio value="1" my={1}>
                                Իմ կողմից
                            </Radio>
                            <Radio value="2" my={1}>
                                Հաճախորդի կողմից
                            </Radio>
                        </Radio.Group>
                    </Stack>
                    <Divider my={2} />
                    <Stack mx="0">
                        <Checkbox
                            value={customerShouldPayForProduct}
                            onChange={handleCustomerShouldPayForProduct}
                        >
                            Ապրանքի արժեքը պահանջել հաճախորդից
                        </Checkbox>
                    </Stack>

                    {customerShouldPayForProduct && (
                        <Box>
                            <Divider my={2} />
                            <Stack mx="0">
                                <FormControl.Label>Ապրանքի արժեքը (դրամ)</FormControl.Label>
                                <Input type="Text" defaultValue="" placeholder="" inputMode="numeric" />
                            </Stack>
                            {/* <Stack mx="0">
                            <FormControl.Label>Ստանալ ապրանքի գումարը առաքիչից նախապես</FormControl.Label>
                            <HStack><Text>Ոչ</Text><Switch /><Text>Այո</Text></HStack>
                        </Stack> */}
                        </Box>
                    )}
                    <Stack mx="0">
                        <FormControl.Label>Այլ նշումներ</FormControl.Label>
                        <TextArea />
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