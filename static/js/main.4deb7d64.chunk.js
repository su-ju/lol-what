(this["webpackJsonplol-what-react"]=this["webpackJsonplol-what-react"]||[]).push([[0],{10:function(n,e,i){},11:function(n,e,i){},14:function(n,e,i){"use strict";i.r(e);var t=i(0),l=i.n(t),o=i(3),c=i.n(o),f=(i(10),i(11),i(4)),a=i.n(f),d=(i(13),i(1)),r=i.n(d),u=function(n){var e,i,t,l,o,c="#ff4081",f=function(e,i,t){n.fill(t),n.rect(e,i,l,o)},a={},d=function(e){return e in a?a[e]:(a[e]=n.cos(e),a[e])},u={},m=function(e){return e in u?u[e]:(u[e]=n.sin(e),u[e])},s={},w=function(e){var i=t.length-e,l=n.map(t[e],0,t.length,0,2*n.windowHeight),o=n.map(t[t.length-1-e],0,t.length,0,2*n.windowHeight),f=s.midX+l*d(i*Y),a=s.midY+l*m(i*Y),r=s.midX+o*d(e*Y),u=s.midY+o*m(e*Y);n.fill(c),n.circle(f,a,10),n.fill("#ffff00"),n.circle(r,u,10)},h={},g=function(e){e%2===0?n.fill(c):n.fill("#ffff00");var i=n.map(e,0,t.length,l/4,l);n.circle(i,h.midY,n.map(t[e],0,t.length,0,2*n.windowHeight))},p={},v=function(e){e%2===0?n.fill("#ffff00"):n.fill(c),n.circle(p.x+l/2,p.y+o/2,n.map(t[e],0,t.length,0,2*n.windowHeight))},x={},y=function(e){var i=n.map(t[e],0,t.length,0,2*n.windowHeight);n.line(x.midX,x.midY,x.midX+i*n.cos(e*Y),x.midY+i*n.sin(e*Y))};n.setup=function(){n.createCanvas(n.windowWidth,n.windowHeight),n.noFill(),(e=new r.a.AudioIn).start(),(i=new r.a.FFT).setInput(e),n.angleMode(n.DEGREES),E();var t=n.createDiv("click to start audio");t.position(l,o),n.userStartAudio().then((function(){t.remove()})),n.setFrameRate(24)};var Y,E=function(){l=n.windowWidth/2,o=n.windowHeight/2,h.x=0,h.y=o,h.midY=h.y+o/2,s.x=l,s.y=0,s.midX=s.x+l/2,s.midY=s.y+o/2,p.x=l,p.y=o,x.x=0,x.y=0,x.midX=l/2,x.midY=o/2};n.draw=function(){t=i.analyze(),Y=t.length/360,f(h.x,h.y,"#ffff00"),f(s.x,s.y,"#ffff00"),f(p.x,p.y,c),f(x.x,x.y,c),n.line(h.x,h.midY,h.x+l,h.midY);for(var e=0;e<t.length;e++)g(e),w(e),v(e),y(e);n.noFill()},n.doubleClicked=function(){F()},n.windowResized=function(){n.resizeCanvas(n.windowWidth,n.windowHeight),E()};var F=function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}};var m=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(a.a,{sketch:u}))};c.a.render(l.a.createElement(m,null),document.getElementById("root"))},5:function(n,e,i){n.exports=i(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.4deb7d64.chunk.js.map