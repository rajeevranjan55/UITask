import { StyleSheet, View } from "react-native";
import Routes from "./src/Navigations/Routes";
import { MyBooking, Profile } from "./src/Screens";
import TabRoutes from "./src/Navigations/TabRoutes";
import Expertise from "./src/Screens/Expertise/Expertise";
import BottomTab from "./src/Navigations/BottomTab";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Routes /> */}

      {/* // <Profile/>
      //  <MyBooking/> */}
      {/* <TabRoutes/>   */}

      {/* <Expertise/> */}
      <BottomTab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
