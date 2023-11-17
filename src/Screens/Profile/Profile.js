import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import imagePath from "../../constants/imagePath";
import { styles } from "./styles";
import navigationString from "../../Navigations/navigationString";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <View style={{ marginLeft: 20 }}>
        <View style={styles.profileView}>
          <Image style={styles.profileImg} source={imagePath.Profileicn} />
          <Text style={styles.profileText}>Change Profile Picture</Text>
          <Text />
        </View>

        <View>
          <View style={styles.nameView}>
            <Text style={{ fontWeight: "200" }}>First Name</Text>
            <Text style={{ fontWeight: "200" }}>Last Name</Text>
            <Text />
          </View>
          <View style={styles.nameView}>
            <TextInput placeholder="Kamille" style={styles.txtInput} />
            <TextInput placeholder="Schowalter" style={styles.txtInput} />
            <Text />
          </View>
          <Text style={{ fontWeight: "200", marginTop: 20 }}>
            Date of Birth
          </Text>
          <View
            style={{ flexDirection: "row" }}
          >
            <TextInput placeholder="02/10/1995" style={styles.txtInput} />
            
              <Image
                style={{ height: 20, width: 20 ,marginTop:20}}
                source={imagePath.dropdown}
              />
            
          </View>
          <Text style={{ fontWeight: "200", marginTop: 20 }}>Phone Number</Text>
          <TextInput placeholder="+91 8529631478" style={styles.txtInput} />
         

          <Text style={{ fontWeight: "200", marginTop: 20 }}>Email</Text>
          <TextInput
            placeholder="schowalter kamille@yahoo.com"
            style={styles.txtInput}
          />
          <View
            style={{ ...styles.editView, marginTop: 10, borderBottomWidth: 0 }}
          >
            <Text style={{ fontWeight: "200" }}>Country</Text>
            
            <Text style={{ fontWeight: "200" }}>Postal/Zip Code</Text>
            <Text />
          </View>
          <View style={styles.nameView}>
            <TextInput placeholder="United State" style={styles.txtInput} />
            <Image
                style={{ height: 20, width: 20 ,marginTop:20}}
                source={imagePath.dropdown}
              />
            
            <TextInput placeholder="76201" style={styles.txtInput} />
            <Image
                style={{ height: 20, width: 20 ,marginTop:20}}
                source={imagePath.dropdown}
              />
            <Text />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationString.EXPERTISE)}
          style={{
            backgroundColor: "black",
            height: 56,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", alignSelf: "center" }}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
