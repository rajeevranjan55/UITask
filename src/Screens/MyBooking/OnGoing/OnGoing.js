import React from "react";
import { View, Text, Image} from "react-native";
import imagePath from "../../../constants/imagePath";
import { styles } from "./styles";

const OnGoing = () => {
  return (
    <View style={{ marginLeft: 10, marginRight: 10 }}>
      <View style={styles.mainView}>
        <View style={styles.typeView}>
          <Image source={imagePath.hairImg} style={styles.hairView} />
          <View style={{ marginTop: 10 }}>
            <Text>Hair Color, Hair Spa</Text>
            <Text>879 Larson Parkways</Text>
            <Text>25 Jan . 02:00PM</Text>
          </View>
          <Text style={{ marginRight: 20, marginTop: 10 }}>$ 120</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.nameImgView} source={imagePath.LidaIMg} />
            <Text style={{ marginLeft: 10 }}>Zeng Wen</Text>
          </View>
          <View
            style={{
              marginRight: 10,
              backgroundColor: "lightgrey",
              marginBottom: 20,
              width: 130,
            }}
          >
            <Text style={{ marginLeft: 20 }}>On the way</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.typeView}>
          <Image source={imagePath.nailPaint} style={styles.hairView} />
          <View style={{ marginTop: 10 }}>
            <Text>Nail Paint</Text>
            <Text>Phase 7,Mohali</Text>
            <Text>26 Jan . 10:00AM</Text>
          </View>
          <Text style={{ marginRight: 20, marginTop: 10 }}>$ 65</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.nameImgView} source={imagePath.CoraImg} />
            <Text style={{ marginLeft: 10 }}>Ogasawara Katsumi</Text>
          </View>
          <View
            style={{
              marginRight: 10,
              backgroundColor: "lightgrey",
              marginBottom: 20,
              width: 130,
            }}
          >
            <Text style={{ marginLeft: 20 }}>On the way</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnGoing;
