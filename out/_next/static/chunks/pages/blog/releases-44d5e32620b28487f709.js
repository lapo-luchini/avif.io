_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"5yme":function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var a=s("nKUr"),i=s("L9Gw"),n=s("iZZx"),o=s("Ne+F"),c=["Added a fixed header for easier navigation.","Browser Console errors do not show up.","If you accept the Cookie Banner, it won't show again","Fixed several links not working","Optimized layout of mobile sites","Sources of Blog Posts are now ordered alphabetically","A sitemap has been added for search engines","Fixed several mistakes in terms of accessibility","Several other linting and bug fixes"],r=["The 'Download all' button is now more prominent","Tags under blog posts don't look like they are clickable","Our archives had empty sections, which are removed now","We've linked our Discord in the footer, as you like to click our names a lot","We've removed some techy tooltips as probably most people don't care about them","Added a Discord channel :)"],d=["Fixed our Tutorials overview","removed Google Adsense Tests","Reduced overall page size","Removed primary convert button on homepage","Increased readability on mobile devices","Cleaned the privacy policy page","People love to play with our image slider, we are thinking of integrating it into the conversion progress","Updated our Linting process for less errors","Added an explainer to the settings box that effects only take place for newly uploaded files","Improved uploading on mobile devices, even though it isn't our focus","Consistency: If we talk about AVIF, we write it like this. If we talk about avif.io, we use lower case letters.","Added Hotjar Feedback widget to make friends with people that suffer from failed conversions"],l=["Made website more accessible by using semantic elements and aria attributes","Added JSON data for better search engine results","Linked Sitemap in footer"],h=[""];function u(){return Object(a.jsxs)(i.a,{postdata:o.d,posts:h,children:[Object(a.jsx)("h2",{children:"21.01.2021 - Misc Changes"}),Object(a.jsx)(n.a,{advantages:l,checked:!0}),Object(a.jsx)("h2",{children:"19.01.2021 - Misc Changes"}),Object(a.jsx)(n.a,{advantages:d,checked:!0}),Object(a.jsx)("h2",{children:"15.01.2021 - Misc Changes"}),Object(a.jsx)(n.a,{advantages:r,checked:!0}),Object(a.jsx)("h2",{children:"11.01.2021 - Misc Changes"}),Object(a.jsx)(n.a,{advantages:c,checked:!0})]})}},L9Gw:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var a=s("nKUr"),i=s("Pq54"),n=s("iZZx");function o(e){return Object(a.jsxs)("section",{className:"archive",children:[Object(a.jsx)(i.a,{title:e.postdata.title,description:e.postdata.description,author:e.postdata.author,url:e.postdata.url,image:e.postdata.image,date_published:e.postdata.date_published,date_modified:e.postdata.date_modified}),Object(a.jsxs)("div",{className:"blog__header overlay-after white center",children:[Object(a.jsx)("h1",{children:e.postdata.title}),Object(a.jsx)("h2",{children:e.postdata.description})]}),Object(a.jsx)(n.b,{posts:e.posts}),e.children?Object(a.jsx)("div",{className:"content__container",children:Object(a.jsx)("div",{className:"content",children:e.children})}):""]})}},hhYn:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/releases",function(){return s("5yme")}])},iZZx:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return r}));var a=s("nKUr"),i=s("YFqc"),n=s.n(i);function o(e){var t=e.advantages.map((function(t,s){return Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.checked,name:e.advantage}),Object(a.jsx)("label",{htmlFor:e.advantage,children:t})]},s)}));return Object(a.jsx)("ul",{children:t})}function c(e){var t=e.posts.map((function(e,t){return Object(a.jsx)(n.a,{href:"/".concat(e.url),children:Object(a.jsxs)("div",{className:"posts__item",children:[Object(a.jsx)("div",{className:"posts__img"}),Object(a.jsxs)("div",{className:"posts__data",children:[Object(a.jsx)("div",{className:"posts__title",children:e.title}),Object(a.jsx)("div",{children:e.description})]})]})},t)}));return Object(a.jsxs)("section",{className:"posts",children:[Object(a.jsx)("h2",{children:"Related articles"}),Object(a.jsx)("div",{className:"posts__container grid",children:t})]})}function r(e){var t=e.tags,s=e.questions,i=t.map((function(e,t){return Object(a.jsxs)("div",{className:"tag",children:["(",e,")"]},t)})),n=s.map((function(e,t){return Object(a.jsxs)("div",{className:"question",children:["(",e,")"]},t)}));return Object(a.jsxs)("section",{className:"tags_container f0",children:[Object(a.jsx)("h3",{children:"Tags, Related Questions and Headlines"}),i," ",n]})}}},[["hhYn",0,1,2,3,4]]]);