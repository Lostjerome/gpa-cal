(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();var I,u,re,C,j,D={},le=[],ye=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(_,e){for(var t in e)_[t]=e[t];return _}function ie(_){var e=_.parentNode;e&&e.removeChild(_)}function be(_,e,t){var r,l,o,i={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:i[o]=e[o];if(arguments.length>2&&(i.children=arguments.length>3?I.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)i[o]===void 0&&(i[o]=_.defaultProps[o]);return L(_,i,r,l,null)}function L(_,e,t,r,l){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++re};return l==null&&u.vnode!=null&&u.vnode(o),o}function H(_){return _.children}function T(_,e){this.props=_,this.context=e}function E(_,e){if(e==null)return _.__?E(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?E(_):null}function ce(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return ce(_)}}function z(_){(!_.__d&&(_.__d=!0)&&C.push(_)&&!M.__r++||j!==u.debounceRendering)&&((j=u.debounceRendering)||setTimeout)(M)}function M(){for(var _;M.__r=C.length;)_=C.sort(function(e,t){return e.__v.__b-t.__v.__b}),C=[],_.some(function(e){var t,r,l,o,i,s;e.__d&&(i=(o=(t=e).__v).__e,(s=t.__P)&&(r=[],(l=x({},o)).__v=o.__v+1,R(s,o,l,t.__n,s.ownerSVGElement!==void 0,o.__h!=null?[i]:null,r,i??E(o),o.__h),fe(r,o),o.__e!=i&&ce(o)))})}function ue(_,e,t,r,l,o,i,s,a,p){var n,h,f,c,d,w,m,b=r&&r.__k||le,k=b.length;for(t.__k=[],n=0;n<e.length;n++)if((c=t.__k[n]=(c=e[n])==null||typeof c=="boolean"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?L(null,c,null,null,c):Array.isArray(c)?L(H,{children:c},null,null,null):c.__b>0?L(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(f=b[n])===null||f&&c.key==f.key&&c.type===f.type)b[n]=void 0;else for(h=0;h<k;h++){if((f=b[h])&&c.key==f.key&&c.type===f.type){b[h]=void 0;break}f=null}R(_,c,f=f||D,l,o,i,s,a,p),d=c.__e,(h=c.ref)&&f.ref!=h&&(m||(m=[]),f.ref&&m.push(f.ref,null,c),m.push(h,c.__c||d,c)),d!=null?(w==null&&(w=d),typeof c.type=="function"&&c.__k===f.__k?c.__d=a=se(c,a,_):a=ae(_,c,f,b,d,a),typeof t.type=="function"&&(t.__d=a)):a&&f.__e==a&&a.parentNode!=_&&(a=E(f))}for(t.__e=w,n=k;n--;)b[n]!=null&&pe(b[n],b[n]);if(m)for(n=0;n<m.length;n++)de(m[n],m[++n],m[++n])}function se(_,e,t){for(var r,l=_.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=_,e=typeof r.type=="function"?se(r,e,t):ae(t,r,r,l,r.__e,e));return e}function ae(_,e,t,r,l,o){var i,s,a;if(e.__d!==void 0)i=e.__d,e.__d=void 0;else if(t==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==_)_.appendChild(l),i=null;else{for(s=o,a=0;(s=s.nextSibling)&&a<r.length;a+=1)if(s==l)break e;_.insertBefore(l,o),i=o}return i!==void 0?i:l.nextSibling}function ge(_,e,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in e||O(_,o,null,t[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||O(_,o,e[o],t[o],r)}function K(_,e,t){e[0]==="-"?_.setProperty(e,t):_[e]=t==null?"":typeof t!="number"||ye.test(e)?t:t+"px"}function O(_,e,t,r,l){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||K(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||K(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?Q:J,o):_.removeEventListener(e,o?Q:J,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?_.removeAttribute(e):_.setAttribute(e,t))}}function J(_){this.l[_.type+!1](u.event?u.event(_):_)}function Q(_){this.l[_.type+!0](u.event?u.event(_):_)}function R(_,e,t,r,l,o,i,s,a){var p,n,h,f,c,d,w,m,b,k,$,N,B,A,S,g=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(a=t.__h,s=e.__e=t.__e,e.__h=null,o=[s]),(p=u.__b)&&p(e);try{e:if(typeof g=="function"){if(m=e.props,b=(p=g.contextType)&&r[p.__c],k=p?b?b.props.value:p.__:r,t.__c?w=(n=e.__c=t.__c).__=n.__E:("prototype"in g&&g.prototype.render?e.__c=n=new g(m,k):(e.__c=n=new T(m,k),n.constructor=g,n.render=xe),b&&b.sub(n),n.props=m,n.state||(n.state={}),n.context=k,n.__n=r,h=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),g.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=x({},n.__s)),x(n.__s,g.getDerivedStateFromProps(m,n.__s))),f=n.props,c=n.state,h)g.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(g.getDerivedStateFromProps==null&&m!==f&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(m,k),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(m,n.__s,k)===!1||e.__v===t.__v){for(n.props=m,n.state=n.__s,e.__v!==t.__v&&(n.__d=!1),n.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(P){P&&(P.__=e)}),$=0;$<n._sb.length;$++)n.__h.push(n._sb[$]);n._sb=[],n.__h.length&&i.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(m,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(f,c,d)})}if(n.context=k,n.props=m,n.__v=e,n.__P=_,N=u.__r,B=0,"prototype"in g&&g.prototype.render){for(n.state=n.__s,n.__d=!1,N&&N(e),p=n.render(n.props,n.state,n.context),A=0;A<n._sb.length;A++)n.__h.push(n._sb[A]);n._sb=[]}else do n.__d=!1,N&&N(e),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++B<25);n.state=n.__s,n.getChildContext!=null&&(r=x(x({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(d=n.getSnapshotBeforeUpdate(f,c)),S=p!=null&&p.type===H&&p.key==null?p.props.children:p,ue(_,Array.isArray(S)?S:[S],e,t,r,l,o,i,s,a),n.base=e.__e,e.__h=null,n.__h.length&&i.push(n),w&&(n.__E=n.__=null),n.__e=!1}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ke(t.__e,e,t,r,l,o,i,a);(p=u.diffed)&&p(e)}catch(P){e.__v=null,(a||o!=null)&&(e.__e=s,e.__h=!!a,o[o.indexOf(s)]=null),u.__e(P,e,t)}}function fe(_,e){u.__c&&u.__c(e,_),_.some(function(t){try{_=t.__h,t.__h=[],_.some(function(r){r.call(t)})}catch(r){u.__e(r,t.__v)}})}function ke(_,e,t,r,l,o,i,s){var a,p,n,h=t.props,f=e.props,c=e.type,d=0;if(c==="svg"&&(l=!0),o!=null){for(;d<o.length;d++)if((a=o[d])&&"setAttribute"in a==!!c&&(c?a.localName===c:a.nodeType===3)){_=a,o[d]=null;break}}if(_==null){if(c===null)return document.createTextNode(f);_=l?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,f.is&&f),o=null,s=!1}if(c===null)h===f||s&&_.data===f||(_.data=f);else{if(o=o&&I.call(_.childNodes),p=(h=t.props||D).dangerouslySetInnerHTML,n=f.dangerouslySetInnerHTML,!s){if(o!=null)for(h={},d=0;d<_.attributes.length;d++)h[_.attributes[d].name]=_.attributes[d].value;(n||p)&&(n&&(p&&n.__html==p.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(ge(_,f,h,l,s),n)e.__k=[];else if(d=e.props.children,ue(_,Array.isArray(d)?d:[d],e,t,r,l&&c!=="foreignObject",o,i,o?o[0]:t.__k&&E(t,0),s),o!=null)for(d=o.length;d--;)o[d]!=null&&ie(o[d]);s||("value"in f&&(d=f.value)!==void 0&&(d!==_.value||c==="progress"&&!d||c==="option"&&d!==h.value)&&O(_,"value",d,h.value,!1),"checked"in f&&(d=f.checked)!==void 0&&d!==_.checked&&O(_,"checked",d,h.checked,!1))}return _}function de(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){u.__e(r,t)}}function pe(_,e,t){var r,l;if(u.unmount&&u.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||de(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){u.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(l=0;l<r.length;l++)r[l]&&pe(r[l],e,t||typeof _.type!="function");t||_.__e==null||ie(_.__e),_.__=_.__e=_.__d=void 0}function xe(_,e,t){return this.constructor(_,t)}function we(_,e,t){var r,l,o;u.__&&u.__(_,e),l=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],R(e,_=(!r&&t||e).__k=be(H,null,[_]),l||D,D,e.ownerSVGElement!==void 0,!r&&t?[t]:l?null:e.firstChild?I.call(e.childNodes):null,o,!r&&t?t:l?l.__e:e.firstChild,r),fe(o,_)}I=le.slice,u={__e:function(_,e,t,r){for(var l,o,i;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(_)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,r||{}),i=l.__d),i)return l.__E=l}catch(s){_=s}throw _}},re=0,T.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof _=="function"&&(_=_(x({},t),this.props)),_&&x(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),z(this))},T.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),z(this))},T.prototype.render=H,C=[],M.__r=0;var V,y,W,X,q=0,he=[],F=[],Y=u.__b,Z=u.__r,ee=u.diffed,_e=u.__c,te=u.unmount;function ve(_,e){u.__h&&u.__h(y,_,q||e),q=0;var t=y.__H||(y.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:F}),t.__[_]}function ne(_){return q=1,Ne(me,_)}function Ne(_,e,t){var r=ve(V++,2);if(r.t=_,!r.__c&&(r.__=[t?t(e):me(void 0,e),function(o){var i=r.__N?r.__N[0]:r.__[0],s=r.t(i,o);i!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){y.u=!0;var l=y.shouldComponentUpdate;y.shouldComponentUpdate=function(o,i,s){if(!r.__c.__H)return!0;var a=r.__c.__H.__.filter(function(n){return n.__c});if(a.every(function(n){return!n.__N}))return!l||l.call(this,o,i,s);var p=!1;return a.forEach(function(n){if(n.__N){var h=n.__[0];n.__=n.__N,n.__N=void 0,h!==n.__[0]&&(p=!0)}}),!(!p&&r.__c.props===o)&&(!l||l.call(this,o,i,s))}}return r.__N||r.__}function Ce(_,e){var t=ve(V++,3);!u.__s&&$e(t.__H,e)&&(t.__=_,t.i=e,y.__H.__h.push(t))}function Ee(){for(var _;_=he.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(U),_.__H.__h.forEach(G),_.__H.__h=[]}catch(e){_.__H.__h=[],u.__e(e,_.__v)}}u.__b=function(_){y=null,Y&&Y(_)},u.__r=function(_){Z&&Z(_),V=0;var e=(y=_.__c).__H;e&&(W===y?(e.__h=[],y.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=F,t.__N=t.i=void 0})):(e.__h.forEach(U),e.__h.forEach(G),e.__h=[])),W=y},u.diffed=function(_){ee&&ee(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(he.push(e)!==1&&X===u.requestAnimationFrame||((X=u.requestAnimationFrame)||He)(Ee)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==F&&(t.__=t.__V),t.i=void 0,t.__V=F})),W=y=null},u.__c=function(_,e){e.some(function(t){try{t.__h.forEach(U),t.__h=t.__h.filter(function(r){return!r.__||G(r)})}catch(r){e.some(function(l){l.__h&&(l.__h=[])}),e=[],u.__e(r,t.__v)}}),_e&&_e(_,e)},u.unmount=function(_){te&&te(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{U(r)}catch(l){e=l}}),t.__H=void 0,e&&u.__e(e,t.__v))};var oe=typeof requestAnimationFrame=="function";function He(_){var e,t=function(){clearTimeout(r),oe&&cancelAnimationFrame(e),setTimeout(_)},r=setTimeout(t,100);oe&&(e=requestAnimationFrame(t))}function U(_){var e=y,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),y=e}function G(_){var e=y;_.__c=_.__(),y=e}function $e(_,e){return!_||_.length!==e.length||e.some(function(t,r){return t!==_[r]})}function me(_,e){return typeof e=="function"?e(_):e}var Ae=0;function v(_,e,t,r,l){var o,i,s={};for(i in e)i=="ref"?o=e[i]:s[i]=e[i];var a={type:_,props:s,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ae,__source:l,__self:r};if(typeof _=="function"&&(o=_.defaultProps))for(i in o)s[i]===void 0&&(s[i]=o[i]);return u.vnode&&u.vnode(a),a}const Se=(_,e)=>{const t=_.reduce((l,o)=>l+o,0);let r=0;for(let l=0;l<_.length;l++)_[l]!==0&&(r+=_[l]*e[l]);return(r/t).toFixed(2)};function Pe(){const[_,e]=ne(0),[t,r]=ne([0,1,2]),l=()=>{r([...t,t.length])},o=()=>{const i=document.querySelectorAll(".credits"),s=document.querySelectorAll(".grade"),a=[],p=[];i.forEach(n=>{a.push(parseFloat(n.value||0))}),s.forEach(n=>{p.push(parseFloat(n.value||0))}),e(Se(a,p)),window.scrollTo(0,0)};return Ce(()=>(window.addEventListener("keydown",i=>{i.key==="Enter"&&o()}),()=>{window.removeEventListener("keydown",i=>{i.key==="Enter"&&o()})}),[]),v(H,{children:v("div",{className:"text-center w-full px-5 max-w-[640px] flex flex-col m-auto py-20",children:[v("div",{children:v("h1",{className:"text-6xl font-bold mb-16",children:_||"GPA Cal"})}),v("div",{className:"flex  justify-between bg-gray-300 p-3 rounded-lg",children:[v("div",{className:"w-[75%] font-bold",children:["Course ",v("span",{className:"font-normal text-xs",children:"(Optional)"})]}),v("div",{className:"w-[25%] font-bold whitespace-nowrap",children:["Credits ",v("span",{className:"text-red-500",children:"*"})]}),v("div",{className:"w-[25%] font-bold whitespace-nowrap",children:["Grade ",v("span",{className:"text-red-500",children:"*"})]})]}),v("div",{id:"tableContainer",children:t.map((i,s)=>v(Le,{},s))}),v("button",{onClick:l,className:"mt-3 border-2 border-dashed border-blue-500 text-blue-500 hover:bg-blue-50 duration-200 rounded-lg py-2 px-3 ",children:"+"}),v("div",{className:"flex gap-2 mt-8",children:[v("button",{onClick:()=>{location.reload()},className:"w-full border-2 border-solid border-gray-300 rounded-full py-2 px-3 ",children:"Clear"}),v("button",{onClick:o,className:"w-full text-white font-bold bg-blue-500 hover:bg-blue-400 duration-200 rounded-full py-2 px-3 ",children:"Calculate"})]})]})})}function Le(){return v("div",{className:"inputContainer flex gap-2 mt-3",children:[v("input",{type:"text",className:"course outline-none border-2 border-solid border-gray-300 rounded-lg py-2 px-3 w-[75%]"}),v("input",{type:"number",min:0,step:.5,className:"credits outline-none border-2 border-solid border-gray-300 rounded-lg py-2 px-3 w-[25%]"}),v("input",{type:"number",min:0,step:.5,className:"grade outline-none border-2 border-solid border-gray-300 rounded-lg py-2 px-3 w-[25%]"})]})}we(v(Pe,{}),document.getElementById("app"));
