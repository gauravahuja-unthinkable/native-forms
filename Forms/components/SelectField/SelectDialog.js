var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_react=_interopRequireWildcard(require("react")),_reactNative=require("react-native"),_theme=require("../../theme"),_Dimensions$get=_reactNative.Dimensions.get("window"),width=_Dimensions$get.width,height=_Dimensions$get.height,radioOn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAB20lEQVR4AeXWMSwEQRSA4f8K7MlBd9RAX7mrNEhEJVSyDY3itnF6KkKBBhI0FDQSog+9viDBiYOABqJykpfXzGRn7NW+qebNy2R3Z+bN8j/lWeOMEt98UuKMVfJUKaDAFZWYdkVEQEIhT1Q87YmQBGaoaHtli0G6ydBAF0Ns8oaOMQt+G5p4wyQ12GqZ5FYzNvCY16RDAlwCDjRrHodxTVjhL8uaOU6MgBcZPCYFoJrppUCBXpoBVIojyX0mDbaiDJWpB9XCnrFa+2RB1VOWWBFsDzIQguqQVLOV6QAVSuQBS49uN1QLd7F76I5WlG7ZHgwLElwGtevcjrvWJ1/AcCLBARBN/Dgn+qEJRL/0TzBcSLATxLD3iIyC6JTeOYZPCTYaK+hqRRCN0vvA8C7BDIhp70TTIDLSe/e92oh3ohHj1S4wnEqwv6qP3Sf9UwyLElwCteOcaAfUUtzy5yV4DSrr3JBZa0PmMKS4l/AYqLbYI9IOakwi96SwTGEf2iz7zkOb1ieeAluaZxk6wi4jERF2GTl2lxGYSFzYVjRzAoe5RKX2ULPm8FjTpNKfxX+9mutom0G6aNDraCvxdaRCHr1H5JGQhAIiLmMnuSSijirl0J8IvvQnIsd/9Au7j6tL7y7GNwAAAABJRU5ErkJggg==",radioOff="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABfElEQVR4AeXWxVGtQRCG4fc6nsWVDJD1dciAwt0tANjg7p4BTgCwJwHc3R1WWFdv5uhMFTuef9f99fHT8/M2xdHDHOvcc8M6c3QTh6MQClnl0ce1ShEhWErikMcA1yFJWKhEBzhhiP/8IIJIvpPAIKdojyqC6NPgBrl8wtNnctnSRB8B1GpoghD8CWFUU7X4ka6BNoJp1WQ6PoRwLM1p3hHMOyYle0QoXiqktU0YNsLYlnwFXvakkYStJMnvYSJGf24O9Ccbg6Feiq040I+8HsOMFP/g4rfMzGBYlOI3XHyTmQUMN1KMwkWUzFxjuJJiBC4iZObqtd7aIoZZKf7GxS+ZmcXQIMUWXLT4+vrjpLjm/oMkFsM7dqWciK1Eye/yDhPlTn/aUHYkX+6rdSStSas1Mu1/jUCG9WJr02QGftRYrdoJTdUQQI+G1oMu/16X42iY/3wnUo+jIYfjSCSxH/CA3CcJSyEUseLzQVYo4guOYtGbCG71JiKWt+gJOQ779wc+6p0AAAAASUVORK5CYII=",footer="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiYAAAAKBAMAAAByEYgRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf///////////////////////////////////////////////////1G6/RIAAAAMdFJOUxrytXP7SpfP49BImM+LArwAAAEfSURBVEjH7U7BTQQxDHQLtEALtEAL+aSA+1wBkTugg8gF5OMC9kMLFMWMnUVckO5AfDOrOF5nZjwiGz9QblFLHV6jGzWO44xSUHHQYICu+KngqDpZ1PCqFSrOceOXb4MzMkd6BDeqD2rcaVi5JTS5MWX88xkuYo0RHc1ydLY+/VPDrfBhVGYPSiZiTqajrU+rQllK5WVjhVxucVz+i+tq8mvL97uvf0t2fL+PjPWQOTnyvLFCmrZAV57eFECNr8VM48mUz6rNgoA3a7iNUuMQbW+9Tz9NR3adLMst0MDHDEYQ9CS2WBo1VrCAb7RUOlNnmtadi/n7Je0xzaXYGXGTyUE0Z4K5u5lRn3xaZN5YiCJvGyvkaWOFvG6skI+NFZ+db5GnlPUrwQAAAABJRU5ErkJggg==",SelectDialog=function(a){var b=a.items,c=a.onClose,d=a.onSelect,e=a.value,f=a.header,g=(0,_react.useState)(""),h=(0,_slicedToArray2.default)(g,2),i=h[0],j=h[1],k=(0,_react.useMemo)(function(){return new _reactNative.Animated.Value(0)},[]),l=(0,_react.useState)(new _reactNative.Animated.Value(.5)),m=(0,_slicedToArray2.default)(l,1),n=m[0],o=(0,_react.useMemo)(function(){return b.filter(function(a){return a.toLowerCase().includes(i.toLowerCase())})},[b,i]);(0,_react.useEffect)(function(){_reactNative.Animated.parallel([_reactNative.Animated.timing(k,{toValue:1,duration:300,easing:_reactNative.Easing.out(_reactNative.Easing.quad),useNativeDriver:!0}),_reactNative.Animated.timing(n,{toValue:1,duration:300,easing:_reactNative.Easing.out(_reactNative.Easing.quad),useNativeDriver:!0})]).start()},[k,n]);var p=function(a){d(a),c()};return _react.default.createElement(_reactNative.TouchableOpacity,{activeOpacity:1,onPress:function closeDialog(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),c()},style:styles.overlay},_react.default.createElement(_reactNative.TouchableWithoutFeedback,null,_react.default.createElement(_reactNative.KeyboardAvoidingView,{behavior:"padding",keyboardVerticalOffset:160,style:styles.keyboard},_react.default.createElement(_reactNative.Animated.View,{style:[{opacity:k,transform:[{scale:n}]},styles.container]},f&&_react.default.createElement(_reactNative.Text,{style:styles.header},f),_react.default.createElement(_reactNative.FlatList,{style:styles.itemsContainer,data:o,renderItem:function renderItem(a){var b=a.item;return _react.default.createElement(_reactNative.TouchableOpacity,{style:styles.itemContainer,key:b,onPress:function onPress(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),p(b)}},_react.default.createElement(_reactNative.Image,{style:styles.radio,source:{uri:b===e?radioOn:radioOff}}),_react.default.createElement(_reactNative.Text,{style:styles.item},b))},ListEmptyComponent:_react.default.createElement(_reactNative.Text,{style:styles.empty},"No results..."),keyExtractor:function keyExtractor(a){return a}}),6<=o.length&&_react.default.createElement(_reactNative.Image,{style:styles.blinder,source:{uri:footer}}),6<=b.length&&_react.default.createElement(_reactNative.TextInput,{value:i,onChangeText:function onChangeText(a){return j(a)},numberOfLines:1,maxLength:1e3,selectionColor:_theme.colors.primary,underlineColorAndroid:"transparent",textAlignVertical:"top",placeholder:"Search...",style:styles.input})))))},styles=_reactNative.StyleSheet.create({overlay:{position:"web"===_reactNative.Platform.OS?"fixed":"absolute",top:0,left:0,right:0,bottom:0,width:width,height:"100%",zIndex:9999999,elevation:9,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:_theme.colors.overlay,minHeight:height,maxHeight:height},keyboard:{width:"90%",flexDirection:"column",backgroundColor:"transparent"},container:{width:"100%",flexDirection:"column",backgroundColor:_theme.colors.white,borderRadius:6},itemsContainer:{width:"100%",flexDirection:"column",maxHeight:308},header:{fontSize:20,lineHeight:26,color:_theme.colors.primary,fontWeight:"bold",padding:16,paddingBottom:8},itemContainer:{display:"flex",flexDirection:"row",alignItems:"center",paddingHorizontal:16,paddingVertical:16},item:{fontSize:17,color:_theme.colors.primary,fontWeight:"500",paddingLeft:12},radio:{width:22,height:22},empty:{padding:16,color:_theme.colors.grey,fontSize:17},input:{paddingHorizontal:16,paddingVertical:16,width:"100%",fontSize:17,backgroundColor:_theme.colors.white,color:_theme.colors.primary,borderBottomLeftRadius:6,borderBottomRightRadius:6,marginTop:12},blinder:{position:"absolute",bottom:64,width:"99.5%",left:1,zIndex:999999,height:16}}),_default=(0,_react.memo)(SelectDialog);exports.default=_default;