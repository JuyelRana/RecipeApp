import React, {useEffect, useRef, useState} from 'react';
import {
    View,
    Text, Animated
} from 'react-native';
import {COLORS} from "../constants";
import {Ingredients, RecipeCardHeader} from "../components/Recipe";

const Recipe = ({navigation, route}) => {

    const [selectedRecipe, setSelectedRecipe] = useState('');

    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        let {recipe} = route.params;
        setSelectedRecipe(recipe);
    }, []);


    const renderRecipeCardHeader = () => {
        return (
            <View style={{
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                {/*Background Image*/}
                <Animated.Image
                    style={{
                        height: HEADER_HEIGHT,
                        width: "200%",


                    }}
                    resizeMode='contain'
                    source={selectedRecipe?.image}/>

                {/*Recipe Creator Card */}
            </View>
        )
    }


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

                        {/*Ingredient Title Section*/}

                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {y: scrollY}}}
                ], {useNativeDriver: true})}

                renderItem={({item}) => (<Ingredients item={item}/>)}
            />

        </View>
    )
}

export default Recipe;
