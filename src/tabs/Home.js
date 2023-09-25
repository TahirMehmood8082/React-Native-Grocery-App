import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header  from '../../src/common/Header'
import ecommerceStyle from '../Project-Styles/ecommerceStyles'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../src/redux/slices/ProductsSlice'

const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  useEffect(()=>{
    getProducts();
  })
  const getProducts = () =>{
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        dispatch(addProducts(json));
      });
  }
  return (
    <View style={ecommerceStyle.homeContainer}>
      <Header 
        leftIcon={require('../images/menu.png')}
        rightIcon={require('../images/cart.png')}
        title = {'Grocery App'}
        onClickLeftIcon={()=> {navigation.openDrawer()}}
      />
      <FlatList
        data={products}
        renderItem={({item, index})=>{
          return(
            <>
              <TouchableOpacity 
                activeOpacity={1}
                style={ecommerceStyle.productItem}
                onPress={()=>
                  {
                    navigation.navigate('ProductDetail', {data: item})
                  }}
                >
                
                <Image
                  source={{ uri: item.image }}
                  style={ecommerceStyle.itemImage}
                />
                <View>
                  <Text style={ecommerceStyle.name}>
                    {item.title.length > 25
                    ?item.title.substring(0,25) + '...'
                    :item.title}
                  </Text>
                  <Text style={ecommerceStyle.desc}>
                    {item.description.length > 30
                    ?item.description.substring(0,30) + '...'
                    :item.description}
                  </Text>
                  <Text style={ecommerceStyle.price}>
                    {'$' + item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )
        }}
      />
    </View>
  )
}

export default Home