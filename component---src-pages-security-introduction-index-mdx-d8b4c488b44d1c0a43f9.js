(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),o=a("NmYn"),s=a.n(o),l=a("OKom"),c=a("k4MR"),d=a("TSYQ"),u=a.n(d),p=a("QH2O"),b=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(b.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(b.b)("div",{className:"bx--grid"},Object(b.b)("div",{className:"bx--row"},Object(b.b)("div",{className:"bx--col-lg-12"},Object(b.b)("h1",{id:"page-title",className:p.text},a)))))},h=a("pEPl"),f=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(b.b)("div",{className:"bx--row "+f.row},Object(b.b)("div",{className:"bx--col"},Object(b.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},y=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),w=a("I8xM");var O=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0}),i=r===n,o=new RegExp(n+"(?!-)"),l=a.replace(o,r);return Object(b.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(b.b)(v.Link,{className:w.link,to:""+l},e))}));return Object(b.b)("div",{className:w.tabsContainer},Object(b.b)("div",{className:"bx--grid"},Object(b.b)("div",{className:"bx--row"},Object(b.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(b.b)("nav",null,Object(b.b)("ul",{className:w.list},r))))))},n}(i.a.Component),j=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,o=t.frontmatter,d=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,h=d.tabs,f=d.title,v=d.theme,w=d.description,I=d.keywords,k=n.data.site.pathPrefix,S=k?r.pathname.replace(k,""):r.pathname,P=h?S.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(b.b)(c.a,{tabs:h,homepage:!1,theme:v,pageTitle:f,pageDescription:w,pageKeywords:I,titleType:p},Object(b.b)(m,{title:i?Object(b.b)(i,null):f,label:"label",tabs:h}),h&&Object(b.b)(O,{slug:S,tabs:h,currentTab:P}),Object(b.b)(j.a,{padded:!0},a,Object(b.b)(g,{relativePagePath:u})),Object(b.b)(y.a,{pageContext:t,location:r,slug:S,tabs:h,currentTab:P}),Object(b.b)(l.a,null))}},LLkc:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution Overview"),Object(n.b)("p",null,"IBM® Cloud Pak for Security provides a platform to quickly integrate\nyour existing security tools to generate deeper insights into threats\nacross hybrid, multicloud environments."),Object(n.b)("p",null,"The IBM Cloud Pak for Security platform uses an infrastructure-independent\ncommon operating environment that can be installed and run anywhere.\nIt comprises containerized software pre-integrated with Red Hat OpenShift\nenterprise application platform, which is trusted and certified by\nthousands of organizations around the world."),Object(n.b)("p",null,"IBM Cloud Pak for Security can connect disparate data sources—to uncover\nhidden threats and make better risk-based decisions—while leaving the data\nwhere it resides. By using open standards and IBM innovations, IBM Cloud\nPak for Security can securely access IBM and third-party tools to search\nfor threat indicators across any cloud or on-premises location. Connect\nyour workflows with a unified interface so you can respond faster to\nsecurity incidents. Use IBM Cloud Pak for Security to orchestrate and\nautomate your security response so that you can better prioritize your\nteam’s time."),Object(n.b)("p",null,"More information about IBM Cloud Pak for Security can be found at this\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/scp-core/overview.html"}),"IBM Knowledge Center"),"\npage."),Object(n.b)("p",null,"IBM Cloud Pak for Security 1.2.0 includes the following component\napplications."),Object(n.b)("h2",null,"Data Explorer"),Object(n.b)("p",null,"IBM® Security Data Explorer is a platform application that enables\ncustomers to perform federated search and investigation across their\nhybrid, multi-cloud environment in a single interface and workflow.\nData Explorer enables users to perform investigations in a timely manner\nwithout compromising visibility. Core underlying services and capabilities\ninclude:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Federated data search to unite silos of security data and provide\ncomplete visibility across security solutions (for example,\nSecurity Information and Event Management, Endpoint Detection and Response,\nData lake), and cloud infrastructures (for example, Azure,\nAmazon Web Services (AWS))"),Object(n.b)("li",{parentName:"ul"},"Single, unified interface and workflow to investigate threats and\nIndicators of Compromise into user-selected data sources"),Object(n.b)("li",{parentName:"ul"},"In-context data enhancements from connected asset and risk data sources\nand IBM® Threat Intelligence Insights"),Object(n.b)("li",{parentName:"ul"},"Workflows to track, append, create security cases from native platform\ncase management system")),Object(n.b)("p",null,"For more information, see the\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/data-explorer/overview.html?view=kc"}),"Data Explorer"),"\nsection of the IBM Knowledge Center."),Object(n.b)("h2",null,"Cases"),Object(n.b)("p",null,"Cases for IBM Cloud Pak for Security provides organizations with the\nability to track, manage, and resolve cybersecurity incidents. With Cases,\nSecurity and IT teams can collaborate across their organization to rapidly\nand successfully respond to incidents. For more information, see\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/orchestrated-response-scp/overview.html?view=kc"}),"Cases"),"."),Object(n.b)("h2",null,"IBM Threat Intelligence Insights"),Object(n.b)("p",null,"IBM Threat Intelligence Insights is an application that delivers unique,\nactionable, and timely threat intelligence. The application provides\nnearly all the same functions the X-Force Exchange does with added\nfeatures such as:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"IBM-derived threat intelligence across threat activity, threat groups,\nmalware, and industries"),Object(n.b)("li",{parentName:"ul"},"Continuous and automated ",Object(n.b)("em",{parentName:"li"},"Am I Affected")," searches across connected data\nsources to proactively identify your most relevant threats"),Object(n.b)("li",{parentName:"ul"},"Analytical and adaptive threat scoring to help prioritize threats for\nfurther investigation and response")),Object(n.b)("p",null,"For more information, see\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/threat-intelligence-insights/overview.html?view=kc"}),"IBM Threat Intelligence Insights"),"."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," The IBM Threat Intelligence Insights application is installed\nby default, but can be switched off as part of the IBM Cloud Pak for\nSecurity installation process."),Object(n.b)("h2",null,"IBM Resilient Security Orchestration, Automation, and Response (SOAR) Platform"),Object(n.b)("p",null,"IBM® Resilient Security Orchestration, Automation, and Response\n(SOAR) Platform (5737-A52) is offered as an on-premises solution and\ndelivers a foundation for successful cybersecurity defense that enables\norganizations to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create response plans that are based on industry standards and best\npractices."),Object(n.b)("li",{parentName:"ul"},"Integrate more easily with security and IT tools, and orchestrate\nresponses to events and incidents."),Object(n.b)("li",{parentName:"ul"},"Collaborate across the organization, equipping various stakeholders\nwith the tools to fulfill their roles and tasks as part of an incident\nresponse effort.")),Object(n.b)("p",null,"For more information, see\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/resilient.html?view=kc"}),"IBM Resilient Security Orchestration, Automation, and Response (SOAR) Platform"),"."),Object(n.b)("h2",null,"IBM QRadar Security Intelligence Platform"),Object(n.b)("p",null,"IBM® QRadar® Security Intelligence Platform is offered as an on-premises\nsolution and delivers intelligent security analytics, enabling visibility,\ndetection, and investigation for a wide range of known and unknown threats.\nEvent analytics ingest, parse, normalize, correlate, and analyze log and\nevent data to detect indicators of threats, identify anomalous activities,\nautomatically connect related threat activity, and alert security teams\nto potential threats. Flow analytics collect, extract, and normalize\nvaluable network flow data and packet metadata to augment log-based\nsecurity insights and identify network and application level threat\nactivity, such as phishing, lateral movement, and data exfiltration."),Object(n.b)("p",null,"For more information, see\n",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/qradar.html?view=kc"}),"QRadar Security Intelligence Platform "),"."),Object(n.b)("p",null,"The following diagram illustrates a high-level overview of the components\nof IBM Cloud Pak for Security."),Object(n.b)("img",{src:"https://www.ibm.com/support/knowledgecenter/SSTDPP_1.2.0/docs/scp-core/images/overview.png",alt:"Overview diagram"}))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/cloudpak8s","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-security-introduction-index-mdx-d8b4c488b44d1c0a43f9.js.map