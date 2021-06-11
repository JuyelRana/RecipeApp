import React from 'react';
import {Animated, View} from "react-native";
import {SIZES} from "../../constants";

const RecipeCardHeader = ({selectedRecipe, scrollY}) => {
    return (
        <View style={{
            marginTop: -1000,
            paddingTop: 1000,
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {/*Background Image*/}
            <Animated.Image
                style={{
                    height: SIZES.width,
                    width: "200%",
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [-SIZES.width, 0, SIZES.width],
                                outputRange: [-SIZES.width / 2, 0, SIZES.width * 0.75]
                            })
                        },
                        {
                            scale: scrollY.interpolate({
                                inputRange: [-SIZES.width, 0, SIZES.width],
                                outputRange: [2, 1, 0.75]
                            })
                        }
                    ]
                }}
                resizeMode='contain'
                source={selectedRecipe?.image}/>

            {/*Recipe Creator Card */}
        </View>
    );
};

export default RecipeCardHeader;
