import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface HeaderData {
    title: string;
}

export default function Header({ title }: HeaderData) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ title }</Text>
        </View>
    )
} 