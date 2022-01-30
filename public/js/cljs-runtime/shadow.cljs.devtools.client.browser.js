goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___50199 = arguments.length;
var i__4865__auto___50200 = (0);
while(true){
if((i__4865__auto___50200 < len__4864__auto___50199)){
args__4870__auto__.push((arguments[i__4865__auto___50200]));

var G__50201 = (i__4865__auto___50200 + (1));
i__4865__auto___50200 = G__50201;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49912){
var G__49913 = cljs.core.first(seq49912);
var seq49912__$1 = cljs.core.next(seq49912);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49913,seq49912__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__49917 = cljs.core.seq(sources);
var chunk__49918 = null;
var count__49919 = (0);
var i__49920 = (0);
while(true){
if((i__49920 < count__49919)){
var map__49927 = chunk__49918.cljs$core$IIndexed$_nth$arity$2(null,i__49920);
var map__49927__$1 = cljs.core.__destructure_map(map__49927);
var src = map__49927__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49927__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49928){var e_50202 = e49928;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50202);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50202.message)].join('')));
}

var G__50203 = seq__49917;
var G__50204 = chunk__49918;
var G__50205 = count__49919;
var G__50206 = (i__49920 + (1));
seq__49917 = G__50203;
chunk__49918 = G__50204;
count__49919 = G__50205;
i__49920 = G__50206;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49917);
if(temp__5753__auto__){
var seq__49917__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49917__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49917__$1);
var G__50207 = cljs.core.chunk_rest(seq__49917__$1);
var G__50208 = c__4679__auto__;
var G__50209 = cljs.core.count(c__4679__auto__);
var G__50210 = (0);
seq__49917 = G__50207;
chunk__49918 = G__50208;
count__49919 = G__50209;
i__49920 = G__50210;
continue;
} else {
var map__49929 = cljs.core.first(seq__49917__$1);
var map__49929__$1 = cljs.core.__destructure_map(map__49929);
var src = map__49929__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49929__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49929__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49929__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49929__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e49930){var e_50211 = e49930;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_50211);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_50211.message)].join('')));
}

var G__50212 = cljs.core.next(seq__49917__$1);
var G__50213 = null;
var G__50214 = (0);
var G__50215 = (0);
seq__49917 = G__50212;
chunk__49918 = G__50213;
count__49919 = G__50214;
i__49920 = G__50215;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__49933 = cljs.core.seq(js_requires);
var chunk__49934 = null;
var count__49935 = (0);
var i__49936 = (0);
while(true){
if((i__49936 < count__49935)){
var js_ns = chunk__49934.cljs$core$IIndexed$_nth$arity$2(null,i__49936);
var require_str_50216 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50216);


var G__50217 = seq__49933;
var G__50218 = chunk__49934;
var G__50219 = count__49935;
var G__50220 = (i__49936 + (1));
seq__49933 = G__50217;
chunk__49934 = G__50218;
count__49935 = G__50219;
i__49936 = G__50220;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49933);
if(temp__5753__auto__){
var seq__49933__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49933__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49933__$1);
var G__50221 = cljs.core.chunk_rest(seq__49933__$1);
var G__50222 = c__4679__auto__;
var G__50223 = cljs.core.count(c__4679__auto__);
var G__50224 = (0);
seq__49933 = G__50221;
chunk__49934 = G__50222;
count__49935 = G__50223;
i__49936 = G__50224;
continue;
} else {
var js_ns = cljs.core.first(seq__49933__$1);
var require_str_50225 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_50225);


