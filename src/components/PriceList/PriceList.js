import {parse} from '@babel/core';
import React from 'react';
import {FlatList, View, ScrollView} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import useStyles from './PriceListStyle';

const PriceList = props => {
  const cotton_price = parseFloat(props.data.cotton_price).toFixed(2);
  const kapaas_price = parseFloat(props.data.kapaas_price).toFixed(2);
  const milling_price = props.data.milling_price.length
    ? parseFloat(props.data.milling_price).toFixed(2)
    : parseFloat('200').toFixed(2);
  const theme = useTheme();
  const styles = useStyles(theme);
  const data = [
    {
      id: '40',
      price: 40,
    },
    {
      id: '39',
      price: 39,
    },
    {
      id: '38',
      price: 38,
    },
    {
      id: '37',
      price: 37,
    },
    {
      id: '36',
      price: 36,
    },
    {
      id: '35',
      price: 35,
    },
    {
      id: '34',
      price: 34,
    },
    {
      id: '33',
      price: 33,
    },
    {
      id: '32',
      price: 32,
    },
    {
      id: '31',
      price: 31,
    },
    {
      id: '30',
      price: 30,
    },
    {
      id: '29',
      price: 29,
    },
    {
      id: '28',
      price: 28,
    },
  ];

  const cotton_price_calculation = (cotton_price, percentValue) => {
    return (cotton_price / 356) * percentValue;
  };
  const kapaas_price_calculation = (kapaas_price, percentValue) => {
    return kapaas_price * (100 - percentValue);
  };

  const calculation = (
    cotton_price,
    kapaas_price,
    milling_price,
    percentValue,
  ) => {
    return (
      (cotton_price_calculation(cotton_price, percentValue) +
        kapaas_price_calculation(kapaas_price, percentValue) +
        parseFloat(milling_price)) /
      100
    );
  };

  const calculation_single_average = (cotton_price, kapaas_price, average) => {
    return (
      ((cotton_price / 356) * average + kapaas_price * (100 - average) + 200) /
      100
    );
  };
  const DATA = data.map(value => ({
    calculate_price: calculation(
      cotton_price,
      kapaas_price,
      milling_price,
      value.price,
    ),
    ...value,
  }));
  return (
    <>
      {props.data.milling_price.length ? (
        <View style={{alignItems: 'center'}}>
          <View style={styles.singleContainer}>
            <Text style={styles.singleText}>
              ₹{' '}
              {calculation_single_average(
                cotton_price,
                kapaas_price,
                milling_price,
              ).toFixed(2)}
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <>
                <View style={styles.renderItem}>
                  <Text style={styles.rendertext}>{item.price}</Text>
                  <Text style={styles.rendertext}>
                    ₹ {item.calculate_price.toFixed(2)}
                  </Text>
                </View>
              </>
            )}
            keyExtractor={item => item.id}
            style={{flex: 1, height: RFValue(420), paddingBottom: RFValue(15)}}
          />
        </ScrollView>
      )}
    </>
  );
};

export default PriceList;
