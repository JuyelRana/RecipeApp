import React from 'react';
import {View, Image, Text, TouchableOpacity} from "react-native";
import {COLORS, FONTS, icons} from "../../constants";

const RecipeCreatorCardDetails = ({selectedRecipe}) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            {/*Profile Photo*/}
            <View style={{
                width: 40,
                height: 40,
                marginLeft: 20
            }}>

                <Image
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20
                    }}
                    source={selectedRecipe?.author?.profilePic}/>
            </View>

            {/*Lables*/}
            <View style={{
                flex: 1,
                marginHorizontal: 20
            }}>
                <Text style={{
                    color: COLORS.lightGray2,
                    ...FONTS.body4
                }}>
                    Recipe By:
                </Text>

                <Text style={{
                    color: COLORS.white,
                    ...FONTS.h3
                }}>
                    {selectedRecipe?.author?.name}
                </Text>

            </View>

            {/*Button*/}
            <TouchableOpacity style={{
                width: 30,
                height:30,
                alignItems:'center',
                justifyContent:'center',
                marginRight: 20,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: COLORS.lightGreen1
            }} onPress={()=>console.log("View Profile")}>
                <Image
                    style={{
                        height: 15,
                        width: 15,
                        tintColor:COLORS.lightGreen1
                    }}
                    source={icons.rightArrow}/>
            </TouchableOpacity>

        </View>
    );
};

export default RecipeCreatorCardDetails;
