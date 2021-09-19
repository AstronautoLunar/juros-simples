import { StyleSheet } from 'react-native';

const colors = {
    black: "#22223B",
    slateBR29: "#4A4E69",
    neutralGrayN6: "#9A8C98",
    lightSuntamE13: "#C9ADA7",
    ashRoseE70: "#F2E9E4"
};


const homeStyle = StyleSheet.create({
    containerDark: {
      flex: 1,
      backgroundColor: colors.black,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    containerLight: {
      flex: 1,
      backgroundColor: colors.ashRoseE70,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    text: {
      fontSize: 30,
      marginTop: 20,
      marginBottom: 20
    },
    textDark: {
      color: colors.black
    },
    textLight: {
      color: colors.ashRoseE70
    },
    buttonCalc: {
      width: "auto",
      height: "auto",
      marginTop: 20,
      marginBottom: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: colors.lightSuntamE13
    },
    textButton: {
      fontSize: 30,
      color: colors.ashRoseE70
    },
    scroll: {
        width: 350,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export {
    colors,
    homeStyle
};