import React from 'react';
import {View, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";
import {Viewers} from "./index";

const RecipeInfo = ({selectedRecipe}) => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 130,
            width: SIZES.width,
            paddingHorizontal: 30,
            paddingVertical: 20,
            alignItems: 'center'
        }}>
            {/*Recipe */}
            <View style={{
                flex: 1.5,
                justifyContent: 'center'
            }}>
                <Text style={{
                    ...FONTS.h2
                }}>
                    {selectedRecipe?.name}
                </Text>

                <Text style={{
                    marginTop: 5,
                    color: COLORS.lightGray2,
                    ...FONTS.body4
                }}>
                    {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
                </Text>

            </View>

            {/*Viewers*/}
            <View style={{
                flex: 1,
                justifyContent: 'center'
            }}>

                <Viewers viewers={selectedRecipe?.viewers}/>

            </View>


        </View>
    );
};

export default RecipeInfo;
