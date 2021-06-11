import React from 'react';
import {View, Image, TextInput} from "react-native";
import {COLORS, FONTS, icons, images, SIZES} from "../../constants";

const SearchBar = () => {
    return (
        <View style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            marginHorizontal: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            borderRadius: 10,
            backgroundColor: COLORS.lightGray
        }}>

            <Image
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.gray
                }}
                source={icons.search}/>

            <TextInput
                placeholderTextColor={COLORS.gray}
                placeholder="Search Recipes"
                style={{
                    marginLeft: SIZES.radius,
                    ...FONTS.body3
                }}
            />

        </View>
    );
};

export default SearchBar;
