import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    mainView: {
      justifyContent: "space-between",
      flex: 1,
      backgroundColor:'#ffffff'
    },
    editView: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 40,
      borderBottomColor:"lightgrey",
      borderBottomWidth:3,
     
      
    },
    editImg: {
      height: 30,
      width: 30,
      borderRadius: 15,
    },
    profileView: {
      flexDirection: "row",
      marginTop: 40,
      marginBottom: 40,
    },
    profileImg: {
      marginLeft: 24,
      height: 72,
      width: 72,
      borderRadius: 36,
    },
    profileText: {
      fontSize: 14,
      marginLeft: 26,
      marginTop: 20,
    },
    nameView: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    txtInput: {
      marginTop: 20,
      borderBottomWidth: 1,
      borderBottomColor: "lightgrey",
    },
  });