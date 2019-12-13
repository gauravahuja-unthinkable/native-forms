var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_ScalableImage=_interopRequireDefault(require("./ScalableImage")),_theme=require("../theme"),Logo=function(a){var b=a.logo,c=a.form,d=(0,_react.useMemo)(function(){return new _reactNative.Animated.Value(0)},[]),e=b.url,f=b.link,g=b.size,h=void 0===g?40:g,i=(c||{}).backgroundColor,j=void 0===i?_theme.colors.white:i;(0,_react.useEffect)(function(){_reactNative.Animated.timing(d,{toValue:1,duration:500,easing:_reactNative.Easing.out(_reactNative.Easing.quad),useNativeDriver:!0}).start()},[d]);var k=_react.default.createElement(_reactNative.Animated.View,{style:[{opacity:d}]},_react.default.createElement(_ScalableImage.default,{height:h,source:{uri:e}}));return"web"===_reactNative.Platform.OS&&f?_react.default.createElement(_reactNative.View,{style:[styles.container,{backgroundColor:j}]},_react.default.createElement("a",{href:f,rel:"noopener noreferrer",target:"_blank"},k)):_react.default.createElement(_reactNative.View,{style:[styles.container,{backgroundColor:j}]},_react.default.createElement(_reactNative.TouchableOpacity,{activeOpacity:f?.5:1,onPress:function onPress(){f&&_reactNative.Linking.openURL(f)}},k))},styles=_reactNative.StyleSheet.create({container:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:20,width:"100%"}}),_default=(0,_react.memo)(Logo);exports.default=_default;