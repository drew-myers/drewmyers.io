(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});a(165);var i=a(0),r=a.n(i),s=a(151),n=a(167),o=a.n(n);t.default=function(e){var t=e.data;return r.a.createElement(s.a,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(o.a,{style:{borderRadius:"50%"},fixed:t.file.childImageSharp.fixed})),r.a.createElement("h1",null,"Hi! Welcome to my personal site!"),r.a.createElement("p",null,"This is mostly currently under construction, but thanks for stopping by lol."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, mea ne facete scaevola recusabo, eam in tota adhuc movet. Iriure fuisset ullamcorper in nam, vel at exerci eirmod. Ne ius justo epicuri. An nam quaeque intellegat, sed ut aliquid voluptaria. Te oporteat contentiones vel. Ei eam alii omittantur dissentiunt. Vidit clita prodesset eu vel, ubique fabulas moderatius et quo. Commodo platonem vel te. Partiendo euripidis philosophia duo ex, omnis ridens accusamus in quo. Eum porro graece ad, iusto quidam indoctum ex duo. Ad usu commodo voluptua, te primis salutandi usu. Ut vel populo delicatissimi. Ius in minim lobortis, detracto adversarium cu eam, nonumy omnesque verterem ne vis. Sit te noster mandamus indoctum, duo quis vidisse cu, vero saperet facilis ei has. Eu sit constituam signiferumque. Mel ei enim voluptatum. Ex per alii senserit, mei eu assum voluptatibus. Ius alii dicit ut, at eum affert ubique, inani laboramus appellantur ea his. Quaestio platonem eos in, ex vivendum maluisset eos, eu vero idque clita vel. In fugit noster vituperatoribus usu, an ridens similique nam. Ad dicat fierent pri, hinc eius harum mei ut, autem suscipiantur ex usu. Error melius intellegebat nam cu, vero rebum albucius at pro, per ad case nullam"))};var l="1361023522"},148:function(e,t,a){var i;e.exports=(i=a(150))&&i.default||i},149:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var i={primaryBgColor:"white",secondaryColor:"#87A6B9"}},150:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(55),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(149),n=a(152),o=a.n(n),l=a(153),u=a.n(l),d=a(154),c=a.n(d),f=new u.a(c.a),p=(f.scale,f.rhythm),m=(f.options,a(4)),h=a.n(m),g=a(33),b=a.n(g);a(148),r.a.createContext({});h.a.object,h.a.string.isRequired,h.a.func,h.a.func;var v=function(e){return r.a.createElement("li",{style:{marginBottom:"0em",display:"inline-block",marginRight:"1rem"}},r.a.createElement(b.a,{style:{color:"white",backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, white 1px, white 2px, rgba(0, 0, 0, 0) 2px)"},to:e.to},e.children))},y=function(){return r.a.createElement(o.a,{wrapperStyle:{marginBottom:p(1)},style:{backgroundColor:s.a.secondaryColor}},r.a.createElement("div",{style:{paddingTop:p(.5),paddingBottom:p(.5)}},r.a.createElement(b.a,{to:"/",style:{backgroundImage:"none"}},r.a.createElement("h3",{style:{marginLeft:p(1),color:"white",display:"inline"}},"DrewMyers.io")),r.a.createElement("ul",{style:{marginBottom:"0em",listStyle:"none",float:"right"}},r.a.createElement(v,{to:"/"},"Home"),r.a.createElement(v,{to:"/about/"},"About"),r.a.createElement(v,{to:"/contact/"},"Contact"))))};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:650,padding:"0 1rem"}},t))}},165:function(e,t,a){"use strict";a(166)("fixed",function(e){return function(){return e(this,"tt","","")}})},166:function(e,t,a){var i=a(11),r=a(18),s=a(19),n=/"/g,o=function(e,t,a,i){var r=String(s(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(n,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},167:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(35)),o=i(a(75)),l=i(a(76)),u=i(a(0)),d=i(a(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=c(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=u.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,d=e.onError,c=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return u.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},c,{onLoad:n,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var v=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,E=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,L=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:w?1:0,transition:L?"opacity "+y+"ms":"none"},o),R="boolean"==typeof v?"lightgray":v,q={transitionDelay:y+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&q,o,f),C={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(m){var z=m;return u.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},u.default.createElement(S,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&u.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&q)}),z.base64&&u.default.createElement(b,(0,l.default)({src:z.base64},C)),z.tracedSVG&&u.default.createElement(b,(0,l.default)({src:z.tracedSVG},C)),this.state.isVisible&&u.default.createElement("picture",null,z.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),u.default.createElement(b,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},z))}}))}if(h){var O=h,k=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:O.width,height:O.height},s);return"inherit"===s.display&&delete k.display,u.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:k,ref:this.handleRef,key:"fixed-"+JSON.stringify(O.srcSet)},R&&u.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:R,width:O.width,opacity:this.state.imgLoaded?0:1,height:O.height},L&&q)}),O.base64&&u.default.createElement(b,(0,l.default)({src:O.base64},C)),O.tracedSVG&&u.default.createElement(b,(0,l.default)({src:O.tracedSVG},C)),this.state.isVisible&&u.default.createElement("picture",null,O.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),u.default.createElement(b,{alt:a,title:t,width:O.width,height:O.height,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}return null},t}(u.default.Component);v.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var y=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});v.propTypes={resolutions:y,sizes:S,fixed:y,fluid:S,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=v;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-29c77053385b6d469d54.js.map