import { Dimensions, Platform } from 'react-native';
import strings from './Strings';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const IMAGE_RESIZE_QUALITY = 100;
export const IMAGE_RESIZE_MAXWIDTH = 888;
export const IMAGE_RESIZE_MAXHIEGHT = 500;
export const IS_IPHONE_X = Platform.OS === 'ios' && DEVICE_HEIGHT === 812;
export const SCALE_RATIO_HEIGHT_BASIS = DEVICE_HEIGHT / 667;
export const SCALE_RATIO_WIDTH_BASIS = Dimensions.get('window').width / 375;

//font scale
const { width, height } = Dimensions.get('window');
// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const FS = size => Math.ceil(size * scale);
export const BASE_URL = 'https://eticket-vhu.herokuapp.com/api/v1/eticket/';
export const ROUTE_KEY = {
  TICKET: 'TICKET',
  PERSONAL_INFO: 'PERSONAL_INFO',
  PRE_LOGIN: 'PRE_LOGIN',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_FILTER: 'SEARCH_FILTER',
  SEARCH: 'SEARCH',
  DETAIL_EVENT: 'DETAIL_EVENT',
  DETAIL_PAY: 'DETAIL_PAY',
  DETAIL_PAY_SUCESS: 'DETAIL_PAY_SUCESS',
  SPLASH: 'SPLASH',
  MAIN: 'MAIN',
  HOME: 'HOME',
  ALBUM: 'ALBUM',
  DETAIL_ABLUM: 'DETAIL_ABLUM',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  // DRAGGABLEBUTTON: 'DRAGGABLEBUTTON',
  // FORGOT_PASS: 'FORGOT_PASS',
  //ql_ktx:
  CHANGE_PASS: 'CHANGE_PASS',
  NEWS: 'NEWS',
  ACCOUNT: 'ACCOUNT',
  CHAT: 'CHAT',
  OTHER: 'OTHER',
  //
  CHOOSE_CATEGORY: 'CHOOSE_CATEGORY',
  FAVOURITE: 'FAVOURITE',
  CHOOSE_ROLE_POST: 'CHOOSE_ROLE_POST',
  CHOOSE_IMAGE_POST: 'CHOOSE_IMAGE_POST',
  CHOOSE_AREA_POST: 'CHOOSE_AREA_POST',
  SUCCESS_POST: 'SUCCESS_POST',
  PREVIEW_BEFORE_POST: 'PREVIEW_BEFORE_POST',
  OTHER_PRODUCT_DETAIL: 'OTHER_PRODUCT_DETAIL',
  MY_PRODUCT_DETAIL: 'MY_PRODUCT_DETAIL',
  LIST_NOTIFICATION: 'LIST_NOTIFICATION',
  LIST_MESSAGE: 'LIST_MESSAGE',
  DETAIL_MESSAGE: 'DETAIL_MESSAGE',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  PAYMENT: 'PAYMENT',
  UPGRADE_PREMIUM: 'UPGRADE_PREMIUM',
  ADD_DIARY: 'ADD_DIARY',
  PRODUCT_FOR_DIARY: 'PRODUCT_FOR_DIARY',
  FUNCTIONS_OTHER: 'FUNCTIONS_OTHER',
  PAYMENT_METHODS: 'PAYMENT_METHODS',
  PRIVATE_PERMISSION: 'PRIVATE_PERMISSION',
  EDIT_PROFILE: 'EDIT_PROFILE',
  MY_WALLET: 'MY_WALLET',
  HISTORY_TRANSACTION: 'HISTORY_TRANSACTION',
  MY_TRANSACTION: 'MY_TRANSACTION',
  DETAIL_TRANSACTION: 'DETAIL_TRANSACTION',
  OTHER_PROFILE_COMPONENT: 'OTHER_PROFILE_COMPONENT',
  POPUP_MENU_AREA_FILTER: 'POPUP_MENU_AREA_FILTER',
  POPUP_MENU_CATEGORY_FILTER: 'POPUP_MENU_CATEGORY_FILTER',
  POPUP_MENU_ORDER_FILTER: 'POPUP_MENU_ORDER_FILTER',
  PAYMENT_RULE: 'PAYMENT_RULE',
  FRIEND: 'FRIEND',
  CREATE_GROUP: 'CREATE_GROUP',
  FIND_GROUP: 'FIND_GROUP',
  // hồ sơ của tôi
  PROFILE: 'PROFILE',
  PAYMENT_HISTORY: 'PAYMENT_HISTORY',
  GET_PARENTS_INFO: 'GET_PARENTS_INFO',
  UPDATE_PARENTS_INFO: 'UPDATE_PARENTS_INFO',

  ROOM_REGISTER: 'ROOM_REGISTER',
  // chỉnh sửa hồ sơ
  EDIT_PROFILE_DEFAULT: 'EDIT_PROFILE_DEFAULT',
  EDIT_PROFILE_GENERAL: 'EDIT_PROFILE_GENERAL',
  EDIT_PROFILE_IDENTITYIMAGE: 'EDIT_PROFILE_IDENTITYIMAGE',
  EDIT_PROFILE_FAMILY: 'EDIT_PROFILE_FAMILY',
  EDIT_PROFILE_OTHER: 'EDIT_PROFILE_OTHER',

  // detailchat
  DETAIL_CHAT: 'DETAIL_CHAT',
  DETAIL_NEWS: 'DETAIL_NEWS',
};

