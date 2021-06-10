import React from 'react';
import {StatusBar, View} from 'react-native';
import {COLORS} from "../constants";
import {Details, LoginHeader} from "../components/Login";

const Login = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.black
        }}>

            <StatusBar barStyle={'light-content'}/>


            {/*LoginHeader */}
            <LoginHeader/>

            {/*Details */}
            <Details navigation={navigation}/>

        </View>
    )
}

export default Login;
