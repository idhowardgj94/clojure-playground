goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__49671,p__49672){
var map__49673 = p__49671;
var map__49673__$1 = cljs.core.__destructure_map(map__49673);
var svc = map__49673__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49673__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49673__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49673__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49674 = p__49672;
var map__49674__$1 = cljs.core.__destructure_map(map__49674);
var msg = map__49674__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49674__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49674__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49674__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49674__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__49676,p__49677){
var map__49678 = p__49676;
var map__49678__$1 = cljs.core.__destructure_map(map__49678);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49678__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__49679 = p__49677;
var map__49679__$1 = cljs.core.__destructure_map(map__49679);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49679__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__49686,p__49687){
var map__49689 = p__49686;
var map__49689__$1 = cljs.core.__destructure_map(map__49689);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49689__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__49690 = p__49687;
var map__49690__$1 = cljs.core.__destructure_map(map__49690);
var msg = map__49690__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49690__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__49693,tid){
var map__49694 = p__49693;
var map__49694__$1 = cljs.core.__destructure_map(map__49694);
var svc = map__49694__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49694__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__49699 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__49700 = null;
var count__49701 = (0);
var i__49702 = (0);
while(true){
if((i__49702 < count__49701)){
var vec__49709 = chunk__49700.cljs$core$IIndexed$_nth$arity$2(null,i__49702);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49709,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49709,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49740 = seq__49699;
var G__49741 = chunk__49700;
var G__49742 = count__49701;
var G__49743 = (i__49702 + (1));
seq__49699 = G__49740;
chunk__49700 = G__49741;
count__49701 = G__49742;
i__49702 = G__49743;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49699);
if(temp__5753__auto__){
var seq__49699__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49699__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49699__$1);
var G__49744 = cljs.core.chunk_rest(seq__49699__$1);
var G__49745 = c__4679__auto__;
var G__49746 = cljs.core.count(c__4679__auto__);
var G__49747 = (0);
seq__49699 = G__49744;
chunk__49700 = G__49745;
count__49701 = G__49746;
i__49702 = G__49747;
continue;
} else {
var vec__49720 = cljs.core.first(seq__49699__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49720,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49720,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49748 = cljs.core.next(seq__49699__$1);
var G__49749 = null;
var G__49750 = (0);
var G__49751 = (0);
seq__49699 = G__49748;
chunk__49700 = G__49749;
count__49701 = G__49750;
i__49702 = G__49751;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__49695_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__49695_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__49696_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__49696_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__49697_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__49697_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__49698_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__49698_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49730){
var map__49732 = p__49730;
var map__49732__$1 = cljs.core.__destructure_map(map__49732);
var svc = map__49732__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49732__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49732__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
