import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import ecommerceStyles from '../../Project-Styles/ecommerceStyles'
import Header from '../../common/Header'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const Wishlist = () => {
  const items = useSelector(state => state.wishlist);
  const [wishlistItems, setWishlistItems] = useState(items.data)
  const navigation = useNavigation()
  return (
    <View style={ecommerceStyles.wishlistTabContainer}>
      <Header title='Wishlist Items'/>
      <FlatList data={wishlistItems} renderItem = {({item, index})=> {
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
            <Text style={ecommerceStyles.price}>
              {'$' + item.price}
            </Text>
          </View>
        </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

export default Wishlist