import {Formik} from 'formik';
import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';
import {useTheme} from 'react-native-paper';
import * as yup from 'yup';
import RoundButton from '../CustomButton/RoundButton';
import PriceList from '../PriceList/PriceList';
import TextField from '../TextField/TextField';
import { RFValue } from "react-native-responsive-fontsize";

const formValidation = yup.object().shape({
  cotton_price: yup
    .string()
    .matches(/^\d{0,8}(\.\d{1,4})?$/, 'Enter valid Price'),
  kapaas_price: yup
    .string()
    .matches(/^\d{0,8}(\.\d{1,4})?$/, 'Enter valid Price'),
  milling_price: yup
    .string()
    .matches(/^\d{2,2}(\.\d{0,2})?$/, 'Min. Average 10 and Max. 45'),
});
const InputForm = () => {
  const formRef = useRef();
  const theme = useTheme();
  const styles = useStyle(theme);
  const [showList, setShowList] = useState(false);
  const [showKeyboard,setShowKeyboard] = useState(true);
  const validPrice = price => {
    return price.replace(/[^0-9.]/g, '');
  };
  const handleSubmit = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
    setShowList(true);
  };

  useEffect(() => {
    setShowKeyboard(true)
  },[showKeyboard])

  return (
    <View>
      <Formik
        initialValues={{
          cotton_price: '',
          kapaas_price: '',
          milling_price: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={formValidation}
        innerRef={formRef}>
        {props => (
          <>
            <View style={styles.firstContainer}>
              <TextField
                name="Cotton Price"
                mode="outlined"
                label={'Cotton Price'}
                placeholder={'Cotton Price'}
                placeholderTextColor={'#000000'}
                keyboardType={'number-pad'}
                value={props.values.cotton_price}
                style={styles.styleInput}
                onChangeText={text => {
                  let temp = validPrice(text);
                  temp = temp == '' ? temp : String(temp);
                  props.setFieldValue('cotton_price', temp);
                }}
                onBlur={props.handleBlur('cotton_price')}
                touched={props.touched.cotton_price}
                error={props.errors.cotton_price}
              />
              <TextField
                name="Kapas Price"
                mode="outlined"
                label={'Kapas Price'}
                placeholder={'Kapas Price'}
                placeholderTextColor={'#000000'}
                keyboardType={'number-pad'}
                value={props.values.kapaas_price}
                style={styles.styleInput}
                onChangeText={text => {
                  let temp = validPrice(text);
                  temp = temp == '' ? temp : String(temp);
                  props.setFieldValue('kapaas_price', temp);
                }}
                onBlur={props.handleBlur('kapaas_price')}
                touched={props.touched.kapaas_price}
                error={props.errors.kapaas_price}
              />
            </View>
            <View style={styles.secondContainer}>
              <RoundButton
                mode="contained"
                disabled={
                  !(
                    props.values.cotton_price &&
                    props.values.kapaas_price &&
                    !props.errors.cotton_price &&
                    !props.errors.milling_price &&
                    !props.errors.kapaas_price
                  )
                }
                onButtonPress={() => props?.handleSubmit()}
                buttonLabel={'PRICE'}
                buttonStyle={{width: RFValue(170), marginTop: 5}}
                containerStyle={{flex: null}}
              />
              <TextField
                name="Average"
                mode="outlined"
                label={'Average'}
                placeholder={'Average'}
                placeholderTextColor={'#000000'}
                keyboardType={'number-pad'}
                value={props.values.milling_price}
                style={styles.styleInput}
                onChangeText={text => {
                  let temp = validPrice(text);
                  temp = temp == '' ? temp : String(temp);
                  props.setFieldValue('milling_price', temp);
                }}
                onBlur={props.handleBlur('milling_price')}
                touched={props.touched.milling_price}
                error={props.errors.milling_price}
              />
            </View>
          </>
        )}
      </Formik>
      {showList && <PriceList data={formRef.current.values}/>}
    </View>
  );
};

const useStyle = ({}) =>
  StyleSheet.create({
    styleInput: {
      marginTop: RFValue(10),
      width: RFValue(170),
    },
    firstContainer: {
      marginTop: RFValue(10),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    secondContainer: {
      marginTop: RFValue(10),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });

export default InputForm;
