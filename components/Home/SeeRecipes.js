import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../../constants";

const SeeRecipes = () => {
    return (
        <View style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            borderRadius: 10,
            backgroundColor: COLORS.lightGreen
        }}>

            {/*Image*/}
            <View style={{
                width: 100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    style={{
                        width: 80,
                        height: 80
                    }}
                    source={images.recipe}/>
            </View>

            {/*Text*/}
            <View style={{
                flex: 1,
                paddingVertical: SIZES.radius
            }}>
                <Text style={{
                    width: '70%',
                    ...FONTS.body4
                }}>
                    You have 12 recipes that you haven't tried.
                </Text>

                <TouchableOpacity style={{
                    marginTop: 10
                }} onPress={() => console.log("See Recipes")}>
                    <Text style={{
                        color: COLORS.darkGreen,
                        textDecorationLine: 'underline',
                        ...FONTS.h4
                    }}>
                        See Recipes
                    </Text>
                </TouchableOpacity>

            </View>


        </View>
    );
};

export default SeeRecipes;
