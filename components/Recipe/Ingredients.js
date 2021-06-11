import React from 'react';
import {Text, View, Image} from "react-native";
import {COLORS, FONTS} from "../../constants";

const Ingredients = ({item}) => {
    return (
        <View style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            marginVertical: 5
        }}>

            {/*Icon*/}
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray
            }}>
                <Image
                    style={{
                        height: 40,
                        width: 40
                    }}
                    source={item.icon}/>
            </View>

            {/*Description*/}
            <View style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center'
            }}>
                <Text style={{
                    ...FONTS.body3
                }}>
                    {item.description}
                </Text>
            </View>

            {/*Quantity*/}
            <View style={{
                alignItems:'flex-end',
                justifyContent:'center'
            }}>
                <Text style={{
                    ...FONTS.body3
                }}>
                    {item.quantity}
                </Text>
            </View>

        </View>
    );
};

export default Ingredients;
