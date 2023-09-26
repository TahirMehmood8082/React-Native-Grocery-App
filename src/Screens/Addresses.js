import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Header from '../common/Header'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {deleteAddress} from '../redux/slices/AddressSlice'

const Addresses = () => {
  const navigation = useNavigation()
  const addressList = useSelector(state => state.address)
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(addressList)
  }, [isFocused])
  const defaultAddress = async item => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      ''+
      item.city +
      ','+
      item.state +
      ',' +
      item.pincode +
      ',type:' +
      item.type,
    );
    navigation.goBack()
  }
  return (
    <View style={ecommerceStyles.addressesScreenContainer}>
      <Header 
        leftIcon={require('../images/back.png')}
        title={'My Addresses'}
        onClickLeftIcon={()=>{navigation.goBack()}}
      />
      <FlatList 
        data={addressList.data}
        renderItem={({item, index})=>{
          return (
            <TouchableOpacity 
              style={ecommerceStyles.addressList} 
              onPress={()=>{defaultAddress(item)}}
            >
              <Text style={ecommerceStyles.addressListTxt}>{`State: ${item.state}`}</Text>
              <Text style={ecommerceStyles.addressListTxt}>{`City: ${item.city}`}</Text>
              <Text style={ecommerceStyles.addressListTxt}>{`Pincode ${item.pincode}`}</Text>
              <Text style={ecommerceStyles.addressListType}>
                {item.type}
              </Text>
              <View style={ecommerceStyles.addressListEditDeleteView}>
                <TouchableOpacity 
                  style={[ecommerceStyles.addressListEditDeleteIcon, {marginRight:10}]}
                  onPress={()=>{navigation.navigate('AddAddress', {type: 'edit', data:item})}}
                  >
                  <Image 
                    source={require('../images/edit.png')}
                    style={ecommerceStyles.addressListEditDeleteIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity 
                  style={ecommerceStyles.addressListEditDeleteIcon}
                  onPress={()=>{dispatch(deleteAddress(item.id))}}
                >
                  <Image 
                    source={require('../images/delete.png')}
                    style={ecommerceStyles.addressListEditDeleteIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
      <TouchableOpacity
        style = {ecommerceStyles.addressesScreenAddButton}
        onPress={()=>{navigation.navigate('AddAddress', {type: 'new'})}}
      >
        <Text style={{ fontSize: 30 ,Color: '#fff'}}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Addresses