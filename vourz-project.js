//<![CDATA[
let footer = document.querySelector("footer .d-table .d-table-row .d-table-cell .container .row .col-12 .right"),
      cr = "Template by <a class='tata' href='https://moccatory.blogspot.com/' target='_blank'>Moccatory</a>";
  if (!footer) {
    let a = document.createElement("div");
    a.className = "right d-inline-block";
    a.innerHTML = "Vourz Bootstrap Blogger Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank'>Moccatory</a>";
    document.querySelector("footer .d-table .d-table-row .d-table-cell .container .row .col-12").appendChild(a)
  } else{
    if (!footer.innerHTML.includes(cr)) {
      footer.innerHTML = "Template by <a href='https://moccatory.blogspot.com/' class='tata' target='_blank' rel="nofollow">Moccatory</a>";
    }
  }
function createCookie(name,value,days){
  if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString()}
  else var expires="";document.cookie=name+"="+value+expires+"; path=/"
}
function readCookie(name){
  var nameEQ=name+"=";
  var ca=document.cookie.split(';');
  for(var i=0;i<ca.length;i++){
    var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)
  }
return null}
function eraseCookie(name){createCookie(name,"",-1)}
// Iklan ganda di dalam postingan oleh igniel.com
    var _0xa93d = [".aqshal", "querySelectorAll", ".post-body br, .post-body p", "length", "from", "slice", "log", "nodeName", "P", "insertBefore", "parentNode", "nextSibling"];
(function () {
    let _0x51c1x1 = document[_0xa93d[1]](_0xa93d[0]);
    if (_0x51c1x1) {
        let _0x51c1x2 = document[_0xa93d[1]](_0xa93d[2]),
            _0x51c1x3 = _0x51c1x1[_0xa93d[3]] + 1,
            _0x51c1x4 = _0x51c1x2[_0xa93d[3]] / _0x51c1x3;
        c = Array[_0xa93d[4]]({
            length: _0x51c1x3
        }, (_0x51c1x5, _0x51c1x6) => _0x51c1x6 + 1), d = c[_0xa93d[5]](0, -1);
        for (let _0x51c1x7 = 0; _0x51c1x7 < d[_0xa93d[3]]; _0x51c1x7++) {
            let _0x51c1x8 = d[_0x51c1x7],
                _0x51c1x9 = parseInt((_0x51c1x4 * _0x51c1x8));
            console[_0xa93d[6]](_0x51c1x2[_0x51c1x9]);
            if (_0x51c1x2[_0x51c1x9][_0xa93d[7]] == _0xa93d[8]) {
                _0x51c1x2[_0x51c1x9][_0xa93d[10]][_0xa93d[9]](_0x51c1x1[_0x51c1x7], _0x51c1x2[_0x51c1x9])
            } else {
                _0x51c1x2[_0x51c1x9][_0xa93d[10]][_0xa93d[9]](_0x51c1x1[_0x51c1x7], _0x51c1x2[_0x51c1x9][_0xa93d[11]])
            }
        }
    }
})()
$(document).ready(function() {
     var navbar = $('.navbar'), placeholder = navbar.parent();
        $(window).on('resize load', function(){
          navbar.css({position: 'fixed', width: placeholder.outerWidth()+'px', zIndex: '9999999'});
          placeholder.css({height: navbar.outerHeight()+'px'});
      });
    if (readCookie("night")) {
        $("*").addClass("night");
        $("#night-mode").html("<i class='fas fa-sun'/>")
    }
    $("#night-mode").click(function() {
        if ($(this).hasClass("night")) {
            $("*").removeClass("night");
            $("#night-mode").html("<i class='fas fa-moon'/>");
            eraseCookie("night")
        } else {
            $("*").addClass("night");
            $("#night-mode").html("<i class='fas fa-sun'/>");
            createCookie("night", null, 7000)
        }
    })
})
$("#Label1 .btn-more").on("click",function(e){e.preventDefault(),$(this).closest("#Label1").toggleClass("open")});
//]]>
