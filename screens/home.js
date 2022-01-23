import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity, Touchable, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { categoriesData } from '../components/categoriesData';
import { popularData } from '../components/popularData';
import { colors } from '../styles/global';

export default function Home({ navigation }) {

    const renderCategoryItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.categoryItemWrapper, {
                backgroundColor: item.selected ? colors.primary : colors.white,
                marginLeft: item.id == 1 ? 20 : 0,
            }]}>
                <Image source={item.image} style={styles.categoryItemImage}/>
                <Text style={styles.categoryItemTitle}> { item.title }</Text>
                <View style={[styles.categorySelectWrapper, {
                    backgroundColor: item.selected ? colors.white : colors.secondary,
                }]}>
                    <Feather name='chevron-right' size={8} style={styles.categorySelectIcon}
                    color={item.selected ? colors.black : colors.white}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior='automatic' showsVerticalScrollIndicator={false}>

            {/* header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} style={styles.profileImage}/>
                    <Feather name="menu" size={24} color={colors.textDark} />
                </View>
            </SafeAreaView>

            {/* titles */}
            <View style={styles.titleWrapper}>
                <Text style={styles.titlesSubtitle}>Food</Text>
                <Text style={styles.titlesTitle}>Delivery</Text>
            </View>

            {/* search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark} />
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search</Text>
                </View>
            </View>

            {/* categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                    <FlatList 
                    data={categoriesData}
                    renderItem={renderCategoryItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    />
                </View>
            </View>

            {/* popular */}
            <View style={styles.popularWrapper}>
                <Text style={styles.popularTitle}>Popular</Text>
                {popularData.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => navigation.navigate('Details', {item: item})}>
                        <View style={[styles.popularCardWrapper, {
                            marginTop: item.id == 1 ? 10 : 20,
                        }]}>
                            <View>
                                <View>
                                    <View style={styles.popularTopWrapper}>
                                        <MaterialCommunityIcons name='crown' size={12} color={colors.primary} />
                                        <Text style={styles.popularTopText}>Top of the week</Text>
                                    </View>
                                    <View style={styles.popularTitlesWrapper}>
                                        <Text style={styles.popularStylesTitle}>{ item.title }</Text>
                                        <Text style={styles.popularTitlesWeight}>Weight { item.weight }</Text>
                                    </View>
                                </View>
                                <View style={styles.popularCardBottom}>
                                    <View style={styles.addPizzaButon}>
                                        <Feather name='plus' size={10} color={colors.textDark} />
                                    </View>
                                    <View style={styles.ratingWrapper}>
                                        <MaterialCommunityIcons name='star' size={10} color={colors.textDark} />
                                        <Text style={styles.rating}>{ item.rating }</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.popularCardRight}>
                                <Image source={item.image} styles={styles.popularCardImage}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
                    </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: 'center',
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark
    },
    titlesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    search: {
       flex: 1,
       marginLeft: 10,
       borderBottomColor: colors.textLight,
       borderBottomWidth: 1,
    },
    searchText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        marginBottom: 5,
        color: colors.textLight
    },
    categoriesWrapper: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        paddingHorizontal: 20,
        
    },
    categoriesListWrapper: {
        marginTop: 15,
        paddingBottom: 20,
    },
    categoryItemWrapper: {
        backgroundColor: colors.primary,
        marginRight: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    categoryItemImage: {
        width: 60,
        height: 60,
        marginTop: 24,
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    categoryItemTitle: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 10,
    },
    categorySelectWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 26,
        height: 26,
        borderRadius: 26,
        marginBottom: 20,
    },
    categorySelectIcon: {
        alignSelf: 'center',
    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    popularCardWrapper: {
        backgroundColor: colors.white,
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularStylesTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: colors.textDark
    },
    popularTitlesWeight: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: colors.textLight,
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButon: {
        backgroundColor: colors.primary,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
    },
    ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    rating: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: colors.textDark,
        marginLeft: 5,
    },
    popularCardRight: {
        marginLeft: 40,
    },
    popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
    },
});
