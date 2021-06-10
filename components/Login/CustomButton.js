import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import {COLORS, FONTS} from "../../constants";
import LinearGradient from "react-native-linear-gradient";

const CustomButton = ({buttonText, buttonContainerStyle, colors, onPress}) => {
    return (colors.length > 0) ? (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={colors}
                style={{...buttonContainerStyle}}>
                <Text style={{
                    textAlign: "center",
                    color: COLORS.white,
                    ...FONTS.h2
                }}>
                    {buttonText}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity
            style={{...buttonContainerStyle}}
            onPress={onPress}>
            <Text style={{
                textAlign: "center",
                color: COLORS.white,
                ...FONTS.h2
            }}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
