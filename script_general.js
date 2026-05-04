(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"backgroundColorRatios":[0],"scrollBarMargin":2,"width":"100%","defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","start":"this.init()","data":{"locales":{"pt":"locale/pt.txt"},"history":{},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1},"name":"Player741","defaultLocale":"pt"},"children":["this.MainViewer"],"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","watermark":false,"layout":"absolute","class":"Player","hash": "179e3e1c7f9c4270f62f5db5fe565af09697c4bd4b448c7bf1ed6a2086d69438", "definitions": [{"thumbnailUrl":"media/panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_t.webp","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_t.webp","cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"url":"media/panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":48,"tags":"ondemand","width":24576},{"rowCount":4,"height":2048,"url":"media/panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":24,"tags":"ondemand","width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame"}],"overlays":["this.panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_tcap0"],"vfov":180,"data":{"label":"T_Fachada_Noite_EST"},"id":"panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44","hfovMax":130,"hfov":360,"label":trans('panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44.label')},{"toolTipTextShadowColor":"#000000","vrPointerSelectionColor":"#FF6600","surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","surfaceReticleSelectionColor":"#FFFFFF","width":"100%","progressLeft":"33%","playbackBarBackgroundOpacity":1,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"subtitlesTextShadowOpacity":1,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"firstTransitionDuration":0,"propagateClick":false,"toolTipPaddingRight":6,"toolTipFontFamily":"Arial","toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","progressBackgroundColorRatios":[0],"subtitlesTop":0,"subtitlesBottom":50,"progressRight":"33%","playbackBarHeadBorderRadius":0,"progressOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipPaddingBottom":4,"progressBarBorderColor":"#000000","toolTipPaddingTop":4,"toolTipBorderColor":"#767676","subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","id":"MainViewer","vrThumbstickRotationStep":20,"subtitlesTextShadowColor":"#000000","progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","subtitlesFontFamily":"Arial","playbackBarLeft":0,"progressBarBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","progressBackgroundColor":["#000000"],"vrPointerSelectionTime":2000,"playbackBarHeadHeight":15,"progressBottom":10,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressHeight":2,"class":"ViewerArea","playbackBarHeadShadow":true,"minWidth":100,"minHeight":50,"progressBorderSize":0,"subtitlesGap":0,"toolTipShadowColor":"#333138","playbackBarHeadBackgroundColor":["#111111","#666666"],"height":"100%","playbackBarBottom":5,"progressBarBorderRadius":2,"toolTipFontSize":"1.11vmin","progressBorderRadius":2,"progressBarBorderSize":0,"subtitlesBackgroundColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"]},{"id":"mainPlayList","items":[{"camera":"this.panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_camera","media":"this.panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"class":"PanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","aaEnabled":true},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","initialSequence":"this.sequence_FF6F6BA0_F43F_627B_41E7_59B0193C9CDE","id":"panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_camera","enterPointingToHorizon":true},{"distance":82.03,"class":"TripodCapPanoramaOverlay","hfov":61.5,"useHandCursor":true,"id":"panorama_F9979E3E_F43F_2247_41D1_BC4DFB31DC44_tcap0","image":"this.res_F9A2C1D0_F437_21DB_41C2_3FF0A0AA87A4","angle":6,"rotate":true},{"class":"PanoramaCameraSequence","id":"sequence_FF6F6BA0_F43F_627B_41E7_59B0193C9CDE","movements":[{"yawSpeed":7.96,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5}]},{"id":"res_F9A2C1D0_F437_21DB_41C2_3FF0A0AA87A4","class":"ImageResource","levels":[{"height":357,"url":"media/res_F9A2C1D0_F437_21DB_41C2_3FF0A0AA87A4_0.webp","class":"ImageResourceLevel","width":357}]}],"minHeight":0,"propagateClick":false,"minWidth":0,"gap":10,"height":"100%","scripts":{"showPopupImage":TDV.Tour.Script.showPopupImage,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"clone":TDV.Tour.Script.clone,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setValue":TDV.Tour.Script.setValue,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"shareSocial":TDV.Tour.Script.shareSocial,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getKey":TDV.Tour.Script.getKey,"openLink":TDV.Tour.Script.openLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPixels":TDV.Tour.Script.getPixels,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"resumePlayers":TDV.Tour.Script.resumePlayers,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowScore":TDV.Tour.Script.quizShowScore,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizFinish":TDV.Tour.Script.quizFinish,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"initQuiz":TDV.Tour.Script.initQuiz,"getOverlays":TDV.Tour.Script.getOverlays,"init":TDV.Tour.Script.init,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"existsKey":TDV.Tour.Script.existsKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleVR":TDV.Tour.Script.toggleVR,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"disableVR":TDV.Tour.Script.disableVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"mixObject":TDV.Tour.Script.mixObject,"createTween":TDV.Tour.Script.createTween,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"downloadFile":TDV.Tour.Script.downloadFile,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMapLocation":TDV.Tour.Script.setMapLocation,"enableVR":TDV.Tour.Script.enableVR,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"historyGoBack":TDV.Tour.Script.historyGoBack,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"translate":TDV.Tour.Script.translate,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playAudioList":TDV.Tour.Script.playAudioList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setLocale":TDV.Tour.Script.setLocale}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Mon May 4 2026