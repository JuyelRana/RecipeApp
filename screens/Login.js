import React, {useEffect} from 'react';
import {StatusBar, View, Platform} from 'react-native';
import {COLORS} from "../constants";
import {Details, LoginHeader} from "../components/Login";
import {hideNavigationBar} from 'react-native-navigation-bar-color';

const Login = ({navigation}) => {

    useEffect(() => {
        (Platform.OS === "android") && hideNavigationBar();
    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.black
        }}>

            {
                (Platform.OS === "ios") ? (<StatusBar barStyle={'light-content'}/>) : (
                    <StatusBar translucent backgroundColor='transparent'/>)
            }

            {/*LoginHeader */}
            <LoginHeader/>

            {/*Details */}
            <Details navigation={navigation}/>

        </View>
    )
}

export default Login;
