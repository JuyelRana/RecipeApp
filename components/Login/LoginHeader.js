import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../../constants";
import LinearGradient from "react-native-linear-gradient";

const LoginHeader = () => {
    return (
        <View
            style={{
                height: SIZES.height > 700 ? "65%" : "60%"
            }}>

            <ImageBackground
                style={{
                    flex: 1,
                    justifyContent: "flex-end"
                }}
                resizeMode="cover"
                source={images.loginBackground}>

                <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    colors={[
                        COLORS.transparent,
                        COLORS.black
                    ]}
                    style={{
                        height: 200,
                        justifyContent: "flex-end",
                        paddingHorizontal: SIZES.padding
                    }}>

                    <Text
                        style={{
                            width: "80%",
                            color: COLORS.white,
                            ...FONTS.mediumTitle
                        }}>
                        Cooking a Delicious Food Easily
                    </Text>

                </LinearGradient>

            </ImageBackground>

        </View>
    );
};

export default LoginHeader;
