"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[4285],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,c(c({ref:e},s),{},{components:n})):r.createElement(d,c({ref:e},s))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9429:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={title:"Patterns"},u=void 0,p={unversionedId:"library/react/patterns",id:"library/react/patterns",isDocsHomePage:!1,title:"Patterns",description:"\u4e00\u4e9b Best Practice.",source:"@site/docs/library/react/patterns.md",sourceDirName:"library/react",slug:"/library/react/patterns",permalink:"/docs/library/react/patterns",tags:[],version:"current",frontMatter:{title:"Patterns"},sidebar:"Library",previous:{title:"life-circle",permalink:"/docs/library/react/life-circle"},next:{title:"react-router",permalink:"/docs/library/react/react-router"}},s=[{value:"Render Props Pattern",id:"render-props-pattern",children:[],level:2}],l={toc:s};function m(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e9b Best Practice.\n",(0,a.kt)("a",{parentName:"p",href:"https://reactpatterns.com/"},"React Patterns")),(0,a.kt)("h2",{id:"render-props-pattern"},"Render Props Pattern"),(0,a.kt)("p",null,"Also called\xa0 ",(0,a.kt)("strong",{parentName:"p"},"children as a function"),"\xa0or ",(0,a.kt)("strong",{parentName:"p"},"child as a function.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is used to expose internal data from within a render prop component for making it accessible to other components within the render prop component's composition.",(0,a.kt)("br",null))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import React, { Component } from 'react';\n\nconst App = () => (\n    <Amount>\n        {amount => (\n            <div>\n                <Pound amount={amount} />\n                <Euro amount={amount} />\n            </div>\n        )}\n    </Amount>\n);\n\nclass Amount extends Component {\n    constructor(props) {\n        super(props);\n\n        this.state = {\n            amount: 0,\n        };\n    }\n\n    onIncrement = () => {\n        this.setState(state => ({ amount: state.amount + 1 }));\n    };\n\n    onDecrement = () => {\n        this.setState(state => ({ amount: state.amount - 1 }));\n    };\n\n    render() {\n        return (\n            <div>\n                <span>US Dollar: {this.state.amount} </span>\n\n                <button type='button' onClick={this.onIncrement}>\n                    +\n                </button>\n                <button type='button' onClick={this.onDecrement}>\n                    -\n                </button>\n\n                {this.props.children(this.state.amount)}\n            </div>\n        );\n    }\n}\n\nconst Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;\n\nconst Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;\n\nexport default App;\n")))}m.isMDXComponent=!0}}]);