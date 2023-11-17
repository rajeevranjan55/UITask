import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import imagePath from "../../constants/imagePath";
import { styles } from "./styles";
import navigationString from "../../Navigations/navigationString";

const Expertise = ({ navigation }) => {
  const [edit, setEdit] = useState(false);
  return (
    <View>
      <View style={styles.editView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={styles.editImg} source={imagePath.backicn} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25 }}>Expertise</Text>
        <TouchableOpacity onPress={() => navigation.navigate("TabRoutes")}>
          <Text style={{ marginRight: 20 }}>ADD</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        <View>
          <Text>Hair Color</Text>
          <Text>PRICE : $120</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => setEdit(!edit)}>
            <Image style={{ marginRight: 20 }} source={imagePath.edit} />
          </TouchableOpacity>
          <Image source={imagePath.delete} />
        </View>
      </View>
      {edit ? (
        <View>
          <View style={{ backgroundColor: "black", height: 150 }}>
            <View style={{ marginTop: 20, marginLeft: 20 }}>
              <Text style={{ color: "white", marginBottom: 5 }}>PRICE</Text>
              <Text style={{ color: "white", marginBottom: 10 }}>$ 50.00</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity>
                <View style={styles.cancleTouch}>
                  <Text
                    style={{
                      alignSelf: "center",
                      marginTop: 10,
                      color: "white",
                    }}
                  >
                    CANCLE
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    ...styles.cancleTouch,
                    backgroundColor: "white",
                  }}
                >
                  <Text style={{ alignSelf: "center", marginTop: 10 }}>
                    SAVE
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
      <View style={styles.column}>
        <View>
          <Text>Nail Art</Text>
          <Text>PRICE : $80</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.ImgStyle} source={imagePath.edit} />
          <Image source={imagePath.delete} />
        </View>
      </View>
      <View style={styles.column}>
        <View>
          <Text>Detan Manicure</Text>
          <Text>PRICE : $120</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.ImgStyle} source={imagePath.edit} />
          <Image source={imagePath.delete} />
        </View>
      </View>
      <View style={styles.column}>
        <View>
          <Text>Facial</Text>
          <Text>PRICE : $60</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.ImgStyle} source={imagePath.edit} />
          <Image source={imagePath.delete} />
        </View>
      </View>
    </View>
  );
};

export default Expertise;
