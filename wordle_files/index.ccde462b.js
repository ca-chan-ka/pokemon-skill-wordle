var u3 = Object.defineProperty
  , F3 = Object.defineProperties;
var B3 = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty
  , O = Object.prototype.propertyIsEnumerable;
var j = (u,A,B)=>A in u ? u3(u, A, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: B
}) : u[A] = B
  , l = (u,A)=>{
    for (var B in A || (A = {}))
        $.call(A, B) && j(u, B, A[B]);
    if (v)
        for (var B of v(A))
            O.call(A, B) && j(u, B, A[B]);
    return u
}
  , d = (u,A)=>F3(u, B3(A));
var I = (u,A)=>{
    var B = {};
    for (var t in u)
        $.call(u, t) && A.indexOf(t) < 0 && (B[t] = u[t]);
    if (u != null && v)
        for (var t of v(u))
            A.indexOf(t) < 0 && O.call(u, t) && (B[t] = u[t]);
    return B
}
;
import {j as F, r as n, a as C, b as A3, c as D3, T as w, D as y, C as E3, I as e3, t as t3, d as s3, R as r3, e as n3} from "./vendor.0219e859.js";
const C3 = function() {
    const A = document.createElement("link").relList;
    if (A && A.supports && A.supports("modulepreload"))
        return;
    for (const E of document.querySelectorAll('link[rel="modulepreload"]'))
        t(E);
    new MutationObserver(E=>{
        for (const e of E)
            if (e.type === "childList")
                for (const a of e.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && t(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function B(E) {
        const e = {};
        return E.integrity && (e.integrity = E.integrity),
        E.referrerpolicy && (e.referrerPolicy = E.referrerpolicy),
        E.crossorigin === "use-credentials" ? e.credentials = "include" : E.crossorigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin",
        e
    }
    function t(E) {
        if (E.ep)
            return;
        E.ep = !0;
        const e = B(E);
        fetch(E.href, e)
    }
};
C3();
const a3 = u=>u[0].map((A,B)=>u.map(t=>t[B]))
  , W = [["Delete", "", "", "", "Enter"], ["\u3042", "\u3044", "\u3046", "\u3048", "\u304A"], ["\u304B", "\u304D", "\u304F", "\u3051", "\u3053"], ["\u3055", "\u3057", "\u3059", "\u305B", "\u305D"], ["\u305F", "\u3061", "\u3064", "\u3066", "\u3068"], ["\u306A", "\u306B", "\u306C", "\u306D", "\u306E"], ["\u306F", "\u3072", "\u3075", "\u3078", "\u307B"], ["\u307E", "\u307F", "\u3080", "\u3081", "\u3082"], ["\u3084", "", "\u3086", "", "\u3088"], ["\u3089", "\u308A", "\u308B", "\u308C", "\u308D"], ["\u308F", "\u3092", "\u3093", "", "\u30FC"]]
  , o3 = ({onClick: u, letterState: A, focus: B, enableFocus: t})=>F("div", {
    className: "mx-auto sticky bottom-0 py-3 bg-white border-t select-none",
    style: {
        paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)"
    },
    children: a3(W).map((E,e)=>F("div", {
        className: "flex justify-center",
        children: E.reverse().map((a,i)=>{
            const c = i === E.length - 1;
            if (!a)
                return F("span", {
                    className: `inline-block p-1 m-px ${c ? "w-16" : "w-[28px]"}`
                }, i);
            const m = A[a]
              , g = t && B.x === i && B.y === e
              , h = (()=>g ? "bg-gray-900 text-white" : m === 3 ? "bg-gray-500 text-white" : m === 2 ? "bg-amber-500 text-white" : m === 1 ? "bg-emerald-500 text-white" : "bg-gray-200 active:bg-gray-300")();
            return F("button", {
                className: `inline-block p-1 rounded text-center m-px font-bold ${c ? "w-16" : "w-[28px]"} ${h}`,
                onClick: ()=>u(a),
                children: a
            }, i)
        }
        )
    }, `row ${e}`))
})
  , R = n.exports.createContext(({})=>{}
);
R.displayName = "ToastContext";
const P = ()=>n.exports.useContext(R)
  , c3 = ({children: u})=>{
    const [A,B] = n.exports.useState(!1)
      , [t,E] = n.exports.useState("")
      , [e,a] = n.exports.useState("normal")
      , i = ({text: c, type: m="normal"})=>{
        E(c),
        a(m),
        B(!0)
    }
    ;
    return n.exports.useEffect(()=>{
        if (!A)
            return;
        const c = window.setTimeout(()=>{
            E(""),
            B(!1)
        }
        , 5e3);
        return ()=>window.clearTimeout(c)
    }
    , [A]),
    C(R.Provider, {
        value: i,
        children: [u, A3.exports.createPortal(F(l3, {
            visible: A,
            toastType: e,
            children: t
        }), document.body)]
    })
}
  , l3 = ({visible: u, toastType: A, children: B})=>F("div", {
    className: D3({
        "max-w-xl mx-auto shadow fixed z-20 top-2 left-2 right-2 p-4 text-white font-bold text-lg rounded": !0,
        block: u,
        hidden: !u,
        "bg-red-500": A === "error",
        "bg-emerald-500": A === "normal"
    }),
    children: B
})
  , i3 = u=>{
    const A = P()
      , B = async()=>{
        if (!window.navigator.share)
            return navigator.clipboard.writeText(u.shareText).then(()=>{
                console.log("copy", u.shareText),
                A({
                    text: "\u7D50\u679C\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"
                })
            }
            , e=>{
                console.log("copy error", e)
            }
            );
        await window.navigator.share({
            title: "Wordle Japanese",
            text: u.shareText
        })
    }
    ;
    n.exports.useEffect(()=>{
        const e = new Date;
        e.setDate(new Date().getDate() + 1),
        e.setHours(0, 0, 0, 0);
        const a = window.setInterval(()=>{
            const i = new Date
              , c = Number(e) - Number(i)
              , m = `${Math.floor(c / 1e3 / 60 / 60)}h ${Math.floor(c / 1e3 / 60 % 60)}m ${Math.floor(c / 1e3) % 60}s`;
            !t.current || (t.current.textContent = m)
        }
        , 1e3);
        return ()=>window.clearInterval(a)
    }
    , []);
    const t = n.exports.useRef(null)
      , E = n.exports.useRef(null);
    return F(w.Root, {
        show: u.open,
        as: n.exports.Fragment,
        children: F(y, {
            as: "div",
            className: "fixed z-10 inset-0 overflow-y-auto",
            initialFocus: E,
            onClose: u.requestClose,
            children: C("div", {
                className: "flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0",
                children: [F(w.Child, {
                    as: n.exports.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: F(y.Overlay, {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    })
                }), F("span", {
                    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                    "aria-hidden": "true",
                    children: "\u200B"
                }), F(w.Child, {
                    as: n.exports.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: C("div", {
                        className: "inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 align-middle sm:max-w-lg sm:w-full",
                        children: [F("div", {
                            className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                            children: C("div", {
                                className: "sm:flex sm:items-start",
                                children: [F("div", {
                                    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 sm:mx-0 sm:h-10 sm:w-10",
                                    children: F(E3, {
                                        className: "h-6 w-6 text-emerald-600",
                                        "aria-hidden": "true"
                                    })
                                }), C("div", {
                                    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                    children: [C(y.Title, {
                                        as: "h3",
                                        className: "text-lg leading-6 font-medium text-gray-900",
                                        children: ["NEXT WORDLE: ", F("span", {
                                            ref: t
                                        })]
                                    }), F("div", {
                                        className: "mt-2",
                                        children: C("p", {
                                            className: "text-sm text-gray-700",
                                            children: ["WORDLE\u306F\u65E5\u66FF\u308F\u308A\u3067\u554F\u984C\u304C\u5909\u308F\u308A\u307E\u3059\u3002\u307E\u305F\u660E\u65E5\u3001\u65B0\u3057\u3044\u554F\u984C\u306B\u6311\u6226\u3067\u304D\u307E\u3059\u3002", F("br", {}), "\u672C\u30B5\u30A4\u30C8\u306B\u95A2\u3059\u308B\u306E\u611F\u60F3\u306FTwitter\u306B\u300C", F("a", {
                                                className: "text-blue-500 hover:text-blue-700",
                                                href: "https://twitter.com/hashtag/WordleJapanese#",
                                                rel: "noopener noreferrer",
                                                target: "_blank",
                                                children: "#WordleJapanese"
                                            }), "\u300D\u306E\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u3067\u30C4\u30A4\u30FC\u30C8\u3057\u3066\u304F\u308C\u308C\u3070\u76EE\u3092\u901A\u3059\u304B\u3082\u3057\u308C\u307E\u305B\u3093\u3002"]
                                        })
                                    })]
                                })]
                            })
                        }), F("div", {
                            className: "bg-gray-50 py-3 px-6 flex flex-row-reverse",
                            children: F("button", {
                                type: "button",
                                className: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm",
                                onClick: ()=>B(),
                                ref: E,
                                children: "Share"
                            })
                        })]
                    })
                })]
            })
        })
    })
}
  , o = ({text: u, children: A, textClass: B})=>C("ruby", {
    children: [A, F("rp", {
        children: "\uFF08"
    }), F("rt", {
        className: B,
        children: u
    }), F("rp", {
        children: "\uFF09"
    })]
})
  , d3 = u=>{
    const A = n.exports.useRef(null);
    return F(w.Root, {
        show: u.open,
        as: n.exports.Fragment,
        children: F(y, {
            as: "div",
            className: "fixed z-10 inset-0 overflow-y-auto",
            initialFocus: A,
            onClose: u.requestClose,
            children: C("div", {
                className: "flex items-center justify-center min-h-screen p-4 text-center sm:block sm:p-0",
                children: [F(w.Child, {
                    as: n.exports.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: F(y.Overlay, {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    })
                }), F("span", {
                    className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                    "aria-hidden": "true",
                    children: "\u200B"
                }), F(w.Child, {
                    as: n.exports.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: C("div", {
                        className: "inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle sm:max-w-lg sm:w-full",
                        children: [F("div", {
                            className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                            children: F("div", {
                                className: "sm:flex sm:items-start",
                                children: C("div", {
                                    className: "sm:text-left",
                                    children: [C("div", {
                                        className: "mb-4 font-palt",
                                        children: [F("p", {
                                            className: "font-bold mb-2",
                                            children: "\u904A\u3073\u65B9"
                                        }), C("p", {
                                            className: "text-sm text-gray-700",
                                            children: ["5", F(o, {
                                                text: "\u3082\u3058",
                                                children: "\u6587\u5B57"
                                            }), "\u306E", F(o, {
                                                text: "\u306B\u307B\u3093\u3054",
                                                children: "\u65E5\u672C\u8A9E"
                                            }), "\u3092\u5F53\u3066\u308B\u30B2\u30FC\u30E0\u3067\u3059\u3002", F("br", {}), "\u7B54\u3048\u3092", F(o, {
                                                text: "\u305D\u3046\u305E\u3046",
                                                children: "\u60F3\u50CF"
                                            }), "\u3057\u30665\u6587\u5B57\u306E", F(o, {
                                                text: "\u306B\u307B\u3093\u3054",
                                                children: "\u65E5\u672C\u8A9E"
                                            }), "\u3092", F(o, {
                                                text: "\u306B\u3085\u3046\u308A\u3087\u304F",
                                                children: "\u5165\u529B"
                                            }), "\u3057\u3066\u304F\u3060\u3055\u3044\u3002Enter\u30AD\u30FC\u3092", F(o, {
                                                text: "\u304A",
                                                children: "\u62BC"
                                            }), "\u3059\u3068\u7B54\u3048", F(o, {
                                                text: "\u3042",
                                                children: "\u5408"
                                            }), "\u308F\u305B\u304C\u3067\u304D\u307E\u3059\u3002 \u7B54\u3048\u306B\u6587\u5B57\u304C", F(o, {
                                                text: "\u3075\u304F",
                                                children: "\u542B"
                                            }), "\u307E\u308C\u308B\u3068", C("b", {
                                                className: "bg-amber-500 text-white",
                                                children: ["\u6587\u5B57\u304C", F(o, {
                                                    text: "\u304D\u3044\u308D",
                                                    textClass: "text-amber-500",
                                                    children: "\u9EC4\u8272"
                                                })]
                                            }), "\u306B\u3001\u6587\u5B57\u306E", F(o, {
                                                text: "\u3070\u3057\u3087",
                                                children: "\u5834\u6240"
                                            }), "\u3082", F(o, {
                                                text: "\u3044\u3063\u3061",
                                                children: "\u4E00\u81F4"
                                            }), "\u3059\u308B\u3068", C("b", {
                                                className: "bg-emerald-500 text-white",
                                                children: ["\u6587\u5B57\u304C", F(o, {
                                                    text: "\u307F\u3069\u308A\u3044\u308D",
                                                    textClass: "text-emerald-500",
                                                    children: "\u7DD1\u8272"
                                                })]
                                            }), "\u306B\u306A\u308A\u307E\u3059\u3002 \u305D\u308C\u3089\u306E\u30D2\u30F3\u30C8\u3092\u3082\u3068\u306B\u7B54\u3048\u3092", F(o, {
                                                text: "\u3042",
                                                children: "\u5F53"
                                            }), "\u3066\u3066\u304F\u3060\u3055\u3044\u3002", F("br", {}), "\u300C\u304C\u300D\u300C\u3074\u300D\u306E\u3088\u3046\u306A", F(o, {
                                                text: "\u3060\u304F\u304A\u3093",
                                                children: "\u6FC1\u97F3"
                                            }), "\u30FB", F(o, {
                                                text: "\u306F\u3093\u3060\u304F\u304A\u3093",
                                                children: "\u534A\u6FC1\u97F3"
                                            }), "\u3001\u300C\u3063\u300D\u300C\u3083\u300D\u306E\u3088\u3046\u306A", F(o, {
                                                text: "\u3088\u3046\u304A\u3093",
                                                children: "\u62D7\u97F3"
                                            }), "\u306F\u305D\u308C\u305E\u308C\u300C\u304B\u300D\u300C\u3072\u300D\u300C\u3064\u300D\u300C\u3084\u300D\u3068\u3057\u3066", F(o, {
                                                text: "\u3042\u3064\u304B",
                                                children: "\u6271"
                                            }), "\u308F\u308C\u307E\u3059\u3002", F(o, {
                                                text: "\u305F\u3068",
                                                children: "\u4F8B"
                                            }), "\u3048\u3070\u300C\u304C\u3044\u3057\u3085\u3046\u300D\u306F\u300C\u304B\u3044\u3057\u3086\u3046\u300D\u3068\u5165\u529B\u3057\u307E\u3059\u3002"]
                                        })]
                                    }), C("div", {
                                        className: "mt-2",
                                        children: [F("p", {
                                            className: "font-bold mb-2",
                                            children: "\u672C\u30B2\u30FC\u30E0\u306B\u3064\u3044\u3066"
                                        }), C("ul", {
                                            className: "text-sm text-gray-700",
                                            children: [C("li", {
                                                children: ["\u672C\u30B2\u30FC\u30E0\u306Fpowerlanguage\u3055\u3093\u306E\u300E", F("a", {
                                                    className: "text-blue-500 hover:text-blue-700",
                                                    href: "https://www.powerlanguage.co.uk/wordle/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "WORDLE"
                                                }), "\u300F\u3092\u65E5\u672C\u8A9E\u306B\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3057\u305F\u3082\u306E\u3067\u3059\u3002"]
                                            }), C("li", {
                                                children: ["\u672C\u30B2\u30FC\u30E0\u306E\u6B63\u89E3\u30C7\u30FC\u30BF\u3092\u4F5C\u308B\u969B\u306B\u306F\u3001", F("a", {
                                                    className: "text-blue-500 hover:text-blue-700",
                                                    href: "https://github.com/masayu-a/WLSP",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "\u56FD\u7ACB\u56FD\u8A9E\u7814\u7A76\u6240(2004)\u300E\u5206\u985E\u8A9E\u5F59\u8868\u5897\u88DC\u6539\u8A02\u7248\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u300F(ver.1.0)"
                                                }), "\u3092\u5229\u7528\u3057\u3066\u3044\u307E\u3059\u3002"]
                                            })]
                                        })]
                                    })]
                                })
                            })
                        }), F("div", {
                            className: "bg-gray-50 py-3 px-6 flex flex-row-reverse",
                            children: F("button", {
                                type: "button",
                                className: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm",
                                onClick: u.requestClose,
                                ref: A,
                                children: "\u30B2\u30FC\u30E0\u3092\u306F\u3058\u3081\u308B"
                            })
                        })]
                    })
                })]
            })
        })
    })
}
  , M = [
        "いあいぎり","そらをとぶ","いわくだき","たきのぼり","きりばらい","ダイビング","フラッシュ","にほんばれ","すなあらし","ちょうはつ","アンコール","ゆびをふる","いやなおと","せいちょう","ねむりごな","だいもんじ","きあいだま","いわなだれ","いわおとし","たいあたり","はどうだん","ねがいごと","はねやすめ","タマゴうみ","きゅうけつ","テレポート","かわらわり","いとをはく","かたくなる","どくのこな","しびれごな","あなをほる","みらいよち","なげつける","たくわえる","じこあんじ","わるだくみ","プレゼント","かみくだく","つのドリル","だくりゅう","じゅうでん","みずあそび","ロックオン","のしかかり","ねこだまし","おんがえし","やつあたり","とっておき","フェイント","つるのムチ","しろいきり","くろいきり","いたみわけ","まるくなる","しめつける","つのでつく","ゆきなだれ","カウンター","がむしゃら","わるあがき","おどろかす","はらだいこ","かぜおこし","ふきとばし","かぎわける","かなしばり","からげんき","あてみなげ","いちゃもん","おきみやげ","おしゃべり","おまじない","かまいたち","からみつく","きあいだめ","くさむすび","こころのめ","こわいかお","さしおさえ","しぼりとる","しんくうは","すなじごく","だましうち","つぼをつく","つららばり","でんげきは","でんじほう","とびはねる","どろあそび","ばかぢから","へびにらみ","ほごしょく","まわしげり","みだれづき","ミルクのみ","メガホーン","リサイクル","わたほうし"
    ].map(word => {
        const chars = {
            "が":"か","ぎ":"き","ぐ":"く","げ":"け","ご":"こ","ざ":"さ","じ":"し","ず":"す","ぜ":"せ","ぞ":"そ","だ":"た","ぢ":"ち","づ":"つ","で":"て","ど":"と","ば":"は","び":"ひ","ぶ":"ふ","べ":"へ","ぼ":"ほ","ょ":"よ","ゅ":"ゆ","ゃ":"や","っ":"つ"
        };
        let w = word
            .replace(/[ァ-ン]/g, s => String.fromCharCode(s.charCodeAt(0) - 0x60))
            .replace("/[がぎぐげござじずぜぞだぢづでどばびぶべぼ]/g", m => chars[m]);
        Object.entries(chars).forEach(entry => w = w.replaceAll(entry[0], entry[1]))
        return w;
    }).map(word => {
        console.log(word);
        return word;
    })
  , m3 = {
    1: "A",
    12: "UP",
    13: "DOWN",
    14: "LEFT",
    15: "RIGHT"
}
  , f3 = (u,A)=>{
    const B = n.exports.useRef([]);
    return n.exports.useEffect(()=>{
        const t = ()=>{
            const a = navigator.getGamepads()[0];
            if (!a || !B.current)
                return;
            const i = a.buttons
              , c = [];
            for (let m = 0; m < i.length; m++) {
                const g = i[m]
                  , h = m3[m];
                g.pressed && (B.current.includes(h) || A(h),
                c.push(h))
            }
            B.current = c,
            window.requestAnimationFrame(t)
        }
          , E = a=>{
            u(),
            t()
        }
          , e = a=>console.log("disconnect", a);
        return window.addEventListener("gamepadconnected", E),
        window.addEventListener("gamepaddisconnected", e),
        ()=>{
            window.removeEventListener("gamepadconnected", E),
            window.removeEventListener("gamepaddisconnected", e)
        }
    }
    , []),
    {}
}
;
const _ = new Date(2022,0,30,0,0,0,0)
  , H = (u,A)=>{
    const B = u.setHours(0, 0, 0, 0) - A.setHours(0, 0, 0, 0);
    return Math.round(B / (1e3 * 60 * 60 * 24))
}
  , h3 = ()=>{
    const u = H(new Date, _) % M.length;
    return M[u]
}
  , x3 = {
    \u3083: "\u3084",
    \u3085: "\u3086",
    \u3087: "\u3088",
    \u3041: "\u3042",
    \u3043: "\u3044",
    \u3045: "\u3046",
    \u3047: "\u3048",
    \u3049: "\u304A",
    \u3063: "\u3064",
    \u304C: "\u304B",
    \u304E: "\u304D",
    \u3050: "\u304F",
    \u3052: "\u3051",
    \u3054: "\u3053",
    \u3056: "\u3055",
    \u3058: "\u3057",
    \u305A: "\u3059",
    \u305C: "\u305B",
    \u305E: "\u305D",
    \u3060: "\u305F",
    \u3062: "\u3061",
    \u3065: "\u3064",
    \u3067: "\u3066",
    \u3069: "\u3068",
    \u3070: "\u306F",
    \u3073: "\u3072",
    \u3076: "\u3075",
    \u3079: "\u3078",
    \u307C: "\u307B",
    \u3071: "\u306F",
    \u3074: "\u3072",
    \u3077: "\u3075",
    \u307A: "\u3078",
    \u307D: "\u307B"
}
  , T = 8
  , q = 5
  , G = 2
  , g3 = (u,A,B)=>`#WordleJapanese ${H(new Date, _)} ${B ? u.words.length : "X"}/${T}

${u.words.map(E=>E.map((e,a)=>{
    const i = e === A[a]
      , c = A.includes(e);
    return i ? "\u{1F7E9}" : c ? "\u{1F7E8}" : "\u2B1C"
}
).join("")).join(`
`)}
https://wordle.mottox2.com/`
  , J = {
    buffer: "",
    current: [],
    words: [],
    message: "",
    gamepadActiveted: !1,
    focus: {
        x: 0,
        y: 0
    }
}
  , p3 = 5
  , w3 = 11
  , z = u=>u[0].map((A,B)=>u.map(t=>t[B]))
  , K = (u,A)=>{
    if (u.current.length >= q)
        return u;
    const B = u.buffer + A
      , t = t3(B).match(/[あ-んー]/g);
    if (t && B !== "n" && B !== "ny" && !(t.length === 1 && t[0] === "\u3063")) {
        const E = t.map(e=>x3[e] || e);
        return d(l({}, u), {
            current: [...u.current, ...E],
            buffer: ""
        })
    }
    return d(l({}, u), {
        buffer: B
    })
}
  , U = u=>u.buffer.length > 0 ? d(l({}, u), {
    buffer: u.buffer.slice(0, -1)
}) : d(l({}, u), {
    current: u.current.slice(0, -1)
})
  , X = u=>u.current.length < q ? d(l({}, u), {
    message: "\u6587\u5B57\u6570\u304C\u305F\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"
}) : M.includes(u.current.join("")) ? d(l({}, u), {
    focus: u.focus,
    buffer: "",
    current: [],
    message: "",
    words: [...u.words, u.current]
}) : d(l({}, u), {
    message: "\u5358\u8A9E\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"
})
  , V = (u,A)=>u === "Delete" ? U(A) : u === "Enter" ? X(A) : K(A, u);
function b3() {
    f3(()=>{
        e(r=>d(l({}, r), {
            gamepadActiveted: !0
        }))
    }
    , r=>{
        switch (console.log(r),
        r) {
        case "A":
            e(D=>{
                const s = z(W).map(x=>x.reverse())
                  , f = z(s)[D.focus.x][D.focus.y];
                return f ? V(f, D) : D
            }
            );
            break;
        case "UP":
            e(D=>d(l({}, D), {
                focus: {
                    x: D.focus.x,
                    y: Math.max(D.focus.y - 1, 0)
                }
            }));
            break;
        case "DOWN":
            e(D=>d(l({}, D), {
                focus: {
                    x: D.focus.x,
                    y: Math.min(D.focus.y + 1, p3 - 1)
                }
            }));
            break;
        case "LEFT":
            e(D=>d(l({}, D), {
                focus: {
                    x: Math.max(D.focus.x - 1, 0),
                    y: D.focus.y
                }
            }));
            break;
        case "RIGHT":
            e(D=>d(l({}, D), {
                focus: {
                    x: Math.min(D.focus.x + 1, w3 - 1),
                    y: D.focus.y
                }
            }));
            break
        }
    }
    );
    const B = n.exports.useMemo(()=>h3(), [])
      , t = P()
      , [E,e] = n.exports.useState(J)
      , [a,i] = n.exports.useState({})
      , [c,m] = n.exports.useState("")
      , [g,h] = n.exports.useState(null)
      , Z = r=>{
        const D = {};
        r.split("").forEach((s,f)=>{
            const x = s === B[f]
              , p = B.includes(s)
              , N = D[s];
            x ? D[s] = 1 : p && N !== 2 ? D[s] = 2 : N || (D[s] = 3)
        }
        ),
        i(s=>l(l({}, s), D))
    }
    ;
    n.exports.useEffect(()=>{
        const s = E
          , {message: r} = s
          , D = I(s, ["message"]);
        !r || (console.log(r),
        t({
            text: r
        }),
        e(d(l({}, D), {
            message: ""
        })))
    }
    , [E.message]),
    n.exports.useEffect(()=>{
        const r = window.localStorage.getItem("gameState");
        if (!r) {
            h("start");
            return
        }
        const {words: D, timestamp: s, version: f} = JSON.parse(r);
        console.log({
            words: D,
            timestamp: s,
            version: f,
            state: E
        });
        const x = new Date(s);
        x.setHours(0, 0, 0, 0);
        const p = new Date;
        p.setHours(0, 0, 0, 0),
        Number(x) === Number(p) && f === G ? e(d(l({}, J), {
            words: D
        })) : window.localStorage.removeItem("gameState")
    }
    , []);
    const [b,Q] = n.exports.useState(!1);
    n.exports.useEffect(()=>{
        E.words.forEach(r=>{
            Z(r.join(""))
        }
        ),
        E.words.filter(r=>r.join("") === B).length > 0 && Q(!0),
        E.words.length !== 0 && window.localStorage.setItem("gameState", JSON.stringify({
            words: E.words,
            version: G,
            timestamp: Number(new Date)
        }))
    }
    , [E.words]),
    n.exports.useEffect(()=>{
        const r = D=>{
            e(s=>D.key === "Backspace" ? U(s) : D.key === "Enter" ? X(s) : !D.key.match(/[a-zA-Z\-]/) || D.key.length !== 1 ? s : K(s, D.key))
        }
        ;
        return window.addEventListener("keydown", r),
        ()=>window.removeEventListener("keydown", r)
    }
    , []);
    const {current: k, buffer: Y, words: S} = E
      , L = b || E.words.length >= T;
    return n.exports.useEffect(()=>{
        if (!L)
            return;
        fetch(`https://wordle-dict.mottox2.workers.dev/?w=${B}`).then(D=>{
            D.json().then(s=>{
                t({
                    text: s.value
                })
            }
            )
        }
        ),
        h("result");
        const r = g3(E, B, b);
        m(r)
    }
    , [L, B, b]),
    C("div", {
        className: "max-w-xl mx-auto relative min-h-full flex flex-col",
        children: [F(d3, {
            open: g === "start",
            requestClose: ()=>h(null)
        }), F(i3, {
            open: g === "result",
            requestClose: ()=>h(null),
            shareText: c
        }), C("header", {
            className: "pb-3 pt-4 px-2 border-b flex items-center",
            children: [F("div", {
                className: "h8 w-8"
            }), C("div", {
                className: "din text-3xl text-center flex items-center justify-center flex-1",
                children: ["WORDLE", F("span", {
                    className: "red-circle mx-1"
                }), "JAPANESE"]
            }), F("button", {
                className: "relative top-[-1px]",
                onClick: ()=>h("start"),
                children: F(e3, {
                    className: "h-7 w-7 text-gray-500"
                })
            })]
        }), C("div", {
            className: "my-6 flex-grow flex flex-col justify-center select-none",
            children: [S.map((r,D)=>F("div", {
                className: "letters",
                children: r.map((s,f)=>{
                    const x = s === B[f]
                      , p = B.includes(s)
                      , N = (()=>x ? "bg-emerald-500" : p ? "bg-amber-500" : "bg-gray-500")();
                    return F("span", {
                        className: `letter border-transparent text-white ${N}`,
                        children: s
                    }, f)
                }
                )
            }, D)), !L && F("div", {
                className: "letters",
                children: new Array(5).fill(0).map((r,D)=>{
                    const s = !!k[D]
                      , f = s ? k[D] : D === k.length ? Y : "";
                    return F("span", {
                        className: s ? "letter filled" : "buffer",
                        children: f
                    }, D)
                }
                )
            }), T - (b ? 0 : 1) - S.length > 0 && new Array(T - (b ? 0 : 1) - S.length).fill(0).map((r,D)=>F("div", {
                className: "letters",
                children: new Array(5).fill(0).map((s,f)=>F("span", {
                    className: "buffer"
                }, f))
            }, `rest ${D}`))]
        }), F(o3, {
            enableFocus: E.gamepadActiveted,
            focus: E.focus,
            letterState: a,
            onClick: r=>{
                console.log(`${r} is clicked`),
                e(D=>V(r, D))
            }
        })]
    })
}
s3();
r3.render(F(n3.StrictMode, {
    children: F(c3, {
        children: F(b3, {})
    })
}), document.getElementById("root"));
