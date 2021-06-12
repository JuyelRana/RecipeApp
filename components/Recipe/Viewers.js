import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS} from "../../constants";

const Viewers = ({viewers}) => {
        if (viewers?.length === 0) {
            return (
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: COLORS.lightGray2,
                        ...FONTS.body4
                    }}>
                        Be the first one to try this.
                    </Text>
                </View>
            )
        } else if (viewers?.length <= 4) {
            return (
                <View>
                    {/*Profile Images*/}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginBottom: 10
                    }}>
                        {
                            viewers?.map((item, index) => (
                                <View style={{
                                    height: 50,
                                    width: 50,
                                    marginLeft: index === 0 ? 0 : -20
                                }}>
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 25
                                        }}
                                        source={item?.profilePic}/>
                                </View>
                            ))
                        }
                    </View>

                    {/*Text*/}
                    <Text style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}>
                        {viewers?.length} people
                    </Text>

                    <Text style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}>
                        Already try this!
                    </Text>

                </View>
            )
        } else {
            return (
                <View>
                    {/*Profile */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginBottom: 10
                    }}>
                        {
                            viewers?.map((item, index) => {
                                if (index <= 2) {
                                    return (
                                        <View
                                            style={{
                                                height: 50,
                                                width: 50,
                                                marginLeft: index === 0 ? 0 : -20
                                            }}
                                            key={index}>
                                            <Image
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 25
                                                }}
                                                source={item?.profilePic}/>
                                        </View>
                                    )
                                }
                                if (index === 3) {
                                    return (
                                        <View
                                            style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 25,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft: -20,
                                                backgroundColor: COLORS.darkGreen
                                            }}
                                            key={index}>
                                            <Text style={{
                                                color:COLORS.white,
                                                ...FONTS.body4
                                            }}>
                                                {viewers?.length - 3}+
                                            </Text>
                                        </View>
                                    )
                                }
                            })
                        }

                    </View>

                    {/*Text*/}
                    <Text style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}>
                        {viewers?.length} people
                    </Text>

                    <Text style={{
                        color: COLORS.lightGray2,
                        textAlign: 'right',
                        ...FONTS.body4,
                        lineHeight: 18
                    }}>
                        Already try this!
                    </Text>
                </View>
            )
        }
    }
;

export default Viewers;
