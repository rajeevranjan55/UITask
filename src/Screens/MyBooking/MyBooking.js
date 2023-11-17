import React from 'react';
import {View,Image, Text} from 'react-native';
import imagePath from '../../constants/imagePath';

const MyBooking = () => {
    return (
        <View >
            <View style={{justifyContent:"space-between",flexDirection:"row",backgroundColor:"white"}}>
            <Text/>
            <Text>My Booking</Text>
            <Image style={{height:20,width:20}} source={imagePath.bellIcn}/>
            </View>
        </View>
    );
}
export default MyBooking;
