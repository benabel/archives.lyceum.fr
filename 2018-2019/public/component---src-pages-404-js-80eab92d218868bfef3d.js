(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(n,e,i){"use strict";i.r(e),function(n){i(0);e.default=function(){return n.createElement("main",null,n.createElement("style",{jsx:!0,global:!0},"\n      body {\n        background: #95d5ec;\n        color: #f2f11d;\n        font-family: 'Open Sans', sans-serif;\n        max-height: 700px;\n        overflow: hidden;\n      }\n      .c {\n        text-align: center;\n        display: block;\n        position: relative;\n        width: 80%;\n        margin: 100px auto;\n      }\n      ._404 {\n        font-size: 220px;\n        position: relative;\n        display: inline-block;\n        z-index: 2;\n        height: 250px;\n        letter-spacing: 15px;\n      }\n      ._1 {\n        text-align: center;\n        display: block;\n        position: relative;\n        letter-spacing: 12px;\n        font-size: 4em;\n        line-height: 80%;\n      }\n      ._2 {\n        text-align: center;\n        display: block;\n        position: relative;\n        font-size: 21px;\n      }\n      .text {\n        font-size: 70px;\n        text-align: center;\n        position: relative;\n        display: inline-block;\n        margin: 19px 0px 0px 0px;\n        /* top: 256.301px; */\n        z-index: 3;\n        width: 100%;\n        line-height: 1.2em;\n        display: inline-block;\n      }\n\n      .btn {\n        background-color: #c234c6;\n        position: relative;\n        display: inline-block;\n        width: 358px;\n        padding: 5px;\n        z-index: 5;\n        font-size: 25px;\n        margin: 0 auto;\n        color: #f2f11d;\n        text-decoration: none;\n        margin-right: 10px;\n      }\n      .right {\n        float: right;\n        width: 60%;\n      }\n\n      hr {\n        padding: 0;\n        border: none;\n        border-top: 5px solid #f2f11d;\n        color: #c234c6;\n        text-align: center;\n        margin: 0px auto;\n        width: 420px;\n        height: 10px;\n        z-index: -10;\n      }\n\n      hr:after {\n        content: '\\2022';\n        display: inline-block;\n        position: relative;\n        top: -0.75em;\n        font-size: 2em;\n        padding: 0 0.2em;\n        background: #95d5ec;\n      }\n\n      .cloud {\n        width: 350px;\n        height: 120px;\n\n        background: #fff;\n        background: linear-gradient(top, #fff 100%);\n        background: -webkit-linear-gradient(top, #fff 100%);\n        background: -moz-linear-gradient(top, #fff 100%);\n        background: -ms-linear-gradient(top, #fff 100%);\n        background: -o-linear-gradient(top, #fff 100%);\n\n        border-radius: 100px;\n        -webkit-border-radius: 100px;\n        -moz-border-radius: 100px;\n\n        position: absolute;\n        margin: 120px auto 20px;\n        z-index: -1;\n        transition: ease 1s;\n      }\n\n      .cloud:after,\n      .cloud:before {\n        content: '';\n        position: absolute;\n        background: #fff;\n        z-index: -1;\n      }\n\n      .cloud:after {\n        width: 100px;\n        height: 100px;\n        top: -50px;\n        left: 50px;\n\n        border-radius: 100px;\n        -webkit-border-radius: 100px;\n        -moz-border-radius: 100px;\n      }\n\n      .cloud:before {\n        width: 180px;\n        height: 180px;\n        top: -90px;\n        right: 50px;\n\n        border-radius: 200px;\n        -webkit-border-radius: 200px;\n        -moz-border-radius: 200px;\n      }\n      .x1 {\n        top: -50px;\n        left: 100px;\n        -webkit-transform: scale(0.3);\n        -moz-transform: scale(0.3);\n        transform: scale(0.3);\n        opacity: 0.9;\n        -webkit-animation: moveclouds 15s linear infinite;\n        -moz-animation: moveclouds 15s linear infinite;\n        -o-animation: moveclouds 15s linear infinite;\n      }\n\n      .x1_5 {\n        top: -80px;\n        left: 250px;\n        -webkit-transform: scale(0.3);\n        -moz-transform: scale(0.3);\n        transform: scale(0.3);\n        -webkit-animation: moveclouds 17s linear infinite;\n        -moz-animation: moveclouds 17s linear infinite;\n        -o-animation: moveclouds 17s linear infinite;\n      }\n\n      .x2 {\n        left: 250px;\n        top: 30px;\n        -webkit-transform: scale(0.6);\n        -moz-transform: scale(0.6);\n        transform: scale(0.6);\n        opacity: 0.6;\n        -webkit-animation: moveclouds 25s linear infinite;\n        -moz-animation: moveclouds 25s linear infinite;\n        -o-animation: moveclouds 25s linear infinite;\n      }\n\n      .x3 {\n        left: 250px;\n        bottom: -70px;\n\n        -webkit-transform: scale(0.6);\n        -moz-transform: scale(0.6);\n        transform: scale(0.6);\n        opacity: 0.8;\n\n        -webkit-animation: moveclouds 25s linear infinite;\n        -moz-animation: moveclouds 25s linear infinite;\n        -o-animation: moveclouds 25s linear infinite;\n      }\n\n      .x4 {\n        left: 470px;\n        botttom: 20px;\n\n        -webkit-transform: scale(0.75);\n        -moz-transform: scale(0.75);\n        transform: scale(0.75);\n        opacity: 0.75;\n\n        -webkit-animation: moveclouds 18s linear infinite;\n        -moz-animation: moveclouds 18s linear infinite;\n        -o-animation: moveclouds 18s linear infinite;\n      }\n\n      .x5 {\n        left: 200px;\n        top: 300px;\n\n        -webkit-transform: scale(0.5);\n        -moz-transform: scale(0.5);\n        transform: scale(0.5);\n        opacity: 0.8;\n\n        -webkit-animation: moveclouds 20s linear infinite;\n        -moz-animation: moveclouds 20s linear infinite;\n        -o-animation: moveclouds 20s linear infinite;\n      }\n\n      @-webkit-keyframes moveclouds {\n        0% {\n          margin-left: 1000px;\n        }\n        100% {\n          margin-left: -1000px;\n        }\n      }\n      @-moz-keyframes moveclouds {\n        0% {\n          margin-left: 1000px;\n        }\n        100% {\n          margin-left: -1000px;\n        }\n      }\n      @-o-keyframes moveclouds {\n        0% {\n          margin-left: 1000px;\n        }\n        100% {\n          margin-left: -1000px;\n        }\n      }\n    "),n.createElement("div",{id:"clouds"},n.createElement("div",{classNameName:"cloud x1"}),n.createElement("div",{className:"cloud x1_5"}),n.createElement("div",{className:"cloud x2"}),n.createElement("div",{className:"cloud x3"}),n.createElement("div",{className:"cloud x4"}),n.createElement("div",{className:"cloud x5"})),n.createElement("div",{className:"c"},n.createElement("div",{className:"_404"},"404"),n.createElement("hr",null),n.createElement("div",{className:"_1"},"LA PAGE QUE VOUS DEMANDEZ"),n.createElement("div",{className:"_2"},"EST INTROUVABLE"),n.createElement("a",{className:"btn",href:"/"},"REVENIR A L'ACCUEIL")))}}.call(this,i(104))}}]);
//# sourceMappingURL=component---src-pages-404-js-80eab92d218868bfef3d.js.map