var G__50226 = cljs.core.next(seq__49933__$1);
var G__50227 = null;
var G__50228 = (0);
var G__50229 = (0);
seq__49933 = G__50226;
chunk__49934 = G__50227;
count__49935 = G__50228;
i__49936 = G__50229;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__49938){
var map__49939 = p__49938;
var map__49939__$1 = cljs.core.__destructure_map(map__49939);
var msg = map__49939__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49939__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49939__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49940(s__49941){
return (new cljs.core.LazySeq(null,(function (){
var s__49941__$1 = s__49941;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49941__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__49946 = cljs.core.first(xs__6308__auto__);
var map__49946__$1 = cljs.core.__destructure_map(map__49946);
var src = map__49946__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49946__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49946__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__49941__$1,map__49946,map__49946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49939,map__49939__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49940_$_iter__49942(s__49943){
return (new cljs.core.LazySeq(null,((function (s__49941__$1,map__49946,map__49946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49939,map__49939__$1,msg,info,reload_info){
return (function (){
var s__49943__$1 = s__49943;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__49943__$1);
if(temp__5753__auto____$1){
var s__49943__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49943__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49943__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49945 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49944 = (0);
while(true){
if((i__49944 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__49944);
cljs.core.chunk_append(b__49945,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__50230 = (i__49944 + (1));
i__49944 = G__50230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49945),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49940_$_iter__49942(cljs.core.chunk_rest(s__49943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49945),null);
}
} else {
var warning = cljs.core.first(s__49943__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49940_$_iter__49942(cljs.core.rest(s__49943__$2)));
}
} else {
return null;
}
break;
}
});})(s__49941__$1,map__49946,map__49946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49939,map__49939__$1,msg,info,reload_info))
,null,null));
});})(s__49941__$1,map__49946,map__49946__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__49939,map__49939__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49940(cljs.core.rest(s__49941__$1)));
} else {
var G__50231 = cljs.core.rest(s__49941__$1);
s__49941__$1 = G__50231;
continue;
}
} else {
var G__50232 = cljs.core.rest(s__49941__$1);
s__49941__$1 = G__50232;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__49947_50233 = cljs.core.seq(warnings);
var chunk__49948_50234 = null;
var count__49949_50235 = (0);
var i__49950_50236 = (0);
while(true){
if((i__49950_50236 < count__49949_50235)){
var map__49953_50237 = chunk__49948_50234.cljs$core$IIndexed$_nth$arity$2(null,i__49950_50236);
var map__49953_50238__$1 = cljs.core.__destructure_map(map__49953_50237);
var w_50239 = map__49953_50238__$1;
var msg_50240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953_50238__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953_50238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953_50238__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49953_50238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50243)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50241),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50242),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50240__$1)].join(''));


var G__50244 = seq__49947_50233;
var G__50245 = chunk__49948_50234;
var G__50246 = count__49949_50235;
var G__50247 = (i__49950_50236 + (1));
seq__49947_50233 = G__50244;
chunk__49948_50234 = G__50245;
count__49949_50235 = G__50246;
i__49950_50236 = G__50247;
continue;
} else {
var temp__5753__auto___50248 = cljs.core.seq(seq__49947_50233);
if(temp__5753__auto___50248){
var seq__49947_50249__$1 = temp__5753__auto___50248;
if(cljs.core.chunked_seq_QMARK_(seq__49947_50249__$1)){
var c__4679__auto___50250 = cljs.core.chunk_first(seq__49947_50249__$1);
var G__50251 = cljs.core.chunk_rest(seq__49947_50249__$1);
var G__50252 = c__4679__auto___50250;
var G__50253 = cljs.core.count(c__4679__auto___50250);
var G__50254 = (0);
seq__49947_50233 = G__50251;
chunk__49948_50234 = G__50252;
count__49949_50235 = G__50253;
i__49950_50236 = G__50254;
continue;
} else {
var map__49954_50255 = cljs.core.first(seq__49947_50249__$1);
var map__49954_50256__$1 = cljs.core.__destructure_map(map__49954_50255);
var w_50257 = map__49954_50256__$1;
var msg_50258__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49954_50256__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_50259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49954_50256__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_50260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49954_50256__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_50261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49954_50256__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_50261)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_50259),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_50260),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_50258__$1)].join(''));


