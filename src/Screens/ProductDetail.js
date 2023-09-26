import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Header from '../common/Header'
import CustomButton from '../common/CustomButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler'
import { addItemToCart } from '../redux/slices/CartSlice'

const ProductDetail = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1);
  return (
    <View style={ecommerceStyles.productDetailContainer}>
      <Header 
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={()=> {
          navigation.goBack()
        }}
        isCart={true}
      />
      <ScrollView>
        <Image 
          source={{uri: route.params.data.image}}
          style={ecommerceStyles.banner}
        />
        <Text style={ecommerceStyles.productDetailTitle}>
          {route.params.data.title}
        </Text>
        <Text style={ecommerceStyles.productDetailDesc}>
          {route.params.data.description}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[ecommerceStyles.productDetailPrice,{color: '#000'}]}>
            {'Price:'}
          </Text>
          <Text style={ecommerceStyles.productDetailPrice}>
            {'$' + route.params.data.price}
          </Text>
          <View style={ecommerceStyles.qtyView}>
          <TouchableOpacity 
            style={ecommerceStyles.qtyBtn}
            onPress={()=>{
              if(qty > 1){
                setQty(qty -1)
              }
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>-</Text>
          </TouchableOpacity>
          <Text style={ecommerceStyles.qty}>{qty}</Text>
          <TouchableOpacity 
            style={ecommerceStyles.qtyBtn}
            onPress={()=> {
              setQty(qty + 1)
            }}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>+</Text>
          </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity 
          style={ecommerceStyles.wishlistBtn}
          onPress={()=>{dispatch(addItemToWishlist(route.params.data))}}  
        >
            <Image
              source={require('../images/wishlist.png')}
              style={ecommerceStyles.wishlistIcon}
            />
        </TouchableOpacity>
        <CustomButton 
          bg={'#FF9A0C'}
          title={'Add To Cart'}
          color={'#fff'}
          onClick={()=>{
            dispatch(
              addItemToCart({
                category: route.params.data.category,
                description: route.params.data.description,
                id: route.params.data.id,
                image: route.params.data.image,
                price: route.params.data.price,
                qty: qty,
                rating: route.params.data.rating,
                title: route.params.data.title,
              }),
            );
          }}
        />
      </ScrollView>
    </View>
  )
}

export default ProductDetail