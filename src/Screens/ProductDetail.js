import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
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
  return (
    <View style={ecommerceStyles.productDetailContainer}>
      <Header 
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={()=> {
          navigation.navigate('Home.js',)
        }}
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
        <View style={{flexDirection: 'row'}}>
        <Text style={[ecommerceStyles.productDetailPrice,{color: '#000'}]}>
            {'Price:'}
          </Text>
          <Text style={ecommerceStyles.productDetailPrice}>
            {'$' + route.params.data.price}
          </Text>
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
          onClick={()=>{dispatch(addItemToCart(route.params.data))}}
        />
      </ScrollView>
    </View>
  )
}

export default ProductDetail