import React, { useEffect } from 'react';
import { FlatList , StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import ListingsApi from '../api/listings';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {

    const title =`Couldn't Retrive The Listings From Server`;

    const {data:listings, error , loading, request:loadListings} = useApi(ListingsApi.getListings);

    useEffect(()=>{
        loadListings();
    },[])
    
    return (
        <>
        <ActivityIndicator visible={loading} />
        <Screen style={styles.screen}>
            {error && <>
                <AppText>{title}</AppText>
                <AppButton title="Retry" onPress={LoadListings} />
            </>}
            <FlatList
                data={listings}
                keyExtractor={(card)=> card.id.toString()}
                renderItem={({item})=> <Card
                title={item.title}
                subTitle={item.price}
                onPress={ ()=> navigation.navigate( routes.LISTING_DETAILS, item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
                imageUrl={item.images[0].url}/>
            }/>
        </Screen>
        </>
    );
}

export default ListingsScreen;

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})