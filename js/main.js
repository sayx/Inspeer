$.ajax({
    url: "/progress",
    //url: "progress.json",
    dataType: "json",
    success: function(data) {
        console.log(data);
        $('.sum.total').text(toFormat(data.tokens))
        $('.currency .USD').text(toFormat(data.payments.USD.amount))
        $('.currency .ETH').text(toFormat(data.payments.ETH.amount))
        $('.currency .BTC').text(toFormat(data.payments.BTC.amount))
        $('.cls .fill').width($('.cls').width() / 100 * data.tokens / $('.cls .fill').data("cls-total") * 100)
    },
    error: function(t, e, n) {
        console.log('Config is missing')
    },
    async: true
})

function toFormat(a) {
    return ((parseInt(a * 1000) / 1000) + "").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,')
}

var end = new Date(Date.UTC(2018, 1, 5, 14, 0));
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {
        clearInterval(timer);
        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    var box = $('.counter');
    box.find('.days .counter-digit span').text(twoDigit(days))
    box.find('.hours .counter-digit span').text(twoDigit(hours))
    box.find('.mins .counter-digit span').text(twoDigit(minutes))
    box.find('.sec .counter-digit span').text(twoDigit(seconds))
}

function twoDigit(i) {
    if (i < 10) return '0' + i;
    return i;
}

timer = setInterval(showRemaining, 1000);

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
});

$(document).ready(function () {
    $('#loader').fadeOut(500);
    var deviation = $(window).width() / 3;
    var step = 1;

    $(document).on('click', '#slider .next', function (event) {
        event.preventDefault();
        $('#slider .screen').animate({
            scrollLeft: .9 * $(window).width() * (step)
        }, 1500);
    });
    $(document).on('click', '#slider .prev', function (event) {
        event.preventDefault();
        $('#slider .screen').animate({
            scrollLeft: .9 * $(window).width() * (step - 2)
        }, 1500);
    });

    $('#slider .screen').scroll(function() {
        $('#slider .scene').each(function() {
            if ($(this).offset().left > - deviation &&
                $(this).offset().left < $(window).width() - deviation) {
                $(this).css('opacity', '1');
                step = $(this).index() + 1;
                if ($(window).width() > 1290) {
                    if ($('#slider .screen').scrollLeft() > .9 * $(window).width() - deviation) {
                        $('#slider .prev').fadeIn();
                    }
                    else {
                        $('#slider .prev').hide();
                    }
                    if ($('#slider .screen').scrollLeft() < 3 * .9 * $(window).width() - deviation) {
                        $('#slider .next').fadeIn();
                    }
                    else {
                        $('#slider .next').hide();
                    }
                }
            }
            else {
                $(this).css('opacity', '0.2');
            }
        })
    })
})

var userLang = getURLLang() || navigator.language || navigator.userLanguage,
    main_lang_obj = {};

