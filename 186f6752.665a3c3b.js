(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(807)),o={title:"Using Multiple Schemas"},c={unversionedId:"multiple-schemas",id:"version-3.6/multiple-schemas",isDocsHomePage:!1,title:"Using Multiple Schemas",description:"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL",source:"@site/versioned_docs/version-3.6/multiple-schemas.md",slug:"/multiple-schemas",permalink:"/docs/3.6/multiple-schemas",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/multiple-schemas.md",version:"3.6",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1604474725,sidebar:"version-3.6/docs",previous:{title:"Creating Custom Driver",permalink:"/docs/3.6/custom-driver"},next:{title:"Using native BigInt PKs (MySQL and PostgreSQL)",permalink:"/docs/3.6/using-bigint-pks"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL\nterminology, it is called database, but from implementation point of view, it is a schema. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To use multiple schemas, your connection needs to have access to all of them (multiple\nconnections are not supported).")),Object(i.b)("p",null,"All you need to do is simply define the table name including schema name in ",Object(i.b)("inlineCode",{parentName:"p"},"collection")," option:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity({ tableName: 'first_schema.foo' })\nexport class Foo { ... }\n\n@Entity({ tableName: 'second_schema.bar' })\nexport class Bar { ... }\n")),Object(i.b)("p",null,"Then use those entities as usual. Resulting SQL queries will use this ",Object(i.b)("inlineCode",{parentName:"p"},"tableName")," value as a\ntable name so as long as your connection has access to given schema, everything should work\nas expected."),Object(i.b)("p",null,"You can also query for entity in specific schema via ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager"),", ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository")," or\n",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const user = await em.findOne(User, { ... }, { schema: 'client-123' });\n")),Object(i.b)("p",null,"To create entity in specific schema, you will need to use ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"const qb = em.createQueryBuilder(User);\nawait qb.insert({ email: 'foo@bar.com' }).withSchema('client-123');\n")))}p.isMDXComponent=!0},807:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||i;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);