import { View, Text, Image } from 'react-native'
import React from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Header = ({
  title, 
  leftIcon,
  rightIcon, 
  onClickLeftIcon, 
  onClickRightIcon
}) => {
  return <View style={ecommerceStyles.header}>
    <TouchableOpacity style={ecommerceStyles.btn}>
      <Image source={leftIcon} style={ecommerceStyles.icon}/>
    </TouchableOpacity>
    <Text style={ecommerceStyles.title}>{title}</Text>
    <TouchableOpacity 
      style={ecommerceStyles.btn}
      onPress={()=>{onClickLeftIcon()}}
      >
      <Image 
      source={rightIcon} 
      style={[ecommerceStyles.icon, {width:40, height:40}]}/>
    </TouchableOpacity>

  </View>
}

export default Header