(this["webpackJsonpgithub-portfolio"]=this["webpackJsonpgithub-portfolio"]||[]).push([[0],{15:function(e,s,t){},18:function(e,s,t){},20:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t(9),i=t.n(a),r=(t(15),t(2)),n=t(3),l=t(5),j=t(4),o=t(8),d=t(10),h=t.n(d),b=(t(18),t(0)),m=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,c=this.props.data.address.city,a=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsxs)("header",{id:"home",children:[Object(b.jsxs)("nav",{id:"nav-wrap",children:[Object(b.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(b.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(b.jsxs)("ul",{id:"nav",className:"nav",children:[Object(b.jsx)("li",{className:"current",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})})]})]}),Object(b.jsx)("div",{className:"row banner",children:Object(b.jsxs)("div",{className:"banner-text",children:[Object(b.jsx)("h1",{className:"responsive-headline",children:e}),Object(b.jsxs)("h3",{children:["I'm a ",c," based ",Object(b.jsx)("span",{children:s}),", ",t,"."]}),Object(b.jsx)("hr",{}),Object(b.jsx)("ul",{className:"social",children:a})]})}),Object(b.jsx)("p",{className:"scrolldown",children:Object(b.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(b.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.url,children:Object(b.jsx)("i",{className:e.className})})},e.name)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"twelve columns",children:[Object(b.jsx)("ul",{className:"social-links",children:e}),Object(b.jsx)("ul",{className:"copyright",children:Object(b.jsxs)("li",{children:["Design by ",Object(b.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})})]}),Object(b.jsx)("div",{id:"go-top",children:Object(b.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(b.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),O=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio1,c=this.props.data.bio2,a=this.props.data.bio3,i=this.props.data.address.street,r=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,j=this.props.data.phone,o=this.props.data.email,d=this.props.data.resumedownload;return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"three columns",children:Object(b.jsx)("img",{className:"profile-pic",src:s,alt:"Patrick Charlton Profile Pic"})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("h2",{children:"About Me"}),Object(b.jsx)("p",{children:t}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("p",{children:a}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"columns contact-details",children:[Object(b.jsx)("h2",{children:"Contact Details"}),Object(b.jsxs)("p",{className:"address",children:[Object(b.jsx)("span",{children:e}),Object(b.jsx)("br",{}),Object(b.jsxs)("span",{children:[i,Object(b.jsx)("br",{}),r," ",n,", ",l]}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:j}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:o})]})]}),Object(b.jsx)("div",{className:"columns download",children:Object(b.jsx)("p",{children:Object(b.jsxs)("a",{href:d,className:"button",children:[Object(b.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})}}]),t}(c.Component),u=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.school}),Object(b.jsxs)("p",{className:"info",children:[e.degree," ",Object(b.jsx)("span",{children:"\u2022"}),Object(b.jsx)("em",{className:"date",children:e.graduated})]}),Object(b.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.company}),Object(b.jsxs)("p",{className:"info",children:[e.title,Object(b.jsx)("span",{children:"\u2022"})," ",Object(b.jsx)("em",{className:"date",children:e.years})]}),Object(b.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{style:{width:e.level},className:s}),Object(b.jsx)("em",{children:e.name})]},e.name)}));return Object(b.jsxs)("section",{id:"resume",children:[Object(b.jsxs)("div",{className:"row education",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Education"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:Object(b.jsx)("div",{className:"row item",children:Object(b.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(b.jsxs)("div",{className:"row work",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Work"})})}),Object(b.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(b.jsxs)("div",{className:"row skill",children:[Object(b.jsx)("div",{className:"three columns header-col",children:Object(b.jsx)("h1",{children:Object(b.jsx)("span",{children:"Skills"})})}),Object(b.jsxs)("div",{className:"nine columns main-col",children:[Object(b.jsx)("p",{children:e}),Object(b.jsx)("div",{className:"bars",children:Object(b.jsx)("ul",{className:"skills",children:c})})]})]})]})}}]),t}(c.Component),x=(c.Component,function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(b.jsx)("div",{className:"columns portfolio-item",children:Object(b.jsx)("div",{className:"item-wrap",children:Object(b.jsxs)("a",{href:e.url,title:e.title,children:[Object(b.jsx)("img",{alt:e.title,src:s}),Object(b.jsx)("div",{className:"overlay",children:Object(b.jsxs)("div",{className:"portfolio-item-meta",children:[Object(b.jsx)("h5",{children:e.title}),Object(b.jsx)("p",{children:e.category})]})}),Object(b.jsx)("div",{className:"link-icon",children:Object(b.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(b.jsx)("section",{id:"portfolio",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"twelve columns collapsed",children:[Object(b.jsx)("h1",{children:"My Works"}),Object(b.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),t}(c.Component)),v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},o.a.initialize("UA-110570651-1"),o.a.pageview(window.location.pathname),c}return Object(n.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{data:this.state.resumeData.main}),Object(b.jsx)(O,{data:this.state.resumeData.main}),Object(b.jsx)(x,{data:this.state.resumeData.portfolio}),Object(b.jsx)(u,{data:this.state.resumeData.resume}),Object(b.jsx)(p,{data:this.state.resumeData.main})]})}}]),t}(c.Component);i.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3dc6748e.chunk.js.map