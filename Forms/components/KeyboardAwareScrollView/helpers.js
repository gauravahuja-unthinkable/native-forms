var _reactNative=require("react-native");Object.defineProperty(exports,"__esModule",{value:!0}),exports.isIphoneX=isIphoneX,exports.ifIphoneX=ifIphoneX,exports.getStatusBarHeight=getStatusBarHeight,exports.getBottomSpace=getBottomSpace;function isIphoneX(){var a=_reactNative.Dimensions.get("window");return"ios"===_reactNative.Platform.OS&&!_reactNative.Platform.isPad&&!_reactNative.Platform.isTVOS&&(812===a.height||812===a.width||896===a.height||896===a.width)}function ifIphoneX(a,b){return isIphoneX()?a:b}function getStatusBarHeight(a){return _reactNative.Platform.select({ios:ifIphoneX(a?44:30,20),android:_reactNative.StatusBar.currentHeight,default:0})}function getBottomSpace(){return isIphoneX()?34:0}