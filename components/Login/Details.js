import React from 'react';
import {Text, View} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";
import {CustomButton} from "./index";


const Details = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: SIZES.padding
        }}>

            {/*Description*/}
            <Text style={{
                marginTop: SIZES.radius,
                width: "70%",
                color: COLORS.gray,
                ...FONTS.body3
            }}>
                Discover more than 1200 food recipes in your hands and cooking it easily!
            </Text>

            {/*Buttons*/}
            <View style={{
                flex: 1,
                justifyContent: 'center'
            }}>

                {/*Login Button */}
                <CustomButton
                    buttonText="Login"
                    colors={[COLORS.darkGreen, COLORS.lime]}
                    onPress={() => navigation.replace("Home")}
                    buttonContainerStyle={{
                        paddingVertical: 18,
                        borderRadius: 20
                    }}/>

                {/*Sign Up Button*/}
                <CustomButton
                    buttonContainerStyle={{
                        marginTop: SIZES.radius,
                        paddingVertical: 18,
                        borderRadius: 20,
                        borderColor: COLORS.darkLime,
                        borderWidth: 1
                    }}
                    buttonText="Sign Up"
                    colors={[]}
                    onPress={() => navigation.replace("Home")}/>

            </View>
        </View>
    );
};

export default Details;
