import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Header from '../common/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../redux/slices/CartSlice'

const Cart = () => {
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState([])
  const navigation = useNavigation()
  const dispatch = useDispatch()
  useEffect(()=>{
    setCartItems(items.data)
  }, [items])
  return (
    <View style={ecommerceStyles.wishlistTabContainer}>
      <Header title='Cart Items'/>
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
  )
}

export default Cart