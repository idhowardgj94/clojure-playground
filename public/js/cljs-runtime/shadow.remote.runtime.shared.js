goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__45435,res){
var map__45437 = p__45435;
var map__45437__$1 = cljs.core.__destructure_map(map__45437);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45437__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45437__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__45440 = res;
var G__45440__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45440,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__45440);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45440__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__45440__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__45446 = arguments.length;
switch (G__45446) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__45459,msg,handlers,timeout_after_ms){
var map__45460 = p__45459;
var map__45460__$1 = cljs.core.__destructure_map(map__45460);
var runtime = map__45460__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45460__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45819 = arguments.length;
var i__4865__auto___45820 = (0);
while(true){
if((i__4865__auto___45820 < len__4864__auto___45819)){
args__4870__auto__.push((arguments[i__4865__auto___45820]));

var G__45821 = (i__4865__auto___45820 + (1));
i__4865__auto___45820 = G__45821;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__45504,ev,args){
var map__45505 = p__45504;
var map__45505__$1 = cljs.core.__destructure_map(map__45505);
var runtime = map__45505__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45505__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__45521 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45524 = null;
var count__45525 = (0);
var i__45526 = (0);
while(true){
if((i__45526 < count__45525)){
var ext = chunk__45524.cljs$core$IIndexed$_nth$arity$2(null,i__45526);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45825 = seq__45521;
var G__45826 = chunk__45524;
var G__45827 = count__45525;
var G__45828 = (i__45526 + (1));
seq__45521 = G__45825;
chunk__45524 = G__45826;
count__45525 = G__45827;
i__45526 = G__45828;
continue;
} else {
var G__45829 = seq__45521;
var G__45830 = chunk__45524;
var G__45831 = count__45525;
var G__45832 = (i__45526 + (1));
seq__45521 = G__45829;
chunk__45524 = G__45830;
count__45525 = G__45831;
i__45526 = G__45832;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45521);
if(temp__5753__auto__){
var seq__45521__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45521__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45521__$1);
var G__45833 = cljs.core.chunk_rest(seq__45521__$1);
var G__45834 = c__4679__auto__;
var G__45835 = cljs.core.count(c__4679__auto__);
var G__45836 = (0);
seq__45521 = G__45833;
chunk__45524 = G__45834;
count__45525 = G__45835;
i__45526 = G__45836;
continue;
} else {
var ext = cljs.core.first(seq__45521__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__45838 = cljs.core.next(seq__45521__$1);
var G__45839 = null;
var G__45840 = (0);
var G__45841 = (0);
seq__45521 = G__45838;
chunk__45524 = G__45839;
count__45525 = G__45840;
i__45526 = G__45841;
continue;
} else {
var G__45843 = cljs.core.next(seq__45521__$1);
var G__45844 = null;
var G__45845 = (0);
var G__45846 = (0);
seq__45521 = G__45843;
chunk__45524 = G__45844;
count__45525 = G__45845;
i__45526 = G__45846;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq45483){
var G__45484 = cljs.core.first(seq45483);
var seq45483__$1 = cljs.core.next(seq45483);
var G__45487 = cljs.core.first(seq45483__$1);
var seq45483__$2 = cljs.core.next(seq45483__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45484,G__45487,seq45483__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__45591,p__45592){
var map__45593 = p__45591;
var map__45593__$1 = cljs.core.__destructure_map(map__45593);
var runtime = map__45593__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45593__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45594 = p__45592;
var map__45594__$1 = cljs.core.__destructure_map(map__45594);
var msg = map__45594__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45594__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__45597 = cljs.core.deref(state_ref);
var map__45597__$1 = cljs.core.__destructure_map(map__45597);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45597__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45597__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__45606){
var map__45607 = p__45606;
var map__45607__$1 = cljs.core.__destructure_map(map__45607);
var runtime = map__45607__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45607__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__45611,msg){
var map__45612 = p__45611;
var map__45612__$1 = cljs.core.__destructure_map(map__45612);
var runtime = map__45612__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45612__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__45640,key,p__45641){
var map__45643 = p__45640;
var map__45643__$1 = cljs.core.__destructure_map(map__45643);
var state = map__45643__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45643__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__45644 = p__45641;
var map__45644__$1 = cljs.core.__destructure_map(map__45644);
var spec = map__45644__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45644__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__45661,key,spec){
var map__45663 = p__45661;
var map__45663__$1 = cljs.core.__destructure_map(map__45663);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45663__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__45667_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__45667_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__45668_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__45668_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__45669_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__45669_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__45670_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__45670_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__45671_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__45671_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__45708,key){
var map__45709 = p__45708;
var map__45709__$1 = cljs.core.__destructure_map(map__45709);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45709__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__45712,msg){
var map__45714 = p__45712;
var map__45714__$1 = cljs.core.__destructure_map(map__45714);
var runtime = map__45714__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45714__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__45725,p__45726){
var map__45727 = p__45725;
var map__45727__$1 = cljs.core.__destructure_map(map__45727);
var runtime = map__45727__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__45728 = p__45726;
var map__45728__$1 = cljs.core.__destructure_map(map__45728);
var msg = map__45728__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__45732 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__45734 = null;
var count__45735 = (0);
var i__45736 = (0);
while(true){
if((i__45736 < count__45735)){
var map__45743 = chunk__45734.cljs$core$IIndexed$_nth$arity$2(null,i__45736);
var map__45743__$1 = cljs.core.__destructure_map(map__45743);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45743__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45883 = seq__45732;
var G__45884 = chunk__45734;
var G__45885 = count__45735;
var G__45886 = (i__45736 + (1));
seq__45732 = G__45883;
chunk__45734 = G__45884;
count__45735 = G__45885;
i__45736 = G__45886;
continue;
} else {
var G__45888 = seq__45732;
var G__45889 = chunk__45734;
var G__45890 = count__45735;
var G__45891 = (i__45736 + (1));
seq__45732 = G__45888;
chunk__45734 = G__45889;
count__45735 = G__45890;
i__45736 = G__45891;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45732);
if(temp__5753__auto__){
var seq__45732__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45732__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45732__$1);
var G__45894 = cljs.core.chunk_rest(seq__45732__$1);
var G__45895 = c__4679__auto__;
var G__45896 = cljs.core.count(c__4679__auto__);
var G__45897 = (0);
seq__45732 = G__45894;
chunk__45734 = G__45895;
count__45735 = G__45896;
i__45736 = G__45897;
continue;
} else {
var map__45758 = cljs.core.first(seq__45732__$1);
var map__45758__$1 = cljs.core.__destructure_map(map__45758);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__45899 = cljs.core.next(seq__45732__$1);
var G__45900 = null;
var G__45901 = (0);
var G__45902 = (0);
seq__45732 = G__45899;
chunk__45734 = G__45900;
count__45735 = G__45901;
i__45736 = G__45902;
continue;
} else {
var G__45904 = cljs.core.next(seq__45732__$1);
var G__45905 = null;
var G__45906 = (0);
var G__45907 = (0);
seq__45732 = G__45904;
chunk__45734 = G__45905;
count__45735 = G__45906;
i__45736 = G__45907;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
