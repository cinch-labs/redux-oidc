!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("prop-types"),require("react"),require("oidc-client"));else if("function"==typeof define&&define.amd)define(["prop-types","react","oidc-client"],r);else{var t="object"==typeof exports?r(require("prop-types"),require("react"),require("oidc-client")):r(e["prop-types"],e.react,e["oidc-client"]);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(this,function(e,r,t){return function(e){function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=15)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.USER_EXPIRED="redux-oidc/USER_EXPIRED",r.SILENT_RENEW_ERROR="redux-oidc/SILENT_RENEW_ERROR",r.SESSION_TERMINATED="redux-oidc/SESSION_TERMINATED",r.USER_EXPIRING="redux-oidc/USER_EXPIRING",r.USER_FOUND="redux-oidc/USER_FOUND",r.LOADING_USER="redux-oidc/LOADING_USER",r.USER_SIGNED_OUT="redux-oidc/USER_SIGNED_OUT",r.LOAD_USER_ERROR="redux-oidc/LOAD_USER_ERROR"},function(e,r,t){"use strict";function n(){return{type:l.USER_EXPIRED}}function u(e){return{type:l.USER_FOUND,payload:e}}function o(e){return{type:l.SILENT_RENEW_ERROR,payload:e}}function i(){return{type:l.SESSION_TERMINATED}}function s(){return{type:l.USER_EXPIRING}}function d(){return{type:l.LOADING_USER}}function a(){return{type:l.USER_SIGNED_OUT}}function c(){return{type:l.LOAD_USER_ERROR}}Object.defineProperty(r,"__esModule",{value:!0}),r.userExpired=n,r.userFound=u,r.silentRenewError=o,r.sessionTerminated=i,r.userExpiring=s,r.loadingUser=d,r.userSignedOut=a,r.loadUserError=c;var l=t(0)},function(e,r){e.exports=require("prop-types")},function(e,r){e.exports=require("react")},function(e,r,t){"use strict";function n(e){return new u.UserManager(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var u=t(14)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.loadUserError=r.userSignedOut=r.loadingUser=r.userExpiring=r.sessionTerminated=r.silentRenewError=r.userFound=r.userExpired=r.LOAD_USER_ERROR=r.USER_SIGNED_OUT=r.LOADING_USER=r.USER_EXPIRING=r.SESSION_TERMINATED=r.SILENT_RENEW_ERROR=r.USER_FOUND=r.USER_EXPIRED=r.SignoutCallbackComponent=r.OidcProvider=r.reducer=r.createImmutableReducer=r.CallbackComponent=r.loadUser=r.processSilentRenew=r.createUserManager=void 0;var n=t(11),u=function(e){return e&&e.__esModule?e:{default:e}}(n);r.createUserManager=t(4).default,r.processSilentRenew=t(10).default,r.loadUser=t(9).default,r.CallbackComponent=t(6).default,r.createImmutableReducer=t(12).default,r.reducer=t(13).default,r.OidcProvider=t(7).default,r.SignoutCallbackComponent=t(8).default,r.USER_EXPIRED=t(0).USER_EXPIRED,r.USER_FOUND=t(0).USER_FOUND,r.SILENT_RENEW_ERROR=t(0).SILENT_RENEW_ERROR,r.SESSION_TERMINATED=t(0).SESSION_TERMINATED,r.USER_EXPIRING=t(0).USER_EXPIRING,r.LOADING_USER=t(0).LOADING_USER,r.USER_SIGNED_OUT=t(0).USER_SIGNED_OUT,r.LOAD_USER_ERROR=t(0).LOAD_USER_ERROR,r.userExpired=t(1).userExpired,r.userFound=t(1).userFound,r.silentRenewError=t(1).silentRenewError,r.sessionTerminated=t(1).sessionTerminated,r.userExpiring=t(1).userExpiring,r.loadingUser=t(1).loadingUser,r.userSignedOut=t(1).userSignedOut,r.loadUserError=t(1).loadUserError,r.default=u.default},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var u=t(2),o=n(u),i=t(3),s=n(i),d=function(e){var r=e.children,t=e.userManager,n=e.successCallback,u=e.errorCallback,o=function(e){return n(e)},d=function(e){if(!u)throw new Error("Error handling redirect callback: "+e.message);u(e)};return(0,i.useEffect)(function(){t.signinRedirectCallback().then(o).catch(d)},[]),s.default.Children.only(r)};d.propTypes={children:o.default.element.isRequired,userManager:o.default.object.isRequired,successCallback:o.default.func.isRequired,errorCallback:o.default.func},r.default=d},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var u=t(2),o=n(u),i=t(3),s=n(i),d=t(1),a=function(e){var r=e.children,t=e.userManager,n=e.store,u=function(e){return(void 0).props.store.dispatch((0,d.userFound)(e))},o=function(e){return n.dispatch((0,d.silentRenewError)(e))},a=function(){return n.dispatch((0,d.userExpired)())},c=function(){return n.dispatch((0,d.sessionTerminated)())},l=function(){return n.dispatch((0,d.userExpiring)())},E=function(){return n.dispatch((0,d.userSignedOut)())};return(0,i.useEffect)(function(){return t.events.addUserLoaded(u),t.events.addSilentRenewError(o),t.events.addAccessTokenExpired(a),t.events.addAccessTokenExpiring(l),t.events.addUserUnloaded(c),t.events.addUserSignedOut(E),function(){t.events.removeUserLoaded(u),t.events.removeSilentRenewError(o),t.events.removeAccessTokenExpired(a),t.events.removeAccessTokenExpiring(l),t.events.removeUserUnloaded(c),t.events.removeUserSignedOut(E)}},[]),s.default.Children.only(r)};a.propTypes={children:o.default.node,userManager:o.default.object.isRequired,store:o.default.object.isRequired},r.default=a},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var u=t(2),o=n(u),i=t(3),s=n(i),d=function(e){var r=e.children,t=e.userManager,n=e.successCallback,u=e.errorCallback,o=function(e){return n(e)},i=function(e){if(!u)throw new Error("Error handling redirect callback: "+e.message);u(e)};return useEffect(function(){t.signinRedirectCallback().then(o).catch(i)},[]),s.default.Children.only(r)};d.propTypes={children:o.default.element.isRequired,userManager:o.default.object.isRequired,successCallback:o.default.func.isRequired,errorCallback:o.default.func},r.default=d},function(e,r,t){"use strict";function n(e){a=e}function u(){return a}function o(e){return e&&!e.expired?a.dispatch((0,d.userFound)(e)):(!e||e&&e.expired)&&a.dispatch((0,d.userExpired)()),e}function i(e){console.error("redux-oidc: Error in loadUser() function: "+e.message),a.dispatch((0,d.loadUserError)())}function s(e,r){if(!e||!e.dispatch)throw new Error("redux-oidc: You need to pass the redux store into the loadUser helper!");if(!r||!r.getUser)throw new Error("redux-oidc: You need to pass the userManager into the loadUser helper!");return a=e,e.dispatch((0,d.loadingUser)()),r.getUser().then(o).catch(i)}Object.defineProperty(r,"__esModule",{value:!0}),r.setReduxStore=n,r.getReduxStore=u,r.getUserCallback=o,r.errorCallback=i,r.default=s;var d=t(1),a=void 0},function(e,r,t){"use strict";function n(){(0,o.default)().signinSilentCallback()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var u=t(4),o=function(e){return e&&e.__esModule?e:{default:e}}(u)},function(e,r,t){"use strict";function n(e){r.nextMiddleware=R=e}function u(){return R}function o(e){r.storedUser=f=e}function i(){r.storedUser=f=null}function s(e){!e||e.expired?R((0,l.userExpired)()):(r.storedUser=f=e,R((0,l.userFound)(e)))}function d(e){console.error("redux-oidc: Error loading user in oidcMiddleware: "+e.message),R((0,l.loadUserError)())}function a(e,t,n){return t.type===E.USER_EXPIRED||t.type===E.LOADING_USER||t.type===E.USER_FOUND?e(t):(r.nextMiddleware=R=e,f&&!f.expired||(e((0,l.loadingUser)()),n.getUser().then(s).catch(d)),e(t))}function c(e){if(!e||!e.getUser)throw new Error("You must provide a user manager!");return function(r){return function(r){return function(t){return a(r,t,e)}}}}Object.defineProperty(r,"__esModule",{value:!0}),r.nextMiddleware=r.storedUser=void 0,r.setNext=n,r.getNext=u,r.setStoredUser=o,r.removeStoredUser=i,r.getUserCallback=s,r.errorCallback=d,r.middlewareHandler=a,r.default=c;var l=t(1),E=t(0),f=r.storedUser=null,R=r.nextMiddleware=null},function(e,r,t){"use strict";function n(e){try{var r=e.fromJS,t=e.Seq,n=function e(r){return"object"!==(void 0===r?"undefined":u(r))||null===r?r:Array.isArray(r)?t(r).map(e).toList():t(r).map(e).toMap()},i=r({user:null,isLoadingUser:!1});return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case o.USER_EXPIRED:case o.SILENT_RENEW_ERROR:case o.SESSION_TERMINATED:case o.USER_SIGNED_OUT:return r({user:null,isLoadingUser:!1});case o.USER_FOUND:return n({user:t.payload,isLoadingUser:!1});case o.LOADING_USER:return e.set("isLoadingUser",!0);default:return e}}}catch(e){}}Object.defineProperty(r,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=n;var o=t(0)},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments[1];switch(r.type){case o.USER_EXPIRED:case o.SILENT_RENEW_ERROR:return Object.assign({},u({},e),{user:null,isLoadingUser:!1});case o.SESSION_TERMINATED:case o.USER_SIGNED_OUT:return Object.assign({},u({},e),{user:null,isLoadingUser:!1});case o.USER_FOUND:return Object.assign({},u({},e),{user:r.payload,isLoadingUser:!1});case o.LOADING_USER:return Object.assign({},u({},e),{isLoadingUser:!0});default:return e}}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.default=n;var o=t(0),i={user:null,isLoadingUser:!1}},function(e,r){e.exports=require("oidc-client")},function(e,r,t){e.exports=t(5)}])});