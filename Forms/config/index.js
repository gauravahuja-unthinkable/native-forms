Object.defineProperty(exports,"__esModule",{value:!0}),exports.config=void 0;var env=process.env.REACT_APP_ENV;window._env=env;var config={};exports.config=config,config.LOCATION_API_URL="https://pro.ip-api.com/json/?key=kgNLgHSjzWRCLx5",config.NATIVE_FORMS_ADDRESS="https://nativeforms.com",config.MAX_UPLOAD_FILES_NUMBER=5,"labs"===env&&(config.SERVER_URL="https://us-central1-nativeforms-labs.cloudfunctions.net/backend"),"production"===env&&(config.SERVER_URL="https://us-central1-nativeforms-prod.cloudfunctions.net/backend"),env||(config.SERVER_URL="https://us-central1-nativeforms-prod.cloudfunctions.net/backend");