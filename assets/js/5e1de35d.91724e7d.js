"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[2646],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},32519:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={title:"Conditional Rendering"},c=void 0,s={unversionedId:"library/react/conditional-rendering",id:"library/react/conditional-rendering",title:"Conditional Rendering",description:"\u672c\u8282\u4e3b\u8981\u8bb0\u5f55 react \u4e2d\u6761\u4ef6\u5e38\u89c1\u7684\u6761\u4ef6\u6e32\u67d3\u5199\u6cd5\u3002",source:"@site/docs/library/react/conditional-rendering.md",sourceDirName:"library/react",slug:"/library/react/conditional-rendering",permalink:"/docs/library/react/conditional-rendering",draft:!1,tags:[],version:"current",frontMatter:{title:"Conditional Rendering"},sidebar:"Library",previous:{title:"\u6027\u80fd",permalink:"/docs/library/react/react-performance"},next:{title:"diff",permalink:"/docs/library/react/diff"}},u={},p=[{value:"IF ELSE",id:"if-else",level:3},{value:"Ternary Operation",id:"ternary-operation",level:3},{value:"Logical &amp;&amp; Operator",id:"logical--operator",level:3},{value:"Switch Case Operator",id:"switch-case-operator",level:3},{value:"Enums",id:"enums",level:3},{value:"Multi Level",id:"multi-level",level:3},{value:"High Order Components",id:"high-order-components",level:3},{value:"Reference",id:"reference",level:2}],d={toc:p},f="wrapper";function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u8282\u4e3b\u8981\u8bb0\u5f55 react \u4e2d\u6761\u4ef6\u5e38\u89c1\u7684\u6761\u4ef6\u6e32\u67d3\u5199\u6cd5\u3002")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"JSX"),"\xa0 \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 pure javascript \u6765\u8fdb\u884c\u6761\u4ef6\u63a7\u5236\u3002"),(0,o.kt)("h3",{id:"if-else"},"IF ELSE"),(0,o.kt)("p",null,"\u672c\u4eba\u66f4\u503e\u5411\u4e8e\u7701\u7565\u6389 else\uff0c\u5c06\u6700\u901a\u7528\u7684\u60c5\u51b5\u4f5c\u4e3a\u9ed8\u8ba4\u8fd4\u56de\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function List({ list }) {\n    if (!list) {\n        return null;\n    }\n\n    if (!list.length) {\n        return <p>Sorry, the list is empty.</p>;\n    } else {\n        return (\n            <div>\n                {list.map(item => (\n                    <ListItem item={item} />\n                ))}\n            </div>\n        );\n    }\n}\n")),(0,o.kt)("h3",{id:"ternary-operation"},"Ternary Operation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Item({ item, mode }) {\n    const isEditMode = mode === 'EDIT';\n    return <div>{isEditMode ? <ItemEdit item={item} /> : <ItemView item={item} />}</div>;\n}\n")),(0,o.kt)("h3",{id:"logical--operator"},"Logical && Operator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function LoadingIndicator({ isLoading }) {\n    return <div>{isLoading && <p>Loading...</p>}</div>;\n}\n")),(0,o.kt)("h3",{id:"switch-case-operator"},"Switch Case Operator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function Notification({ text, state }) {\n    switch (state) {\n        case 'info':\n            return <Info text={text} />;\n        case 'warning':\n            return <Warning text={text} />;\n        case 'error':\n            return <Error text={text} />;\n        default:\n            return null;\n    }\n}\nNotification.propTypes = {\n    text: React.PropTypes.string,\n    state: React.PropTypes.oneOf(['info', 'warning', 'error']),\n};\n\n// \u53ef\u4ee5\u4f7f\u7528\u7acb\u5373\u6267\u884c\u51fd\u6570\u6765 inline switch case\nfunction Notification({ text, state }) {\n    return (\n        <div>\n            {(() => {\n                switch (state) {\n                    case 'info':\n                        return <Info text={text} />;\n                    case 'warning':\n                        return <Warning text={text} />;\n                    case 'error':\n                        return <Error text={text} />;\n                    default:\n                        return null;\n                }\n            })()}\n        </div>\n    );\n}\n")),(0,o.kt)("h3",{id:"enums"},"Enums"),(0,o.kt)("p",null,"\u8fd9\u662f\u5bf9 switch case \u7684\u6539\u8fdb\uff0c\u6709\u66f4\u597d\u7684\u53ef\u8bfb\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// external static enum\nconst NOTIFICATION_STATES = {\n    info: <Info />,\n    warning: <Warning />,\n    error: <Error />,\n};\nfunction Notification({ state }) {\n    return <div>{NOTIFICATION_STATES[state]}</div>;\n}\n\n// function depend on the text property\nconst getSpecificNotification = text => ({\n    info: <Info text={text} />,\n    warning: <Warning text={text} />,\n    error: <Error text={text} />,\n});\nfunction Notification({ state, text }) {\n    return <div>{getSpecificNotification(text)[state]}</div>;\n}\n\n//inline object\nfunction FooBarOrFooOrBar({ isFoo, isBar }) {\n    const key = `${isFoo}-${isBar}`;\n    return (\n        <div>\n            {\n                {\n                    ['true-true']: <FooBar />,\n                    ['true-false']: <Foo />,\n                    ['false-true']: <Bar />,\n                    ['false-false']: null,\n                }[key]\n            }\n        </div>\n    );\n}\nFooBarOrFooOrBar.propTypes = {\n    isFoo: React.PropTypes.boolean.isRequired,\n    isBar: React.PropTypes.boolean.isRequired,\n};\n")),(0,o.kt)("h3",{id:"multi-level"},"Multi Level"),(0,o.kt)("p",null,"\u6761\u4ef6\u6e32\u67d3\u53ef\u4ee5\u5d4c\u5957\uff0c\u4e0d\u8fc7\u53ef\u8bfb\u6027\u5f88\u5dee\u3002\u5efa\u8bae\u5c06\u5176\u5206\u89e3\u4e3a\u5305\u542b\u6761\u4ef6\u6e32\u67d3\u7684 small components\u3002",(0,o.kt)("br",null),"\u5373\u4f7f\u8fd9\u6837\uff0c\u53ef\u8bfb\u6027\u4e5f\u5f88\u4e00\u822c\uff0c\u53ef\u4ee5\u7ee7\u7eed\u5c1d\u8bd5 HOC\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function List({ list }) {\n    const isList = list && list.length;\n    return (\n        <div>\n            {isList ? (\n                <div>\n                    {list.map(item => (\n                        <ListItem item={item} />\n                    ))}\n                </div>\n            ) : (\n                <NoList isNull={!list} isEmpty={list && !list.length} />\n            )}\n        </div>\n    );\n}\nfunction NoList({ isNull, isEmpty }) {\n    return !isNull && isEmpty && <p>Sorry, the list is empty.</p>;\n}\n")),(0,o.kt)("h3",{id:"high-order-components"},"High Order Components"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.robinwieruch.de/gentle-introduction-higher-order-components"},"Read More")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// HOC declaration\nfunction withLoadingIndicator(Component) {\n    return function EnhancedComponent({ isLoading, ...props }) {\n        if (!isLoading) {\n            return <Component {...props} />;\n        }\n        return (\n            <div>\n                <p>Loading...</p>\n            </div>\n        );\n    };\n}\n// Usage\nconst ListWithLoadingIndicator = withLoadingIndicator(List);\n<ListWithLoadingIndicator isLoading={props.isLoading} list={props.list} />;\n")),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.robinwieruch.de/conditional-rendering-react"},"All React Conditional Rendering Techniques"))))}m.isMDXComponent=!0}}]);