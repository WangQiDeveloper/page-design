!function(e){function t(t){for(var o,s,r=t[0],u=t[1],d=t[2],c=0,p=[];c<r.length;c++)s=r[c],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={1:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=i[e]=[t,o]}));t.push(n[2]=o);var a,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=function(e){return s.p+""+({}[e]||e)+"_6100a179.js"}(e);var u=new Error;a=function(t){r.onerror=r.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,n[1](u)}i[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:r})}),12e4);r.onerror=r.onload=a,document.head.appendChild(r)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/page-design/",s.oe=function(e){throw console.error(e),e};var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var l=u;a.push([403,0,2]),n()}({172:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAADUAQMAAAC4SmMMAAAABlBMVEXt7/L///+J6BmjAAAAAW9yTlQBz6J3mgAAAPZJREFUWMPtkjsOwjAMQFNVqGMlLhAJcY8uSHArsnILjtIbcIVMzNlgqDC10ka2sPi1pQx+Q6S+2vGnNUZRFEWZkUVtTH7kLgOU4JjMURZ4EMooA5MWPL65MllhUAkNk3uUFm5MAmZWALw4Zu6BlS8Ag9rDs44AXBvOerL4jAftqS0RaVjxHrqOhKMd9dSsow7POuoIUmR4ni4WElsSpTgRbjJCVy8uxPaSri6NFF7JNBL9Rmkk+jUzoXdjLtGd2B+yjfLMZPF4ZZJ+WOQU6aPK8lfp5Sjp4cs7P04fGDlFOpf2/yLfl+Kd2WpzWK53ziiKoijzcQdMujqngtdtSQAAAABJRU5ErkJggg=="},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.design_save_page_info=t.design_get_page_info=t.design_get_component_template_list=t.design_get_component_list=void 0;var o,i=n(107),a=(o=i)&&o.__esModule?o:{default:o},s=n(595);t.design_get_component_list=function(){return n(614)},t.design_get_component_template_list=function(){return n(615)},t.design_get_page_info=function(){return new a.default((function(e,t){e(n(616))}))},t.design_save_page_info=function(){return(0,s.get)("/design_get_page_info")};t.default={}},368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(579)),i=r(n(18)),a=r(n(580)),s=r(n(617));function r(e){return e&&e.__esModule?e:{default:e}}i.default.use(o.default);var u=new o.default.Store({modules:{design:a.default,page:s.default}});t.default=u},403:function(e,t,n){"use strict";var o=m(n(18)),i=n(173),a=m(i);n(573);var s=m(n(576)),r=m(n(577)),u=m(n(368)),d=m(n(641)),l=m(n(180)),c=m(n(623)),p=m(n(624)),f=m(n(633)),g=m(n(642));function m(e){return e&&e.__esModule?e:{default:e}}o.default.use(a.default),o.default.use(s.default),o.default.prototype.$confirm=i.Modal.confirm,o.default.prototype.$message=i.message,o.default.component("design-dialog",d.default),o.default.prototype.$api=l.default,o.default.use(c.default),o.default.use(p.default),o.default.use(f.default),o.default.prototype.$px2rem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e/75+"rem"},new o.default({el:"#app",router:r.default,store:u.default,render:function(e){return e(g.default)}})},443:function(e,t,n){var o={"./af":196,"./af.js":196,"./ar":197,"./ar-dz":198,"./ar-dz.js":198,"./ar-kw":199,"./ar-kw.js":199,"./ar-ly":200,"./ar-ly.js":200,"./ar-ma":201,"./ar-ma.js":201,"./ar-sa":202,"./ar-sa.js":202,"./ar-tn":203,"./ar-tn.js":203,"./ar.js":197,"./az":204,"./az.js":204,"./be":205,"./be.js":205,"./bg":206,"./bg.js":206,"./bm":207,"./bm.js":207,"./bn":208,"./bn.js":208,"./bo":209,"./bo.js":209,"./br":210,"./br.js":210,"./bs":211,"./bs.js":211,"./ca":212,"./ca.js":212,"./cs":213,"./cs.js":213,"./cv":214,"./cv.js":214,"./cy":215,"./cy.js":215,"./da":216,"./da.js":216,"./de":217,"./de-at":218,"./de-at.js":218,"./de-ch":219,"./de-ch.js":219,"./de.js":217,"./dv":220,"./dv.js":220,"./el":221,"./el.js":221,"./en-au":222,"./en-au.js":222,"./en-ca":223,"./en-ca.js":223,"./en-gb":224,"./en-gb.js":224,"./en-ie":225,"./en-ie.js":225,"./en-il":226,"./en-il.js":226,"./en-in":227,"./en-in.js":227,"./en-nz":228,"./en-nz.js":228,"./en-sg":229,"./en-sg.js":229,"./eo":230,"./eo.js":230,"./es":231,"./es-do":232,"./es-do.js":232,"./es-us":233,"./es-us.js":233,"./es.js":231,"./et":234,"./et.js":234,"./eu":235,"./eu.js":235,"./fa":236,"./fa.js":236,"./fi":237,"./fi.js":237,"./fil":238,"./fil.js":238,"./fo":239,"./fo.js":239,"./fr":240,"./fr-ca":241,"./fr-ca.js":241,"./fr-ch":242,"./fr-ch.js":242,"./fr.js":240,"./fy":243,"./fy.js":243,"./ga":244,"./ga.js":244,"./gd":245,"./gd.js":245,"./gl":246,"./gl.js":246,"./gom-deva":247,"./gom-deva.js":247,"./gom-latn":248,"./gom-latn.js":248,"./gu":249,"./gu.js":249,"./he":250,"./he.js":250,"./hi":251,"./hi.js":251,"./hr":252,"./hr.js":252,"./hu":253,"./hu.js":253,"./hy-am":254,"./hy-am.js":254,"./id":255,"./id.js":255,"./is":256,"./is.js":256,"./it":257,"./it-ch":258,"./it-ch.js":258,"./it.js":257,"./ja":259,"./ja.js":259,"./jv":260,"./jv.js":260,"./ka":261,"./ka.js":261,"./kk":262,"./kk.js":262,"./km":263,"./km.js":263,"./kn":264,"./kn.js":264,"./ko":265,"./ko.js":265,"./ku":266,"./ku.js":266,"./ky":267,"./ky.js":267,"./lb":268,"./lb.js":268,"./lo":269,"./lo.js":269,"./lt":270,"./lt.js":270,"./lv":271,"./lv.js":271,"./me":272,"./me.js":272,"./mi":273,"./mi.js":273,"./mk":274,"./mk.js":274,"./ml":275,"./ml.js":275,"./mn":276,"./mn.js":276,"./mr":277,"./mr.js":277,"./ms":278,"./ms-my":279,"./ms-my.js":279,"./ms.js":278,"./mt":280,"./mt.js":280,"./my":281,"./my.js":281,"./nb":282,"./nb.js":282,"./ne":283,"./ne.js":283,"./nl":284,"./nl-be":285,"./nl-be.js":285,"./nl.js":284,"./nn":286,"./nn.js":286,"./oc-lnc":287,"./oc-lnc.js":287,"./pa-in":288,"./pa-in.js":288,"./pl":289,"./pl.js":289,"./pt":290,"./pt-br":291,"./pt-br.js":291,"./pt.js":290,"./ro":292,"./ro.js":292,"./ru":293,"./ru.js":293,"./sd":294,"./sd.js":294,"./se":295,"./se.js":295,"./si":296,"./si.js":296,"./sk":297,"./sk.js":297,"./sl":298,"./sl.js":298,"./sq":299,"./sq.js":299,"./sr":300,"./sr-cyrl":301,"./sr-cyrl.js":301,"./sr.js":300,"./ss":302,"./ss.js":302,"./sv":303,"./sv.js":303,"./sw":304,"./sw.js":304,"./ta":305,"./ta.js":305,"./te":306,"./te.js":306,"./tet":307,"./tet.js":307,"./tg":308,"./tg.js":308,"./th":309,"./th.js":309,"./tl-ph":310,"./tl-ph.js":310,"./tlh":311,"./tlh.js":311,"./tr":312,"./tr.js":312,"./tzl":313,"./tzl.js":313,"./tzm":314,"./tzm-latn":315,"./tzm-latn.js":315,"./tzm.js":314,"./ug-cn":316,"./ug-cn.js":316,"./uk":317,"./uk.js":317,"./ur":318,"./ur.js":318,"./uz":319,"./uz-latn":320,"./uz-latn.js":320,"./uz.js":319,"./vi":321,"./vi.js":321,"./x-pseudo":322,"./x-pseudo.js":322,"./yo":323,"./yo.js":323,"./zh-cn":324,"./zh-cn.js":324,"./zh-hk":325,"./zh-hk.js":325,"./zh-mo":326,"./zh-mo.js":326,"./zh-tw":327,"./zh-tw.js":327};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=443},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constantRouterMap=void 0;var o=r(n(18)),i=r(n(578)),a=r(n(368)),s=n(173);function r(e){return e&&e.__esModule?e:{default:e}}o.default.use(i.default);var u=t.constantRouterMap=[{path:"/",redirect:"/design"},{path:"/design",meta:{name:"装修页"},component:function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,651))}},{path:"*",redirect:"/404",hidden:!0}],d=new i.default({routes:u});d.beforeEach((function(e,t,n){if("/activity/zf/native-design/native222"===e.path){var o=e.query,i=o.group_id,r=void 0===i?"":i,u=o.pipeline,d=void 0===u?"":u,l=o.lang,c=void 0===l?"":l,p=o.platform,f=void 0===p?"m":p;if(""===r||""===d||""===c||""===f)return s.message.error("非法请求"),n(!1),!1;a.default.dispatch("design/page_load",{group_id:r,pipeline:d,lang:c,platform:f,callback:function(e){n()}})}else n()})),t.default=d},580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(396)),i=d(n(397)),a=d(n(136)),s=d(n(107)),r=n(173),u=n(180);function d(e){return e&&e.__esModule?e:{default:e}}var l,c=function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new s.default((function(o,i){n.e(5).then((function(){(function(e){var i=[n(650)("./"+t+"/m/form/index.js")];(function(e){var t=JSON.parse((0,a.default)(e.config));o(t)}).apply(null,i)}).call(this,n(104)(e))})).catch(n.oe)}))},p={namespaced:!0,state:{first_loaded:!1,loading:!1,preview_in_drag:!1,selected_vdc:{},show_component_form:!1},actions:{form_open:(l=(0,i.default)(o.default.mark((function e(t,n){var i,a=t.state;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=n.is_loaded_config){e.next=5;break}return e.next=3,c(n.component_key,n.template_name);case 3:i=e.sent,n.update_set("config",i);case 5:a.selected_vdc=null,a.selected_vdc=n,a.show_component_form=!0;case 8:case"end":return e.stop()}}),e,this)}))),function(e,t){return l.apply(this,arguments)}),form_close:function(e){e.state.show_component_form=!1},component_locate_by_floor:function(){r.message.error("定位功能还没准备好")},page_load:function(e){var t=e.state,n=e.dispatch;t.loading=!0,(0,u.design_get_page_info)().then((function(e){if(1==e.code)return setTimeout((function(){window.location.href="/"}),3e3),!1;var o=e.data,i={page_id:o.pageId||"",group_id:o.groupId||"",pipeline:o.pipeline||"zf",lang:o.lang||"en",site_code:o.siteCode||"",platform:o.platform||"m",title:o.pageTitle||"",layouts:[],goodsSKU:[]};n("page/load",i,{root:!0}),n("page/load_remote_goods_data",{is_first:1},{root:!0}),t.loading=!1,t.first_loaded=!0}),(function(e){e.message&&r.message.error(e.message),setTimeout((function(){window.location.href="/"}),3e3)}))},page_save:function(e){var t=e.state;t.loading=!0,setTimeout((function(){t.loading=!1,r.message.success("保存成功")}),200)},page_reset:function(e){var t=e.rootState;r.Modal.confirm({title:"确认删除所有组件？",onOk:function(){t.page.new_layouts=[],t.page.goodsSKU=[]}})},page_update_layout_v2:function(e,t){(0,e.commit)("page/update_new_layout",t,{root:!0})}}};t.default=p},595:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=void 0;var o=i(n(107));function i(e){return e&&e.__esModule?e:{default:e}}var a=i(n(596)).default.create({baseURL:"http://rap2.taobao.org:38080/app/mock/254744",timeout:3e5});a.interceptors.response.use((function(e){return 200==e.status?e.data:o.default.reject(e)}),(function(e){return o.default.reject(e)}));t.get=function(e,t,n){return a({url:e,method:"GET",params:t})},t.post=function(e,t,n){return a({url:e,method:"POST",data:t})}},614:function(e){e.exports=JSON.parse('{"code":0,"data":[{"id":1,"category_id":1,"component_key":"U000001","name":"标题栏","description":"标题栏组件","tpl_id":1,"icon":"ui-component-title"},{"id":2,"category_id":1,"component_key":"U000002","name":"广告图","description":"广告图件","tpl_id":2,"icon":"ui-component-banner"},{"id":3,"category_id":1,"component_key":"U000003","name":"商品列表","description":"商品列表件","tpl_id":3,"icon":"ui-component-goodslist"}]}')},615:function(e){e.exports=JSON.parse('{"code":0,"data":[{"id":1,"name_en":"template1","name":"模版一","component_key":"U000001"},{"id":2,"name_en":"template1","name":"模版一","component_key":"U000002"},{"id":3,"name_en":"template1","name":"模版一","component_key":"U000003"},{"id":511,"name_en":"template1","name":"模版一","component_key":"U000248"},{"id":512,"name_en":"template1","name":"模版一","component_key":"U000251"}]}')},616:function(e){e.exports=JSON.parse('{"code":0,"message":"success","data":{"pageTitle":"DEMO页面","lang":"en","pageId":46151,"pipeline":"ZF","siteCode":"zf-wap","platform":"wap"}}')},617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(179)),i=a(n(398));function a(e){return e&&e.__esModule?e:{default:e}}var s={namespaced:!0,state:{env:1,info:{page_id:0,group_id:0,title:"",pipeline:"",lang:"",site_code:"",platform:"",od:"",country_code:"",bts_unique_id:""},relations:[],pipelines:[],new_layouts:[],goodsSKU:[],remote_data_loaded:!1,remote_data:[],languages:[],preview_url:""},mutations:{update_new_layout:function(e,t){e.new_layouts=t}},actions:{load:function(e,t){var n=e.state,o=t.page_id,i=t.group_id,a=t.pipeline,s=t.lang,r=t.site_code,u=t.platform,d=t.title,l=t.layouts,c=t.env,p=t.goodsSKU;n.env=c,n.info.page_id=o,n.info.group_id=i,n.info.title=d,n.info.pipeline=a,n.info.lang=s,n.info.site_code=r,n.info.platform=u,n.layouts=l,n.goodsSKU=p},load_remote_goods_data:function(e){var t=e.state,n={code:0,message:"success",data:{1588906992541:{skuInfo:[{id:"1588907399051",type:"3",component_id:"1588906992541",sku:"",sop_rule_id:"",sop_rule_name:"",price_sys_ids:"14949",tsk_info:{tsk_begin_time:"1588867200",tsk_end_time:"1624636799"},goodsInfo:[{goods_id:"557955",goods_sn:"454843201",goods_title:"Zip Pocket PU Leather Panel Backpack",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/23/grid-img/1534987293059075717.jpg",detail_url:"http://www.pc-zaful-spider-php5.fpm.egomsl.com/zip-pocket-pu-leather-panel-backpack-puid_2800426.html?kuid=557955",shop_price:"37.99",market_price:"70.43",discount:28,stock_num:2,tsk_price:"19.99",tsk_total_num:2,tsk_sale_num:0,tsk_left_num:2},{goods_id:"566016",goods_sn:"280080808",goods_title:"Funny Graphic Fleece Hoodie",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/09/03/grid-img/1535959167077609976.jpg",detail_url:"http://www.pc-zaful-spider-php5.fpm.egomsl.com/funny-graphic-fleece-hoodie-puid_2800808.html?kuid=566016",shop_price:"36.89",market_price:"54.23",discount:36,stock_num:2,tsk_price:"19.99",tsk_total_num:2,tsk_sale_num:0,tsk_left_num:2},{goods_id:"566047",goods_sn:"110738909",goods_title:"ZAFUL0test0 Cami Wide Leg Jumpsuit",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/27/grid-img/1535990322708422898.jpg",detail_url:"http://www.pc-zaful-spider-php5.fpm.egomsl.com/zaful-cami-wide-leg-jumpsuit-puid_1107389.html?kuid=566047",shop_price:"38.99",market_price:"50.69",discount:39,stock_num:2,tsk_price:"19.99",tsk_total_num:2,tsk_sale_num:0,tsk_left_num:2}]}]},1588906988501:{skuInfo:[{id:"1588907350068",type:"2",component_id:"1588906988501",sku:"",sop_rule_id:"604",sop_rule_name:"蜘蛛侠",price_sys_ids:"",goodsInfo:[{goods_id:557955,goods_sn:"454843201",goods_title:"Zip Pocket PU Leather Panel Backpack",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/23/grid-img/1534987293059075717.jpg",market_price:"70.43",shop_price:"19.99",discount:72,is_on_sale:1,goods_number:997,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/zip-pocket-pu-leather-panel-backpack-puid_4548432.html?kuid=557955"},{goods_id:557971,goods_sn:"279996101",goods_title:"Layered Disc Pendant Choker Necklace",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/23/grid-img/1534987343226361614.jpg",market_price:"4.48",shop_price:"94.99",discount:-123,is_on_sale:1,goods_number:10,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/layered-disc-pendant-choker-necklace-puid_2799961.html?kuid=557971"},{goods_id:557857,goods_sn:"278677108",goods_title:"Casual Striped Jogger Pants",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/21/grid-img/1534983385019748789.jpg",market_price:"42.09",shop_price:"9.99",discount:76,is_on_sale:1,goods_number:1007,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/casual-striped-jogger-pants-puid_2786771.html?kuid=557857"},{goods_id:557973,goods_sn:"279751401",goods_title:"Halloween Stone Texture Teardrop Design Earrings",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/23/grid-img/1534987349447563144.jpg",market_price:"5.81",shop_price:"9.99",discount:-72,is_on_sale:1,goods_number:997,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/halloween-stone-texture-teardrop-design-earrings-puid_2797514.html?kuid=557973"},{goods_id:557824,goods_sn:"271459203",goods_title:"Fashion Unisex Classic Trucker Baseball Golf Mesh Cap Hat vintage question mark women men hip-hop baseball dad hat baseball cap",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Maiyang/2018/06/13/grid-img/1534979376584364052.jpg",market_price:"28.09",shop_price:"9.99",discount:64,is_on_sale:1,goods_number:199,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/fashion-unisex-classic-trucker-baseball-golf-mesh-cap-hat-vintage-question-mark-women-men-hip-hop-baseball-dad-hat-baseball-cap-puid_2714592.html?kuid=557824"},{goods_id:557821,goods_sn:"271459004",goods_title:"Fashion Unisex Classic Trucker Baseball Golf Mesh Cap Hat vintage question mark women men hip-hop",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Maiyang/2018/06/13/grid-img/1534979367647587003.jpg",market_price:"7.72",shop_price:"21.99",discount:-185,is_on_sale:1,goods_number:200,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/fashion-unisex-classic-trucker-baseball-golf-mesh-cap-hat-vintage-question-mark-women-men-hip-hop-puid_2714590.html?kuid=557821"},{goods_id:562737,goods_sn:"280339603",goods_title:"Side Bear Logo Striped Jogger Pants",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/29/grid-img/1535595862586419223.jpg",market_price:"46.41",shop_price:"19.99",discount:57,is_on_sale:1,goods_number:100,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/side-bear-logo-striped-jogger-pants-puid_2803396.html?kuid=562737"},{goods_id:557933,goods_sn:"279711501",goods_title:"Tied Side V Neck Palazzo Jumpsuit",goods_img:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/08/23/grid-img/1534987159383175729.jpg",market_price:"45.87",shop_price:"9.99",discount:78,is_on_sale:1,goods_number:1003,url_quick:"",url_title:"http://m.wap-zaful-master-php5.fpm.egomsl.com/tied-side-v-neck-palazzo-jumpsuit-puid_2797115.html?kuid=557933"}],pagination:{page_num:1,page_size:20,total_count:8}}]}}};(0,i.default)(n.data).map((function(e){if(1==n.data[e].hasOwnProperty("skuInfo")){var i=n.data[e].skuInfo;Array.isArray(i)&&i.map((function(e){t.goodsSKU=t.goodsSKU.filter((function(t){return parseInt(t.id)!=parseInt(e.id)})),t.goodsSKU.push((0,o.default)({},e))}))}else t.remote_data.push({component_id:e,data:n.data[e]})})),t.remote_data_loaded=!0}}};t.default=s},621:function(e,t,n){var o=n(622);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(77).default)("9fd1b9c6",o,!1,{})},622:function(e,t,n){(e.exports=n(67)(!1)).push([e.i,"\n.design-dialog .ant-modal-body {\n  font-size: 13px;\n}\n.design-dialog .ant-modal-footer {\n  border-top: none;\n  text-align: center;\n  padding-top: 8px;\n  padding-bottom: 32px;\n}\n.design-dialog .ant-modal-footer .ant-btn {\n  padding: 0 32px;\n}\n.design-dialog .ant-modal-header .ant-modal-title {\n  color: #3F4245;\n  font-weight: 600;\n}\n.design-dialog .ant-modal-footer {\n  border-top: none;\n  text-align: center;\n  padding-bottom: 40px;\n}\n.design-dialog .ant-modal-footer button + button {\n  margin-left: 16px;\n}\n",""])},623:function(e,t,n){},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n(643)),i=d(n(644)),a=d(n(645)),s=d(n(646)),r=d(n(647)),u=d(n(648));function d(e){return e&&e.__esModule?e:{default:e}}var l=[o.default,i.default,a.default,s.default,r.default,u.default];t.default={install:function(e){l.map((function(t){e.component(t.name,t)}))}}},625:function(e,t,n){var o=n(626);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(77).default)("5b6f48ae",o,!1,{})},626:function(e,t,n){(e.exports=n(67)(!1)).push([e.i,"\n.ui-unit-discount[data-v-c3f89f26] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 1.06666667rem;\n  height: 1.06666667rem;\n  border-radius: 100%;\n  overflow: hidden;\n  z-index: 1;\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.ui-unit-discount > label[data-v-c3f89f26] {\n  font-size: 0.32rem;\n  line-height: 0.29333333rem;\n}\n.ui-unit-discount > label > i[data-v-c3f89f26] {\n  font-size: 0.29333333rem;\n  font-style: normal;\n  font-weight: 400;\n  font-family: OpenSans-Regular, arial, serif;\n}\n",""])},627:function(e,t,n){var o=n(628);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(77).default)("df0001a6",o,!1,{})},628:function(e,t,n){(e.exports=n(67)(!1)).push([e.i,"\nspan.is-del[data-v-24b063f2] {\n  text-decoration: line-through;\n}\n",""])},629:function(e,t,n){var o=n(630);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(77).default)("09dd4704",o,!1,{})},630:function(e,t,n){(e.exports=n(67)(!1)).push([e.i,"\n.ui-unit-image-goods[data-v-7f13b51c] {\n  display: flex;\n  align-items: center;\n  align-content: center;\n}\n.ui-unit-image-goods img[data-v-7f13b51c] {\n  width: 100%;\n}\n",""])},631:function(e,t,n){var o=n(632);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(77).default)("3837accb",o,!1,{})},632:function(e,t,n){(e.exports=n(67)(!1)).push([e.i,"\n.fixed .realdom[data-v-e6474d18] {\n  position: fixed;\n  right: 0px;\n  left: 0px;\n  z-index: 99999;\n}\n.fixed .mask[data-v-e6474d18] {\n  display: block;\n}\n.mask[data-v-e6474d18] {\n  display: none;\n}\n",""])},634:function(e,t,n){var o=n(635);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(77).default)("75a09448",o,!1,{})},635:function(e,t,n){(e.exports=n(67)(!1)).push([e.i,"\n.ant-checkbox-wrapper,\n.ant-checkbox-wrapper + .ant-checkbox-wrapper {\n  margin-left: 0px;\n  margin-right: 24px;\n}\n.ant-checkbox-wrapper span + span {\n  padding-left: 4px;\n  padding-right: 0px;\n}\n",""])},641:function(e,t,n){"use strict";n.r(t);var o={name:"design-dialog",props:{width:{type:[String,Number],default:960},title:{type:String},visible:{type:Boolean,default:!1},centered:{type:Boolean,default:!0},zIndex:{type:Number,default:1e3},confirmLoading:{type:Boolean,default:!1},okText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},wrapClassName:{type:String}},data:function(){return{}},methods:{handleOk:function(){this.$emit("isOk")},handleCancel:function(){this.$emit("isCancel")}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{staticClass:"design-dialog",attrs:{wrapClassName:e.wrapClassName,width:e.width,visible:e.visible,title:e.title,zIndex:e.zIndex,centered:e.centered,okText:e.okText,cancelText:e.cancelText,confirmLoading:e.confirmLoading},on:{cancel:e.handleCancel,ok:e.handleOk}},[e._t("default"),e._v(" "),n("template",{slot:"footer"},[e._t("footer")],2)],2)};i._withStripped=!0;var a=n(30);var s=function(e){n(621)},r=Object(a.a)(o,i,[],!1,s,null,null);r.options.__file="src/system-components/dialog/dialog.vue";t.default=r.exports},642:function(e,t,n){"use strict";n.r(t);var o=n(395),i=n.n(o),a={name:"app",data:function(){return{zh_CN:i.a}}},s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("a-locale-provider",{attrs:{locale:this.zh_CN}},[t("router-view")],1)],1)};s._withStripped=!0;var r=n(30);var u=function(e){n(634)},d=Object(r.a)(a,s,[],!1,u,null,null);d.options.__file="src/layout/index.vue";t.default=d.exports},643:function(e,t,n){"use strict";n.r(t);var o={name:"unit-discount",props:{value:{default:0},config:{type:Object,required:!0}},computed:{visible:function(){var e=void 0===this.config.discount_show||null===this.config.discount_show||Number(this.config.discount_show)>=1;return Number(this.value)<=0&&(e=!1),e},type:function(){return this.config.discount_type||1},right:function(){return 0},top:function(){return 0},width:function(){return 80},height:function(){return 80},style_body:function(){var e={width:this.$px2rem(this.width),height:this.$px2rem(this.height),right:this.$px2rem(this.right),top:this.$px2rem(this.top),color:this.config.discount_font_color||"#fff"};return this.config.discount_bg_image?(e["background-image"]='url("'+this.config.discount_bg_image+'")',e["border-radius"]=0):e["background-color"]=this.config.discount_bg_color||"#333333",e},value_parse:function(){var e=Math.round(this.value);return e<=0?0:e>=100?100:e}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",{staticClass:"ui-unit-discount",style:e.style_body},[n("label",{staticClass:"bold"},[1==e.type?[e._v("\n            "+e._s(e.value_parse)+"%"),n("br"),n("i",[e._v("OFF")])]:[e._v("\n            -"+e._s(e.value_parse)+"%\n        ")]],2)]):e._e()};i._withStripped=!0;var a=n(30);var s=function(e){n(625)},r=Object(a.a)(o,i,[],!1,s,"data-v-c3f89f26",null);r.options.__file="src/ui-component/component-unit/discount/index.vue";t.default=r.exports},644:function(e,t,n){"use strict";n.r(t);var o={name:"unit-shop-price",props:{value:{default:"0.00",required:!0},currency:{default:""},config:{type:Object,default:function(){return{}}}}},i=function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"my_shop_price my-shop-price bold",attrs:{"data-orgp":this.value,"data-currency":this.currency,"data-original_amount":this.value}},[this._v("\n    $"+this._s(this.value)+"\n")])};i._withStripped=!0;var a=n(30),s=Object(a.a)(o,i,[],!1,null,null,null);s.options.__file="src/ui-component/component-unit/shop_price/index.vue";t.default=s.exports},645:function(e,t,n){"use strict";n.r(t);var o={name:"unit-market-price",props:{value:{default:"0.00",required:!0},shopPrice:{required:!0},currency:{default:"USD"},config:{type:Object,default:function(){return{}}}},data:function(){return{del:!this.config.market_price_del||Number(this.config.market_price_del)>=1}}},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return Number(e.value)>Number(e.shopPrice)?n("span",{class:{js_market_wrap:!0,my_shop_price:!0,"is-del":e.del},attrs:{"data-orgp":e.value,"data-currency":e.currency,"data-original_amount":e.value}},[e._v("\n        $"+e._s(e.value)+"\n")]):e._e()};i._withStripped=!0;var a=n(30);var s=function(e){n(627)},r=Object(a.a)(o,i,[],!1,s,"data-v-24b063f2",null);r.options.__file="src/ui-component/component-unit/market_price/index.vue";t.default=r.exports},646:function(e,t,n){"use strict";n.r(t);var o=n(136),i=n.n(o),a=n(172),s={name:"unit-goods-image",props:{src:{type:String,default:a.a},default_img:{type:String},sku:{type:String,default:""},index:{type:Number,default:0}},data:function(){var e=1!=this.$store.state.page.env,t=this.default_img?this.default_img:a.a;return{local_src:!0===e?t:this.src,lazyload:e}},computed:{analytics:function(){var e={pm:"mp",p:"p-"+this.$root.pageId,bv:{sku:""+this.sku,rank:""+this.index}};return i()(e)}}},r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"ui-unit-image-goods"},[t("img",{staticClass:"js-lazy",attrs:{src:this.local_src,"data-original":this.src,"data-logsss-browser-value":this.analytics}})])};r._withStripped=!0;var u=n(30);var d=function(e){n(629)},l=Object(u.a)(s,r,[],!1,d,"data-v-7f13b51c",null);l.options.__file="src/ui-component/component-unit/image_goods/index.vue";t.default=l.exports},647:function(e,t,n){"use strict";n.r(t);var o=n(12),i=n.n(o),a={name:"unit-load-more",props:{cid:{required:!0},source_data_id:{default:""}},data:function(){var e=this,t=new window.IntersectionObserver((function(t){t.filter((function(e){return!0===e.isIntersecting})).map((function(t){(t.target.getAttribute("data-id")||null)==e.id&&e.get_next_page_list()}))}));return{id:(new Date).getTime(),current_page:1,total_page:10,visible:!0,observer:t}},methods:{get_next_page_list:function(){var e=this,t=this.$store.state.page.goodsSKU.filter((function(t){return t.component_id==e.cid&&t.id==e.source_data_id}))[0],n=[].concat(i()(t.relation_component_id||""));if(n.push(this.cid),t.pagination.page_num*t.pagination.page_size>=t.pagination.total_count)return this.visible=!1,this.observer.unobserve(this.$refs.dom),!1;var o={component_id:n.join(","),page_no:t.pagination.page_num+1,page_size:t.pagination.page_size||20};if(t.filters){var a=t.filters;o.category_id=a.selected_category_id,o.sort_id=a.selected_sort_id,o.refine_id=a.selected_attrs,o.price_max=a.price_max,o.price_min=a.price_min}this.$store.dispatch("page/load_remote_goods_data",{data:o,callback:function(t){var n=t.data[e.cid].skuInfo[0];e.$store.state.page.goodsSKU.map((function(t){t.component_id==e.cid&&t.id===e.source_data_id&&(n.goodsInfo.map((function(e){t.goodsInfo.push(e)})),t.pagination.page_num=n.pagination.page_num,t.pagination.page_size=n.pagination.page_size,t.pagination.total_count=n.pagination.total_count)}))}})},append_next_page_list:function(e){var t=this;this.$store.state.page.goodsSKU.map((function(n){n.component_id==t.cid&&e.map((function(e){n.goodsInfo.push(e)}))}))}},mounted:function(){this.visible=1!=this.$store.state.page.env,this.visible&&this.observer.observe(this.$refs.dom)}},s=function(){var e=this.$createElement,t=this._self._c||e;return this.visible?t("div",{ref:"dom",staticStyle:{"text-align":"center","margin-top":"10px"},attrs:{"data-id":this.id}},[t("img",{staticStyle:{width:".96rem",height:".96rem"},attrs:{src:"https://css.zafcdn.com/imagecache/MZF/images/loading_zf.gif"}})]):this._e()};s._withStripped=!0;var r=n(30),u=Object(r.a)(a,s,[],!1,null,null,null);u.options.__file="src/ui-component/component-unit/load_more/index.vue";t.default=u.exports},648:function(e,t,n){"use strict";n.r(t);var o={name:"fixed-top",data:function(){return{current_top:0}},computed:{env:function(){return this.$store.state.page.env}},methods:{check_scroll_top:function(){var e=$(window).scrollTop();if(e==this.current_top)return!1;this.current_top=e;var t=$(this.$refs.dom).offset().top,n=$(this.$refs.dom).height();e+1>=t?(this.$emit("change",!0),$(this.$refs.dom).addClass("fixed").find(".realdom").attr("style","top: 0px"),$("#pageHeader").hide()):(this.$emit("change",!1),$(this.$refs.dom).removeClass("fixed").find(".mask").height(n),$("#pageHeader").show())}},mounted:function(){var e=this;if(1==this.env)return!1;$(window).scroll((function(){e.check_scroll_top()})),this.check_scroll_top()}},i=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{ref:"dom"},[t("div",{staticClass:"realdom"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"mask"})])};i._withStripped=!0;var a=n(30);var s=function(e){n(631)},r=Object(a.a)(o,i,[],!1,s,"data-v-e6474d18",null);r.options.__file="src/ui-component/component-unit/fixed_top/index.vue";t.default=r.exports}});