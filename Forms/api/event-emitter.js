Object.defineProperty(exports,"__esModule",{value:!0}),exports.form_send=exports.form_loaded=exports.form_fetched=exports.form_closed=void 0;var form_closed=function(){var a=JSON.stringify({nf_event:{event:"form_closed"}});send_event(a)};exports.form_closed=form_closed;var form_fetched=function(a){var b=JSON.stringify({nf_event:{event:"form_fetched",form:JSON.stringify(a)}});send_event(b)};exports.form_fetched=form_fetched;var form_loaded=function(){var a=JSON.stringify({nf_event:{event:"form_loaded"}});send_event(a)};exports.form_loaded=form_loaded;var form_send=function(a,b){var c=JSON.stringify({nf_event:{event:"form_send",form:JSON.stringify(a),json:JSON.stringify(b)}});send_event(c)};exports.form_send=form_send;var send_event=function(a){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(a),window.parent&&window.parent.postMessage(a,"*"),window.opener&&window.opener.postMessage(a,"*"),window.postMessage&&window.postMessage(a,"*")};