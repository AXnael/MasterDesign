/*! Related Post Widget for Blogger by Taufik Nurrohman <https://github.com/tovic> */
!function(a,b,c){var d=(new Date).getTime(),e={widgetTitle:"<h3>Artikel Terkait:</h3>",widgetStyle:1,homePage:"http://dte-feed.blogspot.com",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:72,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:!1,moreText:"Baca Selengkapnya",callBack:function(){}};if("object"==typeof relatedPostConfig)for(var f in relatedPostConfig)e[f]=relatedPostConfig[f];e.homePage=e.homePage.replace(/\/?\?m=\d+(\&|$)|\/+$/,"");var g=function(a){var d=b.createElement("script");d.src=a,c.appendChild(d)},h=function(a,b){return Math.floor(Math.random()*(b-a+1))+a},i=function(a){var c,d,b=a.length;if(0===b)return!1;for(;--b;)c=Math.floor(Math.random()*(b+1)),d=a[b],a[b]=a[c],a[c]=d;return a},j="object"==typeof labelArray&&labelArray.length?"/-/"+i(labelArray)[0]:"",k=function(a){var b=a.feed.openSearch$totalResults.$t-e.numPosts,c=h(1,b>0?b:1);g(e.homePage+"/feeds/posts/summary"+j+"?alt=json-in-script&orderby=updated&start-index="+c+"&max-results="+e.numPosts+"&callback=do_related_post_"+d)},l=function(a){var k,l,m,n,o,c=b.getElementById(e.containerId),d=i(a.feed.entry),f=e.widgetStyle,g=e.widgetTitle+'<ul class="related-post-style-'+f+'">',h=e.newTabLink?' target="_blank"':"",j='<span style="display:block;clear:both;"></span>';if(c){for(var p=d.length,q="related-post-item",r=0;r<e.numPosts&&r!==p;r++){l=d[r].title.$t,m="auto"!==e.titleLength&&e.titleLength<l.length?l.substring(0,e.titleLength)+"&hellip;":l,n="media$thumbnail"in d[r]&&e.thumbnailSize!==!1?d[r].media$thumbnail.url.replace(/\/s\d+(\-c)?\//,"/s"+e.thumbnailSize+"-c/"):e.noImage,o="summary"in d[r]&&e.summaryLength>0?d[r].summary.$t.replace(/<br *\/?>/gi," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,e.summaryLength)+"&hellip;":"";for(var s=0,t=d[r].link.length;t>s;s++)if("alternate"==d[r].link[s].rel){k=d[r].link[s].href;break}g+=2==f?'<li><img alt="" class="'+q+'-thumbnail" src="'+n+'" width="'+e.thumbnailSize+'" height="'+e.thumbnailSize+'"><h4><a class="'+q+'-title" title="'+l+'" href="'+k+'"'+h+">"+m+'</a></h4><span class="'+q+'-summary"><span class="'+q+'-summary-text">'+o+'</span> <a href="'+k+'" class="'+q+'-more"'+h+">"+e.moreText+"</a></span>"+j+"</li>":3==f||4==f?'<li class="'+q+'" tabindex="0"><a class="'+q+'-title" href="'+k+'"'+h+'><img alt="" class="'+q+'-thumbnail" src="'+n+'" width="'+e.thumbnailSize+'" height="'+e.thumbnailSize+'"></a><div class="'+q+'-tooltip"><a class="'+q+'-title" title="'+l+'" href="'+k+'"'+h+">"+m+"</a></div>"+j+"</li>":5==f?'<li class="'+q+'" tabindex="0"><a class="'+q+'-wrapper" href="'+k+'" title="'+l+'"'+h+'><img alt="" class="'+q+'-thumbnail" src="'+n+'" width="'+e.thumbnailSize+'" height="'+e.thumbnailSize+'"><span class="'+q+'-tooltip">'+m+"</span></a>"+j+"</li>":6==f?'<li><a class="'+q+'-title" title="'+l+'" href="'+k+'"'+h+">"+m+'</a><div class="'+q+'-tooltip"><img alt="" class="'+q+'-thumbnail" src="'+n+'" width="'+e.thumbnailSize+'" height="'+e.thumbnailSize+'"><span class="'+q+'-summary"><span class="'+q+'-summary-text">'+o+"</span></span>"+j+"</div></li>":'<li><a title="'+l+'" href="'+k+'"'+h+">"+m+"</a></li>"}c.innerHTML=g+="</ul>"+j,e.callBack(a)}};a["do_related_post_"+d]=l,a["do_related_post_start_"+d]=k,g(e.homePage+"/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=0&callback=do_related_post_start_"+d)}(window,document,document.getElementsByTagName("head")[0]);
