import React from "react";
import { addVendorAddresses } from "../../../../api/services/vendorAddressesService";
import { Box, Button, CheckIcon, FormControl, Heading, Input, Select, Stack } from "native-base";

export default CreateAddress = ({ route, navigation }) => {
    const { vendorId } = route.params;

    const [district, setDistrict] = React.useState();
    const [address, setAddress] = React.useState();

    const createAddress = async () => {
        if (district != null && address != null) {
            if (await addVendorAddresses(vendorId, district, address)) {
                navigation.goBack();
            }
        }
    };


    return (
        <Box alignItems="center" safeArea>
            <Heading my="30px">Նոր հասցե</Heading>

            <Box w="90%">
                <Stack mx="0">
                    <FormControl.Label>Վարչական շրջան</FormControl.Label>
                    <Select
                        placeholder="Ընտրեք վարչական շրջան"
                        onValueChange={(val) => {
                            setDistrict(Number(val));
                        }}>
                        <Select.Item label="Կենտրոն" value="1" />
                        <Select.Item label="Արաբկիր" value="2" />
                        <Select.Item label="Քանաքեռ Զեյթուն" value="3" />
                        <Select.Item label="Ավան" value="4" />
                        <Select.Item label="Նոր Նորք" value="5" />
                        <Select.Item label="Նորք Մարաշ" value="6" />
                        <Select.Item label="Էրեբունի" value="7" />
                        <Select.Item label="Շենգավիթ" value="8" />
                        <Select.Item label="Նուբարաշեն" value="9" />
                        <Select.Item label="Մալաթիա-Սեբաստիա" value="10" />
                        <Select.Item label="Աջափնյակ" value="11" />
                        <Select.Item label="Դավթաշեն" value="12" />
                    </Select>
                </Stack>
                <Stack mx="0">
                    <FormControl.Label>Հասցե</FormControl.Label>
                    <Input type="Text"
                        onChangeText={val =>
                            setAddress(val)} />
                </Stack>
                <Button
                    mt="5"
                    colorScheme="indigo"
                    onPress={createAddress}>
                    Ստեղծել
                </Button>
            </Box>
        </Box>);

}