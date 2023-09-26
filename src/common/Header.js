import { View, Text, Image } from 'react-native'
import React from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native";
const Header = ({
  title, 
  leftIcon,
  rightIcon, 
  onClickLeftIcon, 
  onClickRightIcon,
  isCart,
}) => {
  const cartItems = useSelector(state => state.cart);
  const navigation = useNavigation()
  return <View style={ecommerceStyles.header}>
    <TouchableOpacity 
      style={ecommerceStyles.btn}
      onPress={()=>{onClickLeftIcon()}}
      >
      <Image source={leftIcon} style={ecommerceStyles.icon}/>
    </TouchableOpacity>
    <Text style={ecommerceStyles.title}>{title}</Text>
    {!isCart && <View></View>}
    { isCart && (
       <TouchableOpacity 
       style={ecommerceStyles.btn}
       onPress={()=>{navigation.navigate('Cart')}}
       >
       <Image 
       source={rightIcon} 
       style={[ecommerceStyles.icon, {width:40, height:40}]}/>
       <View style={ecommerceStyles.wishlistCounter}>
         <Text style={{color: '#000'}}>{cartItems.data.length}</Text>
       </View>
     </TouchableOpacity>
    )}
   

  </View>
}

export default Header