export const CONSTANTS_KEY = {
  UPDATE_LIST_TICKET: 'UPDATE_LIST_TICKET',
  UPDATE_LIST_IN_WEEK_EVENTS: 'UPDATE_LIST_IN_WEEK_EVENTS',
  UPDATE_LIST_FREE_EVENTS: 'UPDATE_LIST_FREE_EVENTS',
  UPDATE_LIST_CATEGORY: 'UPDATE_LIST_CATEGORY',
  UPDATE_LIST_POPUPAR_EVENTS: 'UPDATE_LIST_POPUPAR_EVENTS',
  UPDATE_CURRENT_TOKEN: 'UPDATE_CURRENT_TOKEN',
  UPDATE_CURRENT_USER_DATA: 'UPDATE_CURRENT_USER_DATA',
  UPDATE_CURRENT_LOCATION: ' UPDATE_CURRENT_LOCATION',
  UPDATE_USER_SETTINGS: '  UPDATE_USER_SETTINGS',
  LOAD_STORE_INFORMATION_FOR_USER: '  LOAD_STORE_INFORMATION_FOR_USER',
  UPDATE_USER_TYPE: '  UPDATE_USER_TYPE',
  SET_LOGGED_IN: '  SET_LOGGED_IN',
  UPDATE_LIST_FRIEND: '  UPDATE_LIST_FRIEND',
  UPDATE_LIST_FOLLOWINGS: '  UPDATE_LIST_FOLLOWINGS',
  UPDATE_LIST_LIKE_CMT: '  UPDATE_LIST_LIKE_CMT',
  UPDATE_LIST_SUGGEST_FRIEND: '  UPDATE_LIST_SUGGEST_FRIEND',
  UPDATE_LIST_SEARCH_FRIEND: '  UPDATE_LIST_SEARCH_FRIEND',
  OUT_OF_DATA_LIST_SUGGEST_FRIEND: '  OUT_OF_DATA_LIST_SUGGEST_FRIEND',
  REFRESH_LIST_SUGGEST_FRIEND: '  REFRESH_LIST_SUGGEST_FRIEND',
  CHANGE_ALWAYS_ACCEPT_INSTANT_PRODUCT: '  CHANGE_ALWAYS_ACCEPT_INSTANT_PRODUCT',
  LOAD_STORE_MEMBER: '  LOAD_STORE_MEMBER',
  CLEAR_DATA: '  CLEAR_DATA',
  REPLACE_LIST_SUGGEST_FRIEND: '  REPLACE_LIST_SUGGEST_FRIEND',
  UPDATE_CURRENT_USER_IMAGE: '  UPDATE_CURRENT_USER_IMAGE',
};
