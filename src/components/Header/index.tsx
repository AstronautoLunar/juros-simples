import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { useDark } from '../../contexts/darkTheme';

import styles from './styles';

interface HeaderData {
    title: string;
}

export default function Header({ 
    title
}: HeaderData) {
    let { 
        dark, 
        onChangeDark 
    } = useDark();

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ title }</Text>
            <View style={styles.areaThemeDark}>
                {
                    dark
                    ?
                    <TouchableOpacity
                        onPress={onChangeDark}
                    >
                        <Feather
                            name="sun"
                            size={35}
                            color="#F2E9E4"
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={onChangeDark}
                    >
                        <Feather
                            name="moon"
                            size={35}
                            color="#F2E9E4"
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
} 