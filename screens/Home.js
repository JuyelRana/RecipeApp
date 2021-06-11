import React, {useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    StatusBar, Platform
} from 'react-native';
import {COLORS, dummyData, SIZES} from "../constants";
import {CategoryCard, HomeHeader, SearchBar} from "../components/Home";
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
                    <View>
                        {/*Header*/}
                        <HomeHeader/>
                        {/*Search Bar*/}
                        <SearchBar/>
                        {/*See Recipe Card*/}
                        {/*Trending Section*/}
                        {/*Category Header*/}
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
