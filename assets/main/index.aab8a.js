window.__require=function t(e,o,i){function s(a,h){if(!o[a]){if(!e[a]){var c=a.split("/");if(c=c[c.length-1],!e[c]){var r="function"==typeof __require&&__require;if(!h&&r)return r(c,!0);if(n)return n(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){return s(e[a][1][t]||t)},l,l.exports,t,e,o,i)}return o[a].exports}for(var n="function"==typeof __require&&__require,a=0;a<i.length;a++)s(i[a]);return s}({GameEventHandler:[function(t,e){"use strict";cc._RF.push(e,"639feJM8pVOcqS0BqLDbwey","GameEventHandler");var o=0;cc.Class({extends:cc.Component,properties:{},start:function(){this.node.on("eventHandler",this.OnAppletFinish.bind(this));try{var t=getJsonTemplate();console.log("JSON obtained from platform: ",JSON.parse(atob(t))),o=1}catch(e){console.error(e),console.log("using backup JSON"),t="eyJ0b3RhbFF1ZXN0aW9ucyI6MTUsInF1ZXN0aW9ucyI6W3sicXVlc3Rpb25ObyI6MSwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6MiwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6MywiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6NCwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6NSwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6NiwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6NywiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6OCwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6OSwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6MTAsImFuc3dlcmVkQ29ycmVjdGx5IjpudWxsfSx7InF1ZXN0aW9uTm8iOjExLCJhbnN3ZXJlZENvcnJlY3RseSI6bnVsbH0seyJxdWVzdGlvbk5vIjoxMiwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9LHsicXVlc3Rpb25ObyI6MTMsImFuc3dlcmVkQ29ycmVjdGx5IjpudWxsfSx7InF1ZXN0aW9uTm8iOjE0LCJhbnN3ZXJlZENvcnJlY3RseSI6bnVsbH0seyJxdWVzdGlvbk5vIjoxNSwiYW5zd2VyZWRDb3JyZWN0bHkiOm51bGx9XSwibWFya3MiOjB9"}window.My_Global_Data=t,JSON.parse(atob(window.My_Global_Data))},OnAppletFinish:function(t){var e=JSON.parse(atob(window.My_Global_Data));e.marks=t;var i=btoa(JSON.stringify(e));window.My_Global_Data=i,1==o?(onQuestionComplete(window.My_Global_Data),console.log("-> PLATFORM JSON: ",JSON.stringify(atob(window.My_Global_Data)))):console.log("-> Offline JSON: ",JSON.stringify(atob(window.My_Global_Data)))}}),cc._RF.pop()},{}],mainController:[function(t,e,o){"use strict";cc._RF.push(e,"cff8e6HBMNCSKY9eaGLy80G","mainController");var i,s=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),n=this&&this.__decorate||function(t,e,o,i){var s,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var h=t.length-1;h>=0;h--)(s=t[h])&&(a=(n<3?s(a):n>3?s(e,o,a):s(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,h=a.ccclass,c=a.property,r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.BG=[],e.Ques=[],e.showNote=[],e.sfx=[],e.orangeNote=[],e.greenNote=[],e.redNote=[],e.promtMessage=[],e.noPlayNote=[],e.PlayNote=[],e.assetNode=null,e.audioNode=null,e.showScore=[],e.quesCount=0,e.gameTime=60,e.timeTaken=0,e.currentBG=0,e.totalQues=0,e.totalQuesAttempted=0,e.noteSel=0,e.maxQues=200,e.maxPoints=0,e.n1=null,e.n2=null,e.play=!1,e.ques=0,e.ans=!1,e.score=0,e.total=0,e.sceneName="",e.marks=100/e.maxQues,e.QAJson={GameData:{AttemptedQues:{},CorrectAns:{}},questions:[{quesNo:[],result:[]}]},e.rightAns=0,e.wrongAns=0,e.playAnimation=0,e}return s(e,t),e.prototype.onClickBeginButton=function(){this.BG[this.currentBG].active=!1,this.currentBG=1,this.assetNode.active=!0,globalThis.timeCount=this.gameTime,globalThis.totalTime=Number(globalThis.timeCount),this.loadNextBG(),this.starCountDown();for(var t=1;t<=this.maxQues;t++)this.QAJson.questions[t]=[{quesNo:t,result:null}]},e.prototype.setTimer=function(){globalThis.timeCount-=1,this.timer.string=String(globalThis.timeCount),0==globalThis.timeCount&&(this.totalQues=this.maxQues,this.unschedule(this.setTimer),this.loadNextBG())},e.prototype.starCountDown=function(){this.timer.string=String(globalThis.timeCount),this.schedule(this.setTimer,1,globalThis.timeCount-1,0)},e.prototype.playNote1=function(){1==this.play?this.audioNode.getChildByName(String(this.n1)).getComponent(cc.AudioSource).play():this.audioNode.getChildByName(String(this.n1)).getComponent(cc.AudioSource).stop()},e.prototype.playNote2=function(){1==this.play?this.audioNode.getChildByName(String(this.n2)).getComponent(cc.AudioSource).play():this.audioNode.getChildByName(String(this.n2)).getComponent(cc.AudioSource).stop()},e.prototype.playAnimation1=function(){1==this.play&&(this.noPlayNote[0].active=!1,this.PlayNote[0].active=!0,this.PlayNote[0].angle=15==this.PlayNote[0].angle?-15:15)},e.prototype.playAnimation2=function(){1==this.play&&(this.noPlayNote[1].active=!1,this.PlayNote[1].active=!0,this.PlayNote[1].angle=15==this.PlayNote[1].angle?-15:15,this.unschedule(this.playAnimation1),this.noPlayNote[0].active=!0,this.PlayNote[0].active=!1,this.schedule(this.stopAnimation2,0,0,2))},e.prototype.stopAnimation2=function(){1==this.play&&(this.noPlayNote[1].active=!0,this.PlayNote[1].active=!1)},e.prototype.onClickListen=function(){cc.find("Canvas/Buttons/listen").getComponent(cc.Button).enableAutoGrayEffect=!0,cc.find("Canvas/Buttons/listen").getComponent(cc.Button).interactable=!1,this.schedule(this.buttonInteractable,0,0,3),this.play=!0,this.playNotes()},e.prototype.buttonInteractable=function(){cc.find("Canvas/Buttons/listen").getComponent(cc.Button).interactable=!0},e.prototype.onClickNote=function(t,e){this.noteSel=e,this.audioNode.getChildByName(String(this.n1)).getComponent(cc.AudioSource).stop(),this.audioNode.getChildByName(String(this.n2)).getComponent(cc.AudioSource).stop(),this.unschedule(this.playAnimation1),this.unschedule(this.playAnimation2),cc.find("Canvas/Buttons/listen").getComponent(cc.Button).enableAutoGrayEffect=!0,cc.find("Canvas/Buttons/listen").getComponent(cc.Button).interactable=!1,this.checkAns(),this.orangeNote[0].getComponent(cc.Button).interactable=!1,this.orangeNote[1].getComponent(cc.Button).interactable=!1},e.prototype.checkAns=function(){0==this.ques?this.ans=this.n2<this.n1&&2==this.noteSel||this.n1<this.n2&&1==this.noteSel:1==this.ques&&(this.ans=this.n1<this.n2&&2==this.noteSel||this.n2<this.n1&&1==this.noteSel),1==this.ans&&(this.score+=1,this.total=this.score*this.marks),this.promt(this.ans),this.totalQuesAttempted++,this.QAlog(this.totalQuesAttempted,this.ans)},e.prototype.QAlog=function(t,e){1==e?this.rightAns++:this.wrongAns++,globalThis.QAlog&&console.log(" -> Result: "+e+"\n -> Current Ques: "+t+"\n -> Right Ans: "+this.rightAns+"\n -> Wrong Ans: "+this.wrongAns),this.QAJson.GameData.AttemptedQues=t,this.QAJson.GameData.CorrectAns=this.rightAns,this.QAJson.questions[t]=[{quesNo:t,result:e}]},e.prototype.promt=function(t){this.orangeNote[this.noteSel-1].active=!1,this.greenNote[this.noteSel-1].active=t,this.redNote[this.noteSel-1].active=!t,this.promtMessage[1].active=t,this.promtMessage[0].active=!t,this.schedule(this.rest,0,0,1)},e.prototype.rest=function(){for(var t=0;t<2;t++)this.greenNote[t].active=this.redNote[t].active=this.promtMessage[t].active=!1,this.orangeNote[t].active=!0;this.orangeNote[0].getComponent(cc.Button).interactable=!0,this.orangeNote[1].getComponent(cc.Button).interactable=!0,this.unschedule(this.playAnimation1),this.unschedule(this.playAnimation2),this.audioNode.getChildByName(String(this.n1)).getComponent(cc.AudioSource).stop(),this.audioNode.getChildByName(String(this.n2)).getComponent(cc.AudioSource).stop(),this.buttonInteractable(),this.loadNextBG()},e.prototype.onClickPlayNextRound=function(){cc.director.loadScene(this.sceneName)},e.prototype.levelLogic=function(){var t=0,e=0;if("PD_Level1"==this.sceneName){var o=Math.floor(8*Math.random()+21);e=(t=Math.floor(Math.random()*(88-o)+1))+o}else"PD_Level2"==this.sceneName?(o=14,e=(t=Math.floor(74*Math.random()+1))+o):"PD_Level3"==this.sceneName?(o=7,e=(t=Math.floor(81*Math.random()+1))+o):"PD_Level4"==this.sceneName?(o=5,e=(t=Math.floor(83*Math.random()+1))+o):"PD_Level5"==this.sceneName?(o=[28,21,14,7,5][Math.floor(5*Math.random())],e=(t=Math.floor(Math.random()*(88-o)+1))+o):"PD_PUB"==this.sceneName&&(o=Math.floor(8*Math.random()+21),e=(t=Math.floor(Math.random()*(88-o)+1))+o);0==Math.floor(2*Math.random())?(this.n1=t,this.n2=e):(this.n1=e,this.n2=t)},e.prototype.loadNextBG=function(){this.ques=Math.floor(2*Math.random()),this.Ques[0].active=this.Ques[1].active=!1,this.Ques[this.ques].active=!0,this.BG[1].active=this.BG[2].active=!1;var t="";if(this.totalQues<this.maxQues)this.totalQues++,this.play=!0,this.levelLogic(),this.showNote[0].string=this.n1,this.showNote[1].string=this.n2,this.BG[this.currentBG].active=!0,2==this.currentBG?this.currentBG=1:this.currentBG=2,globalThis.QAlog&&console.log("Note 1: "+this.n1+" Note 2: "+this.n2),0==this.ques?(this.n2<this.n1&&(t="Note 2 ("+String(this.n2)+")"),this.n1<this.n2&&(t="Note 1 ("+String(this.n1)+")")):1==this.ques&&(this.n2>this.n1&&(t="Note 2 ("+String(this.n2)+")"),this.n1>this.n2&&(t="Note 1 ("+String(this.n1)+")")),globalThis.QAlog&&console.log("Answer is == %c"+t,"color: yellow"),this.playNotes();else{if(++this.playAnimation,1==this.playAnimation){if(this.BG[this.currentBG].active=!1,this.BG[3].getChildByName("badge").active=!1,this.assetNode.active=!1,this.play=!1,this.timeTaken=Number(globalThis.timeCount),this.unschedule(this.setTimer),this.BG[3].active=!0,this.showScore[0].string=String(this.score),this.showScore[1].string=String(this.totalQuesAttempted),"PD_Level1"==this.sceneName?this.total=2*this.score:"PD_Level2"==this.sceneName?this.total=3*this.score:"PD_Level3"==this.sceneName?this.total=4*this.score:"PD_Level4"==this.sceneName?this.total=5*this.score:"PD_Level5"==this.sceneName?this.total=5*this.score:"PD_PUB"==this.sceneName&&(this.total=5*this.score),this.total==this.maxPoints){var e=this.BG[3].getChildByName("badge");e.active=!0,this.sfx[2].play();var o=this.BG[3].getChildByName("final_position"),i=cc.sequence(cc.scaleTo(.4,.3,.3),cc.moveBy(1.6,o.x,o.y));e.runAction(i)}this.showScore[2].string=String(this.total)}globalThis.QAlog&&console.info(JSON.stringify(this.QAJson)+"\n =========================================="),this.node.emit("eventHandler",this.total)}},e.prototype.playNotes=function(){this.unschedule(this.playAnimation1),this.unschedule(this.playAnimation2),this.audioNode.getChildByName(String(this.n1)).getComponent(cc.AudioSource).stop(),this.audioNode.getChildByName(String(this.n2)).getComponent(cc.AudioSource).stop(),this.schedule(this.playAnimation1,.2,6,0),this.schedule(this.playAnimation2,.2,6,2),this.schedule(this.playNote1,0,0,0),this.schedule(this.playNote2,0,0,2)},e.prototype.onLoad=function(){globalThis.timeCount=globalThis.timeCount||this.gameTime,globalThis.totalTime=Number(globalThis.timeCount),globalThis.QAlog=0;for(var t=0;t<4;t++)this.BG[t].active=!1;var e;this.BG[0].active=!0,this.currentBG=0,cc.find("Canvas/Notes").active=!0,this.assetNode.active=!1,this.sceneName=cc.director.getScene().name,"PD_Level1"==this.sceneName?(this.maxPoints=2*this.maxQues,e="Version: 1.GTR.0.0.1"):"PD_Level2"==this.sceneName?(this.maxPoints=3*this.maxQues,e="Version: 1.GTR.0.0.2"):"PD_Level3"==this.sceneName?(this.maxPoints=4*this.maxQues,e="Version: 1.GTR.0.0.3"):"PD_Level4"==this.sceneName?(this.maxPoints=5*this.maxQues,e="Version: 1.GTR.0.0.4"):"PD_Level5"==this.sceneName?(this.maxPoints=5*this.maxQues,e="Version: 1.GTR.0.0.5"):"PD_PUB"==this.sceneName&&(this.maxPoints=200,this.maxPoints=5*this.maxQues,e="Version: 1.PUB.0.0.1"),this.BG[0].getChildByName("Version").getComponent(cc.Label).string=e},e.prototype.start=function(){},n([c(cc.Node)],e.prototype,"BG",void 0),n([c(cc.Node)],e.prototype,"Ques",void 0),n([c(cc.Label)],e.prototype,"showNote",void 0),n([c(cc.AudioSource)],e.prototype,"sfx",void 0),n([c(cc.Node)],e.prototype,"orangeNote",void 0),n([c(cc.Node)],e.prototype,"greenNote",void 0),n([c(cc.Node)],e.prototype,"redNote",void 0),n([c(cc.Node)],e.prototype,"promtMessage",void 0),n([c(cc.Node)],e.prototype,"noPlayNote",void 0),n([c(cc.Node)],e.prototype,"PlayNote",void 0),n([c(cc.Node)],e.prototype,"assetNode",void 0),n([c(cc.Node)],e.prototype,"audioNode",void 0),n([c(cc.Label)],e.prototype,"timer",void 0),n([c(cc.Label)],e.prototype,"showScore",void 0),n([h],e)}(cc.Component);o.default=r,cc._RF.pop()},{}]},{},["GameEventHandler","mainController"]);