(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[199],{6850:function(e,t,n){"use strict";n.d(t,{F:function(){return p}});var i=n(7294),r=n(9),a=n(7408),o=n(994),l=(n(7904),r.ZP.div.withConfig({displayName:"GetStarted__Container",componentId:"lp7e1t-0"})(["height:22.875em;max-width:90em;justify-content:center;-webkit-justify-content:center;margin-left:auto;margin-right:auto;background:#FCF5F0;@media (max-width:991px){max-width:23.4375rem;height:17rem;}"])),u=(0,r.ZP)(a.Z).withConfig({displayName:"GetStarted__StyledTitle",componentId:"lp7e1t-1"})(["height:3em;justify-content:center;display:flex;color:#073233;margin-bottom:2em;margin-top:6.75em;@media (max-width:991px){margin-top:4.3125rem;margin-bottom:2.5rem;}> h1{position:absolute;font-family:Messina Sans bold;font-style:normal;font-weight:bold;font-size:2.5em;line-height:1.2em;text-align:center;letter-spacing:-0.0125em;@media (max-width:991px){font-size:1.875rem;font-weight:700;line-height:2.4375rem;letter-spacing:0rem;text-align:center;margin-bottom:0;}}"]),s=r.ZP.div.withConfig({displayName:"GetStarted__StyledButton",componentId:"lp7e1t-2"})(["border:2px solid #FF6938;border-radius:40px;-moz-border-radius:40px;-webkit-border-radius:40px;margin-left:9em;padding:0.5687em 1.425em 0.5687em 1.425em;font-family:Messina Sans bold;font-size:1.125em;font-weight:bold;transition:0.3s;&:hover{background:#E55A2D;color:#FFFFFF;border-color:#E55A2D;}@media (max-width:991px){margin-top:0;margin-bottom:0;}"]),c=r.ZP.div.withConfig({displayName:"GetStarted__StyledSecondButton",componentId:"lp7e1t-3"})(["margin-right:9.5em;padding:0.6687em 1.525em 0.6687em 1.525em;font-family:Messina Sans bold;font-size:1.125em;font-weight:bold;transition:0.3s;&:hover{background:#E55A2D;}@media (max-width:991px){margin-top:0;margin-bottom:0;}"]),d=(0,r.ZP)(a.Z).withConfig({displayName:"GetStarted__StyledCol",componentId:"lp7e1t-4"})(["justify-content:center;display:flex;"]),m=(0,r.ZP)(o.Z).withConfig({displayName:"GetStarted__StyledRow",componentId:"lp7e1t-5"})(["margin-left:0;margin-right:0;@media (max-width:991px){margin-top:0;margin-bottom:0;}"]),p=function(){return i.createElement("div",{style:{background:"#FCF5F0"}},i.createElement(l,null,i.createElement(m,null,i.createElement(u,null,i.createElement("h1",null,"Ready to get started?"))),i.createElement(m,null,i.createElement(d,null,i.createElement(c,{background:"#FF6938",font:"#FFFFFF"},"Get in touch"),i.createElement(s,{background:"#FCF5F0",font:"#FF6938",weight:"400"},"Free demo")))))}},441:function(e,t,n){"use strict";n.d(t,{Z:function(){return _e}});var i=n(7294),r=n(9),a=n(7490),o=n(2265);var l=function(e){var t=(0,i.useRef)(e);return(0,i.useEffect)((function(){t.current=e}),[e]),t};function u(e){var t=l(e);return(0,i.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var s=function(e,t){var n=(0,i.useRef)(!0);(0,i.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)};function c(e){var t,n,r=(t=e,(n=(0,i.useRef)(t)).current=t,n);(0,i.useEffect)((function(){return function(){return r.current()}}),[])}var d=Math.pow(2,31)-1;function m(e,t,n){var i=n-Date.now();e.current=i<=d?setTimeout(t,i):setTimeout((function(){return m(e,t,n)}),d)}function p(){var e=function(){var e=(0,i.useRef)(!0),t=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=(0,i.useRef)();return c((function(){return clearTimeout(t.current)})),(0,i.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(i,r){void 0===r&&(r=0),e()&&(n(),r<=d?t.current=setTimeout(i,r):m(t,i,Date.now()+r))},clear:n}}),[])}var f=n(5900),g=n.n(f),h=n(1943),v=n(3935),x=!1,y=i.createContext(null),b="unmounted",E="exited",w="entering",I="entered",N="exiting",M=function(e){function t(t,n){var i;i=e.call(this,t,n)||this;var r,a=n&&!n.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?a?(r=E,i.appearStatus=w):r=I:r=t.unmountOnExit||t.mountOnEnter?b:E,i.state={status:r},i.nextCallback=null,i}(0,h.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===b?{status:E}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==w&&n!==I&&(t=w):n!==w&&n!==I||(t=N)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,i=this.props.timeout;return e=t=n=i,null!=i&&"number"!=typeof i&&(e=i.exit,t=i.enter,n=void 0!==i.appear?i.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===w?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===E&&this.setState({status:b})},n.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,r=this.props.nodeRef?[i]:[v.findDOMNode(this),i],a=r[0],o=r[1],l=this.getTimeouts(),u=i?l.appear:l.enter;!e&&!n||x?this.safeSetState({status:I},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,o),this.safeSetState({status:w},(function(){t.props.onEntering(a,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:I},(function(){t.props.onEntered(a,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:v.findDOMNode(this);t&&!x?(this.props.onExit(i),this.safeSetState({status:N},(function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:E},(function(){e.props.onExited(i)}))}))}))):this.safeSetState({status:E},(function(){e.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),i=null==e&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=r[0],o=r[1];this.props.addEndListener(a,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===b)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,o.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(y.Provider,{value:null},"function"==typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function C(){}M.contextType=y,M.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},M.UNMOUNTED=b,M.EXITED=E,M.ENTERING=w,M.ENTERED=I,M.EXITING=N;var S=M,D=n(5697),A=n.n(D);n(1143);function z(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function T(e,t){return Object.keys(t).reduce((function(n,r){var l,u=n,s=u[z(r)],c=u[r],d=(0,o.Z)(u,[z(r),r].map(k)),m=t[r],p=function(e,t,n){var r=(0,i.useRef)(void 0!==e),a=(0,i.useState)(t),o=a[0],l=a[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&o!==t&&l(t),[u?e:o,(0,i.useCallback)((function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];n&&n.apply(void 0,[e].concat(i)),l(e)}),[n])]}(c,s,e[m]),f=p[0],g=p[1];return(0,a.Z)({},d,((l={})[r]=f,l[m]=g,l))}),e)}n(3639);var Z=/-(.)/g;var F=n(9541),j=["className","bsPrefix","as"],L=function(e){return e[0].toUpperCase()+(t=e,t.replace(Z,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var _=function(e,t){var n=void 0===t?{}:t,r=n.displayName,l=void 0===r?L(e):r,u=n.Component,s=n.defaultProps,c=i.forwardRef((function(t,n){var r=t.className,l=t.bsPrefix,s=t.as,c=void 0===s?u||"div":s,d=(0,o.Z)(t,j),m=(0,F.vE)(l,e);return i.createElement(c,(0,a.Z)({ref:n,className:g()(r,m)},d))}));return c.defaultProps=s,c.displayName=l,c}("carousel-caption"),P=["as","bsPrefix","children","className"],R=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"div":n,l=e.bsPrefix,u=e.children,s=e.className,c=(0,o.Z)(e,P),d=g()(s,(0,F.vE)(l,"carousel-item"));return i.createElement(r,(0,a.Z)({ref:t},c,{className:d}),u)}));R.displayName="CarouselItem";var O=R;function G(e,t){var n=0;return i.Children.map(e,(function(e){return i.isValidElement(e)?t(e,n++):e}))}var U=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];e.apply(this,i),t.apply(this,i)}}),null)},Q=["as","disabled","onKeyDown"];function Y(e){return!e||"#"===e.trim()}var H=i.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,s=(0,o.Z)(e,Q),c=function(e){var t=s.href,n=s.onClick;(l||Y(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return Y(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),l&&(s.tabIndex=-1,s["aria-disabled"]=!0),i.createElement(r,(0,a.Z)({ref:t},s,{onClick:c,onKeyDown:U((function(e){" "===e.key&&(e.preventDefault(),c(e))}),u)}))}));H.displayName="SafeAnchor";var X=H;function W(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var K=/([A-Z])/g;var B=/^ms-/;function V(e){return function(e){return e.replace(K,"-$1").toLowerCase()}(e).replace(B,"-ms-")}var J=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var q=function(e,t){var n="",i="";if("string"==typeof t)return e.style.getPropertyValue(V(t))||function(e,t){return W(e).getComputedStyle(e,t)}(e).getPropertyValue(V(t));Object.keys(t).forEach((function(r){var a=t[r];a||0===a?!function(e){return!(!e||!J.test(e))}(r)?n+=V(r)+": "+a+";":i+=r+"("+a+") ":e.style.removeProperty(V(r))})),i&&(n+="transform: "+i+";"),e.style.cssText+=";"+n},$=!("undefined"==typeof window||!window.document||!window.document.createElement),ee=!1,te=!1;try{var ne={get passive(){return ee=!0},get once(){return te=ee=!0}};$&&(window.addEventListener("test",ne,ne),window.removeEventListener("test",ne,!0))}catch(Pe){}var ie=function(e,t,n,i){if(i&&"boolean"!=typeof i&&!te){var r=i.once,a=i.capture,o=n;!te&&r&&(o=n.__once||function e(i){this.removeEventListener(t,e,a),n.call(this,i)},n.__once=o),e.addEventListener(t,o,ee?i:a)}e.addEventListener(t,n,i)};var re=function(e,t,n,i){var r=i&&"boolean"!=typeof i?i.capture:i;e.removeEventListener(t,n,r),n.__once&&e.removeEventListener(t,n.__once,r)};var ae=function(e,t,n,i){return ie(e,t,n,i),function(){re(e,t,n,i)}};function oe(e,t,n){void 0===n&&(n=5);var i=!1,r=setTimeout((function(){i||function(e,t,n,i){if(void 0===n&&(n=!1),void 0===i&&(i=!0),e){var r=document.createEvent("HTMLEvents");r.initEvent(t,n,i),e.dispatchEvent(r)}}(e,"transitionend",!0)}),t+n),a=ae(e,"transitionend",(function(){i=!0}),{once:!0});return function(){clearTimeout(r),a()}}function le(e,t,n,i){var r,a;null==n&&(r=q(e,"transitionDuration")||"",a=-1===r.indexOf("ms")?1e3:1,n=parseFloat(r)*a||0);var o=oe(e,n,i),l=ae(e,"transitionend",t);return function(){o(),l()}}function ue(e,t){var n=q(e,t)||"",i=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*i}function se(e,t){var n=ue(e,"transitionDuration"),i=ue(e,"transitionDelay"),r=le(e,(function(n){n.target===e&&(r(),t(n))}),n+i)}var ce=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],de={bsPrefix:A().string,as:A().elementType,slide:A().bool,fade:A().bool,controls:A().bool,indicators:A().bool,activeIndex:A().number,onSelect:A().func,onSlide:A().func,onSlid:A().func,interval:A().number,keyboard:A().bool,pause:A().oneOf(["hover",!1]),wrap:A().bool,touch:A().bool,prevIcon:A().node,prevLabel:A().string,nextIcon:A().node,nextLabel:A().string},me={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function pe(e,t){var n=T(e,{activeIndex:"onSelect"}),r=n.as,c=void 0===r?"div":r,d=n.bsPrefix,m=n.slide,f=n.fade,h=n.controls,v=n.indicators,x=n.activeIndex,y=n.onSelect,b=n.onSlide,E=n.onSlid,w=n.interval,I=n.keyboard,N=n.onKeyDown,M=n.pause,C=n.onMouseOver,D=n.onMouseOut,A=n.wrap,z=n.touch,k=n.onTouchStart,Z=n.onTouchMove,j=n.onTouchEnd,L=n.prevIcon,_=n.prevLabel,P=n.nextIcon,R=n.nextLabel,O=n.className,U=n.children,Q=(0,o.Z)(n,ce),Y=(0,F.vE)(d,"carousel"),H=(0,i.useRef)(null),W=(0,i.useState)("next"),K=W[0],B=W[1],V=(0,i.useState)(!1),J=V[0],q=V[1],$=(0,i.useState)(!1),ee=$[0],te=$[1],ne=(0,i.useState)(x||0),ie=ne[0],re=ne[1];ee||x===ie||(H.current?B(H.current):B((x||0)>ie?"next":"prev"),m&&te(!0),re(x||0)),(0,i.useEffect)((function(){H.current&&(H.current=null)}));var ae,oe=0;!function(e,t){var n=0;i.Children.forEach(e,(function(e){i.isValidElement(e)&&t(e,n++)}))}(U,(function(e,t){++oe,t===x&&(ae=e.props.interval)}));var le=l(ae),ue=(0,i.useCallback)((function(e){if(!ee){var t=ie-1;if(t<0){if(!A)return;t=oe-1}H.current="prev",y&&y(t,e)}}),[ee,ie,y,A,oe]),de=u((function(e){if(!ee){var t=ie+1;if(t>=oe){if(!A)return;t=0}H.current="next",y&&y(t,e)}})),me=(0,i.useRef)();(0,i.useImperativeHandle)(t,(function(){return{element:me.current,prev:ue,next:de}}));var pe=u((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(me.current)&&de()})),fe="next"===K?"left":"right";s((function(){m||(b&&b(ie,fe),E&&E(ie,fe))}),[ie]);var ge=Y+"-item-"+K,he=Y+"-item-"+fe,ve=(0,i.useCallback)((function(e){!function(e){e.offsetHeight}(e),b&&b(ie,fe)}),[b,ie,fe]),xe=(0,i.useCallback)((function(){te(!1),E&&E(ie,fe)}),[E,ie,fe]),ye=(0,i.useCallback)((function(e){if(I&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ue(e);case"ArrowRight":return e.preventDefault(),void de(e)}N&&N(e)}),[I,N,ue,de]),be=(0,i.useCallback)((function(e){"hover"===M&&q(!0),C&&C(e)}),[M,C]),Ee=(0,i.useCallback)((function(e){q(!1),D&&D(e)}),[D]),we=(0,i.useRef)(0),Ie=(0,i.useRef)(0),Ne=p(),Me=(0,i.useCallback)((function(e){we.current=e.touches[0].clientX,Ie.current=0,"hover"===M&&q(!0),k&&k(e)}),[M,k]),Ce=(0,i.useCallback)((function(e){e.touches&&e.touches.length>1?Ie.current=0:Ie.current=e.touches[0].clientX-we.current,Z&&Z(e)}),[Z]),Se=(0,i.useCallback)((function(e){if(z){var t=Ie.current;Math.abs(t)>40&&(t>0?ue(e):de(e))}"hover"===M&&Ne.set((function(){q(!1)}),w||void 0),j&&j(e)}),[z,M,ue,de,Ne,w,j]),De=null!=w&&!J&&!ee,Ae=(0,i.useRef)();(0,i.useEffect)((function(){var e,t;if(De)return Ae.current=window.setInterval(document.visibilityState?pe:de,null!=(e=null!=(t=le.current)?t:w)?e:void 0),function(){null!==Ae.current&&clearInterval(Ae.current)}}),[De,de,le,w,pe]);var ze=(0,i.useMemo)((function(){return v&&Array.from({length:oe},(function(e,t){return function(e){y&&y(t,e)}}))}),[v,oe,y]);return i.createElement(c,(0,a.Z)({ref:me},Q,{onKeyDown:ye,onMouseOver:be,onMouseOut:Ee,onTouchStart:Me,onTouchMove:Ce,onTouchEnd:Se,className:g()(O,Y,m&&"slide",f&&Y+"-fade")}),v&&i.createElement("ol",{className:Y+"-indicators"},G(U,(function(e,t){return i.createElement("li",{key:t,className:t===ie?"active":void 0,onClick:ze?ze[t]:void 0})}))),i.createElement("div",{className:Y+"-inner"},G(U,(function(e,t){var n=t===ie;return m?i.createElement(S,{in:n,onEnter:n?ve:void 0,onEntered:n?xe:void 0,addEndListener:se},(function(t){return i.cloneElement(e,{className:g()(e.props.className,n&&"entered"!==t&&ge,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&he)})})):i.cloneElement(e,{className:g()(e.props.className,n&&"active")})}))),h&&i.createElement(i.Fragment,null,(A||0!==x)&&i.createElement(X,{className:Y+"-control-prev",onClick:ue},L,_&&i.createElement("span",{className:"sr-only"},_)),(A||x!==oe-1)&&i.createElement(X,{className:Y+"-control-next",onClick:de},P,R&&i.createElement("span",{className:"sr-only"},R))))}var fe=i.forwardRef(pe);fe.displayName="Carousel",fe.propTypes=de,fe.defaultProps=me,fe.Caption=_,fe.Item=O;var ge=fe,he=(n.p,n(7408)),ve=n(994),xe=n.p+"static/anna-f03bf1685dab0ffe2a28177e19455b30.png",ye=n.p+"static/ann2-8517d5106902a85e4e76a3d1fe971918.png",be=n.p+"static/elementsgroup-f1a7974074486cf6f6ae3948c04e11bc.svg",Ee=r.ZP.div.withConfig({displayName:"FirstSlide__Container",componentId:"pz7lvh-0"})(["height:32.5em;max-width:90em;background:#114748;padding-bottom:7.125em;margin:auto;@media (max-width:991px){max-width:23.4375rem;height:36.5625rem;padding-bottom:0;}"]),we=(0,r.ZP)(he.Z).withConfig({displayName:"FirstSlide__TextContainer",componentId:"pz7lvh-1"})(["padding-left:0;padding-top:10.6875em;margin-left:0;@media (max-width:1439px){padding-top:9.6875em;}@media (max-width:991px){padding-top:0;padding-bottom:0;}"]),Ie=(0,r.ZP)(he.Z).withConfig({displayName:"FirstSlide__ImageContainer",componentId:"pz7lvh-2"})(["padding-top:7.1875em;margin:0;padding-left:0;padding-right:0;@media (max-width:991px){padding-top:0;}"]),Ne=(0,r.ZP)(ve.Z).withConfig({displayName:"FirstSlide__StyledRow",componentId:"pz7lvh-3"})(["padding-left:10.375em;margin-right:0;margin-left:0;@media (max-width:1439px){padding-left:4vw;}@media (max-width:991px){padding-left:0;}"]),Me=r.ZP.div.withConfig({displayName:"FirstSlide__StyledSlogan",componentId:"pz7lvh-4"})(["font-family:Messina Sans semibold;font-style:normal;font-weight:400;font-size:0.75rem;line-height:2em;letter-spacing:0.050333333333333333em;color:#BDCCC7;@media (max-width:991px){margin-left:1.125rem;margin-top:2.5rem;}"]),Ce=r.ZP.div.withConfig({displayName:"FirstSlide__StyledTitle",componentId:"pz7lvh-5"})(["position:absolute;font-family:Messina Sans bold;font-style:normal;font-weight:semibold;font-size:1.5em;line-height:1.3333333333333333em;padding-right:8.416666666666666em;color:#FFFFFF;margin-top:0.5em;margin-bottom:0.35em;letter-spacing:0.01625em;@media (max-width:1439px){padding-right:1em;}@media (max-width:991px){font-size:1.25rem;font-weight:700;line-height:1.75rem;letter-spacing:0rem;text-align:left;margin-left:1.125rem;margin-top:1.375rem;margin-bottom:1.375rem;}"]),Se=r.ZP.button.withConfig({displayName:"FirstSlide__StyledMoreabout",componentId:"pz7lvh-6"})(["font-family:Messina Sans semibold;font-weight:400;font-size:1em;line-height:1.5em;display:flex;align-items:center;letter-spacing:0.01825em;margin-top:7.475em;color:#FFFFFF;margin-right:0;border:0;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;background:none;padding:0;> text{text-underline-offset:4px;text-decoration:underline solid #FF6938;text-decoration-thickness:3px;transition:0.3s;&:hover{padding-right:1em;}}@media (max-width:1130px){margin-top:9.275rem}@media (max-width:991px){margin-left:1.125rem;margin-top:9.8125rem;}"]),De=r.ZP.div.withConfig({displayName:"FirstSlide__StyledPointer",componentId:"pz7lvh-7"})(["margin-left:0.5em;margin-bottom:0.3em;font-size:0.9em;font-weight:bold;line-height:1.5em;letter-spacing:0.00625em;color:#FFFFFF;"]),Ae=r.ZP.img.withConfig({displayName:"FirstSlide__Styledimg",componentId:"pz7lvh-8"})(["min-width:30.125rem;z-index:2;position:absolute;@media (max-width:991px){display:none;}"]),ze=r.ZP.img.withConfig({displayName:"FirstSlide__StyledGroupElements",componentId:"pz7lvh-9"})(["z-index:1;position:absolute;margin-left:25em;margin-top:2.75em;@media (max-width:1439px){margin-left:20em;}@media (max-width:991px){display:none;}"]),ke=r.ZP.img.withConfig({displayName:"FirstSlide__StyledSquare",componentId:"pz7lvh-10"})(["z-index:1;position:absolute;margin-left:-2.0625em;margin-top:21.9375em;@media (max-width:1439px){margin-top:19.0625rem;}@media (max-width:991px){display:none;}"]),Te=r.ZP.img.withConfig({displayName:"FirstSlide__StyledCircle",componentId:"pz7lvh-11"})(["z-index:1;position:absolute;margin-left:1.59375em;margin-top:25.6875em;@media (max-width:1439px){margin-top:22.8125rem;}@media (max-width:991px){display:none;}"]),Ze=r.ZP.img.withConfig({displayName:"FirstSlide__StyledDesktopimg",componentId:"pz7lvh-12"})(["z-index:2;position:absolute;@media (min-width:991px){display:none;}@media (max-width:1439px){min-width:auto;max-width:25.125rem;height:auto;}@media (max-width:991px){max-width:23.4375rem;margin-bottom:0;min-width:auto;position:relative;}"]),Fe=function(){return i.createElement(i.Fragment,null,i.createElement(Ee,null,i.createElement(Ne,{xs:1,lg:2},i.createElement(ke,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03MiAwSDBWNzJINzJWMFoiIGZpbGw9IiMxNDUxNTYiLz4NCjwvc3ZnPg0K"}),i.createElement(Te,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjYiIHZpZXdCb3g9IjAgMCAyNyAyNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMy41IDI1LjVDNi41OTY0NCAyNS41IDEgMTkuOTAzNiAxIDEzQzEgNi4wOTY0NCA2LjU5NjQ0IDAuNSAxMy41IDAuNUMyMC40MDM2IDAuNSAyNiA2LjA5NjQ0IDI2IDEzQzI2IDE5LjkwMzYgMjAuNDAzNiAyNS41IDEzLjUgMjUuNVoiIHN0cm9rZT0iI0Y5RURFNCIvPg0KPC9zdmc+DQo="}),i.createElement(ze,{src:be}),i.createElement(Ie,{lg:7,xl:!0},i.createElement(Ae,{src:xe}),i.createElement(Ze,{src:ye})),i.createElement(we,null,i.createElement(Me,null,"ARIANNE KOWALSKI, LEAD MARKETING SPECIALIST,"," ","MAILCHIP"),i.createElement(Ce,null,"“All base UI elements are made using Nested Symbols and shared styles that are logically connected.”"),i.createElement(Se,null,i.createElement("text",null,"Read full case study"),i.createElement(De,null,"   →"))))))},je=r.ZP.div.withConfig({displayName:"Slider__Container",componentId:"oqztom-0"})(["height:32.5em;background:#114748;@media (max-width:991px){height:36.5625rem;padding-bottom:0;}"]),Le=(0,r.ZP)(ge).withConfig({displayName:"Slider__StyledCarousel",componentId:"oqztom-1"})([">ol{>li{width:6px;height:6px;border-radius:200px 200px 200px 200px;-moz-border-radius:200px 200px 200px 200px;-webkit-border-radius:200px 200px 200px 200px;border:0px solid #000000;margin:0px 4px;opacity:0.2;margin-bottom:2.0625em;@media (max-width:991px){display:none;}}@media (max-width:991px){display:none;}}>a{>span{opacity:0;color:#114748;background:#114748;}@media (max-width:991px){display:none;}}"]),_e=function(){return i.createElement(je,null,i.createElement(Le,null,i.createElement(ge.Item,null,i.createElement(Fe,null)),i.createElement(ge.Item,null,i.createElement(Fe,null)),i.createElement(ge.Item,null,i.createElement(Fe,null)),i.createElement(ge.Item,null,i.createElement(Fe,null)),i.createElement(ge.Item,null,i.createElement(Fe,null))))}},65:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMy4wMTk0IDI2LjA3MDdDMjAuMjA5OCAyNi4wNzA3IDI2LjAzODcgMjAuMjM0NiAyNi4wMzg3IDEzLjAzNTRDMjYuMDM4NyA1LjgzNjEzIDIwLjIwOTggMCAxMy4wMTk0IDBDNS44Mjg5NyAwIDAgNS44MzYxMyAwIDEzLjAzNTRDMCAyMC4yMzQ2IDUuODI4OTcgMjYuMDcwNyAxMy4wMTk0IDI2LjA3MDdaIiBmaWxsPSIjRjlFREU0Ii8+DQo8L3N2Zz4NCg=="},4422:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC43ODQgMTMuMjk2MUMxNC4wNTg2IDExLjQwNTUgMTUuMTc4NyA3LjIxNTA4IDEzLjI4NTcgMy45MzY0N0MxMS4zOTI4IDAuNjU3ODYgNy4yMDM3NiAtMC40NjczNTYgMy45MjkxNyAxLjQyMzIzQzAuNjU0NTc5IDMuMzEzODEgLTAuNDY1NDk2IDcuNTA0MjcgMS40Mjc0MSAxMC43ODI5QzMuMzIwMzIgMTQuMDYxNSA3LjUwOTQgMTUuMTg2NyAxMC43ODQgMTMuMjk2MVoiIGZpbGw9IiNGOUVERTQiLz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=4f82326a0ce01a576e3b3c49511fc6d36f919260-8acb01158e0c4021a1d9.js.map