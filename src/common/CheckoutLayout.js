import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import { useNavigation } from '@react-navigation/native'

const CheckoutLayout = ({total, items}) => {
  const navigation = useNavigation()
  return (
    <View style={ecommerceStyles.checkoutContainer}>
      <View style={ecommerceStyles.checkoutTab}>
      <Text>{'(items) ' + items}</Text>
        <Text style={ecommerceStyles.checkoutTotal}>{'Total: $' + total}</Text>
      </View>
      <View style={ecommerceStyles.checkoutTab}>
        <TouchableOpacity 
          style={ecommerceStyles.checkoutBtn}
          onPress={()=>{navigation.navigate('Checkout')}}  
        >
          <Text style={{color: '#fff'}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CheckoutLayout