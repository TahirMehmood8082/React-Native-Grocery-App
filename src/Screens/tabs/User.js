import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ecommerceStyles from '../../Project-Styles/ecommerceStyles'
import Header from '../../common/Header'

const User = () => {
  return (
    <View style={ecommerceStyles.userContainer}>
      <Header title={'Profile'}/>
      <Image
        source={require('../../images/default_user.png')}
        style={ecommerceStyles.userImage}
      />
      <Text style={ecommerceStyles.userName}>{'Tahir'}</Text>
      <Text 
        style={[ecommerceStyles.userName, {fontSize: 16, marginTop: 0}]}>
          {'Tahir@gmail.com'}
      </Text>
      <TouchableOpacity style={[ecommerceStyles.userFieldDivider, {marginTop: 40}]}>
        <Text style={ecommerceStyles.userFieldTxt}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ecommerceStyles.userFieldDivider, {marginTop: 10}]}>
        <Text style={ecommerceStyles.userFieldTxt}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ecommerceStyles.userFieldDivider, {marginTop: 10}]}>
        <Text style={ecommerceStyles.userFieldTxt}>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ecommerceStyles.userFieldDivider, {marginTop: 10}]}>
        <Text style={ecommerceStyles.userFieldTxt}>Payment Methods</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[ecommerceStyles.userFieldDivider, {marginTop: 10}]}>
        <Text style={ecommerceStyles.userFieldTxt}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default User