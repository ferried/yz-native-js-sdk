/*!
 * 
 *   YzPlatForm v0.1.26
 *   provide the native function call API of yunzai mobile platform for the third party.
 *   Copyright (c) 2019 河北云在, https://github.com/ferried/yz-native-js-sdk
 *   
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.YzDevice=e():t.YzDevice=e()}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);var n,r=function(t){this.option=t};!function(t){t.ALBUM="album",t.CAMERA="camera"}(n||(n={}));
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
var i,c=function(t,e,o,n){var r=new XMLHttpRequest;"GET"===t.toUpperCase()&&(console.log(t,":","url"),r.open(t,e),r.withCredentials=!0,n&&n.TOKEN_TYPE&&n.TOKEN_VALUE&&r.setRequestHeader(n.TOKEN_TYPE,n.TOKEN_VALUE),r.send(null)),r.onreadystatechange=function(){if(4==r.readyState&&200==r.status)return o(r.responseText)}},s=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=function(t){function e(e){return t.call(this,e)||this}return s(e,t),e.prototype.getUser=function(){var t=this;return new Promise((function(e,o){return c("GET",t.option.GATE_WAY+"/auth/user",(function(t){e(JSON.parse(t).principal)}),t.option)}))},e.prototype.auth=function(){return new Promise((function(t,e){t(yz.getTokenSync())}))},e.prototype.apiRegister=function(){},e.prototype.setNavigationBarRightItems=function(t){yz.setNavigationBarRightItems(t)},e.prototype.setNavigationBarTitle=function(t){yz.setNavigationBarTitle(t)},e.prototype.openWindow=function(t){yz.navigationOpenWindow(t)},e.prototype.setWebCanShare=function(t){yz.setWebCanShare(t)},e.prototype.openMediaCameraAsync=function(t){return new Promise((function(e,o){yz.openCamera({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.scanQrCodeAsync=function(t){return new Promise((function(e,o){yz.scanCode({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(e)},complete:function(e){t&&t.complete&&t.complete(e)}})}))},e.prototype.chooseContactsAsync=function(t){return new Promise((function(e,o){var n={success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}};t&&t.count&&(n=Object.defineProperties(n,{count:{value:t.count}})),yz.chooseContacts(n)}))},e.prototype.getContactsInfoAsync=function(t){yz.ContactDetails({targetUserId:t.targetUserId,success:function(e){t&&t.success&&t.success(e)},fail:function(e){t&&t.fail&&t.fail(e)},complete:function(e){t&&t.complete&&t.complete(e)}})},e.prototype.uploadPhotoAsync=function(t){return new Promise((function(e,o){var r={success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e)},complete:function(e){t&&t.complete&&t.complete(e)}};t&&t.count&&Object.defineProperties(r,{count:{value:t.count}}),t&&t.sourceType?Object.defineProperties(r,{sourceType:{value:t.sourceType}}):Object.defineProperties(r,{sourceType:{value:[n.ALBUM,n.CAMERA]}}),yz.uploadImage(r)}))},e.prototype.userLocationAsync=function(t){return new Promise((function(e,o){yz.userLocation({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.userLocationWifiAsync=function(t){return new Promise((function(e,o){yz.userLocationContainAp({bssids:t.bssids,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.getWifiInfoAsync=function(t){return new Promise((function(e,o){yz.getWifiInfo({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.getWifiMacAsync=function(t){return new Promise((function(e,o){yz.getMac({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.faceCollectionAsync=function(t){return new Promise((function(e,o){yz.faceLiveCollection({live:t.live,userId:t.userId,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.faceCompareAsync=function(t){return new Promise((function(e,o){yz.faceCompare({userId:t.userId,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.wechatPayAsync=function(t){return new Promise((function(e,o){yz.wechatPay({payInfo:{appid:t.appid,partnerid:t.partnerid,prepayid:t.prepayid,package:t.package,noncestr:t.noncestr,timestamp:t.timestamp,sign:t.sign},success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.aliPayAsync=function(t){return new Promise((function(e,o){yz.aliPay({payInfo:t,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.openReadWithTimer=function(t){return new Promise((function(e,o){yz.openReadWithTimer({url:t.url,openType:t.openType,title:t.title,id:t.id,type:t.type,success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.getDeviceInfo=function(t){return new Promise((function(e,o){yz.getDeviceInfo({success:function(o){t&&t.success&&t.success(o),e(o)},fail:function(e){t&&t.fail&&t.fail(e),o(!1)},complete:function(e){t&&t.complete&&t.complete(e),o(!1)}})}))},e.prototype.fileBrowser=function(t){return new Promise((function(e,o){yz.fileBrowser({url:t.url,title:t.title,success:function(o){t.success(o),e(o)},fail:function(e){t.fail(e),o(e)},complete:function(){t.complete(),e("complete")}})}))},e.prototype.downloadByBrowser=function(t){return new Promise((function(e,o){yz.downloadByBrowser({url:t.url,success:function(){t.success(),e(!0)},fail:function(e){t.fail(e),o(e)},complete:function(){t.complete(),e("complete")}})}))},e}(r),p=["updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo","onMenuShareQZone","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","onVoicePlayEnd","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","translateVoice","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"],a=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),f=function(){return(f=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},y=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.auth=function(){var t=this;return new Promise((function(e,o){var n=t.option.GATE_WAY+"/wechat/mp/token?url="+encodeURIComponent(window.location.href);c("GET",n,(function(t){500===JSON.parse(t).error_code&&(window.location.href=JSON.parse(t).path);var o={accessToken:JSON.parse(t).message};e(o)}))}))},e.prototype.apiRegister=function(){c("GET",this.option.GATE_WAY+"/wechat/mp/jssdk?url="+window.location.href.split("#")[0],(function(t){var e=JSON.parse(t);e.debug=!1,e.jsApiList=p,wx.config(f({},e))}),this.option)},e.prototype.setNavigationBarRightItems=function(t){},e.prototype.setNavigationBarTitle=function(t){document.getElementsByTagName("title")[0].innerText=t.title},e.prototype.openWindow=function(t){window.location.href=t.url},e.prototype.setWebCanShare=function(t){},e.prototype.getUser=function(){var t=this;return new Promise((function(e,o){c("GET",t.option.GATE_WAY+"/auth/user",(function(t){e(JSON.parse(t).principal)}),t.option)}))},e.prototype.openMediaCameraAsync=function(t){},e.prototype.scanQrCodeAsync=function(t){return new Promise((function(e,o){wx.ready((function(){wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(n){"scanQRCode:ok"===n.errMsg?(t&&t.success&&t.success(n.resultStr),e(n.resultStr)):(t&&t.fail&&t.fail("NativeJSSDK Error:error to scan qrcode"),o("NativeJSSDK Error:error to scan qrcode"))}})}))}))},e.prototype.chooseContactsAsync=function(t){},e.prototype.getContactsInfoAsync=function(t){},e.prototype.uploadPhotoAsync=function(t){},e.prototype.userLocationAsync=function(t){return new Promise((function(e,o){wx.ready((function(){wx.getLocation({type:"wgs84",success:function(n){if("getLocation:ok"===n.errMsg){var r=n.latitude,i=n.longitude;e({latitude:r,longitude:i,address:"微信无address"}),t&&t.success&&(t.success({latitude:r,longitude:i,address:"微信无address"}),e({latitude:r,longitude:i,address:"微信无address"}))}else t&&t.fail&&t.fail("NativeJSSDK Error:error to get location!"),o("NativeJSSDK Error:error to get location!")}})}))}))},e.prototype.userLocationWifiAsync=function(t){},e.prototype.getWifiInfoAsync=function(t){},e.prototype.getWifiMacAsync=function(t){},e.prototype.faceCollectionAsync=function(t){},e.prototype.faceCompareAsync=function(t){},e.prototype.wechatPayAsync=function(t){},e.prototype.aliPayAsync=function(t){},e.prototype.openReadWithTimer=function(t){},e.prototype.getDeviceInfo=function(t){},e.prototype.fileBrowser=function(t){return alert("微信请在打开页面后,选择右上角选择浏览器打开!"),Promise.resolve(!0)},e.prototype.downloadByBrowser=function(t){return alert("微信请在打开页面后,选择右上角选择浏览器打开!"),Promise.resolve(!0)},e}(r);var l=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),d=function(t){function e(e){return t.call(this,e)||this}return l(e,t),e.prototype.auth=function(){var t=this,e=encodeURIComponent(window.location.href.toString());return new Promise((function(o,n){c("GET",t.option.GATE_WAY+"/cas-proxy/app/validate_full?callback="+e+"&timestamp="+(new Date).getTime(),(function(t){var e=JSON.parse(t);switch(e.errcode){case 2e3:o({accessToken:e.data.access_token,tokenType:e.data.token_type,scope:e.data.scope,tokenDateLine:e.data.expires_in});break;case 2001:window.location.href=e.msg;break;case 2002:alert(e.data);break;case 2003:case 5e3:case 5001:alert(e.msg)}}))}))},e.prototype.getUser=function(){var t=this;return new Promise((function(e,o){c("GET",t.option.GATE_WAY+"/auth/user",(function(t){e(t.principal)}),t.option)}))},e.prototype.apiRegister=function(){console.warn("browser hasn't api register")},e.prototype.setNavigationBarRightItems=function(t){},e.prototype.setNavigationBarTitle=function(t){},e.prototype.openWindow=function(t){},e.prototype.setWebCanShare=function(t){},e.prototype.openMediaCameraAsync=function(t){},e.prototype.scanQrCodeAsync=function(t){},e.prototype.chooseContactsAsync=function(t){},e.prototype.getContactsInfoAsync=function(t){},e.prototype.uploadPhotoAsync=function(t){},e.prototype.userLocationAsync=function(t){return new Promise((function(t,e){t({address:"brwoser hasn't location",latitude:0,longitude:0})}))},e.prototype.userLocationWifiAsync=function(t){},e.prototype.getWifiInfoAsync=function(t){},e.prototype.getWifiMacAsync=function(t){},e.prototype.faceCollectionAsync=function(t){},e.prototype.faceCompareAsync=function(t){},e.prototype.wechatPayAsync=function(t){},e.prototype.aliPayAsync=function(t){},e.prototype.openReadWithTimer=function(t){},e.prototype.getDeviceInfo=function(t){},e.prototype.fileBrowser=function(t){return window.open(t.url),Promise.resolve(!0)},e.prototype.downloadByBrowser=function(t){return window.open(t.url),Promise.resolve(!0)},e}(r),m=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),h=function(){return(h=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},w=function(t){function e(e){return t.call(this,e)||this}return m(e,t),e.prototype.auth=function(){var t={accessToken:window.location.href.split("accessToken=")[1].split("&")[0]};return Promise.resolve(t)},e.prototype.apiRegister=function(){c("GET",this.option.GATE_WAY+"/wechat/mp/jssdk?url="+window.location.href.split("#")[0],(function(t){var e=JSON.parse(t);e.debug=!1,e.jsApiList=p,wx.config(h({},e))}),this.option)},e.prototype.getUser=function(){var t=this;return new Promise((function(e,o){c("GET",t.option.GATE_WAY+"/auth/user",(function(t){e(t.principal)}),t.option)}))},e.prototype.setNavigationBarRightItems=function(t){},e.prototype.setNavigationBarTitle=function(t){document.getElementsByTagName("title")[0].innerText=t.title},e.prototype.openWindow=function(t){},e.prototype.setWebCanShare=function(t){},e.prototype.openMediaCameraAsync=function(t){},e.prototype.scanQrCodeAsync=function(t){return new Promise((function(e,o){wx.ready((function(){wx.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(n){"scanQRCode:ok"===n.errMsg?(t&&t.success&&t.success(n.resultStr),e(n.resultStr)):(t&&t.fail&&t.fail("NativeJSSDK Error:error to scan qrcode"),o("NativeJSSDK Error:error to scan qrcode"))}})}))}))},e.prototype.chooseContactsAsync=function(t){},e.prototype.getContactsInfoAsync=function(t){},e.prototype.uploadPhotoAsync=function(t){},e.prototype.userLocationAsync=function(t){return new Promise((function(e,o){wx.ready((function(){wx.getLocation({type:"wgs84",success:function(n){if("getLocation:ok"===n.errMsg){var r=n.latitude,i=n.longitude;e({latitude:r,longitude:i,address:"微信无address"}),t&&t.success&&t.success({latitude:r,longitude:i,address:"微信无address"})}else t&&t.fail&&t.fail("NativeJSSDK Error:error to get location!"),o("NativeJSSDK Error:error to get location!")}})}))}))},e.prototype.userLocationWifiAsync=function(t){},e.prototype.getWifiInfoAsync=function(t){},e.prototype.getWifiMacAsync=function(t){},e.prototype.faceCollectionAsync=function(t){},e.prototype.faceCompareAsync=function(t){},e.prototype.wechatPayAsync=function(t){},e.prototype.aliPayAsync=function(t){},e.prototype.openReadWithTimer=function(t){},e.prototype.getDeviceInfo=function(t){},e.prototype.fileBrowser=function(t){return alert("微信请在右上角选择浏览器打开!"),Promise.resolve(!0)},e.prototype.downloadByBrowser=function(t){return alert("微信请在右上角选择浏览器打开!"),Promise.resolve(!0)},e}(r),g=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),A=function(t){function e(e){var o=t.call(this,e)||this;return o.proxy=o.distribute(e),o}return g(e,t),e.prototype.distribute=function(t){var e=window.navigator.userAgent.toLowerCase();return/miniprogram/.test(e)?new w(t):/micromessenger/.test(e)?new y(t):/iphone/.test(e)&&/mobile/.test(e)&&/yunzai/.test(e)||/android/.test(e)&&/mobile/.test(e)&&/yunzai/.test(e)||/linux/.test(e)&&/yunzai/.test(e)?new u(t):new d(t)},e.prototype.getUser=function(){return this.proxy.getUser()},e.prototype.auth=function(){return this.proxy.auth()},e.prototype.apiRegister=function(){this.proxy.apiRegister()},e.prototype.openWindow=function(t){this.proxy.openWindow(t)},e.prototype.setNavigationBarTitle=function(t){this.proxy.setNavigationBarTitle(t)},e.prototype.setNavigationBarRightItems=function(t){this.proxy.setNavigationBarRightItems(t)},e.prototype.setWebCanShare=function(t){this.proxy.setWebCanShare(t)},e.prototype.openMediaCameraAsync=function(t){return this.proxy.openMediaCameraAsync(t)},e.prototype.scanQrCodeAsync=function(t){return this.proxy.scanQrCodeAsync(t)},e.prototype.chooseContactsAsync=function(t){return this.proxy.chooseContactsAsync(t)},e.prototype.getContactsInfoAsync=function(t){this.proxy.getContactsInfoAsync(t)},e.prototype.uploadPhotoAsync=function(t){return this.proxy.uploadPhotoAsync(t)},e.prototype.userLocationAsync=function(t){return this.proxy.userLocationAsync(t)},e.prototype.userLocationWifiAsync=function(t){return this.proxy.userLocationWifiAsync(t)},e.prototype.getWifiInfoAsync=function(t){return this.proxy.getWifiInfoAsync(t)},e.prototype.getWifiMacAsync=function(t){return this.proxy.getWifiMacAsync(t)},e.prototype.faceCollectionAsync=function(t){return this.proxy.faceCollectionAsync(t)},e.prototype.faceCompareAsync=function(t){return this.proxy.faceCompareAsync(t)},e.prototype.wechatPayAsync=function(t){return this.proxy.wechatPayAsync(t)},e.prototype.aliPayAsync=function(t){return this.proxy.aliPayAsync(t)},e.prototype.openReadWithTimer=function(t){return this.proxy.openReadWithTimer(t)},e.prototype.getDeviceInfo=function(t){return this.proxy.getDeviceInfo(t)},e.prototype.fileBrowser=function(t){return this.proxy.fileBrowser(t)},e.prototype.downloadByBrowser=function(t){return this.proxy.downloadByBrowser(t)},e}(r);e.default=A}]).default}));