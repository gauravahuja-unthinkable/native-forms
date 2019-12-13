var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_theme=require("../theme"),ProgressBar=function(a){var b=a.form,c=(0,_react.useMemo)(function(){return new _reactNative.Animated.Value(0)},[]),d=(b||{}).color,e=void 0===d?_theme.colors.main:d;return(0,_react.useEffect)(function(){_reactNative.Animated.timing(c,{toValue:1,duration:2e3,easing:_reactNative.Easing.linear}).start()},[c]),_react.default.createElement(_reactNative.Animated.View,{style:[styles.container,{backgroundColor:e,width:c.interpolate({inputRange:[0,1],outputRange:["0%","100%"]})}]})},styles=_reactNative.StyleSheet.create({container:{width:"100%",alignSelf:"flex-start",height:2}}),_default=(0,_react.memo)(ProgressBar);exports.default=_default;