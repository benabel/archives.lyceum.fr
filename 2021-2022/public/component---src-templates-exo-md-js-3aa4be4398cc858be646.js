"use strict";(self.webpackChunkgatsby_lyceum_site=self.webpackChunkgatsby_lyceum_site||[]).push([[643],{4756:function(e,t,n){n.r(t);n(7294);var a=n(5414),c=n(2565),r=n(9718),l=n(7997),i=n(7750),s=n(2246),p=n(8468);t.default=function({data:e,location:t}){const n=(0,s.Hc)(e.markdownRemark),u=`Exercices de ${(0,s.Jp)(n.classe)} en ${(0,s.ac)(n.matter)}: ${n.chapter}`,m=`Exercices de ${(0,s.Jp)(n.classe)} en ${(0,s.ac)(n.matter)} intitulé: «${n.chapter}»`,o=n.type,d=t.pathname.substring(0,t.pathname.length-o.length).replace(/^\/|\/$/g,"");return p.createElement(l.Z,{location:t,data:e},p.createElement(a.q,{title:`${u}`,htmlAttributes:{class:"exo"}},p.createElement("script",{type:"application/ld+json"},`\n         {"@context": "http://schema.org/",\n          "@type": "exercice",\n          "name": "${n.part} | ${n.chapter}",\n          "description": "${m}",\n          "learningResourceType": [\n            "lesson"    ],\n          "provider": {\n            "@type": "schema:EducationalOrganization",\n            "name": "lyceum.fr"\n          },\n          "audience": {\n            "@type": "EducationalAudience",\n            "éducationRole": "student"\n          },\n          "educationalAlignment": {\n            "@type": "AlignmentObject",\n            "alignmentType": "educationalLevel",\n            "educationalFramework": "French Grade Levels",\n            "targetName": "${(0,s.Jp)(n.classe)}",\n            "@id": "${(0,s.rj)(n.classe)}"\n          },\n          "url": "${t.href}"\n        }\n    `)),p.createElement(c.Z,{node:n}),p.createElement(r.Z,{currentCoursePath:d,type:o}),p.createElement(i.Z,null,p.createElement("h1",null,"Exercices"),p.createElement("strong",null,`Chapitre ${n.nChapter}: ${n.chapter}`)),p.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))}}}]);
//# sourceMappingURL=component---src-templates-exo-md-js-3aa4be4398cc858be646.js.map