var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_theme=require("../theme"),_AcceptPolicy=_interopRequireDefault(require("./AcceptPolicy")),Footer=function(a){var b=a.color,c=void 0===b?_theme.colors.main:b,d=a.isSending,e=a.sendForm,f=a.button,g=a.submitButton,h=a.setSendingError,i=a.isPreview,j=a.form,k={backgroundColor:c||_theme.colors.main};return _react.default.createElement(_reactNative.View,{style:styles.container},j.legal&&_react.default.createElement(_AcceptPolicy.default,{isPreview:i,setSendingError:h,form:j}),_react.default.createElement(_reactNative.View,{style:[styles.submitContainer,{opacity:d?.6:1}]},_react.default.createElement(_reactNative.TouchableOpacity,{activeOpacity:d?1:.8,style:[k,styles.submitButton],onPress:e},d?_react.default.createElement(_reactNative.ActivityIndicator,{size:"small",color:_theme.colors.white}):_react.default.createElement(_reactNative.Text,{style:styles.submitText},g||f))))},styles=_reactNative.StyleSheet.create({container:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},submitContainer:{display:"flex",width:"100%",maxWidth:_theme.MAX_FORM_WIDTH,paddingVertical:12,paddingHorizontal:22},submitButton:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:6,paddingHorizontal:20,paddingVertical:14,width:"100%",maxHeight:46},submitText:{fontSize:16,color:_theme.colors.white,fontWeight:"bold"}}),_default=(0,_react.memo)(Footer);exports.default=_default;