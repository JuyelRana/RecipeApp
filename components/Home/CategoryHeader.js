import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

const CategoryHeader = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: SIZES.padding
        }}>

            {/*Section Title*/}
            <Text style={{
                flex: 1,
                ...FONTS.h2
            }}>
                Categories
            </Text>

            {/*View All */}
            <TouchableOpacity>
                <Text style={{
                    color:COLORS.gray,
                    ...FONTS.body4
                }}>
                    View All
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryHeader;
