import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text, Animated
} from 'react-native';
import {COLORS} from "../constants";
import {HeaderBar, IngredientHeader, Ingredients, RecipeCardHeader, RecipeInfo} from "../components/Recipe";

const Recipe = ({navigation, route}) => {

    const [selectedRecipe, setSelectedRecipe] = useState('');

    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let {recipe} = route.params;
        setSelectedRecipe(recipe);
    }, []);


    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}>

            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/*Header Section*/}
                        <RecipeCardHeader
                            scrollY={scrollY}
                            selectedRecipe={selectedRecipe}/>

                        {/*Info Section */}
                        <RecipeInfo selectedRecipe={selectedRecipe}/>

                        {/*Ingredient Title Section*/}
                        <IngredientHeader selectedRecipe={selectedRecipe}/>

                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollY}}}
                ], {useNativeDriver: true})}

                renderItem={({item}) => (<Ingredients item={item}/>)}
                ListFooterComponent={
                    <View style={{
                        marginBottom: 100
                    }}/>
                }
            />

            {/*Header Bar */}
            <HeaderBar
                scrollY={scrollY}
                navigation={navigation}
                selectedRecipe={selectedRecipe}/>

        </View>
    )
}

export default Recipe;