var G__50262 = cljs.core.next(seq__49947_50249__$1);
var G__50263 = null;
var G__50264 = (0);
var G__50265 = (0);
seq__49947_50233 = G__50262;
chunk__49948_50234 = G__50263;
count__49949_50235 = G__50264;
i__49950_50236 = G__50265;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__49937_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49937_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__49955){
var map__49956 = p__49955;
var map__49956__$1 = cljs.core.__destructure_map(map__49956);
var msg = map__49956__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49956__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49956__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__49957 = cljs.core.seq(updates);
var chunk__49959 = null;
var count__49960 = (0);
var i__49961 = (0);
while(true){
if((i__49961 < count__49960)){
var path = chunk__49959.cljs$core$IIndexed$_nth$arity$2(null,i__49961);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50071_50266 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50075_50267 = null;
var count__50076_50268 = (0);
var i__50077_50269 = (0);
while(true){
if((i__50077_50269 < count__50076_50268)){
var node_50270 = chunk__50075_50267.cljs$core$IIndexed$_nth$arity$2(null,i__50077_50269);
if(cljs.core.not(node_50270.shadow$old)){
var path_match_50271 = shadow.cljs.devtools.client.browser.match_paths(node_50270.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50271)){
var new_link_50272 = (function (){var G__50103 = node_50270.cloneNode(true);
G__50103.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50271),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50103;
})();
(node_50270.shadow$old = true);

(new_link_50272.onload = ((function (seq__50071_50266,chunk__50075_50267,count__50076_50268,i__50077_50269,seq__49957,chunk__49959,count__49960,i__49961,new_link_50272,path_match_50271,node_50270,path,map__49956,map__49956__$1,msg,updates,reload_info){
return (function (e){
var seq__50104_50273 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50106_50274 = null;
var count__50107_50275 = (0);
var i__50108_50276 = (0);
while(true){
if((i__50108_50276 < count__50107_50275)){
var map__50112_50277 = chunk__50106_50274.cljs$core$IIndexed$_nth$arity$2(null,i__50108_50276);
var map__50112_50278__$1 = cljs.core.__destructure_map(map__50112_50277);
var task_50279 = map__50112_50278__$1;
var fn_str_50280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50112_50278__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50112_50278__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50282 = goog.getObjectByName(fn_str_50280,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50281)].join(''));

(fn_obj_50282.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50282.cljs$core$IFn$_invoke$arity$2(path,new_link_50272) : fn_obj_50282.call(null,path,new_link_50272));


var G__50283 = seq__50104_50273;
var G__50284 = chunk__50106_50274;
var G__50285 = count__50107_50275;
var G__50286 = (i__50108_50276 + (1));
seq__50104_50273 = G__50283;
chunk__50106_50274 = G__50284;
count__50107_50275 = G__50285;
i__50108_50276 = G__50286;
continue;
} else {
var temp__5753__auto___50287 = cljs.core.seq(seq__50104_50273);
if(temp__5753__auto___50287){
var seq__50104_50288__$1 = temp__5753__auto___50287;
if(cljs.core.chunked_seq_QMARK_(seq__50104_50288__$1)){
var c__4679__auto___50289 = cljs.core.chunk_first(seq__50104_50288__$1);
var G__50290 = cljs.core.chunk_rest(seq__50104_50288__$1);
var G__50291 = c__4679__auto___50289;
var G__50292 = cljs.core.count(c__4679__auto___50289);
var G__50293 = (0);
seq__50104_50273 = G__50290;
chunk__50106_50274 = G__50291;
count__50107_50275 = G__50292;
i__50108_50276 = G__50293;
continue;
} else {
var map__50113_50294 = cljs.core.first(seq__50104_50288__$1);
var map__50113_50295__$1 = cljs.core.__destructure_map(map__50113_50294);
var task_50296 = map__50113_50295__$1;
var fn_str_50297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113_50295__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50113_50295__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50299 = goog.getObjectByName(fn_str_50297,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50298)].join(''));

(fn_obj_50299.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50299.cljs$core$IFn$_invoke$arity$2(path,new_link_50272) : fn_obj_50299.call(null,path,new_link_50272));


var G__50300 = cljs.core.next(seq__50104_50288__$1);
var G__50301 = null;
var G__50302 = (0);
var G__50303 = (0);
seq__50104_50273 = G__50300;
chunk__50106_50274 = G__50301;
count__50107_50275 = G__50302;
i__50108_50276 = G__50303;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50270);
});})(seq__50071_50266,chunk__50075_50267,count__50076_50268,i__50077_50269,seq__49957,chunk__49959,count__49960,i__49961,new_link_50272,path_match_50271,node_50270,path,map__49956,map__49956__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50271], 0));

goog.dom.insertSiblingAfter(new_link_50272,node_50270);


var G__50304 = seq__50071_50266;
var G__50305 = chunk__50075_50267;
var G__50306 = count__50076_50268;
var G__50307 = (i__50077_50269 + (1));
seq__50071_50266 = G__50304;
chunk__50075_50267 = G__50305;
count__50076_50268 = G__50306;
i__50077_50269 = G__50307;
continue;
} else {
var G__50308 = seq__50071_50266;
var G__50309 = chunk__50075_50267;
var G__50310 = count__50076_50268;
var G__50311 = (i__50077_50269 + (1));
seq__50071_50266 = G__50308;
chunk__50075_50267 = G__50309;
count__50076_50268 = G__50310;
i__50077_50269 = G__50311;
continue;
}
} else {
var G__50312 = seq__50071_50266;
var G__50313 = chunk__50075_50267;
var G__50314 = count__50076_50268;
var G__50315 = (i__50077_50269 + (1));
seq__50071_50266 = G__50312;
chunk__50075_50267 = G__50313;
count__50076_50268 = G__50314;
i__50077_50269 = G__50315;
continue;
}
} else {
var temp__5753__auto___50316 = cljs.core.seq(seq__50071_50266);
if(temp__5753__auto___50316){
var seq__50071_50317__$1 = temp__5753__auto___50316;
if(cljs.core.chunked_seq_QMARK_(seq__50071_50317__$1)){
var c__4679__auto___50318 = cljs.core.chunk_first(seq__50071_50317__$1);
var G__50319 = cljs.core.chunk_rest(seq__50071_50317__$1);
var G__50320 = c__4679__auto___50318;
var G__50321 = cljs.core.count(c__4679__auto___50318);
var G__50322 = (0);
seq__50071_50266 = G__50319;
chunk__50075_50267 = G__50320;
count__50076_50268 = G__50321;
i__50077_50269 = G__50322;
continue;
} else {
var node_50323 = cljs.core.first(seq__50071_50317__$1);
if(cljs.core.not(node_50323.shadow$old)){
var path_match_50324 = shadow.cljs.devtools.client.browser.match_paths(node_50323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50324)){
var new_link_50325 = (function (){var G__50114 = node_50323.cloneNode(true);
G__50114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50114;
})();
(node_50323.shadow$old = true);

(new_link_50325.onload = ((function (seq__50071_50266,chunk__50075_50267,count__50076_50268,i__50077_50269,seq__49957,chunk__49959,count__49960,i__49961,new_link_50325,path_match_50324,node_50323,seq__50071_50317__$1,temp__5753__auto___50316,path,map__49956,map__49956__$1,msg,updates,reload_info){
return (function (e){
var seq__50115_50326 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50117_50327 = null;
var count__50118_50328 = (0);
var i__50119_50329 = (0);
while(true){
if((i__50119_50329 < count__50118_50328)){
var map__50123_50330 = chunk__50117_50327.cljs$core$IIndexed$_nth$arity$2(null,i__50119_50329);
var map__50123_50331__$1 = cljs.core.__destructure_map(map__50123_50330);
var task_50332 = map__50123_50331__$1;
var fn_str_50333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50123_50331__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50123_50331__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50335 = goog.getObjectByName(fn_str_50333,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50334)].join(''));

(fn_obj_50335.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50335.cljs$core$IFn$_invoke$arity$2(path,new_link_50325) : fn_obj_50335.call(null,path,new_link_50325));


var G__50336 = seq__50115_50326;
var G__50337 = chunk__50117_50327;
var G__50338 = count__50118_50328;
var G__50339 = (i__50119_50329 + (1));
seq__50115_50326 = G__50336;
chunk__50117_50327 = G__50337;
count__50118_50328 = G__50338;
i__50119_50329 = G__50339;
continue;
} else {
var temp__5753__auto___50340__$1 = cljs.core.seq(seq__50115_50326);
if(temp__5753__auto___50340__$1){
var seq__50115_50341__$1 = temp__5753__auto___50340__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50115_50341__$1)){
var c__4679__auto___50342 = cljs.core.chunk_first(seq__50115_50341__$1);
var G__50343 = cljs.core.chunk_rest(seq__50115_50341__$1);
var G__50344 = c__4679__auto___50342;
var G__50345 = cljs.core.count(c__4679__auto___50342);
var G__50346 = (0);
seq__50115_50326 = G__50343;
chunk__50117_50327 = G__50344;
count__50118_50328 = G__50345;
i__50119_50329 = G__50346;
continue;
} else {
var map__50124_50347 = cljs.core.first(seq__50115_50341__$1);
var map__50124_50348__$1 = cljs.core.__destructure_map(map__50124_50347);
var task_50349 = map__50124_50348__$1;
var fn_str_50350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50124_50348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50124_50348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50352 = goog.getObjectByName(fn_str_50350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50351)].join(''));

(fn_obj_50352.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50352.cljs$core$IFn$_invoke$arity$2(path,new_link_50325) : fn_obj_50352.call(null,path,new_link_50325));


var G__50353 = cljs.core.next(seq__50115_50341__$1);
var G__50354 = null;
var G__50355 = (0);
var G__50356 = (0);
seq__50115_50326 = G__50353;
chunk__50117_50327 = G__50354;
count__50118_50328 = G__50355;
i__50119_50329 = G__50356;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50323);
});})(seq__50071_50266,chunk__50075_50267,count__50076_50268,i__50077_50269,seq__49957,chunk__49959,count__49960,i__49961,new_link_50325,path_match_50324,node_50323,seq__50071_50317__$1,temp__5753__auto___50316,path,map__49956,map__49956__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50324], 0));

goog.dom.insertSiblingAfter(new_link_50325,node_50323);


var G__50357 = cljs.core.next(seq__50071_50317__$1);
var G__50358 = null;
var G__50359 = (0);
var G__50360 = (0);
seq__50071_50266 = G__50357;
chunk__50075_50267 = G__50358;
count__50076_50268 = G__50359;
i__50077_50269 = G__50360;
continue;
} else {
var G__50361 = cljs.core.next(seq__50071_50317__$1);
var G__50362 = null;
var G__50363 = (0);
var G__50364 = (0);
seq__50071_50266 = G__50361;
chunk__50075_50267 = G__50362;
count__50076_50268 = G__50363;
i__50077_50269 = G__50364;
continue;
}
} else {
var G__50365 = cljs.core.next(seq__50071_50317__$1);
var G__50366 = null;
var G__50367 = (0);
var G__50368 = (0);
seq__50071_50266 = G__50365;
chunk__50075_50267 = G__50366;
count__50076_50268 = G__50367;
i__50077_50269 = G__50368;
continue;
}
}
} else {
}
}
break;
}


