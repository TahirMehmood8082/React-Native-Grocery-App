import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ecommerceStyles from '../Project-Styles/ecommerceStyles'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
  const products = useSelector(state => state);
  const [search, setSearch] = useState('');
  const navigation = useNavigation()
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedList, setSearchedList] = useState(oldData);
  const filterData = txt => {
    let newData = oldData.filter(item =>{
      return item.title.toLowerCase().match(txt.toLowerCase())
    })
    setSearchedList(newData)
  }
  console.log(JSON.stringify(products.product.data))
  return (
    <View style={ecommerceStyles.searchTabContainer}>
      <Header
        title={'Search Items'}
      />
      <View style={ecommerceStyles.searchView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image 
            source={require('../images/search.png')}
            style={ecommerceStyles.searchIcon}
          />
          <TextInput 
            value={search}
            onChangeText={txt => {
              setSearch(txt);
              filterData(txt);
            }}
            placeholder='Search items here...'
            style={ecommerceStyles.input}
          />
        </View>
      {search !== '' && (
        <TouchableOpacity 
          style={[
            ecommerceStyles.searchIcon,
            {justifyContent: 'center', alignItems: 'center'},
          ]}
          onPress={()=>{
            setSearch('')
            filterData('')
          }}>
          <Image
            source={require('../images/clear.png')}
            style={[ecommerceStyles.searchIcon, {width: 16, height: 16}]}
          />
        </TouchableOpacity>
      )}
      </View>
      <View style={{marginTop: 50}}>
        <FlatList
          data={searchedList}
          renderItem={({item, index})=>{
            return (
              <>
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
            </>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Search