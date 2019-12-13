Object.defineProperty(exports,"__esModule",{value:!0}),exports.toFileWithPath=toFileWithPath,exports.COMMON_MIME_TYPES=void 0;var COMMON_MIME_TYPES=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);exports.COMMON_MIME_TYPES=COMMON_MIME_TYPES;function toFileWithPath(a,b){var c=withMimeType(a);if("string"!=typeof c.path){var d=a.webkitRelativePath;Object.defineProperty(c,"path",{value:"string"==typeof b?b:"string"==typeof d&&0<d.length?d:a.name,writable:!1,configurable:!1,enumerable:!0})}return c}function withMimeType(a){var b=a.name,c=b&&-1!==b.lastIndexOf(".");if(c&&!a.type){var d=b.split(".").pop().toLowerCase(),e=COMMON_MIME_TYPES.get(d);e&&Object.defineProperty(a,"type",{value:e,writable:!1,configurable:!1,enumerable:!0})}return a}