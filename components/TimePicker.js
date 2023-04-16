import React, {useState} from "react";
import { Box, Input } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';

const TimePickerInput = () => {

    const [SelectedTime, setSelectedTime] = useState(new Date());
    const [show, setShow] = useState(false);


    const onChange = (event, selected) => {
        setShow(Platform.OS === 'ios');
        setSelectedTime(selected);
    };

    const showTimepicker = () => {
        setShow(true);
    };

    return (
        <Box>
            <Input
                type="Text"
                defaultValue=""
                placeholder=""
                keyboardType="numeric"
                onFocus={() => showTimepicker('to')}
                value={SelectedTime.toLocaleTimeString()}
            />

            {
                show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={SelectedTime}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )

            }
        </Box>
    )
}

export { TimePickerInput };