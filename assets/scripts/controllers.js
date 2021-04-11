"use strict";!function(e){var t=e(".sp-circle"),i=0,n={value:0,size:125,thickness:2,fill:{color:"#111"},emptyFill:"#ddd",startAngle:300,animation:{duration:2500,easing:"easeInOutQuint"}};t.one("appear",function(){var t=e(this);setTimeout(function(){t.circleProgress("value",t.data("value"))},i),i+=150}),t.circleProgress(n).on("circle-animation-progress",function(t,i,n){e(this).find("span").text((100*n).toFixed(1))}),setInterval(function(){i=0},1e3),e(window).one("pzt.preloader_done",function(){t.appear({force_process:!0})})}(jQuery),function(e){var t=jQuery("#sp-blog-grid");t.length<=0||t.pzt_shuffle({itemSelector:'[class*="col-"]',gutterWidth:0,speed:600,easing:"ease"})}(),function(e){var t=jQuery(".sp-clients-grid");t.length<=0||t.pzt_shuffle({itemSelector:'[class*="col-"]',gutterWidth:0,speed:600,easing:"ease"})}(),function(e){e.fn.PZT_ColorSwarm=function(){var t,i=e(this)[0],n=window.resize=function(){i.height=e(i).parent().outerHeight(),i.width=window.innerWidth};e(function(){t=i.getContext("2d"),n();for(var e=[],o=randomColor({luminosity:"light",count:100}),s=0;s<100;s++){var r=Math.random()*i.width,l=Math.random()*i.height,c=new a(r,l,o[s]);c.draw(),e.push(c)}var d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},f=function(){d(f),t.clearRect(0,0,i.width,i.height);for(var n=0;n<e.length;n++)e[n].frame()};f()});var a=function(e,t,i){this.pos=[e,t],this.r=1.5*Math.random()+1,this.c=i,this.v=[.3*(Math.random()-.5),.3*(Math.random()-.5)]};a.prototype.getBound=function(e){return e?i.height:i.width};var o;a.prototype.frame=function(){for(o=0;o<2;o++)this.pos[o]>this.getBound(o)-10?this.v[o]*=-1:this.pos[o]<10&&(this.v[o]*=-1),this.pos[o]+=10*this.v[o];this.draw()},a.prototype.draw=function(){t.fillStyle=this.c,t.beginPath(),t.arc(this.pos[0],this.pos[1],this.r,0,2*Math.PI,!1),t.fill()}}}(jQuery),function(e){e(".sp-color-swarm").each(function(){var t=e('<canvas class="sp-color-swarm-svg" />');e(this).prepend(t),t.PZT_ColorSwarm()})}(jQuery),function(e){e(".sp-faq-list .sp-faq-card").find("> .card-header").on("click",function(){var t=e(this).closest(".sp-faq-card");t.closest(".sp-faq-list").find(".sp-faq-card").each(function(){e(this).is(t)||(e(this).find("> .card-contents").collapse("hide"),e(this).removeClass("card-open"))}),t.find("> .card-contents").collapse("show"),t.addClass("card-open")})}(jQuery),function(e){var t=e(window),i=e("#sp-footer"),n=e("#sp-footer-sizing-helper");if(i.hasClass("sp-footer-fixed")){var a=-1;setInterval(function(){a!==i.outerHeight()&&(a=i.outerHeight(),n.css("height",i.outerHeight()),i.outerHeight()>=t.outerHeight()/1.5?(i.css("position","static"),i.find("> div").css("opacity",1),n.hide()):(i.css("position","fixed"),n.show()))},750),PZTJS.scrollRAF(function(){var e=n.offset().top,a=t.scrollTop()+t.outerHeight();a<=e||"static"===i.css("position")||i.find("> div").css("opacity",(a-e)/i.outerHeight())})}}(jQuery),function(e){var t=e(".sp-map-place"),i={zoom:16,center:{lat:40.731607,lng:-73.997038},disableDefaultUI:!1,scrollwheel:!1,draggable:!0,styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#dddddd"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"dddddd"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#555555"},{lightness:20}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#aaaaaa"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#f4f4f4"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#f4f4f4"},{lightness:17},{weight:1.2}]}],mapTypeControl:!1,navigationControl:!1,mapTypeId:"roadmap"};t.each(function(){var t=e(this),n=new google.maps.Map(t.get(0),i);t.data("gmap-object",n)}),t.filter("[data-address]").each(function(){var t=e(this),i=t.data("gmap-object"),n=new google.maps.Geocoder;i&&n&&n.geocode({address:t.data("address")},function(e,n){if(n===google.maps.GeocoderStatus.OK){var a=e[0];i.setCenter(a.geometry.location);var o=new google.maps.InfoWindow({content:"<b>"+a.formatted_address+"</b>",size:new google.maps.Size(150,50)}),s=new google.maps.Marker({position:a.geometry.location,map:i,icon:"assets/images/map-pin.png",title:t.data("address")});google.maps.event.addListener(s,"click",function(){o.open(i,s)})}else console.error("Google Maps are unable to find location: "+t.data("address"),n,e)})})}(jQuery),function(e){var t=e("html"),i=e("#sp-mobile-nav-container"),n=e("#sp-mobile-nav-trigger"),a=Modernizr.prefixed("animationDelay");i.find(".nav_menu > li").each(function(){var t=e(this);t[0].style[a]=300+150*t.index()+"ms"}),i.find(".menu-item-has-children > a").on("click",function(t){var n=e(this),a=e(this).parent();i.find(".menu-item-has-children").each(function(){e.contains(this,a.get(0))||e(this).find("> a").removeClass("sub-active").next("ul").slideUp(250)}),!1===n.next("ul").is(":visible")&&n.addClass("sub-active").next("ul").slideDown(250),t.preventDefault()});var o=!1;n.on("click",function(n){n.preventDefault(),o=!o,t.toggleClass("sp-active-burger-menu",o);var a=e("#sp-header").outerHeight();i.css("border-top-width",a),i.find(".sub-active").each(function(){e(this).removeClass("sub-active").next("ul").hide()})}),i.find(".nav_menu a").on("click",function(){!1===e(this).parent().hasClass("menu-item-has-children")&&o&&n.trigger("click")}),e(document).on("touchmove",function(t){o&&!e(t.target).closest(i).length&&t.preventDefault()})}(jQuery),function(e){var t=e(window),i=e("#sp-header");t.on("docready load resize",e.debounce(250,function(){i.find(".sub-menu").each(function(){var i=e(this);i.offset().left+i.outerWidth()>=t.outerWidth()-25&&i.addClass("invert-attach-point")})})),PZTJS.scrollRAF(function(){window.pageYOffset>150&&!i.hasClass("header-stuck")&&i.addClass("header-stuck"),window.pageYOffset<=150&&i.hasClass("header-stuck")&&i.removeClass("header-stuck")}),i.find('.nav_menu a[href="#"]').on("click",function(e){e.preventDefault()})}(jQuery),function(e){var t=e("#sp-header").find(".sp-search-icon"),i=e("#sp-search-block-container");i.find("> .search-block-inner").on(PZTJS.transitionEnd,function(){e(this).is(":visible")&&e(this).find(".search-input").focus()}),i.find(".close-search").on("click",function(e){e.preventDefault(),i.removeClass("open")}),e(document).keyup(function(e){27===e.keyCode&&i.removeClass("open")}),t.on("click",function(e){e.preventDefault(),i.addClass("open")})}(jQuery),function(e){var t=e(".sp-intro"),i=e(window),n=function(e){e.attr("data-background")&&(e.find("> .intro-bg").length||e.append('<div class="intro-bg"/>'),e.find("> .intro-bg").css("background-image","url("+e.attr("data-background")+")"))},a=function(t){t.addClass("slick-dots-inside"),t.on("init reInit",function(){e(this).find(".swipebox-video").swipebox()});var i={slide:".slider-item",speed:1e3,dots:!0,fade:!0,autoplay:!0,infinite:!0,autoplaySpeed:7500};t.slick(e.extend(i,t.data("slick")))},o=function(e){var t=e.find("> .video-container"),i=t.find("> .video-placeholder"),n=t.find("> .video-controls");t.on("YTPPlay YTPPause",function(e){"YTPPlay"===e.type&&n.find(".sp-video-play > i").removeClass("icon-ion-ios-play"),"YTPPause"===e.type&&n.find(".sp-video-play > i").addClass("icon-ion-ios-play")}),t.on("YTPMuted YTPUnmuted",function(e){"YTPMuted"===e.type&&n.find(".sp-video-volume > i").removeClass("icon-ion-android-volume-up"),"YTPUnmuted"===e.type&&n.find(".sp-video-volume > i").addClass("icon-ion-android-volume-up")}),t.YTPlayer({videoURL:t.data("url"),showControls:!1,containment:"self",loop:!0,autoPlay:!0,vol:25,mute:!0,showYTLogo:!1,startAt:t.data("start")||0,stopAt:t.data("stop")||0,onReady:function(){i.fadeOut("fast"),n.fadeIn("fast")}}),n.find(".sp-video-play").on("click",function(e){e.preventDefault(),t.YTPTogglePlay()}),n.find(".sp-video-volume").on("click",function(e){e.preventDefault(),t.YTPToggleVolume()})};t.each(function(){var t=e(this);t.hasClass("sp-intro-carousel")&&a(t),t.hasClass("sp-intro-video")&&o(t),t.hasClass("sp-intro-image")&&n(t)}),i.width()>680&&PZTJS.scrollRAF(function(){t.each(function(){var t=e(this),i=t.height(),n=Math.max(window.pageYOffset,0);if(!(window.pageYOffset>i)){var a=Math.floor(.3*n)+"px";t[0].style[Modernizr.prefixed("transform")]="translate3d(0, "+a+", 0)",t.css("opacity",1-n/i)}})})}(jQuery),function(e){e.ajaxChimp.translations.soprano={submit:"Loading, please wait...",0:"We have sent you a confirmation email. Please check your inbox.",1:"The field is empty. Please enter your email.",2:'An email address must contain a single "@" character.',3:"This email seems to be invalid. Please enter a correct one.",4:"This email seems to be invalid. Please enter a correct one.",5:"This email address looks fake or invalid. Please enter a real email address."},e(".sp-subscribe-form").each(function(){var t=e(this).closest("form");t.on("submit",function(){t.addClass("mc-loading")}),t.ajaxChimp({language:"soprano",label:t.find("> .form-output"),callback:function(e){t.removeClass("mc-loading"),t.toggleClass("mc-valid","success"===e.result),t.toggleClass("mc-invalid","error"===e.result),"success"===e.result&&t.find('input[type="email"]').val(""),setTimeout(function(){t.removeClass("mc-valid mc-invalid"),t.find('input[type="email"]').focus()},4500)}})})}(jQuery),jQuery(document).ready(function(){"function"==typeof FastClick&&FastClick.attach(document.body)}),function(){var e,t=document.body;window.addEventListener("scroll",function(){clearTimeout(e),t.classList.contains("disable-hover")||t.classList.add("disable-hover"),e=setTimeout(function(){t.classList.remove("disable-hover")},100)},!1)}(),function(e){e('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=e(this.hash);(i=i.length?i:e("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),e("html, body").animate({scrollTop:i.offset().top-55},1500,"easeInOutExpo",function(){var t=e(i);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}})}(jQuery),function(e){var t=e(".sp-scroll-top");PZTJS.scrollRAF(function(){window.pageYOffset>500?t.addClass("scroll-top-visible"):t.removeClass("scroll-top-visible")}),t.on("mouseover mouseout",function(){e(this).find(".anno-text").stop().animate({width:"toggle",padding:"toggle"})})}(jQuery),function(e){var t=e(".sp-portfolio-block");t.length<=0||t.each(function(){var t=e(this),i=t.find(".sp-portfolio-items"),n=t.find(".sp-portfolio-sorting a[data-group]");i.pzt_shuffle({itemSelector:'[class*="col-"]',gutterWidth:0,speed:600,easing:"ease"}),n.on("click",function(t){var n=e(this);n.parent().siblings().removeClass("active"),n.parent().addClass("active"),i.shuffle("shuffle",n.data("group")),t.preventDefault()})})}(jQuery),function(e){var t=e(window);t.on("load",function(){t.trigger("pzt.preloader_done"),setTimeout(function(){e("body").addClass("sp-page-loaded"),e("#sp-preloader").fadeOut("slow")},250)})}(jQuery),function(e){var t=e(".sp-progress-bar"),i=0;t.each(function(){var t=e(this),i=t.find(".progress-value"),n=t.find(".progress-bar");i.html("0%"),n.css("width",0)}),t.one("appear",function(){var t=e(this),n=t.find(".progress-value"),a=t.find(".progress-bar");setTimeout(function(){a.animate({width:t.data("value")},{duration:2500,easing:"easeInOutQuint",step:function(e,t){n.html(e.toFixed(0)+t.unit)}})},i),i+=300}),setInterval(function(){i=0},1e3),e(window).one("pzt.preloader_done",function(){t.appear({force_process:!0})})}(jQuery),function(e){function t(t){var n=e(".roller-title-number-"+t).attr("data-min"),a=e(".roller-title-number-"+t).attr("data-max"),o=e(".roller-title-number-"+t).attr("data-delay");i(t,n,a,e(".roller-title-number-"+t).attr("data-increment"),1e3*o/(a-n))}function i(t,n,a,o,s){n<=a?(e(".roller-title-number-"+t).html(n),n=parseInt(n,10)+parseInt(o,10),setTimeout(function(){i(parseInt(t,10),parseInt(n,10),parseInt(a,10),parseInt(o,10),parseInt(s,10))},s)):e(".roller-title-number-"+t).html(a)}var n=e(".sp-animate-numbers h2");n.each(function(t){e(this).attr("data-slno",t),e(this).addClass("roller-title-number-"+t)}),n.one("appear",function(){t(e(this).attr("data-slno"))}),e(window).one("pzt.preloader_done",function(){n.appear({force_process:!0})})}(jQuery),jQuery(".sp-slick-clients").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:750,slidesToShow:5,autoplay:!0,arrows:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),jQuery(".sp-slick-demo").slick({dots:!1,infinite:!0,adaptiveHeight:!0,speed:750,slidesToShow:3,autoplay:!0,arrows:!1,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),jQuery(".sp-slick-testimonials").slick({dots:!0,infinite:!0,speed:750,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,arrows:!1,autoplaySpeed:6500}),jQuery(".sp-slick-imac").slick({dots:!0,infinite:!0,speed:450,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,arrows:!1,fade:!0,easing:"linear"}),jQuery(".sp-slick-post-gallery").slick({dots:!1,infinite:!0,speed:750,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,nextArrow:'<div class="slick-next circle"><i class="icon-angle-right"></i></div>',prevArrow:'<div class="slick-prev circle"><i class="icon-angle-left"></i></div>'}),function(e){var t=e(".slick-initialized");t.on("initialAnimate reInit afterChange",function(t,i,n){n=n||0,i=i||e(this).slick("getSlick"),e(i.$slides).removeClass("slick-animated"),e(i.$slides[n]).addClass("slick-animated")}),t.trigger("initialAnimate")}(jQuery),function(e){var t=e(".slick-initialized");PZTJS.scrollRAF(e.throttle(250,function(){t.each(function(){var t=e(this),i=t.slick("getSlick");PZTJS.isElementInViewport(this)||i.paused||t.slick("pause"),PZTJS.isElementInViewport(this)&&i.paused&&t.slick("play")})}))}(jQuery),function(e){e(".slick-initialized").on("beforeChange",function(t,i,n,a){e(i.$slides[a]).find(".wow, .re-animate").each(function(){var t=e(this),i=t.clone(!0);t.before(i),t.remove()})})}(jQuery),function(e){e(".sp-sidebar.sticky").stick_in_parent({offset_top:e("#sp-header").outerHeight()+30})}(jQuery),function(e){e(".sp-text-rotate").each(function(){var t=e(this);t.textrotator({animation:t.data("animation"),speed:t.data("speed"),separator:"|"})})}(jQuery),jQuery(window).one("pzt.preloader_done",function(){var e=jQuery;e("[data-typed-str]").each(function(){var t=e(this),i=t.attr("data-typed-str").split("|");t.html("").append('<span class="typed-container"></span>'),t.find("> .typed-container").typed({strings:i,typeSpeed:65,loop:"yes"===t.attr("data-typed-repeat"),backDelay:1500,showCursor:"yes"===t.attr("data-typed-cursor")})})}),"undefined"!=typeof SOPRANO_FONTS&&WebFont.load({google:{families:SOPRANO_FONTS}}),function(e){var t=Modernizr.prefixed("animationDuration");if(PZTJS.isMobile())return e(".wow.sequenced").removeClass("wow sequenced"),void e(".wow").removeClass("wow");var i=e(".wow.sequenced").each(function(){var i=e(this),n=i.attr("class"),a=i.data("wow-duration")||"1s",o=i.data("wow-children"),s=/fx-([a-zA-Z]+)/g.exec(n);i.removeClass("wow sequenced fx-"+s[1]);var r=i.find("> *");o?r=i.find(o):i.hasClass("wpb_column")&&(r=i.find(".wpb_wrapper > *")),r.css("visibility","hidden");for(var l=0;l<r.length;l++)r.get(l).style[t]=a;r.one(PZTJS.animationEnd,function(){e(this).removeClass("animated "+s[1])}),i.data({wow_children:r,wow_fx:s[1]})});i.one("appear",function(){var t=e(this),i=null,n=t.data("wow_fx"),a=0,o=0;t.data("wow_children").each(function(){var t=e(this),s=t.position().top;s!==i&&(a=0,i=s,o++),setTimeout(function(){t.addClass("animated "+n),t.css("visibility","visible")},300*a+150*o),a++})});var n=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!1,live:!0,scrollContainer:null,callback:function(e){}});e(window).one("pzt.preloader_done",function(){i.selector=!1,i.appear({force_process:!0}),n.init()})}(jQuery);