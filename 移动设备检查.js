function isMobile() {
    if (mobileBrowser != null)
        return mobileBrowser;
    var e = navigator.userAgent.toLowerCase(), t = /(webkit)[ \/]([\w.]+)/.exec(e) || /(o)pera(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(ms)ie ([\w.]+)/.exec(e) || /(moz)illa(?:.*? rv:([\w.]+))?/.exec(e) || [], n = /iPad|iPod|iPhone|Android|webOS/i.exec(e);
    return mobileBrowser = n, mobileBrowser
}