! function() {
    "use strict";

    function t(t) {
        e(main_lang_obj['en']),
        e(main_lang_obj[t]), n(t), $("html").attr("lang", t), "ru" == t ? ($("#player1").hide(), $("#player2").show(), $(".ico-tg").attr("href", "https://t.me/InspeerRUS")) : ($("#player2").hide(), $("#player1").show(), $(".ico-tg").attr("href", "https://t.me/Inspeer_io"))
    }

    function e(t) {
        for (var e in t) "placeholder" === e ? $("input").attr("placeholder", t[e]) : "subscribe_button" === e ? $("input[type='submit']").attr("value", t[e]) : $("[data-pg-key=" + e + "]").html(t[e])
    }

    function n(t) {
        $(".whitepaper-link").attr("href", s[t]), $(".lightpaper-link").attr("href", a[t]), $(".ico-fb").attr("href", l[t])
    }
    for (var i = ["js/locale/en.json?v=5", "js/locale/es.json?v=5", "js/locale/ru.json?v=5", "js/locale/ja.json?v=5", "js/locale/ko.json?v=5", "js/locale/pt.json?v=5", "js/locale/zh_CN.json?v=5", "js/locale/da.json?v=5", "js/locale/no.json?v=5", "js/locale/sv.json?v=5"
        ], o = [], r = 0; r < i.length; r++) ! function(t) {
        $.ajax({
            url: i[t],
            dataType: "json",
            success: function(e) {
                var n = e,
                    o = i[t].indexOf(".json"),
                    r = i[t].slice(o - 2, o);
                "CN" === r && (r = "zh"), main_lang_obj[r] = {};
                for (var s in n) main_lang_obj[r][s] = n[s]
            },
            error: function(t, e, n) {
                console.log("error");
                for (var i in t) console.log(i + t[i]);
                console.log(t + " " + e + " " + n)
            },
            async: !1
        })
    }(r);
    $(".lang-list [data-lang]").each(function() {
        o.push($(this).attr("data-lang"))
    }), $(".lang-list li").each(function() {
        var e = $(".lang-current span");
        e.on("click", function(t) {
            t.preventDefault()
        }), $(this).on("click", function(n) {
            n.preventDefault();
            var i = $(this),
                o = i.data().lang,
                r = i.text();
            t(o), e.text(r)
        })
    });
    var s = {
            en: "files/Inspeer_WP.pdf",
            ru: "files/Inspeer_white_paper_rus-2.pdf",
            es: "files/Inspeer_WP.pdf",
            pt: "files/Inspeer_WP.pdf",
            ko: "files/Inspeer_WP.pdf",
            zh: "files/Inspeer_WP.pdf",
            ja: "files/Inspeer_WP.pdf"
        },
        a = {
            en: "files/Inspeer_prospectus-2.pdf",
            zh: "files/Inspeer_prospectus-2.pdf",
            ko: "files/Inspeer_prospectus-2.pdf",
            ja: "files/Inspeer_prospectus-2.pdf",
            ru: "files/Inspeer_prospectus_rus-2.pdf",
            es: "files/Inspeer_prospectus-2.pdf",
            pt: "files/Inspeer_prospectus-2.pdf"
        },
        l = {
            en: "https://www.facebook.com/Inspeere/",
            zh: "https://www.facebook.com/Inspeere/",
            ko: "https://www.facebook.com/Inspeere/",
            ja: "https://www.facebook.com/Inspeer-Japan-690448134488194",
            ru: "https://www.facebook.com/Inspeere/",
            es: "https://www.facebook.com/Inspeere/",
            pt: "https://www.facebook.com/Inspeere/"
        };
    ! function() {
        for (var e = !1, n = window.sessionStorage.getItem("lang_that_set"), i = window.location.href, r = ["/en/", "/ru/", "/ja/", "/zh/", "/ko/", "/es/", "/pt/"], s = 0; s < r.length; s++)
            if (-1 != i.indexOf(r[s])) {
                var a = r[s].slice(1, r[s].length - 1);
                return t(a), void $(".lang-list [data-lang=" + a + "]").click()
            }
        if (n) return t(n), void $(".lang-list [data-lang=" + n + "]").click();
        for (var l = o.length; l--;) {
            var c = o[l];
            if (userLang.slice(0, 2) === c && "en" !== c) {
                e = !0, $(".lang-list [data-lang=" + c + "]").click();
                break
            }
        }
        e || t("en")
    }()

    ! function () {
        t(userLang.substr(0, 2)), void $(".lang-list [data-lang=" + userLang.substr(0, 2) + "]").click();
    }();
}(),
function(t) {
    "use strict";

    function e() {
        t(".feature-title").on("click", function() {
            var e = t(this);
            e.parent().toggleClass("feature-height"), e.next(".text").toggle()
        })
    }
    var n = t(window),
        i = t("body"),
        o = (t(".langs-wrapper li").length, t(".langs-wrapper li").innerHeight(), t(".main-header").innerHeight());
    i.on("click", ".menu-trigger", function(e) {
        t(".main-header").toggleClass("menu-open")
    }), i.on("click", ".main-nav a, .main-header .subscribe", function(e) {
        e.preventDefault();
        var n, i = t(this),
            r = i.attr("href").indexOf("#"),
            s = i.attr("href").slice(r);
        t(".main-header.menu-open .menu-trigger").click(), 0 === t(s).length ? i.attr("href").indexOf("http") > -1 ? window.open(i.attr("href")) : window.open(i.attr("href"), "_self") : (n = t(s).offset().top - o, t("body,html").animate({
            scrollTop: n
        }, 600, function() {
            window.location.hash = s
        }))
    }), t(window).scroll(function() {
        t(window).scrollTop() > 100 ? t(".main-header").addClass("sticky-header") : t(".main-header").removeClass("sticky-header")
    });
    var r = !1;
    n.width() <= 768 && e(), n.on("resize", function() {
        n.width() <= 768 && !r && (e(), r = !0)
    })
}(jQuery),
function() {
    var t, e, n, i, o, r = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        },
        s = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    e = function() {
        function t() {}
        return t.prototype.extend = function(t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function(t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function(t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function(t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function(t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function(t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function t() {
            this.keys = [], this.values = []
        }
        return t.prototype.get = function(t) {
            var e, n, i, o;
            for (o = this.keys, e = n = 0, i = o.length; i > n; e = ++n)
                if (o[e] === t) return this.values[e]
        }, t.prototype.set = function(t, e) {
            var n, i, o, r;
            for (r = this.keys, n = i = 0, o = r.length; o > i; n = ++i)
                if (r[n] === t) return void(this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return t.notSupported = !0, t.prototype.observe = function() {}, t
    }()), i = this.getComputedStyle || function(t, e) {
        return this.getPropertyValue = function(e) {
            var n;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                return e.toUpperCase()
            }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function() {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function() {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function() {
            var e, n, i, o;
            if (this.stopped = !1, this.boxes = function() {
                    var t, n, i, o;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.all = function() {
                    var t, n, i, o;
                    for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e);
                    return o
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (o = this.boxes, n = 0, i = o.length; i > n; n++) e = o[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                return function(e) {
                    var n, i, o, r, s;
                    for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function() {
                        var t, e, n, i;
                        for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, o.prototype.stop = function() {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, o.prototype.sync = function(e) {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, o.prototype.doSync = function(t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, o.prototype.show = function(t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function(t, e) {
            var n, i, o;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
                return function() {
                    return r.customStyle(t, e, i, n, o)
                }
            }(this))
        }, o.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(t) {
                return window.requestAnimationFrame(t)
            } : function(t) {
                return t()
            }
        }(), o.prototype.resetStyle = function() {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function(t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, o.prototype.customStyle = function(t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
                animationDuration: n
            }), i && this.vendorSet(t.style, {
                animationDelay: i
            }), o && this.vendorSet(t.style, {
                animationIterationCount: o
            }), this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t)
            }), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
            var n, i, o, r;
            i = [];
            for (n in e) o = e[n], t["" + n] = o, i.push(function() {
                var e, i, s, a;
                for (s = this.vendors, a = [], e = 0, i = s.length; i > e; e++) r = s[e], a.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
                return a
            }.call(this));
            return i
        }, o.prototype.vendorCSS = function(t, e) {
            var n, o, r, s, a, l;
            for (a = i(t), s = a.getPropertyCSSValue(e), r = this.vendors, n = 0, o = r.length; o > n; n++) l = r[n], s = s || a.getPropertyCSSValue("-" + l + "-" + e);
            return s
        }, o.prototype.animationName = function(t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function(t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function(t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function() {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, o.prototype.offsetTop = function(t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function(t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
        }, o.prototype.util = function() {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this);

function getURLLang() {
    return getParameter('lang');
}

function getParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}