import React from 'react';
import {FlatList, Text, View} from "react-native";
import {dummyData, FONTS, SIZES} from "../../constants";
import TrendingCard from "./TrendingCard";

const TrendingSection = ({navigation}) => {
    return (
        <View style={{
            marginTop: SIZES.padding
        }}>
            <Text style={{
                marginHorizontal: SIZES.padding,
                ...FONTS.h2
            }}>
                Trending Recipe
            </Text>
            <FlatList
                data={dummyData.trendingRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item, index}) => (
                    <TrendingCard
                        containerStyle={{
                            marginLeft: index === 0 ? SIZES.padding : 0
                        }}
                        onPress={() => navigation.navigate("Recipe", {recipe: item})}
                        recipeItem={item}/>
                )}/>

        </View>
    );
};

export default TrendingSection;
