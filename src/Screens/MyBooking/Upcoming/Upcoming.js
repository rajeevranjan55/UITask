import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import imagePath from "../../../constants/imagePath";
import { styles } from "./styles";
const Upcoming = () => {
  return (
    <View style={{ marginLeft: 10, marginRight: 10 }}>
      <View style={styles.mainView}>
        <View style={styles.typeView}>
          <Image source={imagePath.hairImg} style={styles.hairView} />
          <View style={{ marginTop: 10 }}>
            <Text>Hair Color, Hair Cut</Text>
            <Text>879 Larson Parkways</Text>
            <Text>25 Jan . 02:00PM</Text>
          </View>
          <Text style={{ marginRight: 20, marginTop: 10 }}>$ 120</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.nameImgView} source={imagePath.LidaIMg} />
            <Text style={{ marginLeft: 30 }}>Lidamila Vilansky</Text>
          </View>
          <Image style={styles.msgView} source={imagePath.msgImg} />
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.typeView}>
          <Image source={imagePath.carRepair} style={styles.hairView} />
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
            <Text style={{ marginLeft: 30 }}>Corabelle Durrad</Text>
          </View>
          <Image style={styles.msgView} source={imagePath.msgImg} />
        </View>
      </View>
    </View>
  );
};


export default Upcoming;
