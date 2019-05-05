(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(230)},123:function(e,t,a){},142:function(e,t,a){},169:function(e,t){},172:function(e,t,a){},184:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),i=a.n(o),l=(a(123),a(41)),s=a(42),c=a(48),u=a(43),m=a(50),p=a(44),g=a.n(p),f=(a(142),a(110)),d=a.n(f),h=a(114),y=a(115);a(172);function b(e){return r.a.createElement("h1",null,e.title)}a(93);var E=a(49),v=(a(95),a(28)),j=(a(174),a(73));function w(e){return r.a.createElement("div",{className:"song-panel-header"},r.a.createElement(E.a,null,r.a.createElement(v.a,{xs:{span:8,offset:0},lg:{span:4,offset:0}},r.a.createElement("a",{href:e.spotifyurl,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{style:{width:"85px"},src:e.image,alt:"song art"}))),r.a.createElement(v.a,{xs:{span:16,offset:0},lg:{span:20,offset:0}},r.a.createElement("p",{className:"song-title"},r.a.createElement("a",{href:e.spotifyurl,target:"_blank",rel:"noopener noreferrer"},e.name)),r.a.createElement("p",{className:"album"},e.album),r.a.createElement("p",{className:"artist"},e.artists.map(function(t,a){return r.a.createElement("span",{key:a},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name),a<e.artists.length-1?", ":null)})),r.a.createElement("p",{className:"time",title:function(e){var t=new Date(parseInt(e));return t.toLocaleDateString()+" "+t.toLocaleTimeString()}(e.lastplayed)},r.a.createElement("span",null,e.isPlaying?"Now Playing..":function(e){var t=(new Date).getTime()-e;if(t<6e4){var a=Math.round(t/1e3);return a.toString()+(a>1?" seconds ago":" second ago")}if(t<36e5){var n=Math.round(t/6e4);return n.toString()+(n>1?" minutes ago":" minute ago")}if(t<864e5){var r=Math.round(t/36e5);return r.toString()+(r>1?" hours ago":" hour ago")}if(t<2592e6){var o=Math.round(t/864e5);return"approximately "+o.toString()+(o>1?" days ago":" day ago")}if(t<31536e6){var i=Math.round(t/2592e6);return"approximately "+i.toString()+(i>1?" months ago":" month ago")}var l=Math.round(t/31536e6);return"approximately "+l.toString()+(l>1?" years ago":" year ago")}(parseInt(e.lastplayed)))))))}a(184);var k=j.a.Panel,S={borderRadius:4,marginBottom:24,overflow:"hidden",border:"solid 1px #e8e8e8",boxShadow:"0 0 30px #f3f1f1"};function O(e){var t=e.data,a=e.isPlaying;return r.a.createElement(v.a,{xs:{span:24,offset:0},lg:{span:12,offset:6}},r.a.createElement(j.a,{bordered:!1},r.a.createElement(k,{header:r.a.createElement(w,{isPlaying:a,image:t.album.images[0].url,name:t.name,album:t.album.name,artists:t.artists,spotifyurl:t.url,lastplayed:t.last_played}),showArrow:!1,style:S})))}function x(e){return console.log(e.state),r.a.createElement("div",null,r.a.createElement(E.a,null,e.state.songs.map(function(t,a){return r.a.createElement(O,{data:t,key:t.playback_id,isPlaying:!(0!==a||!e.state.playing)})})))}var _=function(){return g.a.get("https://spotapi.anandamritraj.in/spotify/recent")};a(228),a(229);function M(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Disclaimer: I do not own the songs listed here. I just listen and use my magical backend to get the data. All the music is owned by their awesome Creators / Singers / Spotify."),r.a.createElement("p",null,"Thanks for the"," ",r.a.createElement("span",{role:"img","aria-label":"heart emoji"},"\u2764\ufe0f"),". Keep coming here :) Also, if you like the idea, drop a"," ",r.a.createElement("span",{role:"img","aria-label":"star emoji"},"\u2b50")," ","at the"," ",r.a.createElement("a",{href:"https://github.com/anamritraj/spot-connect",target:"_blank",rel:"noopener noreferrer"},"Github Repository"),". Hit me up at"," ",r.a.createElement("a",{href:"https://twitter.com/anamritraj",target:"_blank",rel:"noopener noreferrer"},"@anamritraj"),"."))}var N,D=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){_().then(function(t){var a=t.data.data.reduce(function(e,t){return t.song.playback_id=t._id,e.push(t.song),e},[]);e.setState({songs:a,playing:!0})}).catch(function(e){console.log("There was an error in getting the data"),console.log(e)}),N.emit("join","Anand's Spotify"),N.on("updated_song",e.updateSong)},e.updateSong=function(t){if(!1===t.is_playing){var a=Object(y.a)({},e.state,{playing:!1});e.setState(a)}else{var n={songs:[t].concat(Object(h.a)(e.state.songs)),playing:!0};e.setState(n)}},e.state={songs:[],playing:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(b,{title:"Here's what I'm listening to"}),r.a.createElement(M,null),r.a.createElement(x,{state:this.state}))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={endpoint:"https://spotapi.anandamritraj.in/"},N=d()(e.state.endpoint),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){g.a.get("https://spotapi.anandamritraj.in/login?email=anandamritraj904@gmail.com").then(function(e){e.data.success||(window.location.href="https://spotapi.anandamritraj.in/login")})}},{key:"render",value:function(){return r.a.createElement(D,null)}}]),t}(n.Component);i.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.55e83316.chunk.js.map