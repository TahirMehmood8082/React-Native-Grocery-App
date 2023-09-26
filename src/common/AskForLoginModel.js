import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'

const AskForLoginModal = ({modalVisible, onClickLogin, onClickSignup, onClose}) => {
  return (
    <Modal visible={modalVisible} transparent>
      <View style={ecommerceStyles.modalView}>
        <View style={ecommerceStyles.mainView}>
          <TouchableOpacity 
            style={[ecommerceStyles.modalBtn, {marginTop:70}]}
            onPress={()=>{
              onClickLogin();
            }}  
          >
            <Text style={ecommerceStyles.modalBtnText}>{'Login '}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[ecommerceStyles.modalBtn, {marginBottom: 20, marginTop:20}]}
            onPress={()=>{
              onClickSignup();
            }} 
          >
          <Text style={ecommerceStyles.modalBtnText}>{'Create Account '}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ecommerceStyles.modalClearBtn}
            onPress={()=>{
              onClose();
            }}
          >
            <Image
              source={require('../images/clear.png')}
              style={ecommerceStyles.modalClearBtnIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default AskForLoginModal