import React from 'react';
import {Text, View, Image, Animated} from "react-native";

const RecipeCardHeader = ({selectedRecipe, scrollY, HEADER_HEIGHT}) => {
    return (
        <View style={{
            marginTop: -1000,
            paddingTop:1000,
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            {/*Background Image*/}
            <Animated.Image
                style={{
                    height: HEADER_HEIGHT,
                    width: "200%",
                    transform: [
                        {
                            translateY: scrollY.interpolate({
                                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                            })
                        },
                        {
                            scale: scrollY.interpolate({
                                inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
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
