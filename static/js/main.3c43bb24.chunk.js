(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(229)},123:function(e,t,a){},142:function(e,t,a){},169:function(e,t){},172:function(e,t,a){},184:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),i=a.n(o),s=(a(123),a(41)),l=a(42),c=a(48),u=a(43),m=a(50),p=a(44),g=a.n(p),d=(a(142),a(110)),f=a.n(d),h=a(114),y=a(115);a(172);function v(e){return r.a.createElement("h1",null,e.title)}a(93);var E=a(49),b=(a(95),a(28)),w=(a(174),a(73));function j(e){return r.a.createElement("div",{className:"song-panel-header"},r.a.createElement(E.a,null,r.a.createElement(b.a,{xs:{span:8,offset:0},lg:{span:4,offset:0}},r.a.createElement("img",{style:{width:"85px"},src:e.image,alt:"song art"})),r.a.createElement(b.a,{xs:{span:16,offset:0},lg:{span:20,offset:0}},r.a.createElement("p",{className:"song-title"},e.name),r.a.createElement("p",{className:"album"},e.album),r.a.createElement("p",{className:"artist"},e.artists.map(function(t,a){return r.a.createElement("span",{key:a},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name),a<e.artists.length-1?", ":null)})),r.a.createElement("p",{className:"time",title:function(e){var t=new Date(parseInt(e));return t.toLocaleDateString()+" "+t.toLocaleTimeString()}(e.lastplayed)},e.isPlaying?"Now Playing..":function(e){var t=(new Date).getTime()-e;if(t<6e4){var a=Math.round(t/1e3);return a.toString()+(a>1?" seconds ago":" second ago")}if(t<36e5){var n=Math.round(t/6e4);return n.toString()+(n>1?" minutes ago":" minute ago")}if(t<864e5){var r=Math.round(t/36e5);return r.toString()+(r>1?" hours ago":" hour ago")}if(t<2592e6){var o=Math.round(t/864e5);return"approximately "+o.toString()+(o>1?" days ago":" day ago")}if(t<31536e6){var i=Math.round(t/2592e6);return"approximately "+i.toString()+(i>1?" months ago":" month ago")}var s=Math.round(t/31536e6);return"approximately "+s.toString()+(s>1?" years ago":" year ago")}(parseInt(e.lastplayed))))))}a(184);var S=w.a.Panel,O={borderRadius:4,marginBottom:24,overflow:"hidden",border:"solid 1px #e8e8e8",boxShadow:"0 0 30px #f3f1f1"};function x(e){var t=e.data,a=e.isPlaying;return r.a.createElement(b.a,{xs:{span:24,offset:0},lg:{span:12,offset:6}},r.a.createElement(w.a,{bordered:!1},r.a.createElement(S,{header:r.a.createElement(j,{isPlaying:a,image:t.album.images[0].url,name:t.name,album:t.album.name,artists:t.artists,lastplayed:t.last_played}),showArrow:!1,style:O})))}function k(e){return console.log(e.state),r.a.createElement("div",null,r.a.createElement(E.a,null,e.state.songs.map(function(t,a){return r.a.createElement(x,{data:t,key:t._id,isPlaying:!(0!==a||!e.state.playing)})})))}var M,N=function(){return g.a.get("https://spotapi.anandamritraj.in/spotify/recent")},P=(a(228),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).componentDidMount=function(){N().then(function(t){var a=t.data.data.reduce(function(e,t){return e.push(t.song),e},[]);e.setState({songs:a,playing:!0})}).catch(function(e){console.log("There was an error in getting the data"),console.log(e)}),M.emit("join","Anand's Spotify"),M.on("updated_song",e.updateSong)},e.updateSong=function(t){if(!1===t.is_playing){var a=Object(y.a)({},e.state,{playing:!1});e.setState(a)}else{var n={songs:[t].concat(Object(h.a)(e.state.songs)),playing:!0};e.setState(n)}},e.state={songs:[],playing:null},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-wrapper"},r.a.createElement(v,{title:"Here's what I'm listening to"}),r.a.createElement(k,{state:this.state}))}}]),t}(n.Component)),D=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={endpoint:"https://spotapi.anandamritraj.in/"},M=f()(e.state.endpoint),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){g.a.get("https://spotapi.anandamritraj.in/login?email=anandamritraj904@gmail.com").then(function(e){e.data.success||(window.location.href="https://spotapi.anandamritraj.in/login")})}},{key:"render",value:function(){return r.a.createElement(P,null)}}]),t}(n.Component);i.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.3c43bb24.chunk.js.map