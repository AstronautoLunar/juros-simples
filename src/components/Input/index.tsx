import React from 'react';
import {
    View, 
    TextInput, 
    Text, 
    TextInputProps 
} from 'react-native';

interface InputData extends TextInputProps {
    label: string;
}

export default function Input({ label, ...props }: InputData) {
    return (
        <View>
            <Text>
                { label }
            </Text>
            <TextInput
                { ...props }
            />
        </View>
    )
}