var G__50369 = seq__49957;
var G__50370 = chunk__49959;
var G__50371 = count__49960;
var G__50372 = (i__49961 + (1));
seq__49957 = G__50369;
chunk__49959 = G__50370;
count__49960 = G__50371;
i__49961 = G__50372;
continue;
} else {
var G__50373 = seq__49957;
var G__50374 = chunk__49959;
var G__50375 = count__49960;
var G__50376 = (i__49961 + (1));
seq__49957 = G__50373;
chunk__49959 = G__50374;
count__49960 = G__50375;
i__49961 = G__50376;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49957);
if(temp__5753__auto__){
var seq__49957__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49957__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49957__$1);
var G__50377 = cljs.core.chunk_rest(seq__49957__$1);
var G__50378 = c__4679__auto__;
var G__50379 = cljs.core.count(c__4679__auto__);
var G__50380 = (0);
seq__49957 = G__50377;
chunk__49959 = G__50378;
count__49960 = G__50379;
i__49961 = G__50380;
continue;
} else {
var path = cljs.core.first(seq__49957__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__50125_50381 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__50129_50382 = null;
var count__50130_50383 = (0);
var i__50131_50384 = (0);
while(true){
if((i__50131_50384 < count__50130_50383)){
var node_50385 = chunk__50129_50382.cljs$core$IIndexed$_nth$arity$2(null,i__50131_50384);
if(cljs.core.not(node_50385.shadow$old)){
var path_match_50386 = shadow.cljs.devtools.client.browser.match_paths(node_50385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50386)){
var new_link_50387 = (function (){var G__50157 = node_50385.cloneNode(true);
G__50157.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50157;
})();
(node_50385.shadow$old = true);

(new_link_50387.onload = ((function (seq__50125_50381,chunk__50129_50382,count__50130_50383,i__50131_50384,seq__49957,chunk__49959,count__49960,i__49961,new_link_50387,path_match_50386,node_50385,path,seq__49957__$1,temp__5753__auto__,map__49956,map__49956__$1,msg,updates,reload_info){
return (function (e){
var seq__50158_50388 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50160_50389 = null;
var count__50161_50390 = (0);
var i__50162_50391 = (0);
while(true){
if((i__50162_50391 < count__50161_50390)){
var map__50166_50392 = chunk__50160_50389.cljs$core$IIndexed$_nth$arity$2(null,i__50162_50391);
var map__50166_50393__$1 = cljs.core.__destructure_map(map__50166_50392);
var task_50394 = map__50166_50393__$1;
var fn_str_50395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50166_50393__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50166_50393__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50397 = goog.getObjectByName(fn_str_50395,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50396)].join(''));

(fn_obj_50397.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50397.cljs$core$IFn$_invoke$arity$2(path,new_link_50387) : fn_obj_50397.call(null,path,new_link_50387));


var G__50398 = seq__50158_50388;
var G__50399 = chunk__50160_50389;
var G__50400 = count__50161_50390;
var G__50401 = (i__50162_50391 + (1));
seq__50158_50388 = G__50398;
chunk__50160_50389 = G__50399;
count__50161_50390 = G__50400;
i__50162_50391 = G__50401;
continue;
} else {
var temp__5753__auto___50402__$1 = cljs.core.seq(seq__50158_50388);
if(temp__5753__auto___50402__$1){
var seq__50158_50403__$1 = temp__5753__auto___50402__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50158_50403__$1)){
var c__4679__auto___50404 = cljs.core.chunk_first(seq__50158_50403__$1);
var G__50405 = cljs.core.chunk_rest(seq__50158_50403__$1);
var G__50406 = c__4679__auto___50404;
var G__50407 = cljs.core.count(c__4679__auto___50404);
var G__50408 = (0);
seq__50158_50388 = G__50405;
chunk__50160_50389 = G__50406;
count__50161_50390 = G__50407;
i__50162_50391 = G__50408;
continue;
} else {
var map__50167_50409 = cljs.core.first(seq__50158_50403__$1);
var map__50167_50410__$1 = cljs.core.__destructure_map(map__50167_50409);
var task_50411 = map__50167_50410__$1;
var fn_str_50412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167_50410__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50167_50410__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50414 = goog.getObjectByName(fn_str_50412,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50413)].join(''));

(fn_obj_50414.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50414.cljs$core$IFn$_invoke$arity$2(path,new_link_50387) : fn_obj_50414.call(null,path,new_link_50387));


var G__50415 = cljs.core.next(seq__50158_50403__$1);
var G__50416 = null;
var G__50417 = (0);
var G__50418 = (0);
seq__50158_50388 = G__50415;
chunk__50160_50389 = G__50416;
count__50161_50390 = G__50417;
i__50162_50391 = G__50418;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50385);
});})(seq__50125_50381,chunk__50129_50382,count__50130_50383,i__50131_50384,seq__49957,chunk__49959,count__49960,i__49961,new_link_50387,path_match_50386,node_50385,path,seq__49957__$1,temp__5753__auto__,map__49956,map__49956__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50386], 0));

goog.dom.insertSiblingAfter(new_link_50387,node_50385);


var G__50419 = seq__50125_50381;
var G__50420 = chunk__50129_50382;
var G__50421 = count__50130_50383;
var G__50422 = (i__50131_50384 + (1));
seq__50125_50381 = G__50419;
chunk__50129_50382 = G__50420;
count__50130_50383 = G__50421;
i__50131_50384 = G__50422;
continue;
} else {
var G__50423 = seq__50125_50381;
var G__50424 = chunk__50129_50382;
var G__50425 = count__50130_50383;
var G__50426 = (i__50131_50384 + (1));
seq__50125_50381 = G__50423;
chunk__50129_50382 = G__50424;
count__50130_50383 = G__50425;
i__50131_50384 = G__50426;
continue;
}
} else {
var G__50427 = seq__50125_50381;
var G__50428 = chunk__50129_50382;
var G__50429 = count__50130_50383;
var G__50430 = (i__50131_50384 + (1));
seq__50125_50381 = G__50427;
chunk__50129_50382 = G__50428;
count__50130_50383 = G__50429;
i__50131_50384 = G__50430;
continue;
}
} else {
var temp__5753__auto___50431__$1 = cljs.core.seq(seq__50125_50381);
if(temp__5753__auto___50431__$1){
var seq__50125_50432__$1 = temp__5753__auto___50431__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50125_50432__$1)){
var c__4679__auto___50433 = cljs.core.chunk_first(seq__50125_50432__$1);
var G__50434 = cljs.core.chunk_rest(seq__50125_50432__$1);
var G__50435 = c__4679__auto___50433;
var G__50436 = cljs.core.count(c__4679__auto___50433);
var G__50437 = (0);
seq__50125_50381 = G__50434;
chunk__50129_50382 = G__50435;
count__50130_50383 = G__50436;
i__50131_50384 = G__50437;
continue;
} else {
var node_50438 = cljs.core.first(seq__50125_50432__$1);
if(cljs.core.not(node_50438.shadow$old)){
var path_match_50439 = shadow.cljs.devtools.client.browser.match_paths(node_50438.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50439)){
var new_link_50440 = (function (){var G__50168 = node_50438.cloneNode(true);
G__50168.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50439),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__50168;
})();
(node_50438.shadow$old = true);

(new_link_50440.onload = ((function (seq__50125_50381,chunk__50129_50382,count__50130_50383,i__50131_50384,seq__49957,chunk__49959,count__49960,i__49961,new_link_50440,path_match_50439,node_50438,seq__50125_50432__$1,temp__5753__auto___50431__$1,path,seq__49957__$1,temp__5753__auto__,map__49956,map__49956__$1,msg,updates,reload_info){
return (function (e){
var seq__50169_50441 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__50171_50442 = null;
var count__50172_50443 = (0);
var i__50173_50444 = (0);
while(true){
if((i__50173_50444 < count__50172_50443)){
var map__50177_50445 = chunk__50171_50442.cljs$core$IIndexed$_nth$arity$2(null,i__50173_50444);
var map__50177_50446__$1 = cljs.core.__destructure_map(map__50177_50445);
var task_50447 = map__50177_50446__$1;
var fn_str_50448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50177_50446__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50177_50446__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50450 = goog.getObjectByName(fn_str_50448,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50449)].join(''));

(fn_obj_50450.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50450.cljs$core$IFn$_invoke$arity$2(path,new_link_50440) : fn_obj_50450.call(null,path,new_link_50440));


var G__50451 = seq__50169_50441;
var G__50452 = chunk__50171_50442;
var G__50453 = count__50172_50443;
var G__50454 = (i__50173_50444 + (1));
seq__50169_50441 = G__50451;
chunk__50171_50442 = G__50452;
count__50172_50443 = G__50453;
i__50173_50444 = G__50454;
continue;
} else {
var temp__5753__auto___50455__$2 = cljs.core.seq(seq__50169_50441);
if(temp__5753__auto___50455__$2){
var seq__50169_50456__$1 = temp__5753__auto___50455__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50169_50456__$1)){
var c__4679__auto___50457 = cljs.core.chunk_first(seq__50169_50456__$1);
var G__50458 = cljs.core.chunk_rest(seq__50169_50456__$1);
var G__50459 = c__4679__auto___50457;
var G__50460 = cljs.core.count(c__4679__auto___50457);
var G__50461 = (0);
seq__50169_50441 = G__50458;
chunk__50171_50442 = G__50459;
count__50172_50443 = G__50460;
i__50173_50444 = G__50461;
continue;
} else {
var map__50178_50462 = cljs.core.first(seq__50169_50456__$1);
var map__50178_50463__$1 = cljs.core.__destructure_map(map__50178_50462);
var task_50464 = map__50178_50463__$1;
var fn_str_50465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50178_50463__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_50466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50178_50463__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_50467 = goog.getObjectByName(fn_str_50465,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_50466)].join(''));

(fn_obj_50467.cljs$core$IFn$_invoke$arity$2 ? fn_obj_50467.cljs$core$IFn$_invoke$arity$2(path,new_link_50440) : fn_obj_50467.call(null,path,new_link_50440));


var G__50468 = cljs.core.next(seq__50169_50456__$1);
var G__50469 = null;
var G__50470 = (0);
var G__50471 = (0);
seq__50169_50441 = G__50468;
chunk__50171_50442 = G__50469;
count__50172_50443 = G__50470;
i__50173_50444 = G__50471;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_50438);
});})(seq__50125_50381,chunk__50129_50382,count__50130_50383,i__50131_50384,seq__49957,chunk__49959,count__49960,i__49961,new_link_50440,path_match_50439,node_50438,seq__50125_50432__$1,temp__5753__auto___50431__$1,path,seq__49957__$1,temp__5753__auto__,map__49956,map__49956__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50439], 0));

