import { StyleSheet } from 'react-native';

import { colors } from '../../styles/globals';

const styles = StyleSheet.create({
    AreaInput: {
        width: "80%",
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 10,
        marginTop: 10
    },
    label: {
        fontSize: 25,
        marginBottom: 7.5
    },
    labelDark: {
        color: colors.black
    },
    labelLight: {
        color: colors.ashRoseE70
    },
    input: {
        borderWidth: 2,
        width: "100%",
        height: 50,
        paddingLeft: 20
    },
    inputDark: {
        color: colors.black,
        borderColor: colors.black
    },
    inputLight: {
        color: colors.ashRoseE70,
        borderColor: colors.ashRoseE70
    }
})

export default styles;