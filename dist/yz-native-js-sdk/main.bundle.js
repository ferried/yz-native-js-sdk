/*!
 * 
 *   YzPlatForm v0.1.26
 *   provide the native function call API of yunzai mobile platform for the third party.
 *   Copyright (c) 2019 河北云在, https://github.com/ferried/yz-native-js-sdk
 *   
 */
!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.YzDevice=o():t.YzDevice=o()}(window,(function(){return function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){"use strict";e.r(o);var n,r=function(t){this.option=t};!function(t){t.ALBUM="album",t.CAMERA="camera"}(n||(n={}));
/*
 * @Date: 2020-02-03 16:11:51
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors: ferried
 * @LastEditTime: 2020-09-21 09:53:23
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
var i,c=function(t,o,e,n){var r=new XMLHttpRequest;"GET"===t.toUpperCase()&&(console.log(t,":","url"),r.open(t,o),r.withCredentials=!0,n&&n.TOKEN_TYPE&&n.TOKEN_VALUE&&r.setRequestHeader(n.TOKEN_TYPE,n.TOKEN_VALUE),r.send(null)),r.onreadystatechange=function(){if(4==r.readyState&&200==r.status)return e(r.responseText)}},s=(i=function(t,o){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}i(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),u=function(t){function o(o){return t.call(this,o)||this}return s(o,t),o.prototype.getUser=function(){var t=this;return new Promise((function(o,e){return c("GET",t.option.GATE_WAY+"/auth/user",(function(t){o(JSON.parse(t).principal)}),t.option)}))},o.prototype.auth=function(){return new Promise((function(t,o){t(yz.getTokenSync())}))},o.prototype.apiRegister=function(){},o.prototype.setNavigationBarRightItems=function(t){yz.setNavigationBarRightItems(t)},o.prototype.setNavigationBarTitle=function(t){yz.setNavigationBarTitle(t)},o.prototype.openWindow=function(t){yz.navigationOpenWindow(t)},o.prototype.setWebCanShare=function(t){yz.setWebCanShare(t)},o.prototype.openMediaCameraAsync=function(t){return new Promise((function(o,e){yz.openCamera({success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.scanQrCodeAsync=function(t){return new Promise((function(o,e){yz.scanCode({success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(o)},complete:function(o){t&&t.complete&&t.complete(o)}})}))},o.prototype.chooseContactsAsync=function(t){return new Promise((function(o,e){var n={success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}};t&&t.count&&(n=Object.defineProperties(n,{count:{value:t.count}})),yz.chooseContacts(n)}))},o.prototype.getContactsInfoAsync=function(t){yz.ContactDetails({targetUserId:t.targetUserId,success:function(o){t&&t.success&&t.success(o)},fail:function(o){t&&t.fail&&t.fail(o)},complete:function(o){t&&t.complete&&t.complete(o)}})},o.prototype.uploadPhotoAsync=function(t){return new Promise((function(o,e){var r={success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o)},complete:function(o){t&&t.complete&&t.complete(o)}};t&&t.count&&Object.defineProperties(r,{count:{value:t.count}}),t&&t.sourceType?Object.defineProperties(r,{sourceType:{value:t.sourceType}}):Object.defineProperties(r,{sourceType:{value:[n.ALBUM,n.CAMERA]}}),yz.uploadImage(r)}))},o.prototype.userLocationAsync=function(t){return new Promise((function(o,e){yz.userLocation({success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.userLocationWifiAsync=function(t){return new Promise((function(o,e){yz.userLocationContainAp({bssids:t.bssids,success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.getWifiInfoAsync=function(t){return new Promise((function(o,e){yz.getWifiInfo({success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.getWifiMacAsync=function(t){return new Promise((function(o,e){yz.getMac({success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.faceCollectionAsync=function(t){return new Promise((function(o,e){yz.faceLiveCollection({live:t.live,userId:t.userId,success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.faceCompareAsync=function(t){return new Promise((function(o,e){yz.faceCompare({userId:t.userId,success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.wechatPayAsync=function(t){return new Promise((function(o,e){yz.wechatPay({payInfo:{appid:t.appid,partnerid:t.partnerid,prepayid:t.prepayid,package:t.package,noncestr:t.noncestr,timestamp:t.timestamp,sign:t.sign},success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.aliPayAsync=function(t){return new Promise((function(o,e){yz.aliPay({payInfo:t,success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.openReadWithTimer=function(t){return new Promise((function(o,e){yz.openReadWithTimer({url:t.url,openType:t.openType,title:t.title,id:t.id,type:t.type,success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.getDeviceInfo=function(t){return new Promise((function(o,e){yz.getDeviceInfo({success:function(e){t&&t.success&&t.success(e),o(e)},fail:function(o){t&&t.fail&&t.fail(o),e(!1)},complete:function(o){t&&t.complete&&t.complete(o),e(!1)}})}))},o.prototype.fileBrowser=function(t){return new Promise((function(o,e){yz.fileBrowser({url:t.url,title:t.title,success:function(e){t.success(e),o(e)},fail:function(o){t.fail(o),e(o)},complete:function(){t.complete(),o("complete")}})}))},o.prototype.downloadByBrowser=function(t){return new Promise((function(o,e){yz.downloadByBrowser({url:t.url,success:function(){t.success(),o(!0)},fail:function(o){t.fail(o),e(o)},complete:function(){t.complete(),o("complete")}})}))},o}(r),a=["updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","onMenuShareQZone","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","translateVoice","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"],p=function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),f=function(){return(f=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var r in o=arguments[e])Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t}).apply(this,arguments)},y=function(t){function o(o){return t.call(this,o)||this}return p(o,t),o.prototype.auth=function(){var t=this;return new Promise((function(o,e){var n=t.option.GATE_WAY+"/wechat/mp/token?url="+encodeURIComponent(window.location.href);c("GET",n,(function(t){500===JSON.parse(t).error_code&&(window.location.href=JSON.parse(t).path);var e={accessToken:JSON.parse(t).message};o(e)}))}))},o.prototype.apiRegister=function(){c("GET",this.option.GATE_WAY+"/wechat/mp/jssdk?url="+window.location.href.split("#")[0],(function(t){var o=JSON.parse(t);o.debug=!1,o.jsApiList=a,wx.config(f({},o))}),this.option)},o.prototype.setNavigationBarRightItems=function(t){},o.prototype.setNavigationBarTitle=function(t){document.getElementsByTagName("title")[0].innerText=t.title},o.prototype.openWindow=function(t){window.location.href=t.url},o.prototype.setWebCanShare=function(t){},o.prototype.getUser=function(){var t=this;return new Promise((function(o,e){c("GET",t.option.GATE_WAY+"/auth/user",(function(t){o(JSON.parse(t).principal)}),t.option)}))},o.prototype.openMediaCameraAsync=function(t){},o.prototype.scanQrCodeAsync=function(t){return new Promise((function(o,e){wx.ready((function(){wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(n){"scanQRCode:ok"===n.errMsg?(t&&t.success&&t.success(n.resultStr),o(n.resultStr)):(t&&t.fail&&t.fail("NativeJSSDK Error:error to scan qrcode"),e("NativeJSSDK Error:error to scan qrcode"))}})}))}))},o.prototype.chooseContactsAsync=function(t){},o.prototype.getContactsInfoAsync=function(t){},o.prototype.uploadPhotoAsync=function(t){},o.prototype.userLocationAsync=function(t){return new Promise((function(o,e){wx.ready((function(){wx.getLocation({type:"wgs84",success:function(n){if("getLocation:ok"===n.errMsg){var r=n.latitude,i=n.longitude;o({latitude:r,longitude:i,address:"微信无address"}),t&&t.success&&(t.success({latitude:r,longitude:i,address:"微信无address"}),o({latitude:r,longitude:i,address:"微信无address"}))}else t&&t.fail&&t.fail("NativeJSSDK Error:error to get location!"),e("NativeJSSDK Error:error to get location!")}})}))}))},o.prototype.userLocationWifiAsync=function(t){},o.prototype.getWifiInfoAsync=function(t){},o.prototype.getWifiMacAsync=function(t){},o.prototype.faceCollectionAsync=function(t){},o.prototype.faceCompareAsync=function(t){},o.prototype.wechatPayAsync=function(t){},o.prototype.aliPayAsync=function(t){},o.prototype.openReadWithTimer=function(t){},o.prototype.getDeviceInfo=function(t){},o.prototype.fileBrowser=function(t){return alert("微信请在打开页面后,选择右上角选择浏览器打开!"),Promise.resolve(!0)},o.prototype.downloadByBrowser=function(t){return alert("微信请在打开页面后,选择右上角选择浏览器打开!"),Promise.resolve(!0)},o}(r);var l=function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),d=function(t){function o(o){return t.call(this,o)||this}return l(o,t),o.prototype.auth=function(){var t=this,o=encodeURIComponent(window.location.href.toString());return new Promise((function(e,n){c("GET",t.option.GATE_WAY+"/cas-proxy/app/validate_full?callback="+o+"&timestamp="+(new Date).getTime(),(function(t){var o=JSON.parse(t);switch(o.errcode){case 2e3:e({accessToken:o.data.access_token,tokenType:o.data.token_type,scope:o.data.scope,tokenDateLine:o.data.expires_in});break;case 2001:window.location.href=o.msg;break;case 2002:alert(o.data);break;case 2003:case 5e3:case 5001:alert(o.msg)}}))}))},o.prototype.getUser=function(){var t=this;return new Promise((function(o,e){c("GET",t.option.GATE_WAY+"/auth/user",(function(t){o(t.principal)}),t.option)}))},o.prototype.apiRegister=function(){console.warn("browser hasn't api register")},o.prototype.setNavigationBarRightItems=function(t){},o.prototype.setNavigationBarTitle=function(t){},o.prototype.openWindow=function(t){},o.prototype.setWebCanShare=function(t){},o.prototype.openMediaCameraAsync=function(t){},o.prototype.scanQrCodeAsync=function(t){},o.prototype.chooseContactsAsync=function(t){},o.prototype.getContactsInfoAsync=function(t){},o.prototype.uploadPhotoAsync=function(t){},o.prototype.userLocationAsync=function(t){return new Promise((function(t,o){t({address:"brwoser hasn't location",latitude:0,longitude:0})}))},o.prototype.userLocationWifiAsync=function(t){},o.prototype.getWifiInfoAsync=function(t){},o.prototype.getWifiMacAsync=function(t){},o.prototype.faceCollectionAsync=function(t){},o.prototype.faceCompareAsync=function(t){},o.prototype.wechatPayAsync=function(t){},o.prototype.aliPayAsync=function(t){},o.prototype.openReadWithTimer=function(t){},o.prototype.getDeviceInfo=function(t){},o.prototype.fileBrowser=function(t){return window.open(t.url),Promise.resolve(!0)},o.prototype.downloadByBrowser=function(t){return window.open(t.url),Promise.resolve(!0)},o}(r),m=function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),h=function(){return(h=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var r in o=arguments[e])Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t}).apply(this,arguments)},g=function(t){function o(o){return t.call(this,o)||this}return m(o,t),o.prototype.auth=function(){var t={accessToken:window.location.href.split("accessToken=")[1].split("&")[0]};return Promise.resolve(t)},o.prototype.apiRegister=function(){c("GET",this.option.GATE_WAY+"/wechat/mp/jssdk?url="+window.location.href.split("#")[0],(function(t){var o=JSON.parse(t);o.debug=!1,o.jsApiList=a,wx.config(h({},o))}),this.option)},o.prototype.getUser=function(){var t=this;return new Promise((function(o,e){c("GET",t.option.GATE_WAY+"/auth/user",(function(t){o(t.principal)}),t.option)}))},o.prototype.setNavigationBarRightItems=function(t){},o.prototype.setNavigationBarTitle=function(t){document.getElementsByTagName("title")[0].innerText=t.title},o.prototype.openWindow=function(t){},o.prototype.setWebCanShare=function(t){},o.prototype.openMediaCameraAsync=function(t){},o.prototype.scanQrCodeAsync=function(t){return new Promise((function(o,e){wx.ready((function(){wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(n){"scanQRCode:ok"===n.errMsg?(t&&t.success&&t.success(n.resultStr),o(n.resultStr)):(t&&t.fail&&t.fail("NativeJSSDK Error:error to scan qrcode"),e("NativeJSSDK Error:error to scan qrcode"))}})}))}))},o.prototype.chooseContactsAsync=function(t){},o.prototype.getContactsInfoAsync=function(t){},o.prototype.uploadPhotoAsync=function(t){},o.prototype.userLocationAsync=function(t){return new Promise((function(o,e){wx.ready((function(){wx.getLocation({type:"wgs84",success:function(n){if("getLocation:ok"===n.errMsg){var r=n.latitude,i=n.longitude;o({latitude:r,longitude:i,address:"微信无address"}),t&&t.success&&t.success({latitude:r,longitude:i,address:"微信无address"})}else t&&t.fail&&t.fail("NativeJSSDK Error:error to get location!"),e("NativeJSSDK Error:error to get location!")}})}))}))},o.prototype.userLocationWifiAsync=function(t){},o.prototype.getWifiInfoAsync=function(t){},o.prototype.getWifiMacAsync=function(t){},o.prototype.faceCollectionAsync=function(t){},o.prototype.faceCompareAsync=function(t){},o.prototype.wechatPayAsync=function(t){},o.prototype.aliPayAsync=function(t){},o.prototype.openReadWithTimer=function(t){},o.prototype.getDeviceInfo=function(t){},o.prototype.fileBrowser=function(t){return alert("微信请在右上角选择浏览器打开!"),Promise.resolve(!0)},o.prototype.downloadByBrowser=function(t){return alert("微信请在右上角选择浏览器打开!"),Promise.resolve(!0)},o}(r),w=function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),A=function(t){function o(o){return t.call(this,o)||this}return w(o,t),o.prototype.auth=function(){return new Promise((function(t,o){UniJsBridge.callHandler("getToken",{},(function(o){console.log("getToken response:",JSON.stringify(o));var e={};e.tokenType=o.data.token_type,e.accessToken=o.data.access_token,e.scope=o.data.scope,e.tokenDateLine=o.data.expires_in;var n={accessToken:e.accessToken};t(n)}))}))},o.prototype.apiRegister=function(){},o.prototype.setNavigationBarRightItems=function(t){},o.prototype.setNavigationBarTitle=function(t){document.getElementsByTagName("title")[0].innerText=t.title},o.prototype.openWindow=function(t){window.location.href=t.url},o.prototype.setWebCanShare=function(t){},o.prototype.getUser=function(){var t=this;return new Promise((function(o,e){c("GET",t.option.GATE_WAY+"/auth/user",(function(t){o(JSON.parse(t).principal)}),t.option)}))},o.prototype.openMediaCameraAsync=function(t){},o.prototype.scanQrCodeAsync=function(t){return new Promise((function(t,o){UniJsBridge.callHandler("clickScan",{},(function(o){console.log("clickScan response:",JSON.stringify(o));var e=o.data.result;t(e)}))}))},o.prototype.chooseContactsAsync=function(t){},o.prototype.getContactsInfoAsync=function(t){},o.prototype.uploadPhotoAsync=function(t){},o.prototype.userLocationAsync=function(t){return new Promise((function(t,o){UniJsBridge.callHandler("userLocation",{type:"wgs84"},(function(o){console.log("userLocation response:",JSON.stringify(o));var e=o.data,n=e.latitude,r=e.longitude;t({latitude:n,longitude:r,address:"暂无address"})}))}))},o.prototype.userLocationWifiAsync=function(t){},o.prototype.getWifiInfoAsync=function(t){},o.prototype.getWifiMacAsync=function(t){},o.prototype.faceCollectionAsync=function(t){},o.prototype.faceCompareAsync=function(t){},o.prototype.wechatPayAsync=function(t){},o.prototype.aliPayAsync=function(t){},o.prototype.openReadWithTimer=function(t){},o.prototype.getDeviceInfo=function(t){},o.prototype.fileBrowser=function(t){return alert("微信请在打开页面后,选择右上角选择浏览器打开!"),Promise.resolve(!0)},o.prototype.downloadByBrowser=function(t){return alert("微信请在打开页面后,选择右上角选择浏览器打开!"),Promise.resolve(!0)},o}(r),v=function(){var t=function(o,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(o,e)};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),P=function(t){function o(o){var e=t.call(this,o)||this;return e.proxy=e.distribute(o),e}return v(o,t),o.prototype.distribute=function(t){var o=window.navigator.userAgent.toLowerCase();return/miniprogram/.test(o)?new g(t):/yunzai_im/.test(o)?new A(t):/micromessenger/.test(o)?new y(t):/iphone/.test(o)&&/mobile/.test(o)&&/yunzai/.test(o)||/android/.test(o)&&/mobile/.test(o)&&/yunzai/.test(o)||/linux/.test(o)&&/yunzai/.test(o)?new u(t):new d(t)},o.prototype.getUser=function(){return this.proxy.getUser()},o.prototype.auth=function(){return this.proxy.auth()},o.prototype.apiRegister=function(){this.proxy.apiRegister()},o.prototype.openWindow=function(t){this.proxy.openWindow(t)},o.prototype.setNavigationBarTitle=function(t){this.proxy.setNavigationBarTitle(t)},o.prototype.setNavigationBarRightItems=function(t){this.proxy.setNavigationBarRightItems(t)},o.prototype.setWebCanShare=function(t){this.proxy.setWebCanShare(t)},o.prototype.openMediaCameraAsync=function(t){return this.proxy.openMediaCameraAsync(t)},o.prototype.scanQrCodeAsync=function(t){return this.proxy.scanQrCodeAsync(t)},o.prototype.chooseContactsAsync=function(t){return this.proxy.chooseContactsAsync(t)},o.prototype.getContactsInfoAsync=function(t){this.proxy.getContactsInfoAsync(t)},o.prototype.uploadPhotoAsync=function(t){return this.proxy.uploadPhotoAsync(t)},o.prototype.userLocationAsync=function(t){return this.proxy.userLocationAsync(t)},o.prototype.userLocationWifiAsync=function(t){return this.proxy.userLocationWifiAsync(t)},o.prototype.getWifiInfoAsync=function(t){return this.proxy.getWifiInfoAsync(t)},o.prototype.getWifiMacAsync=function(t){return this.proxy.getWifiMacAsync(t)},o.prototype.faceCollectionAsync=function(t){return this.proxy.faceCollectionAsync(t)},o.prototype.faceCompareAsync=function(t){return this.proxy.faceCompareAsync(t)},o.prototype.wechatPayAsync=function(t){return this.proxy.wechatPayAsync(t)},o.prototype.aliPayAsync=function(t){return this.proxy.aliPayAsync(t)},o.prototype.openReadWithTimer=function(t){return this.proxy.openReadWithTimer(t)},o.prototype.getDeviceInfo=function(t){return this.proxy.getDeviceInfo(t)},o.prototype.fileBrowser=function(t){return this.proxy.fileBrowser(t)},o.prototype.downloadByBrowser=function(t){return this.proxy.downloadByBrowser(t)},o}(r);o.default=P}]).default}));