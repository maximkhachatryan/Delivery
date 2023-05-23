import React, { useState } from 'react';
import { View, Text, Input, FormControl, Box } from 'native-base';
import { Calendar } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';

const CalendarInput = ({ onDateChange, minDate, placeholder }) => {
    const [date, setDate] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);

    const handleDateChange = (day) => {
        const selectedDate = day.dateString;
        setDate(selectedDate);
        setShowCalendar(false);
        onDateChange(new Date(day.dateString)); // calling the callback function with the selected date
    };

    return (
        <View>
            <TouchableOpacity onPress={() => setShowCalendar(true)}>
                <Input
                    value={date}
                    placeholder={placeholder}
                    isReadOnly
                />
            </TouchableOpacity>

            {showCalendar && (
                <Box borderWidth={1} borderColor="gray.400" borderRadius={4} my={2}>
                    <Calendar onDayPress={handleDateChange} minDate={minDate} />
                </Box>
            )}
        </View>
    );
};

export default CalendarInput;