"use strict";(self.webpackChunkgatsby_lyceum_site=self.webpackChunkgatsby_lyceum_site||[]).push([[335],{2605:function(e,t,n){n.r(t);n(7294);var a=n(5414),r=n(2565),l=n(9718),c=n(7997),i=n(7750),s=n(2246),o=n(8468);t.default=function({data:e,location:t}){const n=(0,s.Hc)(e.markdownRemark),p=`Diaporama de ${(0,s.Jp)(n.classe)} en ${(0,s.ac)(n.matter)}: ${n.chapter}`,m=`Diaporama reveal.js de ${(0,s.Jp)(n.classe)} en ${(0,s.ac)(n.matter)} intitulé: «${n.chapter}»`,u="diapo",d=t.pathname.substring(0,t.pathname.length-u.length).replace(/^\/|\/$/g,"");return o.createElement(c.Z,{location:t,data:e},o.createElement(a.q,{title:`${p}`,htmlAttributes:{class:"exo"}},o.createElement("script",{type:"application/ld+json"},`\n         {"@context": "http://schema.org/",\n          "@type": "exercice",\n          "name": "${n.part} | ${n.chapter}",\n          "description": "${m}",\n          "learningResourceType": [\n            "lesson"    ],\n          "provider": {\n            "@type": "schema:EducationalOrganization",\n            "name": "lyceum.fr"\n          },\n          "audience": {\n            "@type": "EducationalAudience",\n            "éducationRole": "student"\n          },\n          "educationalAlignment": {\n            "@type": "AlignmentObject",\n            "alignmentType": "educationalLevel",\n            "educationalFramework": "French Grade Levels",\n            "targetName": "${(0,s.Jp)(n.classe)}",\n            "@id": "${(0,s.rj)(n.classe)}"\n          },\n          "url": "${t.href}"\n        }\n    `)),o.createElement(r.Z,{node:n}),o.createElement(l.Z,{currentCoursePath:d,type:u}),o.createElement(i.Z,null,o.createElement("h1",null,"Diaporama"),o.createElement("strong",null,`Chapitre ${n.nChapter}: ${n.chapter}`)),o.createElement("div",null,o.createElement("button",{type:"button",className:"btn btn-lg btn-block btn-outline-primary",onClick:function(e){e.target.nextSibling.requestFullscreen()}},"Lancer le diaporama en plein écran"),o.createElement("iframe",{src:`https://diapo.lyceum.fr/${d}/`,width:"100%",height:"400"})))}}}]);
//# sourceMappingURL=component---src-templates-diapo-js-2aa85b54e6095d98e526.js.map