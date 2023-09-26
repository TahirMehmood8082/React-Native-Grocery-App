import { View, Text, TextInput } from 'react-native'
import React from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import CustomButton from '../common/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
  return (
    <View style={ecommerceStyles.signupContainer}>
      <Text style={ecommerceStyles.signupTitle}>{'Login'}</Text>
      <TextInput placeholder='Enter Email' style={ecommerceStyles.signupInput}/>
      <TextInput placeholder='Enter Password' style={ecommerceStyles.signupInput}/>
      <CustomButton 
        bg={'#E27800'} 
        title={'Sign up'} 
        color={'#fff'}
        onPress={()=>{}}
      />
      <Text 
        style={ecommerceStyles.signupScreenLoginText}
        onPress={()=>{
          navigation.navigate('Signup')
        }}
      >
        {'Sign up'}
      </Text>
    </View>
  )
}

export default Login