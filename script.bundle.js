(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=a(m,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var d=t(r[i]);e[d].references--}for(var c=o(n,a),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},159:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},365:(n,e,t)=>{t.d(e,{A:()=>d});var o=t(601),a=t.n(o),r=t(314),i=t.n(r)()(a());i.push([n.id,'/* Combined styles.css - Task Scheduler Project */\n\n/* Application visibility control */\n#task-scheduler-app {\n    display: none; /* Hidden by default, shown after login */\n}\n\n#login-container {\n    display: block; /* Shown by default, hidden after login */\n}\n\n/* Common styles */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    text-align: center;\n}\n\ninput, textarea {\n    border: 1px solid #ccc;\n    padding: 10px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n/* Login page styles */\n.container {\n    width: 25%;\n    margin: 120px auto;\n    padding: 50px;\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px rgb(76, 166, 239);\n}\n\n.login-page {\n    background-color: rgb(200, 217, 252);\n}\n\n.login-page label {\n    display: block;\n    margin-bottom: 10px;\n}\n\n.login-page input[type="text"], \n.login-page input[type="password"] {\n    width: 100%;\n    height: 30px;\n    margin-bottom: 20px;\n}\n\n#login-btn {\n    width: 100%;\n    height: 30px;\n    background-color: #e06c00;\n    color: #600505;\n    padding: 10px;\n    border: none;\n    border-radius: 5px;\n}\n\n#login-btn:hover {\n    background-color: #3e8e41;\n}\n\n#error-message {\n    color: red;\n    margin-top: 10px;\n}\n\n/* Task scheduler page styles */\nheader {\n    background-color: rgb(200, 217, 252);\n    padding: 20px;\n    text-align: center;\n}\n\nmain {\n    display: flex;\n    flex-direction: row;\n    padding: 20px;\n}\n\n#task-list {\n    flex: 1;\n    margin-right: 20px;\n}\n\n#task-list-ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n#task-list-ul li {\n    padding: 10px;\n    border-bottom: 1px solid #ccc;\n}\n\n#task-list-ul li:last-child {\n    border-bottom: none;\n}\n\n#add-task {\n    flex: 1;\n}\n\n#add-task-form {\n    display: flex;\n    flex-direction: column;\n}\n\n#add-task-form label {\n    margin-bottom: 10px;\n}\n\n#add-task-form input, \n#add-task-form textarea {\n    margin-bottom: 20px;\n}\n\n#add-task-btn {\n    background-color: #4CAF50;\n    color: #fff;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n}\n\n#add-task-btn:hover {\n    background-color: #3e8e41;\n}\n\n/* Task actions */\n.task-actions {\n    display: flex;\n    gap: 10px;\n    margin-top: 5px;\n}\n\n.task-actions button {\n    padding: 5px 10px;\n    background-color: #f0f0f0;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n}\n\n.task-actions button:hover {\n    background-color: #e0e0e0;\n}',""]);const d=i},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),a=t.n(o),r=t(825),i=t.n(r),d=t(659),c=t.n(d),s=t(56),l=t.n(s),u=t(159),p=t.n(u),m=t(113),f=t.n(m),g=t(365),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),a()(g.A,v),g.A&&g.A.locals&&g.A.locals,document.addEventListener("DOMContentLoaded",(function(){var n=document.getElementById("login-btn"),e=document.getElementById("login-form"),t=document.getElementById("error-message"),o=document.getElementById("login-container"),a=document.getElementById("task-scheduler-app"),r=document.getElementById("welcome-user"),i=document.getElementById("logout-btn"),d=document.getElementById("task-list-ul"),c=document.getElementById("add-task-form"),s=document.getElementById("add-task-btn"),l=[];function u(n){n.preventDefault();var e=document.getElementById("task-name").value,t=document.getElementById("task-description").value,o=document.getElementById("task-deadline").value;if(e){var a={name:e,description:t,deadline:o};l.push(a),p(),c.reset()}else alert("Task name is required!")}function p(){d.innerHTML="",l.forEach((function(n,e){var t=document.createElement("li");t.textContent="".concat(n.name," - ").concat(n.description," - ").concat(n.deadline);var o=document.createElement("div");o.className="task-actions";var a=document.createElement("button");a.textContent="Edit",a.addEventListener("click",(function(){!function(n){var e=l[n];document.getElementById("task-name").value=e.name,document.getElementById("task-description").value=e.description,document.getElementById("task-deadline").value=e.deadline,s.textContent="Update Task",s.removeEventListener("click",u);var t=function(n){n.preventDefault(),e.name=document.getElementById("task-name").value,e.description=document.getElementById("task-description").value,e.deadline=document.getElementById("task-deadline").value,p(),c.reset(),s.textContent="Add Task",s.removeEventListener("click",t),s.addEventListener("click",u)};s.addEventListener("click",t)}(e)}));var r=document.createElement("button");r.textContent="Delete",r.addEventListener("click",(function(){!function(n){confirm("Are you sure you want to delete this task?")&&(l.splice(n,1),p())}(e)})),o.appendChild(a),o.appendChild(r),t.appendChild(o),d.appendChild(t)}))}n.addEventListener("click",(function(n){n.preventDefault();var e=document.getElementById("username").value,i=document.getElementById("password").value;"awakjairo"===e&&"password"===i?(o.style.display="none",a.style.display="block",r.textContent="Welcome, ".concat(e,"!"),p()):t.textContent="Invalid username or password"})),i.addEventListener("click",(function(){o.style.display="block",a.style.display="none",e.reset(),t.textContent=""})),s.addEventListener("click",u)}))})();