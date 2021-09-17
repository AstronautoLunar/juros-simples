import { StyleSheet } from 'react-native';

const colors = {
    black: "#22223B",
    slateBR29: "#4A4E69",
    neutralGrayN6: "#9A8C98",
    lightSuntamE13: "#C9ADA7",
    ashRoseE70: "#F2E9E4"
}


const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.ashRoseE70,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export {
    colors,
    homeStyle
};