import React from 'react';
import {Text, TouchableOpacity, View, Image} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../../constants";

const HomeHeader = () => {
    return (
        <View style={{
            flexDirection: 'row',
            marginHorizontal: SIZES.padding,
            alignItems: 'center',
            height: 80
        }}>
            {/*Text */}
            <View style={{
                flex: 1
            }}>
                <Text style={{
                    color: COLORS.darkGreen,
                    ...FONTS.h2
                }}>
                    Hello Juyel Rana,
                </Text>

                <Text style={{
                    marginTop: 3,
                    color: COLORS.gray,
                    ...FONTS.body3
                }}>
                    What you need to cook today?
                </Text>
            </View>

            {/*Profile Image*/}
            <TouchableOpacity
                onPress={() => console.log("Profile")}>
                <Image
                    source={images.juyel}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20
                    }}
                />
            </TouchableOpacity>

        </View>
    );
};

export default HomeHeader;
