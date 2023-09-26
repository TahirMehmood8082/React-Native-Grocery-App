import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Header from '../common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomButton from '../common/CustomButton'
import { useDispatch } from 'react-redux'
import { addAddress, updateAddress } from '../redux/slices/AddressSlice'
import uuid from 'react-native-uuid';

const AddAddress = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [type, setType] = useState(route.params.type == 'edit'? route.params.data.type == 'Home'? 1:2:1);
  const [state, setState] = useState(route.params.type == 'edit'? route.params.data.state: '',)
  const [city, setCity] = useState(route.params.type == 'edit'? route.params.data.city: '',)
  const [pincode, setPincode] = useState(route.params.type == 'edit'? route.params.data.pincode: '',)
  const dispatch = useDispatch()

  return (
    <View style={ecommerceStyles.addressesScreenContainer}>
      <Header 
        leftIcon={require('../images/back.png')}
        title={route.params.type == 'edit' ? 'Edit Address' : 'Add New Address'}
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
          if(route.params.type == 'edit'){
            dispatch(
              updateAddress({
                state: state,
                city: city,
                pincode: pincode,
                type: type == 1 ? 'Home' : 'office',
                id: route.params.data.id,
              }),
              navigation.goBack(),
            )
          } else {
            dispatch(
              addAddress({
                state: state,
                city: city,
                pincode: pincode,
                type: type == 1 ? 'Home' : 'office',
                id:uuid.v4() 
              }),
              navigation.goBack(),
            )
          }
        }}
      />
    </View>
  )
}

export default AddAddress