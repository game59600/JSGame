/**
 * jQuery Needed 
 *
 * Created by druckai on 01-1-1.
 *
 *
 */
var w596_r=0;

function orient() {
    //if (!this.supportOrient){ return true;}

    if (window.orientation == 0 || window.orientation == 180) {
        $("body").attr("class", "portrait");
        orientation = 'portrait';
        Tips_orient(true);
        return false;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
        $("body").attr("class", "landscape");
        orientation = 'landscape';
        Tips_orient(false);

        if(w596_r==0){
            w596_initGame();
            w596_r=1;
        }
        return false;
    }
}




/* 在页面加载的时候调用 */
window.onload = function()
{
    if(orient()){

    }
};



window.onorientationchange=function(){
    orient();
	try{ w596_menu.set_pos(w596_menu.iPos);}catch(err){}
};


function w596_initGame(){
    var main596 = document.getElementById("main");
    var w = window.innerWidth, h = window.innerHeight;
    main596.style.width = w + "px";
    main596.style.height = h+ 100 + "px";
    window.scrollTo(0, 1);
    $("#main").css("height",window.innerHeight);  //重置成新高度

    //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);  //如果不想让页面滑动，可以加上这段代码
    setTimeout(hideURLbar, 100);

    function hideURLbar(){
        window.scrollTo(0,1);
    }

};


function Tips_orient(visible){

   var bShow= visible ? "block" : "none";
   var bShow2= visible ? "none"  :"block";

   var w=window.innerWidth;
   var h=window.innerHeight

   /*  if (w > h) {
        var temp = w;
        w = h;
        h = w;
    }
*/
    $('#msg').css("width",w).css("height",h).css("display",bShow).css("padding-top",(h-120)/2-30);
	$('#gamebox').css("width",w).css("height",h).css("display",bShow2);
    
	$('#msg').bind("touchstart mousedown",
        function (e) {
            event.preventDefault();
    });

}
