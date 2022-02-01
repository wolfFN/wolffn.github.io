"use strict";(self.webpackChunkdocusaurus_demo=self.webpackChunkdocusaurus_demo||[]).push([[3637],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(t),d=l,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return t?a.createElement(k,i(i({ref:n},s),{},{components:t})):a.createElement(k,i({ref:n},s))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8879:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return u}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=["components"],o={title:"SQLAlchemy"},p=void 0,m={unversionedId:"data-science/python/sql-alchemy",id:"data-science/python/sql-alchemy",isDocsHomePage:!1,title:"SQLAlchemy",description:"SQLAlchemy \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a",source:"@site/docs/data-science/python/sql-alchemy.md",sourceDirName:"data-science/python",slug:"/data-science/python/sql-alchemy",permalink:"/docs/data-science/python/sql-alchemy",tags:[],version:"current",frontMatter:{title:"SQLAlchemy"},sidebar:"Python",previous:{title:"Environment",permalink:"/docs/data-science/python/env"}},s=[{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",children:[],level:2},{value:"\u5efa\u7acb\u8fde\u63a5",id:"\u5efa\u7acb\u8fde\u63a5",children:[],level:2},{value:"Transaction",id:"transaction",children:[{value:"text()",id:"text",children:[],level:3},{value:"Commit",id:"commit",children:[],level:3},{value:"Result",id:"result",children:[],level:3},{value:"\u4f20\u9012\u53c2\u6570",id:"\u4f20\u9012\u53c2\u6570",children:[],level:3}],level:2},{value:"MetaData",id:"metadata",children:[{value:"ORM \u6a21\u5f0f",id:"orm-\u6a21\u5f0f",children:[],level:3},{value:"Table Reflection",id:"table-reflection",children:[],level:3}],level:2}],c={toc:s};function u(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SQLAlchemy \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Core")," \u57fa\u7840\u67b6\u6784\uff0c\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"database toolkit"),"\u3002\u63d0\u4f9b\u7684\u5de5\u5177\u7528\u4e8e\u7ba1\u7406\u4e0e\u6570\u636e\u5e93\u7684\u8fde\u63a5\uff0c\u67e5\u8be2\u6570\u636e\u5e93\u5e76\u4e0e\u7ed3\u679c\u4ea4\u4e92\uff0c\u4ee5\u53caSQL\u8bed\u53e5\u7684\u7a0b\u5e8f\u5316\u6784\u5efa\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ORM")," \u6784\u5efa\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"Core")," \u57fa\u7840\u4e4b\u4e0a\uff0c\u63d0\u4f9b\u53ef\u9009\u7684\u5173\u7cfb\u6620\u5c04\uff08object relational mapping \uff09\u80fd\u529b\u3002\u5b83\u6269\u5c55\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"Core")," \u7684 SQL \u8868\u8fbe\u5f0f\u8bed\u8a00\uff0c\u5141\u8bb8\u7528\u7528\u6237\u5b9a\u4e49\u7684\u5bf9\u8c61\u6765\u7ec4\u6210\u548c\u8c03\u7528SQL\u67e5\u8be2\u3002")),(0,r.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"conda install sqlalchemy pymysql\n")),(0,r.kt)("p",null,"\u5f15\u5165 SQLAlchemy \u5e76\u67e5\u8be2\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import sqlalchemy\nsqlalchemy.__version__\n\n# 1.4.27\n")),(0,r.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DDL")," \u662fSQL\u7684\u5b50\u96c6\uff0c\u6307\u7684\u662f\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"schema-level")," \u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," \u7684\u521b\u5efa\u3001\u4fee\u6539\u6216\u5220\u9664\u3002\u7531\u4e8e\u8bb8\u591a\u6570\u636e\u5e93\u4f7f\u7528\u4e8b\u52a1\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"DDL")," \uff08\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT")," \u4e4b\u524d\u4e0d\u751f\u6548\uff09\uff0c\u6240\u4ee5\uff0c\u7c7b\u4f3c ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u8fd9\u6837\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"DDL")," \u5e94\u653e\u5230\u4e00\u4e2a\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT")," \u7ed3\u675f\u7684\u4e8b\u52a1\u5757\u4e2d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DML")," INSERT"),(0,r.kt)("h2",{id:"\u5efa\u7acb\u8fde\u63a5"},"\u5efa\u7acb\u8fde\u63a5"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"create_engine")," \u521b\u5efa\u8fde\u63a5\u3002\u683c\u5f0f\u5982\u4e0b\uff1a  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[DB]+[DBAPI]://[user-name]:[password]@[database-location]/[database-name]\n")),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"pymysql")," \u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3306")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),", \u7528\u6237\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\uff0c\u5bc6\u7801 ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\uff0c\u6570\u636e\u5e93\u540d ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from sqlalchemy import create_engine,text\nengine = create_engine(\n    "mysql+pymysql://nodejs:nodejs@localhost:3306/nodejs", echo=True, future=True)\n')),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"echo")," \u53c2\u6570\u7528\u4e8e\u8c03\u8bd5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"future")," \u53c2\u6570\u7528\u4e8e\u652f\u6301\u672a\u6765\u7248\u672c\u7684 SQLAlchemy\u3002"),(0,r.kt)("h2",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"\u4ece\u4f7f\u7528\u7684\u89d2\u5ea6\u6765\u770b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"engine")," \u7684\u76ee\u7684\u5728\u4e8e\u63d0\u4f9b\u4e00\u4e2a\u4e0e\u6570\u636e\u5e93\u8fde\u63a5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Connection")," \u4ee3\u8868\u4e86\u4e00\u4e2a\u4e0e\u6570\u636e\u5e93\u8fde\u63a5\u7684\u8d44\u6e90\uff0c\u6211\u4eec\u5e0c\u671b\u628a\u8fd9\u4e2a\u5bf9\u8c61\u7684\u4f7f\u7528\u8303\u56f4\u9650\u5236\u5728\u4e00\u4e2a\u7279\u5b9a\u7684\u4e0a\u4e0b\u6587\u4e2d\uff0c\u800c\u505a\u5230\u8fd9\u4e00\u70b9\u7684\u6700\u597d\u65b9\u6cd5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Python context manager form"),"\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"with")," \u8bed\u53e5\u3002"),(0,r.kt)("h3",{id:"text"},"text()"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"text")," \u662f SQLAlchemy \u4e2d\u7684\u7b80\u5355\u7ed3\u6784\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u5c06SQL\u8bed\u53e5\u5199\u6210\u6587\u672cSQL\u3002\u5c5e\u4e8e\u4e00\u79cd\u4f8b\u5916\u7528\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# \u521b\u5efa Table\n# "commit as you go"\nwith engine.connect() as conn:\n    conn.execute(text("CREATE TABLE some_table (x int, y int)"))\n    conn.commit()\n\n# \u63d2\u5165\u6570\u636e\n# "begin once"\nwith engine.begin() as conn:\n    conn.execute(\n        text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),\n        [{"x": 1, "y": 1}, {"x": 2, "y": 4}]\n    )\n\n# \u67e5\u8be2\nwith engine.connect() as conn:\n    result = conn.execute(text("SELECT * from some_table"))\n    print(result.all())\n\n\n# \u5220\u9664 Table\nwith engine.connect() as conn:\n    conn.execute(text("DROP TABLE IF EXISTS some_table"))\n    conn.commit()\n')),(0,r.kt)("h3",{id:"commit"},"Commit"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u5c55\u793a\u4e86\u4e24\u79cd Commit \u7684\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"commit as you go"),"\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"engine.connect()")," \u8fde\u63a5\uff0c\u5e76\u5728\u7ed3\u5c3e\u5904 ",(0,r.kt)("inlineCode",{parentName:"li"},"conn.commit()"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"begin once"),"\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"engine.begin()"),"\uff0c\u65e0\u9700\u663e\u5f0f commit\u3002\u8fd9\u662f\u6bd4\u8f83\u63a8\u8350\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("h3",{id:"result"},"Result"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u5747\u53ef\u7528\u4ee5\u904d\u5386\u67e5\u8be2\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'with engine.connect() as conn:\n    result = conn.execute(text("SELECT * from some_table"))\n    print(result.all())\n\n    result = conn.execute(text("SELECT * from some_table"))\n    for x, y in result:\n        print(x,y)\n\n    result = conn.execute(text("SELECT * from some_table"))\n    for row in result:\n        print(row.x, row.y)\n\n    result = conn.execute(text("SELECT * from some_table"))\n    for row in result:\n        print(row[0], row[1])\n\n\n    result = conn.execute(text("SELECT * from some_table"))\n    for dict_row in result.mappings():\n        print(dict_row[\'x\'], dict_row[\'y\'])\n')),(0,r.kt)("h3",{id:"\u4f20\u9012\u53c2\u6570"},"\u4f20\u9012\u53c2\u6570"),(0,r.kt)("p",null,"\u4e3a\u907f\u514d ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL")," \u6ce8\u5165\u653b\u51fb\uff0c\u5728\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL")," \u6587\u672c\u65f6\uff0c\u5bf9\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," \u5b57\u9762\u91cf\uff0c\u5373\u4f7f\u662f\u975e\u5b57\u7b26\u4e32\uff0c\u7c7b\u4f3c\u6570\u5b57\u3001\u65e5\u671f\uff0c\u4e5f\u4e0d\u53ef\u76f4\u63a5(\u4ee5\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u7684\u65b9\u5f0f)\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," \u4e2d\u3002\u5e94\u5f53\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'with engine.connect() as conn:\n    result = conn.execute(\n        text("SELECT * from some_table WHERE y > :y"),\n        {"y": 2}\n    )\n    print(result.all())\n')),(0,r.kt)("p",null,"\u591a\u4e2a\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'with engine.begin() as conn:\n    conn.execute(\n        text("INSERT INTO some_table (x, y) VALUES (:x, :y)"),\n        [{"x": 11, "y": 12}, {"x": 13, "y": 14}]\n    )\n\nwith engine.begin() as conn:\n    conn.execute(\n        text("DELETE FROM some_table WHERE x = :x"),\n        [{"x": 11 }, {"x": 13 }]\n    )\n')),(0,r.kt)("p",null,"\u6b64\u5916\u8fd8\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"bindparam")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"text()")," \u65b9\u6cd5\u4e2d\u7ed1\u5b9a\u53c2\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from sqlalchemy.orm import Session\nstmt = text("SELECT x, y FROM some_table WHERE y > :y ORDER BY x, y").bindparams(y=6)\nwith Session(engine) as session:\n    result = session.execute(stmt)\n')),(0,r.kt)("p",null,"\u6b64\u4f8b\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Session")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection")," \u7c7b\u4f3c\uff0c\u4e3b\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ORM")," \u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"metadata"},"MetaData"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaData")," \u4ee3\u6307\u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," \u6982\u5ff5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"python object"),"\u3002\u6bd4\u5982\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Column"),"\u3002  "),(0,r.kt)("p",null,"\u53ef\u4ee5\u7528\u4e8e\u521b\u5efa/\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"Table"),"\u3002\u4e0d\u8fc7\u4e00\u822c\u5e94\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"test suites"),"\uff0c\u6216\u8005\u5c0f\u578b/\u7b80\u5355\u5e94\u7528\u3002\u5bf9\u4e8e\u9700\u8981\u957f\u671f\u7ef4\u62a4\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"database schema"),"\uff0c \u63a8\u8350\u4f7f\u7528\u4e13\u95e8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"schema management tool"),"\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://alembic.sqlalchemy.org/"},"Alembic"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from sqlalchemy import MetaData, Table, Column, Integer, String, ForeignKey\nmetadata_obj = MetaData()\n\nuser_table = Table(\n    \"user_account\",\n    metadata_obj,\n    Column('id', Integer, primary_key=True),\n    Column('name', String(30)),\n    Column('fullname', String(50))\n)\n\naddress_table = Table(\n    \"address\",\n    metadata_obj,\n    Column('id', Integer, primary_key=True),\n    Column('user_id', ForeignKey('user_account.id'), nullable=False),\n    Column('email_address', String(30), nullable=False)\n)\n\n# \u6267\u884c\u521b\u5efa\u64cd\u4f5c\nmetadata_obj.create_all(engine)\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7701\u7565\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ForeignKey")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"datatype"),"\uff0c\u5c06\u4f1a\u81ea\u52a8\u4ece\u5bf9\u5e94 ",(0,r.kt)("inlineCode",{parentName:"p"},"Column")," \u83b7\u53d6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Column objects")," \u5b58\u50a8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.c"),"\uff0c\u8fd9\u91cc\u4e5f\u53ef\u4ee5\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"p"},"Constraints"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"user_table.c.name\n# Column('name', String(length=30), table=<user_account>)\nuser_table.c.keys()\n# ['id', 'name', 'fullname']\n\nuser_table.primary_key\n# PrimaryKeyConstraint(Column('id', Integer(), table=<user_account>, primary_key=True, nullable=False))\n\naddress_table.foreign_keys\n# {ForeignKey('user_account.id')}\n\naddress_table.foreign_key_constraints\n")),(0,r.kt)("h3",{id:"orm-\u6a21\u5f0f"},"ORM \u6a21\u5f0f"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ORM")," \u6a21\u5f0f\u4e0b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata Object")," \u5b58\u50a8\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," \u4e2d\u3002 \u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"mapped class")," \u90fd\u5e94\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"declarative base"),"\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from sqlalchemy.orm import registry, declarative_base, relationship\nmapper_registry = registry() \n# \u83b7\u53d6 Base \u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u63a8\u8350\u540e\u8005\u3002\n# Base = mapper_registry.generate_base()\nBase = declarative_base()\n\nclass User(Base):\n    __tablename__ = \'user_account\'\n\n    id = Column(Integer, primary_key=True)\n    name = Column(String(30))\n    fullname = Column(String(50))\n\n    addresses = relationship("Address", back_populates="user")\n\n    def __repr__(self):\n        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"\n\nclass Address(Base):\n    __tablename__ = \'address\'\n\n    id = Column(Integer, primary_key=True)\n    email_address = Column(String(30), nullable=False)\n    user_id = Column(Integer, ForeignKey(\'user_account.id\'))\n\n    user = relationship("User", back_populates="addresses")\n\n    def __repr__(self):\n        return f"Address(id={self.id!r}, email_address={self.email_address!r})"\n\n\n# metadata \u4f4d\u4e8e mapper_registry.metadata \u6216 Base.metadata\uff0c\u63a8\u8350\u540e\u8005\n# mapper_registry.metadata.create_all(engine)\nBase.metadata.create_all(engine)\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"User.__table__")," \u7528\u4ee5\u5b58\u50a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," \u76f8\u5173\u4fe1\u606f\u3002  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"User.__table__\n# Table('user_account', MetaData(), Column('id', Integer(), table=<user_account>, primary_key=True, nullable=False), Column('name', String(length=30), table=<user_account>), Column('fullname', String(), table=<user_account>), schema=None)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"__repr__()")," \u662f\u4e00\u4e2a\u53ef\u9009\u65b9\u6cd5\uff0c\u7528\u4e8e\u683c\u5f0f\u5316\u663e\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"mapped class")," \u7684\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"sandy = User(name=\"sandy\", fullname=\"Sandy Cheeks\")\nsandy\n# User(id=None, name='sandy', fullname='Sandy Cheeks')\n")),(0,r.kt)("h3",{id:"table-reflection"},"Table Reflection"),(0,r.kt)("p",null,"\u4e4b\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," \u7684\u76f8\u5173\u5185\u5bb9\uff0c\u90fd\u662f\u7528\u6765\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," \u63d0\u4ea4 ",(0,r.kt)("inlineCode",{parentName:"p"},"DDL")," \u8bed\u53e5\u7684\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Reflection")," \u662f\u76f8\u53cd\u64cd\u4f5c\uff1a\u7528\u6765\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," \u83b7\u53d6\u76f8\u5173\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"some_table = Table(\"some_table\", metadata_obj, autoload_with=engine)\nsome_table\n# Table('some_table', MetaData(), Column('x', INTEGER(), table=<some_table>), Column('y', INTEGER(), table=<some_table>), schema=None)\n")))}u.isMDXComponent=!0}}]);