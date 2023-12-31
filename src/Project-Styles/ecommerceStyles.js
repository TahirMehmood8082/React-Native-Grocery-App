import { StyleSheet, Dimensions } from 'react-native';
const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  productDetailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchTabContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wishlistTabContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: width,
    height: 65,
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width:'20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5,
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  productDetailTitle: {
    fontSize: 23,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
  },
  productDetailDesc: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  productDetailPrice: {
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  CustomButton: {
    width: Dimensions.get('window').width - 40,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  wishlistIcon: {
    width: 24,
    height: 24,
  },
  wishlistCounter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchView: {
    width: '90%',
    height: 50,
    borderRadius: 20,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
  },
  input: {
    width: '80%',
    marginLeft: 10,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  qtyBtn: {
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
  modalView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView:{
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
  },
  modalBtn: {
    width: '86%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#FD9102',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnText: {
    color: '#fff',
    fontSize: 18,
  },
  modalClearBtnIcon: {
    width: 24,
    height: 24,
  },
  modalClearBtn: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  signupContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  signupTitle: {
    color: '#000',
    fontSize: 40,
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  signupInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  signupScreenLoginText: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  userContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  userName: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  userFieldDivider:{
    width: '90%',
    height: 50,
    borderBottomWidth: 0.3,
    alignSelf: 'center',
    borderBottomColor: '#DBDBDB',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  userFieldTxt: {
    color: '#000'
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  checkoutTab: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutBtn: {
    width: '80%',
    height: '60%',
    backgroundColor: '#FF8605',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutTotal: {
    fontWeight: '700',
    fontSize: 18,
  },
  cartNoItems: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  checkoutScreenTitle: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 30,
    color: '#000',
  },
  checkoutScreenTotalView: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBlockColor: '#B7B7B7',
  },
  checkoutScreenPaymentMethods: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 20,
    paddingLeft: 20,
  },
  checkoutScreenPaymentMethodsImage: {
    width: 24,
    height: 24,
  },
  checkoutScreenPaymentMethodsTxt:{
    marginLeft: 15,
    fontSize: 16,
    color: '#000',
  },
  checkoutScreenAddressView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 20,
  },
  addressesScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addressesScreenAddButton: {
    width: 50,
    height: 50,
    backgroundColor: '#EC8A00',
    borderRadius: 25,
    position: 'absolute',
    bottom: 50,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAddressScreenInput: {
    width: '90%',
    height: '50%',
    borderRadius: 50,
    borderWidth: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  addAddressScreenTypeView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  addAddressScreenTypeBtn: {
    width: 40,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
  },
  addAddressScreenRadioBtn: {
    width: 24,
    height: 24,
  },
  addAddressScreenRadioTxt: {
    marginLeft: 10
  },
  addressList: {
    width: '90%',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  addressListTxt: {
    color: '#000',
    fontSize: 18,
  },
  addressListType: {
    color: '#000',
    fontSize: 18,
    position: 'absolute',
    right: 10,
    top:10,
    backgroundColor: '#B1BFF5',
    padding: 5,
    borderRadius: 10,
    fontSize: 10,
    fontWeight: '600',
  },
  addressListEditDeleteView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    flexDirection: 'row',
  },
  addressListEditDeleteIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;