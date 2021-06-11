import React from 'react';
import {BlurView} from "@react-native-community/blur";
import {COLORS, SIZES} from "../../constants";
import {Platform, View, StyleSheet} from "react-native";
import RecipeCardDetails from "./RecipeCardDetails";

const RecipeCardInfo = ({recipeItem}) => {
    return Platform.OS === "ios" ? (
        <BlurView
            blurType="dark"
            style={styles.recipeCardContainer}>
            <RecipeCardDetails recipeItem={recipeItem}/>
        </BlurView>
    ) : (
        <View style={{
            ...styles.recipeCardContainer,
            backgroundColor: COLORS.transparentDarkGray
        }}>
            <RecipeCardDetails recipeItem={recipeItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    recipeCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
});

export default RecipeCardInfo;
