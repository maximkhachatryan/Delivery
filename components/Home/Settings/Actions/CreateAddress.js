import React from "react";
import { getVenderAddresses } from "../../../../services/venderAddressesService";
import { Box, Heading } from "native-base";

export default CreateAddress = ({ route, navigation }) => {
    const { venderId } = route.params;
    return (
        <Box alignItems="center" safeArea>
            <Heading my="30px">Նոր հասցե</Heading>

        </Box>);

}