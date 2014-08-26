

var isTouch = ('ontouchstart' in window);
var touchStartEvent = isTouch ? "touchstart" : "mousedown";
var touchEndEvent = isTouch ? "touchend" : "mouseup";


document.addEventListener(touchStartEvent, function () {
    try {
		event.stopPropagation();
    }
    catch (err) {
		}

    }, false);
	document.addEventListener(touchEndEvent, function () {
    	event.stopPropagation();
}, false);
 

function bodyClick(dom) {
        dom.addEventListener(touchStartEvent, function () {

            try {
                event.stopPropagation();
            }
            catch (err) {
            }

        }, false);
        dom.addEventListener(touchEndEvent, function () {
                       event.stopPropagation();
        }, false);
};

//var bodyx = document.getElementById("game");

var bodyx = document.body || document.getElementsByTagName("body")[0];
bodyClick(bodyx);
