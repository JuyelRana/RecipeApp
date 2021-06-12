import React from 'react';
import {Image, TouchableOpacity, View, Animated, Text} from "react-native";
import {COLORS, FONTS, icons, SIZES} from "../../constants";

const HeaderBar = ({navigation, selectedRecipe, scrollY}) => {
    return (
        <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 90,
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingHorizontal: SIZES.padding,
            paddingBottom: 10
        }}>

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: COLORS.black,
                opacity: scrollY.interpolate({
                    inputRange: [SIZES.width - 100, SIZES.width - 70],
                    outputRange: [0, 1]
                })
            }}/>

            {/*Header Bar Title */}
            <Animated.View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingBottom: 10,
                opacity: scrollY.interpolate({
                    inputRange: [SIZES.width - 100, SIZES.width - 50],
                    outputRange: [0, 1]
                }),
                transform: [
                    {
                        translateY: scrollY.interpolate({
                            inputRange: [SIZES.width - 100, SIZES.width - 50],
                            outputRange: [50, 0],
                            extrapolate: 'clamp'
                        })
                    }
                ]
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

            </Animated.View>

            <View style={{
                flex: 1,
            }}>

                {/*Back Button*/}
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 35,
                    width: 35,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: COLORS.lightGray,
                    backgroundColor: COLORS.transparentBlack5
                }} onPress={() => navigation.goBack()}>
                    <Image
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray
                        }}
                        source={icons.back}/>
                </TouchableOpacity>

            </View>

            {/*Book Mark Button*/}
            <View style={{flex: 0}}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 35,
                    width: 35
                }}>

                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.darkGreen
                        }}
                        source={selectedRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}/>

                </TouchableOpacity>
            </View>

        </View>
    );
};

export default HeaderBar;
