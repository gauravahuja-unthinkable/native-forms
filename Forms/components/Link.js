var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),Link=function(a){var b=a.href,c=a.label,d=a.style;return"web"===_reactNative.Platform.OS?_react.default.createElement("a",{style:d,href:b,rel:"noopener noreferrer",target:"_blank"},c):_react.default.createElement(_reactNative.TouchableOpacity,{activeOpacity:.5,onPress:function onPress(){b&&_reactNative.Linking.openURL(b)}},_react.default.createElement(_reactNative.Text,{style:d},c))},_default=(0,_react.memo)(Link);exports.default=_default;