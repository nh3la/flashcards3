(function(){"use strict";var n={6092:function(n,s,o){var t=o(5130),e=o(6768),r=o(4232);const c={class:"menu"},i={class:"box"},a=["disabled"],u=["disabled"],h=["disabled"],w=["disabled"],d={key:0,class:"bar word-input"},l={key:0},m={key:1},p={key:4,class:"explanation"},g={key:5,class:"section-title"},k={class:"word-list"},f=["onClick"],v={key:6,class:"section-title"},y={class:"word-list"},b=["onClick"],C={key:0,class:"cardy"},E={class:"answer"},X={key:0},Q={class:"container"},z=["onClick"];function _(n,s,o,_,x,L){const j=(0,e.g2)("Result"),M=(0,e.g2)("Analysis");return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.Lk)("div",c,[(0,e.Lk)("div",i,[(0,e.Lk)("button",{disabled:x.button,onClick:s[0]||(s[0]=(...n)=>L.checkgame&&L.checkgame(...n))},"Check Cards",8,a),(0,e.Lk)("button",{disabled:x.button,onClick:s[1]||(s[1]=(...n)=>L.testgame&&L.testgame(...n))},"Test Cards",8,u)]),(0,e.Lk)("button",{disabled:x.button,onClick:s[2]||(s[2]=(...n)=>L.addword&&L.addword(...n))},"Add Word",8,h),(0,e.Lk)("button",{disabled:x.button,onClick:s[3]||(s[3]=(...n)=>L.analysis&&L.analysis(...n))},"Analysis",8,w),x.wordadd?((0,e.uX)(),(0,e.CE)("div",d,[x.wordadd?((0,e.uX)(),(0,e.CE)("div",l,[s[11]||(s[11]=(0,e.Lk)("h5",null,"Word",-1)),(0,e.bo)((0,e.Lk)("input",{type:"text",required:"","onUpdate:modelValue":s[4]||(s[4]=n=>x.vocab[x.counter].word=n),class:"input-box"},null,512),[[t.Jo,x.vocab[x.counter].word]])])):(0,e.Q3)("",!0),x.wordadd?((0,e.uX)(),(0,e.CE)("div",m,[s[12]||(s[12]=(0,e.Lk)("h5",null,"Answer",-1)),(0,e.bo)((0,e.Lk)("input",{type:"text",required:"","onUpdate:modelValue":s[5]||(s[5]=n=>x.vocab[x.counter].answer=n),class:"input-box"},null,512),[[t.Jo,x.vocab[x.counter].answer]])])):(0,e.Q3)("",!0),x.wordadd?((0,e.uX)(),(0,e.CE)("button",{key:2,onClick:s[6]||(s[6]=(...n)=>L.integrateword&&L.integrateword(...n)),class:"submit-btn"},"Complete")):(0,e.Q3)("",!0)])):(0,e.Q3)("",!0),x.owari?((0,e.uX)(),(0,e.Wv)(j,{key:1,numin1:x.numin1,correctcounter:x.correctcounter,gamestart2:x.gamestart2,uncorrectcards:x.uncorrectcards,unccounter:x.unccounter,allc:x.allc,onEnd:L.gameowari},null,8,["numin1","correctcounter","gamestart2","uncorrectcards","unccounter","allc","onEnd"])):(0,e.Q3)("",!0),x.showanalysis?((0,e.uX)(),(0,e.Wv)(M,{key:2,criticals:x.criticals,gamecounter:x.gamecounter},null,8,["criticals","gamecounter"])):(0,e.Q3)("",!0),x.showanalysis?((0,e.uX)(),(0,e.CE)("button",{key:3,onClick:s[7]||(s[7]=(...n)=>L.analysis&&L.analysis(...n)),class:"close-btn"},"Close")):(0,e.Q3)("",!0),x.gameon||x.showanalysis?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("div",p,s[13]||(s[13]=[(0,e.Lk)("h5",null,"You can temporarily add words, meaning if you close or refresh this page, the added words will not be saved. You can add up to 5 words. Good luck, Yura!",-1)]))),x.gameon||x.showanalysis?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("h4",g,"Word List (Tap the word to delete it)")),(0,e.Lk)("ul",k,[x.gameon||x.showanalysis?(0,e.Q3)("",!0):((0,e.uX)(!0),(0,e.CE)(e.FK,{key:0},(0,e.pI)(x.cards,(n=>((0,e.uX)(),(0,e.CE)("li",null,[n.show?((0,e.uX)(),(0,e.CE)("div",{key:0,onClick:s=>L.hideword(n),class:"cardword"},(0,r.v_)(n.word),9,f)):(0,e.Q3)("",!0)])))),256))]),x.gameon||x.showanalysis?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("h4",v,"Hidden Words (Tap to add them back)")),(0,e.Lk)("ul",y,[x.gameon||x.showanalysis?(0,e.Q3)("",!0):((0,e.uX)(!0),(0,e.CE)(e.FK,{key:0},(0,e.pI)(x.hiddencards,(n=>((0,e.uX)(),(0,e.CE)("li",null,[n.show?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("div",{key:0,onClick:s=>L.hiddenword(n),class:"cardword"},(0,r.v_)(n.word),9,b))])))),256))])]),!x.gameon||x.owari||x.gameend?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("h4",C,"Card "+(0,r.v_)(x.cards[x.kazu].num+1)+" out of "+(0,r.v_)(x.numin1+1),1)),!x.gameon||x.owari||x.gameend?(0,e.Q3)("",!0):((0,e.uX)(),(0,e.CE)("h2",{key:1,onClick:s[8]||(s[8]=(...n)=>L.answer&&L.answer(...n))},(0,r.v_)(x.cards[x.kazu].word),1)),(0,e.Lk)("div",E,[x.seeanswer&&!x.noanswer?((0,e.uX)(),(0,e.CE)("h3",X,(0,r.v_)(x.cards[x.kazu].answer),1)):(0,e.Q3)("",!0)]),(0,e.Lk)("div",Q,[x.gameon&&x.gamestart2&&!x.owari?((0,e.uX)(),(0,e.CE)("button",{key:0,onClick:s[9]||(s[9]=(...n)=>L.backpage&&L.backpage(...n)),class:"nav-btn"},"Previous Card")):(0,e.Q3)("",!0),x.gameon&&x.gamestart2&&!x.owari?((0,e.uX)(),(0,e.CE)("button",{key:1,onClick:s[10]||(s[10]=(...n)=>L.cornextpage&&L.cornextpage(...n)),class:"nav-btn"},"Next Card")):(0,e.Q3)("",!0)]),(0,e.Lk)("ol",null,[!x.gameon||x.owari||x.gameend||x.gamestart2?(0,e.Q3)("",!0):((0,e.uX)(!0),(0,e.CE)(e.FK,{key:0},(0,e.pI)(x.options,(n=>((0,e.uX)(),(0,e.CE)("li",null,[(0,e.Lk)("h3",{class:"options",onClick:s=>L.ccheck(n)},(0,r.v_)(n),9,z)])))),256))])],64)}o(4114);const x={key:0},L={key:1},j={key:2},M={key:3},A={key:4},O={key:5},F={key:6},K={key:7},I=["disabled"],B={key:11};function T(n,s,o,t,c,i){return(0,e.uX)(),(0,e.CE)(e.FK,null,[0==o.gamestart2&&0==c.gamemoji&&0==c.showsecond?((0,e.uX)(),(0,e.CE)("h3",x,"You got")):(0,e.Q3)("",!0),o.gamestart2?((0,e.uX)(),(0,e.CE)("h2",L,"End of card. tap continue")):(0,e.Q3)("",!0),0==o.gamestart2&&0==c.gamemoji&&0==c.showsecond?((0,e.uX)(),(0,e.CE)("h3",j,(0,r.v_)(o.correctcounter)+" out of "+(0,r.v_)(o.numin1+1)+" correct",1)):(0,e.Q3)("",!0),0==o.gamestart2&&0==c.gamemoji&&0==c.showsecond?((0,e.uX)(),(0,e.CE)("h1",M,(0,r.v_)(Math.round(o.correctcounter/(o.numin1+1)*100))+"%",1)):(0,e.Q3)("",!0),c.showsecond?((0,e.uX)(),(0,e.CE)("h3",A,(0,r.v_)(c.corrcounter)+" out of "+(0,r.v_)(c.counter)+" correct",1)):(0,e.Q3)("",!0),c.showsecond?((0,e.uX)(),(0,e.CE)("h2",O,(0,r.v_)(Math.round(c.corrcounter/c.counter*100))+"%",1)):(0,e.Q3)("",!0),0==o.gamestart2&&0==c.gamemoji&&0==c.showsecond&&0==o.allc?((0,e.uX)(),(0,e.CE)("h2",F,"words missed")):(0,e.Q3)("",!0),o.allc?((0,e.uX)(),(0,e.CE)("h2",K,"Thats my yura !")):(0,e.Q3)("",!0),(0,e.Lk)("ul",null,[0==o.gamestart2&&0==c.gamemoji?((0,e.uX)(!0),(0,e.CE)(e.FK,{key:0},(0,e.pI)(o.uncorrectcards,(n=>((0,e.uX)(),(0,e.CE)("li",null,[(0,e.Lk)("h3",null,(0,r.v_)(n.word)+": "+(0,r.v_)(n.answer),1)])))),256)):(0,e.Q3)("",!0)]),0==o.gamestart2&&0==c.gamemoji&&0==c.showsecond?((0,e.uX)(),(0,e.CE)("button",{key:8,onClick:s[0]||(s[0]=(...n)=>i.secondtry&&i.secondtry(...n)),disabled:o.allc},"try test with uncorrect words",8,I)):(0,e.Q3)("",!0),c.showsecond?((0,e.uX)(),(0,e.CE)("button",{key:9,onClick:s[1]||(s[1]=(...n)=>i.secondtry&&i.secondtry(...n))},"try again")):(0,e.Q3)("",!0),c.gamemoji?((0,e.uX)(),(0,e.CE)("h2",{key:10,onClick:s[2]||(s[2]=(...n)=>i.secondanswer&&i.secondanswer(...n))},(0,r.v_)(o.uncorrectcards[c.counter].word),1)):(0,e.Q3)("",!0),c.showanswer?((0,e.uX)(),(0,e.CE)("h2",B,(0,r.v_)(o.uncorrectcards[c.counter].answer),1)):(0,e.Q3)("",!0),c.gamemoji?((0,e.uX)(),(0,e.CE)("button",{key:12,onClick:s[3]||(s[3]=(...n)=>i.uncornextpage&&i.uncornextpage(...n))},"uncorrect")):(0,e.Q3)("",!0),c.gamemoji?((0,e.uX)(),(0,e.CE)("button",{key:13,onClick:s[4]||(s[4]=(...n)=>i.cornextpage&&i.cornextpage(...n))},"correct")):(0,e.Q3)("",!0),0==c.gamemoji?((0,e.uX)(),(0,e.CE)("button",{key:14,onClick:s[5]||(s[5]=(...n)=>i.gamefinish&&i.gamefinish(...n))}," continue ")):(0,e.Q3)("",!0)],64)}var V={props:["numin1","correctcounter","gamestart2","uncorrectcards","unccounter","allc"],data(){return{gamemoji:!1,endmoji:!1,counter:0,showanswer:!1,corrcounter:0,showsecond:!1}},methods:{gamefinish(){this.$emit("end"),this.showsecond=!1,this.counter=0,this.corrcounter=0},secondtry(){this.gamemoji=!0,this.showsecond=!1,this.counter=0,this.corrcounter=0},cornextpage(){this.counter=this.counter+1,this.corrcounter=this.corrcounter+1,1==this.showanswer&&(this.showanswer=!1),this.counter==this.unccounter&&(this.showsecond=!0,this.gamemoji=!1)},uncornextpage(){this.counter=this.counter+1,1==this.showanswer&&(this.showanswer=!1),this.counter==this.unccounter&&(this.showsecond=!0,this.gamemoji=!1)},secondanswer(){this.showanswer=!this.showanswer}}},W=o(1241);const Y=(0,W.A)(V,[["render",T],["__scopeId","data-v-a9b4ecce"]]);var q=Y;function P(n,s,o,t,c,i){return(0,e.uX)(),(0,e.CE)(e.FK,null,[s[0]||(s[0]=(0,e.Lk)("h4",null,"play 3 or more times to get accurate analysis",-1)),(0,e.Lk)("h4",null,"test taken "+(0,r.v_)(o.gamecounter)+" times",1),s[1]||(s[1]=(0,e.Lk)("h3",null,"missed words",-1)),(0,e.Lk)("ol",null,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(o.criticals,(n=>((0,e.uX)(),(0,e.CE)("li",null,[(0,e.Lk)("h3",null,(0,r.v_)(n.word)+"     miss: "+(0,r.v_)(n.ccounter),1)])))),256))])],64)}var J={props:["criticals","gamecounter"]};const R=(0,W.A)(J,[["render",P],["__scopeId","data-v-529afb1f"]]);var U=R,G={components:{Result:q,Analysis:U},data(){return{gameon:!1,gameend:!1,owari:!1,temp:{word:null,answer:null,num:null,show:null,ccounter:0},flippage:!1,kazu:null,seeanswer:!1,wordadd:!1,numin1:99,counter:0,vocab:[{word:null,answer:null,num:null,show:!0,ccounter:0},{word:null,answer:null,num:null,show:!0,ccounter:0},{word:null,answer:null,num:null,show:!0,ccounter:0},{word:null,answer:null,num:null,show:!0,ccounter:0},{word:null,answer:null,num:null,show:!0,ccounter:0}],button:!1,shownum:0,counter1:0,counter2:0,correctcounter:0,unccounter:0,criticalcounter:0,gamecounter:0,coun:0,gamestart2:!1,showanalysis:!1,cfound:!1,clear:!1,noanswer:!1,allc:!1,hiddencards:[],temp2:{word:null,answer:null,num:null,show:null,ccounter:0},temp3:{word:null,answer:null,num:null,show:null,ccounter:0},criticaltemp:{word:null,answer:null,num:null,show:null,ccounter:0},temtem:{},temtem2:0,uncorrectcards:[],criticals:[],options:[],cards:[{word:"assure",answer:"～保障する",num:0,show:!0,ccounter:0},{word:"accuse",answer:"～非難する",num:1,show:!0,ccounter:0},{word:"deprive",answer:"AからBを奪う",num:2,show:!0,ccounter:0},{word:"attribute",answer:"AはBのおかげだと思う",num:3,show:!0,ccounter:0},{word:"impose",answer:"AをBに課す、押しつける",num:4,show:!0,ccounter:0},{word:"imply",answer:"～を意味する",num:5,show:!0,ccounter:0},{word:"facility",answer:"設備、施設",num:6,show:!0,ccounter:0},{word:"administration",answer:"経営、運営",num:7,show:!0,ccounter:0},{word:"distress",answer:"苦しみ、悲嘆、苦難",num:8,show:!0,ccounter:0},{word:"convention",answer:"習慣、しきたり",num:9,show:!0,ccounter:0},{word:"accustomed",answer:"慣れた",num:10,show:!0,ccounter:0},{word:"keen",answer:"熱望して、熱中して",num:11,show:!0,ccounter:0},{word:"prime",answer:"最も重要な、主要な",num:12,show:!0,ccounter:0},{word:"genuine",answer:"真の、本物の、心からの",num:13,show:!0,ccounter:0},{word:"modest",answer:"控えめな、謙虚な、質素な、少しの、わずかな",num:14,show:!0,ccounter:0},{word:"vain",answer:"むだな、むなしい",num:15,show:!0,ccounter:0},{word:"inclined",answer:"Vしたい気がする、Vする傾向がある",num:16,show:!0,ccounter:0},{word:"desperate",answer:"必死の、絶望的な",num:17,show:!0,ccounter:0},{word:"consistent",answer:"矛盾のない、一致した",num:18,show:!0,ccounter:0},{word:"fond",answer:"Aが好きだ",num:19,show:!0,ccounter:0},{word:"trait",answer:"特徴",num:20,show:!0,ccounter:0},{word:"ritual",answer:"儀式",num:21,show:!0,ccounter:0},{word:"conservation",answer:"環境保護",num:22,show:!0,ccounter:0},{word:"emission",answer:"排出",num:23,show:!0,ccounter:0},{word:"sinαcosβ =",answer:"1/2{sin(α+β)+sin(α-β)}",num:24,show:!0,ccounter:0},{word:"cosαsinβ =",answer:"1/2{sin(α+β)-sin(α-β)}",num:25,show:!0,ccounter:0},{word:"cosαcosβ =",answer:"1/2{cos(α+β)+cos(α-β)}",num:26,show:!0,ccounter:0},{word:"sinαsinβ =",answer:"-1/2{cos(α+β)-cos(α-β)}",num:27,show:!0,ccounter:0},{word:"sinα+sinβ =",answer:"2sin(α+β/2)cos(α-β/2)",num:28,show:!0,ccounter:0},{word:"sinα-sinβ =",answer:"2cos(α+β/2)sin(α-β/2)",num:29,show:!0,ccounter:0},{word:"cosα+cosβ =",answer:"2cos(α+β/2)cos(α-β/2)",num:30,show:!0,ccounter:0},{word:"cosα-cosβ =",answer:"-2sin(α+β/2)sin(α-β/2)",num:31,show:!0,ccounter:0},{word:"sin3θ =",answer:"3sinθ-4sin³θ",num:32,show:!0,ccounter:0},{word:"cos3θ = ",answer:"4cos³-3cosθ",num:33,show:!0,ccounter:0},{word:"tan3θ = ",answer:"(3tanθ-tan³θ)/(1-3tan²θ)",num:34,show:!0,ccounter:0},{word:"sin²θ/2 = ",answer:"(1-cosθ)/2",num:35,show:!0,ccounter:0},{word:"cos²θ/2 = ",answer:"(1+cosθ)/2",num:36,show:!0,ccounter:0},{word:"tan²θ/2 = ",answer:"(1-cosθ)/(1+cosθ)",num:37,show:!0,ccounter:0},{word:"pale",answer:"青白い",num:38,show:!0,ccounter:0},{word:"precious",answer:"貴重な",num:39,show:!0,ccounter:0},{word:"loyal to",answer:"忠実な",num:40,show:!0,ccounter:0},{word:"isolated from",answer:"孤立している",num:41,show:!0,ccounter:0},{word:"generous",answer:"気前のよい",num:42,show:!0,ccounter:0},{word:"tropical",answer:"熱帯",num:43,show:!0,ccounter:0},{word:"be reluctant",answer:"～したがらない",num:44,show:!0,ccounter:0},{word:"vague",answer:"漠然とした",num:45,show:!0,ccounter:0},{word:"vast",answer:"広大な",num:46,show:!0,ccounter:0},{word:"numerous",answer:"たくさんの",num:47,show:!0,ccounter:0},{word:"rural",answer:"田舎の",num:48,show:!0,ccounter:0},{word:"widespread",answer:"広まってる",num:49,show:!0,ccounter:0},{word:"remote",answer:"へんぴな",num:50,show:!0,ccounter:0},{word:"urgent",answer:"緊急の",num:51,show:!0,ccounter:0},{word:"adequate",answer:"十分な",num:52,show:!0,ccounter:0},{word:"odd",answer:"おかしな",num:53,show:!0,ccounter:0},{word:"abstract",answer:"抽象的な",num:54,show:!0,ccounter:0},{word:"mutual",answer:"相互の",num:55,show:!0,ccounter:0},{word:"excessive",answer:"過度の",num:56,show:!0,ccounter:0},{word:"tremendous",answer:"とてつもない",num:57,show:!0,ccounter:0},{word:"inevitable",answer:"避けられない",num:58,show:!0,ccounter:0},{word:"stable",answer:"安定した",num:59,show:!0,ccounter:0},{word:"indifferent to",answer:"無関心だ",num:60,show:!0,ccounter:0},{word:"aggressive",answer:"攻撃的な",num:61,show:!0,ccounter:0},{word:"ultimate",answer:"究極の",num:62,show:!0,ccounter:0},{word:"profound",answer:"深い",num:63,show:!0,ccounter:0},{word:"subtle",answer:"微妙な",num:64,show:!0,ccounter:0},{word:"manual",answer:"手を使う",num:65,show:!0,ccounter:0},{word:"cruel",answer:"残酷な",num:66,show:!0,ccounter:0},{word:"rational",answer:"理性的な",num:67,show:!0,ccounter:0},{word:"initial",answer:"最初",num:68,show:!0,ccounter:0},{word:"linguistic",answer:"言語",num:69,show:!0,ccounter:0},{word:"crucial",answer:"重大な",num:70,show:!0,ccounter:0},{word:"verbal",answer:"言語による",num:71,show:!0,ccounter:0},{word:"optimistic",answer:"楽観的な",num:72,show:!0,ccounter:0},{word:"grateful for",answer:"感謝している",num:73,show:!0,ccounter:0},{word:"lively",answer:"生き生きとした",num:74,show:!0,ccounter:0},{word:"overwhelming",answer:"圧倒的な",num:75,show:!0,ccounter:0},{word:"abundant",answer:"豊富な",num:76,show:!0,ccounter:0},{word:"prominent",answer:"有名な",num:77,show:!0,ccounter:0},{word:"controversial",answer:"議論を呼ぶ",num:78,show:!0,ccounter:0},{word:"federal",answer:"連邦",num:79,show:!0,ccounter:0},{word:"harsh",answer:"厳しい",num:80,show:!0,ccounter:0},{word:"random",answer:"無作為な",num:81,show:!0,ccounter:0},{word:"adolescent",answer:"思春期の",num:82,show:!0,ccounter:0},{word:"up-to-date",answer:"最新の",num:83,show:!0,ccounter:0},{word:"liberal",answer:"自由主義の",num:84,show:!0,ccounter:0},{word:"prior to",answer:"前の",num:85,show:!0,ccounter:0},{word:"moderate",answer:"過度な",num:86,show:!0,ccounter:0},{word:"elaborate",answer:"手の込んだ",num:87,show:!0,ccounter:0},{word:"incredible",answer:"信じられない",num:88,show:!0,ccounter:0},{word:"radical",answer:"根本的な",num:89,show:!0,ccounter:0},{word:"medieval",answer:"中世の",num:90,show:!0,ccounter:0},{word:"ecological",answer:"生態",num:91,show:!0,ccounter:0},{word:"ignorant of",answer:"知らない",num:92,show:!0,ccounter:0},{word:"cognitive",answer:"認知",num:93,show:!0,ccounter:0},{word:"virtually",answer:"ほとんど",num:94,show:!0,ccounter:0},{word:"somewhat",answer:"多少",num:95,show:!0,ccounter:0},{word:"merely",answer:"単に",num:96,show:!0,ccounter:0},{word:"seemingly",answer:"一見",num:97,show:!0,ccounter:0},{word:"regardless of",answer:"関係なく",num:98,show:!0,ccounter:0},{word:"thoroughly",answer:"徹底的に",num:99,show:!0,ccounter:0}],cardanswers:["～保障する","～非難する","AからBを奪う","AはBのおかげだと思う","AをBに課す、押しつける","～を意味する","設備、施設","経営、運営","苦しみ、悲嘆、苦難","習慣、しきたり","慣れた","熱望して、熱中して","最も重要な、主要な","真の、本物の、心からの","控えめな、謙虚な、質素な、少しの、わずかな","むだな、むなしい","Vしたい気がする、Vする傾向がある","必死の、絶望的な","矛盾のない、一致した","Aが好きだ","特徴","儀式","環境保護","排出","1/2{sin(α+β)+sin(α-β)}","1/2{sin(α+β)-sin(α-β)}","1/2{cos(α+β)+cos(α-β)}","-1/2{cos(α+β)-cos(α-β)}","2sin(α+β/2)cos(α-β/2)","2cos(α+β/2)sin(α-β/2)","2cos(α+β/2)cos(α-β/2)","-2sin(α+β/2)sin(α-β/2)","3sinθ-4sin³θ","4cos³-3cosθ","(3tanθ-tan³θ)/(1-3tan²θ)","(1-cosθ)/2","(1+cosθ)/2","(1-cosθ)/(1+cosθ)","青白い","貴重な","忠実な","孤立している","気前のよい","熱帯","～したがらない","漠然とした","広大な","たくさんの","田舎の","広まってる","へんぴな","緊急の","十分な","おかしな","抽象的な","相互の","過度の","とてつもない","避けられない","安定した","無関心だ","攻撃的な","究極の","深い","微妙な","手を使う","残酷な","理性的な","最初","言語","重大な","言語による","楽観的な","感謝している","生き生きとした","圧倒的な","豊富な","有名な","議論を呼ぶ","連邦","厳しい","無作為な","根本的な","中世の","思春期の","徹底的に","関係なく","単に","ほとんど","知らない","ゆららぶ","きょうまかっこいい","ゆらりんこ","sin(180°-θ)","sin(α±β)","おねえさんかわいいね","ゆらいつもありがとう","導関数の定義","cos(90°-θ)","たこしゃん","多少","一見","関係なく","認知"]}},methods:{checkgame(){console.log(this.cardanswers[0]),this.button=!0,this.gameon=!0,this.kazu=0,this.flippage=!1,this.gameend=!1,this.owari=!1,this.seeanswer=!1,this.correctcounter=0,this.gamestart2=!0,this.unccounter=0,this.showanalysis=!1;for(let n=0;n<this.numin1+1;n++)this.cards[n].num=1e4*Math.random();for(let n=0;n<this.numin1;n++)for(let s=0;s<this.numin1;s++)this.cards[s].num>this.cards[s+1].num&&(this.temp=this.cards[s],this.cards[s]=this.cards[s+1],this.cards[s+1]=this.temp);for(let n=0;n<this.numin1+1;n++)this.cards[n].num=n;this.kazu=this.cards[0].num},testgame(){this.button=!0,this.gameon=!0,this.kazu=0,this.flippage=!1,this.gameend=!1,this.owari=!1,this.seeanswer=!1,this.correctcounter=0,this.unccounter=0,this.showanalysis=!1,this.gamecounter=this.gamecounter+1,this.clear=!1,this.noanswer=!0;for(let n=0;n<this.numin1+1;n++)this.cards[n].num=1e4*Math.random();for(let n=0;n<this.numin1;n++)for(let s=0;s<this.numin1;s++)this.cards[s].num>this.cards[s+1].num&&(this.temp=this.cards[s],this.cards[s]=this.cards[s+1],this.cards[s+1]=this.temp);for(let n=0;n<this.numin1+1;n++)this.cards[n].num=n;this.kazu=this.cards[0].num;do{this.coun=0,this.options.splice(0,6);for(let n=0;n<5;n++)this.options[n]=this.cardanswers[Math.round(100*Math.random())];for(let n=0;n<5;n++)for(let s=0;s<5;s++)this.options[n]==this.options[s]&&this.coun++;5==this.coun&&(this.clear=!0)}while(0==this.clear);this.clear=!1,this.options[5]=this.cards[this.kazu].answer,this.temtem2=Math.round(100*Math.random())%6,this.temtem=this.options[this.temtem2],this.options[this.temtem2]=this.options[5],this.options[5]=this.temtem},cornextpage(){do{this.coun=0,this.options.splice(0,6);for(let n=0;n<5;n++)this.options[n]=this.cardanswers[Math.round(100*Math.random())];for(let n=0;n<5;n++)for(let s=0;s<5;s++)this.options[n]==this.options[s]&&this.coun++;5==this.coun&&(this.clear=!0)}while(0==this.clear);this.clear=!1,this.flippage=!0,this.flippage&&(this.kazu==this.numin1?(this.owari=!0,void 0!==this.criticals&&0!=this.criticals.length||(this.allc=!0)):this.kazu=this.kazu+1,this.options[5]=this.cards[this.kazu].answer,this.temtem2=Math.round(100*Math.random())%6,this.temtem=this.options[this.temtem2],this.options[this.temtem2]=this.options[5],this.options[5]=this.temtem,this.correctcounter++,this.flippage=!1,this.seeanswer=!1)},unnextpage(){do{this.coun=0,this.options.splice(0,6);for(let n=0;n<5;n++)this.options[n]=this.cardanswers[Math.round(100*Math.random())];for(let n=0;n<5;n++)for(let s=0;s<5;s++)this.options[n]==this.options[s]&&this.coun++;5==this.coun&&(this.clear=!0)}while(0==this.clear);if(this.clear=!1,this.cfound=!1,this.cards[this.kazu].ccounter=this.cards[this.kazu].ccounter+1,void 0===this.criticals||0==this.criticals.length)this.criticals.push(this.cards[this.kazu]);else{for(let n=0;n<this.criticals.length;n++)this.cards[this.kazu]==this.criticals[n]&&(this.criticals.ccounter=this.criticals.ccounter+1,this.cfound=!0);0==this.cfound&&this.criticals.push(this.cards[this.kazu]);for(let n=0;n<this.criticals.length-1;n++)for(let s=0;s<this.criticals.length-1;s++)this.criticals[s].ccounter<this.criticals[s+1].ccounter&&(this.criticaltemp=this.criticals[s+1],this.criticals[s+1]=this.criticals[s],this.criticals[s]=this.criticaltemp)}this.uncorrectcards.push(this.cards[this.kazu]),this.unccounter=this.unccounter+1,this.flippage=!0,this.flippage&&(this.kazu==this.numin1?this.owari=!0:this.kazu=this.kazu+1,this.flippage=!1,this.seeanswer=!1),this.options[5]=this.cards[this.kazu].answer,this.temtem2=Math.round(100*Math.random())%6,this.temtem=this.options[this.temtem2],this.options[this.temtem2]=this.options[5],this.options[5]=this.temtem},backpage(){this.flippage=!0,0==this.kazu?this.kazu=0:this.kazu=this.kazu-1,this.flippage=!1,this.seeanswer=!1},gameowari(){this.gameend=!0,this.owari=!1,this.gamestart2=!1,this.button=!1,this.gameon=!1,this.uncorrectcards.splice(0,this.unccounter),this.noanswer=!1,this.allc=!1},answer(){this.seeanswer=!this.seeanswer},addword(){this.wordadd=!0},integrateword(){this.numin1=this.numin1+1,this.vocab[this.counter].num=this.numin1,this.cards.push(this.vocab[this.counter]),this.wordadd=!1,this.counter=this.counter+1},hideword(n){n.show=!1,this.temp2=n;for(let s=this.temp2.num+1;s<this.numin1+1;s++)this.cards[s].num=this.cards[s].num-1;this.cards.splice(this.temp2.num,1),this.hiddencards.push(this.temp2),this.numin1=this.numin1-1,this.hiddencards[this.counter1].num=this.counter1,this.counter1=this.counter1+1},hiddenword(n){n.show=!0,this.temp3=n;for(let s=this.temp3.num+1;s<this.counter1;s++)this.hiddencards[s].num=this.hiddencards[s].num-1;this.hiddencards.splice(this.temp3.num,1),this.cards.push(this.temp3),this.numin1=this.numin1+1,this.counter1=this.counter1-1,this.cards[this.numin1].num=this.numin1},analysis(){this.showanalysis=!this.showanalysis},ccheck(n){n==this.options[this.temtem2]?this.cornextpage():this.unnextpage()}}};const H=(0,W.A)(G,[["render",_]]);var N=H;(0,t.Ef)(N).mount("#app")}},s={};function o(t){var e=s[t];if(void 0!==e)return e.exports;var r=s[t]={exports:{}};return n[t].call(r.exports,r,r.exports,o),r.exports}o.m=n,function(){var n=[];o.O=function(s,t,e,r){if(!t){var c=1/0;for(h=0;h<n.length;h++){t=n[h][0],e=n[h][1],r=n[h][2];for(var i=!0,a=0;a<t.length;a++)(!1&r||c>=r)&&Object.keys(o.O).every((function(n){return o.O[n](t[a])}))?t.splice(a--,1):(i=!1,r<c&&(c=r));if(i){n.splice(h--,1);var u=e();void 0!==u&&(s=u)}}return s}r=r||0;for(var h=n.length;h>0&&n[h-1][2]>r;h--)n[h]=n[h-1];n[h]=[t,e,r]}}(),function(){o.n=function(n){var s=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(s,{a:s}),s}}(),function(){o.d=function(n,s){for(var t in s)o.o(s,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:s[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){o.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)}}(),function(){var n={524:0};o.O.j=function(s){return 0===n[s]};var s=function(s,t){var e,r,c=t[0],i=t[1],a=t[2],u=0;if(c.some((function(s){return 0!==n[s]}))){for(e in i)o.o(i,e)&&(o.m[e]=i[e]);if(a)var h=a(o)}for(s&&s(t);u<c.length;u++)r=c[u],o.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return o.O(h)},t=self["webpackChunkflashcards4"]=self["webpackChunkflashcards4"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(6092)}));t=o.O(t)})();
//# sourceMappingURL=app.e900aa31.js.map