import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../common/CustomButton'
import { useDispatch } from 'react-redux'
import { addAddress } from '../redux/slices/AddressSlice'

const AddAddress = () => {
  const navigation = useNavigation()
  const [type, setType] = useState(1)
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [pincode, setPincode] = useState('')
  const dispatch = useDispatch()
  
  return (
    <View style={ecommerceStyles.addressesScreenContainer}>
      <Header 
        leftIcon={require('../images/back.png')}
        title={'Add New Address'}
        onClickLeftIcon={()=>{navigation.goBack()}}
      />
      <TextInput 
        placeholder='Enter State'
        style={[ecommerceStyles.addAddressScreenInput, {marginTop: 50}]}
        value={state}
        onChangeText={txt => setState(txt)}
      />
      <TextInput 
        placeholder='Enter City'
        style={[ecommerceStyles.addAddressScreenInput, {marginTop: 15}]}
        value={city}
        onChangeText={txt => setCity(txt)}
      />
      <TextInput 
        placeholder='Enter Pincode'
        keyboardType='number-pad'
        style={[ecommerceStyles.addAddressScreenInput, {marginTop: 15}]}
        value={pincode}
        onChangeText={txt => setPincode(txt)}
      />
      <View style={ecommerceStyles.addAddressScreenTypeView}>
        <TouchableOpacity 
          style={
            [ecommerceStyles.addAddressScreenTypeBtn,
             {borderWidth: 0.5, 
             borderColor: type == 1 ? 'orange' : 'black'}]
            }
          onPress={()=>{setType(1)}}    
        >
          <Image 
            source={
              type == 1
              ? require('../images/radio-btn-filled.png')
              : require('../images/radio-btn-empty.png')
            }
            style={ecommerceStyles.addAddressScreenRadioBtn}
          />
          <Text style={ecommerceStyles.addAddressScreenRadioTxt}>{'Home'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={
            [ecommerceStyles.addAddressScreenTypeBtn, 
            {borderWidth: 0.5, 
            borderColor: type == 2 ? 'orange' : 'black'}]
          }
          onPress={()=>{setType(2)}} 
        >
          <Image 
            source={
              type == 2
              ? require('../images/radio-btn-filled.png')
              : require('../images/radio-btn-empty.png')
            }
            style={ecommerceStyles.addAddressScreenRadioBtn}
          />
          <Text style={ecommerceStyles.addAddressScreenRadioTxt}>{'Office'}</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        bg={'#FE9000'}
        title={'Save Address'}
        color={'#fff'}
        onClick={()=> {
          dispatch(
            addAddress({
              state: state,
              city: city,
              pincode: pincode,
              type: type == 1 ? 'Home' : 'office',
            }),
            navigation.goBack(),
          )
        }}
      />
    </View>
  )
}

export default AddAddress