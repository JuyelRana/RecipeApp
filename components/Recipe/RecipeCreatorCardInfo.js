import React from 'react';
import {View, Platform} from "react-native";
import {BlurView} from "@react-native-community/blur";
import {COLORS, SIZES} from "../../constants";
import {RecipeCreatorCardDetails} from "./index";

const RecipeCreatorCardInfo = ({selectedRecipe}) => {
    return Platform.OS === "ios" ? (
        <BlurView style={{
            flex: 1,
            borderRadius: SIZES.radius
        }} blurType="dark">
            <RecipeCreatorCardDetails selectedRecipe={selectedRecipe}/>
        </BlurView>
    ) : (
        <View style={{
            flex: 1,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.transparentBlack9
        }}>
            <RecipeCreatorCardDetails selectedRecipe={selectedRecipe}/>
        </View>
    );
};

export default RecipeCreatorCardInfo;
