import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import imagePath from "../../../constants/imagePath";
import { styles } from "./styles";
const Past = () => {
  return (
    <View style={{ marginLeft: 10, marginRight: 10 }}>
      <View style={styles.mainView}>
        <View style={styles.typeView}>
          <Image source={imagePath.face} style={styles.hairView} />
          <View style={{ marginTop: 10 }}>
            <Text>Face Massage</Text>
            <Text>879 Larson Parkways</Text>
            <Text>25 Jan . 02:00PM</Text>
          </View>
          <Text style={{ marginRight: 20, marginTop: 10 }}>$ 120</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.nameImgView} source={imagePath.LidaIMg} />
            <Text style={{ marginLeft: 10 }}>Edna Sherman</Text>
          </View>
          <Text style={{ color: "green", marginRight: 20 }}>Completed</Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.typeView}>
          <Image source={imagePath.face} style={styles.hairView} />
          <View style={{ marginTop: 10 }}>
            <Text>Car Engine Repair</Text>
            <Text>Phase 7,Mohali</Text>
            <Text>26 Jan . 10:00AM</Text>
          </View>
          <Text style={{ marginRight: 20, marginTop: 10 }}>$ 65</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.nameImgView} source={imagePath.CoraImg} />
            <Text style={{ marginLeft: 10 }}>Corabelle Durrad</Text>
          </View>
          <Text style={{ color: "red", marginRight: 20 }}>Rejected</Text>
        </View>
      </View>
    </View>
  );
};


export default Past;
