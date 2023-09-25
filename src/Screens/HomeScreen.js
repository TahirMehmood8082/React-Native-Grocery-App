import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Home from '../tabs/Home'
import Search from '../tabs/Search'
import Wishlist from '../tabs/Wishlist'
import Notification from '../tabs/Notification'
import User from '../tabs/User'

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
    {
        selectedTab==0?(<Home/>):
        selectedTab==1?(<Search/>):
        selectedTab==2?(<Wishlist/>):
        selectedTab==3?(<Notification/>):
        (<User/>)
    } 
    <View style={ecommerceStyles.bottomView}>
      <TouchableOpacity style={ecommerceStyles.bottomTab}
            onPress={()=>{setSelectedTab(0)}}
          >
            <Image 
              source={
                selectedTab == 0
                ? require('../images/home_fill.png')
                : require('../images/home.png')
              }
              style={ecommerceStyles.bottomTabIcon}
            />
      </TouchableOpacity>
      <TouchableOpacity style={ecommerceStyles.bottomTab}
        onPress={()=>{setSelectedTab(1)}}
      >
        <Image 
          source={require('../images/search.png')}
          style={ecommerceStyles.bottomTabIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={ecommerceStyles.bottomTab}
        onPress={()=>{setSelectedTab(2)}}
      >
        <Image 
          source={
            selectedTab == 2
            ? require('../images/wishlist_fill.png')
            : require('../images/wishlist.png')
          }
          style={ecommerceStyles.bottomTabIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={ecommerceStyles.bottomTab}
        onPress={()=>{setSelectedTab(3)}}
      >
        <Image 
          source={
            selectedTab == 3
            ? require('../images/noti_fill.png')
            : require('../images/noti.png')
          }
          style={ecommerceStyles.bottomTabIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={ecommerceStyles.bottomTab}
        onPress={()=>{setSelectedTab(4)}}
      >
        <Image 
          source={
            selectedTab == 4
            ? require('../images/user_fill.png')
            : require('../images/user.png')
          }
          style={ecommerceStyles.bottomTabIcon}
        />
      </TouchableOpacity>
    </View> 
        
    </>
   
   
  )
}

export default HomeScreen