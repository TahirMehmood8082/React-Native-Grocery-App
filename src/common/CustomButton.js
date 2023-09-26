import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'

const CustomButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity 
      style= {[ecommerceStyles.CustomButton, {backgroundColor: bg}]}
      onPress={()=>{onClick()}}
    >
      <Text 
        style=
          {{
            color:color,
            fontSize: 18,
            fontWeight: '500',
          }}>
            {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton