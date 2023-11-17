import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
    mainView: {
      height: 185,
      borderRadius: 10,
      justifyContent: "space-between",
      marginTop: 40,
      elevation: 8,
      backgroundColor: "white",
    },
    typeView: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: "lightgrey",
      height: 120,
    },
    hairView: {
      height: 64,
      width: 64,
      marginTop: 10,
      marginLeft: 10,
      borderRadius: 5,
    },
    nameImgView: {
      height: 32,
      width: 32,
      borderRadius: 16,
      marginBottom: 20,
      marginLeft: 20,
    },
    msgView: {
      height: 32,
      width: 32,
      borderRadius: 16,
      marginRight: 20,
    },
  });