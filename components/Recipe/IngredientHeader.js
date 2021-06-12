import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES} from "../../constants";

const IngredientHeader = ({selectedRecipe}) => {
    return (
        <View style={{
            flexDirection: 'row',
            paddingHorizontal: 30,
            marginTop: SIZES.radius,
            marginBottom: SIZES.padding
        }}>

            <Text style={{
                flex: 1,
                ...FONTS.h3
            }}>
                Ingredients
            </Text>
            <Text style={{
                color: COLORS.lightGray2,
                ...FONTS.body4
            }}>
                {selectedRecipe?.ingredients?.length} Items
            </Text>

        </View>
    );
};

export default IngredientHeader;
