import React from "react";
import { Text, HStack, Stack, Switch, FormControl, Box, Input, Select, CheckIcon, Radio, Heading, } from "native-base";
import { TimePickerInput } from "../../TimePicker";


const Application_Step1 = () => {
    const [pickupAddress, setPickupAddress] = React.useState("1");
    const [paymentBy, setPaymentBy] = React.useState("1");


    return (
        <Box alignItems="center" safeArea>
            <Heading my="30px">Նոր առաքման հայտ</Heading>
            <Box w="90%">
                <FormControl isRequired>
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի նկարագիր</FormControl.Label>
                        <Input type="Text" defaultValue="" placeholder="" />
                        {/* <FormControl.HelperText>
                            Լրացրեք առաքվող ապրանքի նկարագիրը
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage> */}
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի գտնվելու վայրը</FormControl.Label>
                        <Select accessibilityLabel="Choose Address" placeholder="" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size={5} />
                        }} mt="1" isRequired>
                            <Select.Item label="Երևան, Լյուքսեմբուրգի 7շ, 16 բն" value="1" />
                            <Select.Item label="Երևան, Մառի 10շ, 43 բն" value="2" />
                        </Select>
                        {/* <FormControl.HelperText>
                            Լրացրեք առաքվող ապրանքի նկարագիրը
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage> */}

                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Վերցնելու ժամը (հնարավորինս շուտ)</FormControl.Label>
                        <TimePickerInput />
                        {/* <FormControl.HelperText>
                            Լրացրեք առաքվող ապրանքի նկարագիրը
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage> */}
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
                                Հաճախորդի կողմից
                            </Radio>
                            <Radio value="2" my={1}>
                                Իմ կողմից
                            </Radio>
                        </Radio.Group>
                        {/* <FormControl.HelperText>
                            Լրացրեք առաքվող ապրանքի նկարագիրը
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage> */}
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի արժեքը պահանջել հաճախորդից</FormControl.Label>
                        <HStack><Text>Ոչ</Text><Switch /><Text>Այո</Text></HStack>
                        {/* <FormControl.HelperText>
                            Լրացրեք առաքվող ապրանքի նկարագիրը
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage> */}
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Ապրանքի արժեքը (դրամ)</FormControl.Label>
                        <Input type="Text" defaultValue="" placeholder="" inputMode="numeric" />
                        {/* <FormControl.HelperText>
                            Լրացրեք առաքվող ապրանքի նկարագիրը
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage> */}
                    </Stack>
                    <Stack mx="0">
                        <FormControl.Label>Ստանալ ապրանքի գումարը առաքիչից նախապես</FormControl.Label>
                        <HStack><Text>Ոչ</Text><Switch /><Text>Այո</Text></HStack>
                        {/* <FormControl.HelperText>
                            Լրացրեք առաքվող ապրանքի նկարագիրը
                        </FormControl.HelperText>
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                            Atleast 6 characters are required.
                        </FormControl.ErrorMessage> */}
                    </Stack>
                </FormControl>
            </Box>
        </Box>
    );
}

export default Application_Step1;