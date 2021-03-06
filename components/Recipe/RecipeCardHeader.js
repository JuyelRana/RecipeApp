import React from 'react';
import {Animated, View} from "react-native";
import {SIZES} from "../../constants";
import {RecipeCreatorCardInfo} from "./index";

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
            <Animated.View style={{
                position: 'absolute',
                bottom: 10,
                left: 30,
                right: 30,
                height: 80,
                transform: [
                    {
                        translateY: scrollY.interpolate({
                            inputRange: [0, 170, 250],
                            outputRange: [0, 0, 100],
                            extrapolate: 'clamp'
                        })
                    }
                ]
            }}>

                <RecipeCreatorCardInfo selectedRecipe={selectedRecipe}/>

            </Animated.View>

        </View>
    );
};

export default RecipeCardHeader;
