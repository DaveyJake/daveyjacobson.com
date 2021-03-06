! function( n ) {
    window.fp_parallaxExtension = function() {
        function e( n, e ) { /*console.group("LA Parallax: "+(void 0!==e?e:"")),console.log(n),console.groupEnd()*/ }

        function t( n ) {
            return {
                cover: {
                    offsetNormal: n ? 0 : R
                },
                reveal: {
                    offsetNormal: n ? -R : 0
                }
            }
        }

        function i( n ) {
            return {
                cover: {
                    offsetNormal: n ? 0 : k
                },
                reveal: {
                    offsetNormal: n ? -k : 0
                }
            }
        }

        function o( n ) {
            return n * B / 100
        }

        function a( n ) {
            if ( T() ) return n * V / 100
        }

        function l() {
            N( n( K ).length ? n( K ) : n( J ).first(), 0 )
        }

        function r() {
            return !0
        }

        function f() {
            var e = n( K ).length ? n( K ) : n( J ).first(),
                i = O === nn,
                o = i ? e.nextAll() : e.prevAll(),
                a = i ? e.prevAll() : e.nextAll();
            r() && ( o.each( function() {
                N( n( this ), t( i )[ O ].offsetNormal, "silent" )
            } ), a.each( function() {
                N( n( this ), 0, "silent" )
            } ), T() && n( J ).each( function() {
                n( this ).find( X ).length && s( n( this ).find( Y ).length ? n( this ).find( Y ) : n( this ).find( X ).first() )
            } ) )
        }

        function s( e ) {
            var t = O === nn,
                o = t ? e.nextAll() : e.prevAll(),
                a = t ? e.prevAll() : e.nextAll();
            r() && ( o.each( function() {
                _( n( this ), i( t )[ O ].offsetNormal, "silent" )
            } ), a.each( function() {
                _( n( this ), 0, "silent" )
            } ) )
        }

        function c( n, t ) {
            V = xn.width(), t && !j.scrollBar ? ( m(), S() ) : b(), e( "running", "handlerSetAutoScrolling" )
        }

        function d() {
            hn.destroy(), pn = !1
        }

        function p() {
            n( P ).on( "setAutoScrolling", c ).on( "destroy", d ).on( "onScroll", h ).on( "afterResponsive", g ).on( "onGrab", u ).on( "onContinuosHorizontal", v ).on( "onContinuousVertical", x ).on( "onResize", y )
        }

        function u( n, e ) {
            e ? b() : vn = !0
        }

        function g( e, t ) {
            n( $ ).data( "final-x", 0 ), n( $ ).data( "final-y", 0 ), E = document.querySelectorAll( J ), f()
        }

        function v( e, t ) {
            un = !0, hn.fp_fixed() && ( s( "left" === t.xMovement ? n( K ).find( X ).first() : n( K ).find( X ).last() ), setTimeout( function() {
                hn.applyHorizontal( t )
            }, 50 ) )
        }

        function x( n, e ) {
            gn = !0, f(), setTimeout( function() {
                hn.apply( e )
            }, 50 )
        }

        function h() {
            e( "running", "handlerOnScroll" ), !pn || ln || !j.scrollBar && j.autoScrolling && !D.usingExtension( "dragAndMove" ) || ( requestAnimationFrame( I ), ln = !0 )
        }

        function m() {
            if ( r() && j.autoScrolling && !j.scrollBar ) {
                var n = ".fp-bg{ transition: all " + j.scrollingSpeed + "ms " + j.easingcss3 + "} .fp-slide, .fp-section{ will-change: transform; transition: background-position " + j.scrollingSpeed + "ms " + j.easingcss3 + "}";
                z( en, n )
            }
        }

        function S() {
            var n = ".fp-bg-animate{ transition: all " + j.scrollingSpeed + "ms " + j.easingcss3 + "}";
            z( on, n )
        }

        function b() {
            n( tn ).remove()
        }

        function y() {
            clearTimeout( F ), F = setTimeout( A, 250 )
        }

        function A() {
            B = xn.height(), V = xn.width(), R = o( j.parallaxOptions.percentage ), k = a( j.parallaxOptions.percentage ), hn.fp_fixed() && T() && ( l(), f(), w() )
        }

        function M() {
            return !0
        }

        function w() {
            n( $ ).height( B )
        }

        function I() {
            var i = D.usingExtension( "dragAndMove" ) ? Math.abs( n.fn.fullpage.dragAndMove.getCurrentScroll() ) : xn.scrollTop(),
                o = rn > i,
                a = n( K ).index( J ),
                l = B + i;
            if ( rn = i, hn.fp_fixed() )
                for ( var r = 0; r < E.length; ++r ) {
                    var f = E[ r ],
                        s = B + f.offsetTop;
                    !o && f.offsetTop <= l ? a = r : o && s >= i && f.offsetTop < i && E.length > r + 1 && ( a = r + 1 )
                }
            e( a, "currentIndex" );
            var c = ( B - ( E[ a ].offsetTop - i ) ) * R / B;
            if ( O !== nn && ( a -= 1 ), M() ) {
                var d = O !== nn ? c : -R + c;
                if ( N( n( J ).eq( a ), d ), a - 1 >= 0 && N( n( E[ a - 1 ] ), t( !1 )[ O ].offsetNormal ), !hn.fp_fixed() ) return !1;
                void 0 !== E[ a + 1 ] && N( n( E[ a + 1 ] ), t( !0 )[ O ].offsetNormal ), ln = !1
            }
        }

        function C( n ) {
            return Math.round( 2 * n ) / 2
        }

        function T() {
            return !0
        }

        function N( n, e, t ) {
            var i = C( e, 1 ),
                o = n.find( X );
            if ( o.length && M() ) {
                var a = ( n.index( J ), o.filter( U ) );
                n = a.length ? a : o.first()
            }
            if ( H ) n.css( {
                "background-position-y": i + "px"
            } );
            else if ( ( !n.hasClass( W ) || n.hasClass( Q ) || void 0 !== t ) && T() ) {
                var l = n.find( $ ),
                    r = void 0 !== l.data( "final-x" ) ? l.data( "final-x" ) : 0;
                l.toggleClass( Z, void 0 !== t ).css( {
                    transform: "translate3d(" + r + "px, " + i + "px, 0)"
                } ).data( "final-x", r ).data( "final-y", i )
            }
        }

        function _( n, e, t ) {
            var i = C( e, 1 ),
                o = H ? n : n.find( $ );
            if ( !j.scrollBar && j.autoScrolling || o.addClass( "fp-bg-animate" ), H ) o.toggleClass( Z, void 0 !== t ).css( {
                "background-position-x": i + "px"
            } );
            else {
                var a = 0,
                    l = o.data( "final-y" );
                "none" !== l && void 0 !== l && ( a = l ), o.toggleClass( Z, void 0 !== t ).css( {
                    transform: "translate3d(" + i + "px, " + a + "px, 0)"
                } ).data( "final-x", i ).data( "final-y", a )
            }
        }

        function q( n ) {
            return n.find( X ).length ? ( n.find( X ).length, n.find( X ) ) : n
        }

        function z( e, t ) {
            n( "#" + e ).length || n( '<style id="' + e + '">' + t + "</style>" ).appendTo( "head" )
        }
        var O, R, k, B, V, E, H, L, F, G = n.fn.fullpage.getFullpageData(),
            j = G.options,
            D = G.internals,
            P = ".fullpage-wrapper",
            Q = "active",
            U = "." + Q,
            J = ".fp-section",
            K = J + U,
            W = "fp-slide",
            X = "." + W,
            Y = X + U,
            Z = "fp-notransition",
            $ = ".fp-bg",
            nn = "reveal",
            en = "fp-parallax-transitions",
            tn = "#" + en,
            on = "fp-parallax-transition-class",
            an = "#" + on,
            ln = !1,
            rn = 0,
            fn = !1,
            sn = !1,
            cn = !0,
            dn = !0,
            pn = !1,
            un = !1,
            gn = !1,
            vn = !1,
            xn = n( window ),
            hn = this;
        return hn.fp_fixed = function() {
            return M()
        }, hn.apply = function( e ) {
            if ( vn && m(), !e.localIsResizing && !j.scrollBar && j.autoScrolling && r() ) {
                if ( g_isAboutToRewindVertical = "up" !== e.yMovement && !e.sectionIndex || e.isMovementUp && !( e.leavingSection - 1 ), g_isAboutToRewindVertical && j.continuousVertical && !gn ) return void( g_isAboutToRewindVertical = !1 );
                var i = t( fn = "up" === e.yMovement )[ O ].offsetNormal;
                N( n( J ).eq( e.sectionIndex ), 0 ), N( n( J ).eq( e.leavingSection - 1 ), i ), cn = 1 === Math.abs( e.leavingSection - 1 - e.sectionIndex );
                for ( var o = Math.min( e.leavingSection - 1, e.sectionIndex ) + 1; o < Math.max( e.leavingSection - 1, e.sectionIndex ); o++ ) N( n( J ).eq( o ), 0, "silent" )
            }
        }, hn.applyHorizontal = function( e ) {
            if ( !e.localIsResizing && "none" != e.xMovement ) {
                if ( ( L = void 0 !== e.direction && e.direction !== e.xMovement ) && j.continuousHorizontal && !un && r() ) return void( L = !1 );
                var t = i( sn = L ? "left" === e.direction : "left" === e.xMovement )[ O ].offsetNormal;
                if ( hn.fp_fixed() && ( _( n( K ).find( X ).eq( e.slideIndex ), 0 ), _( n( K ).find( X ).eq( e.prevSlideIndex ), t ), dn = 1 === Math.abs( e.slideIndex - e.prevSlideIndex ), T() ) )
                    for ( var o = Math.min( e.slideIndex, e.prevSlideIndex ) + 1; o < Math.max( e.slideIndex, e.prevSlideIndex ); o++ ) _( n( K ).find( X ).eq( o ), 0, "silent" )
            }
        }, hn.init = function() {
            if ( B = xn.height(), V = xn.width(), O = j.parallaxOptions.type, R = o( j.parallaxOptions.percentage ), k = a( j.parallaxOptions.percentage ), E = document.querySelectorAll( j.sectionSelector ), H = "background" === j.parallaxOptions.property, w(), p(), !H ) {
                z( "fp-parallax-stylesheet", ".fp-bg{top:0;bottom:0;width: 100%;position:absolute;z-index: -1;-webkit-backface-visibility: hidden; backface-visibility: hidden; }.fp-section, .fp-slide, .fp-section.fp-table, .fp-slide.fp-table, .fp-section .fp-tableCell, .fp-slide .fp-tableCell {position:relative;overflow: hidden;}" ), m()
            }
            S(), l(), f(), pn = !0
        }, hn.destroy = function() {
            b(), n( an ).remove(), R = o( 0 ), k = a( 0 ), f(), n( $ ).css( {
                height: "",
                transform: ""
            } ), n( P ).off( "setAutoScrolling" ).off( "destroy" ).off( "onScroll" ).off( "afterResponsive" ).off( "onGrab" ).off( "onContinuosHorizontal" ).off( "onContinuousVertical" ).off( "onResize" )
        }, hn.setOption = function( n, e ) {
            "offset" === n ? ( j.parallaxOptions.percentage = e, R = o( e ), k = a( e ) ) : "type" === n && ( j.parallaxOptions.type = e, O = e ), f()
        }, hn.afterSlideLoads = function() {
            if ( ( H ? q( n( K ) ) : n( K ).find( $ ) ).removeClass( "fp-bg-animate" ), ( un || L ) && ( s( n( K ).find( Y ) ), un = !1 ), !dn ) {
                var e = i( sn )[ O ].offsetNormal,
                    t = n( K ).find( Y ),
                    o = sn ? t.nextAll() : t.prevAll();
                ( O === nn && sn || "cover" === O && !sn ) && o.each( function() {
                    _( n( this ), e, "silent" )
                } )
            }
        }, hn.afterLoad = function() {
            if ( ( !j.scrollBar || !j.autoScrolling || D.usingExtension( "dragAndMove" ) ) && ( gn || L ) && ( f(), gn = !1, !cn && r() && hn.fp_fixed() ) ) {
                var e = t( fn )[ O ].offsetNormal,
                    i = fn ? n( K ).nextAll() : n( K ).prevAll();
                ( O === nn && fn || "cover" === O && !fn ) && i.each( function() {
                    N( n( this ), e, "silent" )
                } )
            }
        }, hn.c = D.c, "complete" === document.readyState && hn.c( "parallax" ), n( window ).on( "load", function() {
            hn.c( "parallax" )
        } ), hn
    }
}( jQuery );
