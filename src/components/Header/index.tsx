import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface HeaderData {
    title: string;
    value: boolean;
    press: any;
}

export default function Header({ 
    title,
    value,
    press
}: HeaderData) {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ title }</Text>
            <View style={styles.areaThemeDark}>
                {
                    value
                    ?
                    <TouchableOpacity
                        onPress={press}
                    >
                        <Feather
                            name="moon"
                            size={35}
                            color="#F2E9E4"
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={press}
                    >
                        <Feather
                            name="sun"
                            size={35}
                            color="#F2E9E4"
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
} 