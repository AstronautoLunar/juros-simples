import React from 'react';
import {
    View, 
    TextInput,
    TextInputProps 
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const InputAnimate:any = Animatable.createAnimatableComponent(TextInput);

import styles from './styles';

interface InputData extends TextInputProps {
    label: string;
    dark: boolean;
}

export default function Input({ 
    label,
    dark,
    ...props 
}: InputData) {
    return (
        <View style={styles.AreaInput}>
            <Animatable.Text
                transition="color"
                duration={200}
                style={[
                    styles.label,
                    dark
                    ?
                    styles.labelDark
                    :
                    styles.labelLight
                ]}
            >
                { label }
            </Animatable.Text>
            <InputAnimate
                transition="borderColor"
                duration={200}
                style={[
                    styles.input,
                    dark
                    ?
                    styles.inputDark
                    :
                    styles.inputLight
                ]}
                { ...props }
            />
        </View>
    )
}