import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globals';

const styles = StyleSheet.create({
    header: {
        width: "100%",
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: colors.slateBR29,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: colors.ashRoseE70
    }
})

export default styles;