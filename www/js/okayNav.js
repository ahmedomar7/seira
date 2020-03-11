! function(n) {
    n.fn.jPinning = function(t) {
        var i = n.extend({}, {
                offset: !1,
                onPin: function() {},
                onUnpin: function() {}
            }, t),
            e = {
                lastScrollTop: 0,
                document: n(document),
                window: n(window),
                status: "pinned"
            },
            o = "pinning-nav",
            s = "pinned",
            a = "unpinned",
            r = "pinning-top",
            u = {
                isUnpinned: function() {
                    return "unpinned" == e.status
                },
                isPinned: function() {
                    return "pinned" == e.status
                },
                prepare: function() {
                    e.target.addClass(o), e.target.css("position", "fixed")
                },
                pin: function() {
                    u.isUnpinned() && (e.status = "pinned", e.target.removeClass(a).addClass(s), i.onPin.call(e.target))
                },
                unpin: function() {
                    u.isPinned() && (e.status = "unpinned", e.target.removeClass(s).removeClass(r).addClass(a), i.onUnpin.call(e.target))
                },
                calcOffset: function(n) {
                    return "auto" == i.offset && (i.offset = e.target.outerHeight()), !i.offset || n > i.offset
                },
                pinHandler: function() {
                    var n = e.window.scrollTop(),
                        t = e.document.height() - e.window.height();
                    (0 > n && (n = 0), n >= t && (n = t, e.lastScrollTop = n - 1), 0 == n && e.target.addClass(r), n <= e.lastScrollTop) ? u.pin(): u.calcOffset(n) && u.unpin();
                    e.lastScrollTop = n
                }
            };
        return this.each(function() {
            e.target = n(this), u.prepare(), n(window).on("scroll", u.pinHandler)
        })
    }
}(jQuery);


$(function(){
    $('.okayNav').jPinning();
});