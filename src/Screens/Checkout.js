import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../redux/slices/CartSlice'
import CustomButton from '../common/CustomButton'

const Checkout = () => {
  const navigation = useNavigation()
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([])
  const [selectedMethod, setSelectedMethod] = useState(0)
  const [selectedAddress, setSelectedAddress] = useState('Please Select Address')
  const dispatch = useDispatch()
  useEffect(()=>{
    setCartItems(items.data)
  }, [items])
  const getTotal=()=>{
    let total = 0
    cartItems.map(item =>{
      total = total + item.qty * item.price
    })
    return total.toFixed(0)
  }
  return (
    <View style={ecommerceStyles.checkoutScreenContainer}>
      <Header
        leftIcon={require('../images/back.png')}
        title={'Checkout'}
        onClickLeftIcon={()=>{navigation.goBack()}}
      />
      <Text style={ecommerceStyles.checkoutScreenTitle}>Added Items</Text>
      <View>
      <FlatList data={cartItems} renderItem = {({item, index})=> {
        return (
          <TouchableOpacity 
          activeOpacity={1}
          style={ecommerceStyles.productItem}
          onPress={()=>
            {
              navigation.navigate('ProductDetail', {data: item})
            }}
          >
          
          <Image
            source={{ uri: item.image }}
            style={ecommerceStyles.itemImage}
          />
          <View>
            <Text style={ecommerceStyles.name}>
              {item.title.length > 25
              ?item.title.substring(0,25) + '...'
              :item.title}
            </Text>
            <Text style={ecommerceStyles.desc}>
              {item.description.length > 30
              ?item.description.substring(0,30) + '...'
              :item.description}
            </Text>
            <View style={ecommerceStyles.qtyView}>
              <Text style={ecommerceStyles.price}>
                {'$' + item.price}
              </Text>
              <TouchableOpacity 
                style={ecommerceStyles.qtyBtn}
                onPress={()=>{
                  if(item.qty > 1){
                    dispatch(reduceItemFromCart(item))
                  }
                  else{
                    dispatch(removeItemFromCart(index))
                  }
                }}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
              </TouchableOpacity>
              <Text style={ecommerceStyles.qty}>{item.qty}</Text>
              <TouchableOpacity 
                style={ecommerceStyles.qtyBtn}
                onPress={()=> {
                  dispatch(addItemToCart(item))
                }}
              >
                <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        )
      }}/>
      </View>
      <View style={ecommerceStyles.checkoutScreenTotalView}>
        <Text style={ecommerceStyles.checkoutScreenTitle}>Total</Text>
        <Text style={[ecommerceStyles.checkoutScreenTitle, {marginRight: 20}]}>{'$'+getTotal()}</Text>
      </View>
      <Text style={ecommerceStyles.checkoutScreenTitle}>Select Payment Mood</Text>
      <TouchableOpacity 
        style={ecommerceStyles.checkoutScreenPaymentMethods}
        onPress={()=>{setSelectedMethod(0)}}
        >
        <Image 
          source={
            selectedMethod == 0
            ? require('../images/radio-btn-filled.png')
            : require('../images/radio-btn-empty.png')
          }
          style={[
            ecommerceStyles.checkoutScreenPaymentMethodsImage,
            {tintColor: selectedMethod == 0 ? 'orange' : 'black'}
          ]}
        /> 
        <Text style={ecommerceStyles.checkoutScreenPaymentMethodsTxt}>
          Credit Card
        </Text>

      </TouchableOpacity>
      <TouchableOpacity 
        style={ecommerceStyles.checkoutScreenPaymentMethods}
        onPress={()=>{setSelectedMethod(1)}}
        >
        <Image 
          source={
            selectedMethod == 1
            ? require('../images/radio-btn-filled.png')
            : require('../images/radio-btn-empty.png')
          }
          style={[
            ecommerceStyles.checkoutScreenPaymentMethodsImage,
            {tintColor: selectedMethod == 1 ? 'orange' : 'black'}
          ]}
        /> 
        <Text style={ecommerceStyles.checkoutScreenPaymentMethodsTxt}>
          Debit Card
        </Text>

      </TouchableOpacity>
      <TouchableOpacity 
        style={ecommerceStyles.checkoutScreenPaymentMethods}
        onPress={()=>{setSelectedMethod(2)}}
        >
        <Image 
          source={
            selectedMethod == 2
            ? require('../images/radio-btn-filled.png')
            : require('../images/radio-btn-empty.png')
          }
          style={[
            ecommerceStyles.checkoutScreenPaymentMethodsImage,
            {tintColor: selectedMethod == 2 ? 'orange' : 'black'}
          ]}
        /> 
        <Text style={ecommerceStyles.checkoutScreenPaymentMethodsTxt}>
          UPI
        </Text>

      </TouchableOpacity>
      <TouchableOpacity 
        style={ecommerceStyles.checkoutScreenPaymentMethods}
        onPress={()=>{setSelectedMethod(3)}}
        >
        <Image 
          source={
            selectedMethod == 3
            ? require('../images/radio-btn-filled.png')
            : require('../images/radio-btn-empty.png')
          }
          style={[
            ecommerceStyles.checkoutScreenPaymentMethodsImage,
            {tintColor: selectedMethod == 3 ? 'orange' : 'black'}
          ]}
        /> 
        <Text style={ecommerceStyles.checkoutScreenPaymentMethodsTxt}>
          Cash on Delivery
        </Text>
      </TouchableOpacity>
      <Text style={ecommerceStyles.checkoutScreenTitle}>Address</Text>
      <Text
        style={[ecommerceStyles.checkoutScreenTitle, {marginTop:10, fontSize: 16, color: '#636363'}]}
      >
        {selectedAddress}
      </Text>
      <CustomButton
        bg={'green'}
        title={'Pay & Order'}
        color={'#fff'}
      />
    </View>
  )
}

export default Checkout