(window["webpackJsonpcustom-appstore-webapp"]=window["webpackJsonpcustom-appstore-webapp"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),c=a.n(s),o=(a(23),a(12)),i=a(13),l=a(16),p=a(14),m=a(17),u=(a(24),a(15)),h=a.n(u),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).searchApps=function(e){a.setState({searchValue:e.target.value})},a.state={apps:!1,error:!1,searchValue:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.location.href.split("?");if(2===t.length&&t[1].startsWith("s=")){var a=t[1].replace("s=","");this.setState({searchValue:a})}h.a.get("/api/apps/").then((function(t){var a=t.data;"error"in a?e.setState({error:a.error}):e.setState({apps:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container mb-4 mt-4"},this.state.error?r.a.createElement("div",{className:"alert alert-danger text-center mt-4"},this.state.error):this.state.apps?r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center"},"SAMF AppStore"),r.a.createElement("div",{className:"search row d-flex justify-content-center"},r.a.createElement("input",{type:"text",placeholder:"App",onChange:this.searchApps,value:this.state.searchValue})),this.state.apps.filter((function(t){return new RegExp(e.state.searchValue,"ig").test(t.name)})).map((function(e){return r.a.createElement("div",{key:e.appId},r.a.createElement("div",{className:"row d-flex justify-content-center appShortInfosContainer"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("img",{className:"iconImg",src:"https://ipa.samf.me/"+e.iconImg,alt:"icon for "+e.name})),r.a.createElement("div",{className:"col appShortInfos"},e.name,r.a.createElement("br",null),e.seller),r.a.createElement("div",{className:"col-auto d-flex align-items-center"},r.a.createElement("div",{className:"btn btn-sm btn-light dlButton"},r.a.createElement("a",{href:"itms-services://?action=download-manifest&url=https://appstore.samf.me/api/"+e.appId+"/manifest.plist"},"GET")))))}))):null)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.df23ee01.chunk.js.map