goog.dom.insertSiblingAfter(new_link_50440,node_50438);


var G__50472 = cljs.core.next(seq__50125_50432__$1);
var G__50473 = null;
var G__50474 = (0);
var G__50475 = (0);
seq__50125_50381 = G__50472;
chunk__50129_50382 = G__50473;
count__50130_50383 = G__50474;
i__50131_50384 = G__50475;
continue;
} else {
var G__50476 = cljs.core.next(seq__50125_50432__$1);
var G__50477 = null;
var G__50478 = (0);
var G__50479 = (0);
seq__50125_50381 = G__50476;
chunk__50129_50382 = G__50477;
count__50130_50383 = G__50478;
i__50131_50384 = G__50479;
continue;
}
} else {
var G__50480 = cljs.core.next(seq__50125_50432__$1);
var G__50481 = null;
var G__50482 = (0);
var G__50483 = (0);
seq__50125_50381 = G__50480;
chunk__50129_50382 = G__50481;
count__50130_50383 = G__50482;
i__50131_50384 = G__50483;
continue;
}
}
} else {
}
}
break;
}


var G__50484 = cljs.core.next(seq__49957__$1);
var G__50485 = null;
var G__50486 = (0);
var G__50487 = (0);
seq__49957 = G__50484;
chunk__49959 = G__50485;
count__49960 = G__50486;
i__49961 = G__50487;
continue;
} else {
var G__50488 = cljs.core.next(seq__49957__$1);
var G__50489 = null;
var G__50490 = (0);
var G__50491 = (0);
seq__49957 = G__50488;
chunk__49959 = G__50489;
count__49960 = G__50490;
i__49961 = G__50491;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__50179){
var map__50180 = p__50179;
var map__50180__$1 = cljs.core.__destructure_map(map__50180);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50180__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__50181){
var map__50182 = p__50181;
var map__50182__$1 = cljs.core.__destructure_map(map__50182);
var _ = map__50182__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50182__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50183,done,error){
var map__50184 = p__50183;
var map__50184__$1 = cljs.core.__destructure_map(map__50184);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50184__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__50185,done,error){
var map__50186 = p__50185;
var map__50186__$1 = cljs.core.__destructure_map(map__50186);
var msg = map__50186__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50186__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50186__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50186__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50187){
var map__50188 = p__50187;
var map__50188__$1 = cljs.core.__destructure_map(map__50188);
var src = map__50188__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50188__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__50189 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__50189) : done.call(null,G__50189));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__50190){
var map__50191 = p__50190;
var map__50191__$1 = cljs.core.__destructure_map(map__50191);
var msg__$1 = map__50191__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50191__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e50192){var ex = e50192;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__50193){
var map__50194 = p__50193;
var map__50194__$1 = cljs.core.__destructure_map(map__50194);
var env = map__50194__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50195){
var map__50196 = p__50195;
var map__50196__$1 = cljs.core.__destructure_map(map__50196);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50196__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50196__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__50197){
var map__50198 = p__50197;
var map__50198__$1 = cljs.core.__destructure_map(map__50198);
var svc = map__50198__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50198__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
