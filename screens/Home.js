import React, {useEffect} from 'react';
import {FlatList, Platform, SafeAreaView, StatusBar, View} from 'react-native';
import {COLORS, dummyData, SIZES} from "../constants";
import {CategoryCard, CategoryHeader, HomeHeader, SearchBar, SeeRecipes, TrendingSection} from "../components/Home";
import {hideNavigationBar} from "react-native-navigation-bar-color";

const Home = ({navigation}) => {

    useEffect(() => {
        (Platform.OS === "android") && hideNavigationBar();
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}>

            {
                (Platform.OS === "ios") ? (<StatusBar barStyle={'light-content'}/>) : (
                    <StatusBar translucent backgroundColor='transparent'/>)
            }


            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={{
                        marginTop: Platform.OS === "android" ? 15 : 0,
                    }}>
                        {/*Header*/}
                        <HomeHeader/>
                        {/*Search Bar*/}
                        <SearchBar/>
                        {/*See Recipe Card*/}
                        <SeeRecipes/>
                        {/*Trending Section*/}
                        <TrendingSection navigation={navigation}/>
                        {/*Category Header*/}
                        <CategoryHeader/>
                    </View>
                }
                renderItem={({item}) => (
                    <CategoryCard
                        containerStyle={{
                            marginHorizontal: SIZES.padding
                        }}
                        onPress={() => navigation.navigate("Recipe", {recipe: item})}
                        categoryItem={item}/>
                )}
                ListFooterComponent={
                    <View style={{
                        marginBottom: 100
                    }}>

                    </View>
                }/>

        </SafeAreaView>
    )
}

export default Home;
