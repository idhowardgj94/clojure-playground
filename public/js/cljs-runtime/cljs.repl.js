goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49168){
var map__49169 = p__49168;
var map__49169__$1 = cljs.core.__destructure_map(map__49169);
var m = map__49169__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49169__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49170_49427 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49171_49428 = null;
var count__49172_49429 = (0);
var i__49173_49430 = (0);
while(true){
if((i__49173_49430 < count__49172_49429)){
var f_49431 = chunk__49171_49428.cljs$core$IIndexed$_nth$arity$2(null,i__49173_49430);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49431], 0));


var G__49432 = seq__49170_49427;
var G__49433 = chunk__49171_49428;
var G__49434 = count__49172_49429;
var G__49435 = (i__49173_49430 + (1));
seq__49170_49427 = G__49432;
chunk__49171_49428 = G__49433;
count__49172_49429 = G__49434;
i__49173_49430 = G__49435;
continue;
} else {
var temp__5753__auto___49436 = cljs.core.seq(seq__49170_49427);
if(temp__5753__auto___49436){
var seq__49170_49437__$1 = temp__5753__auto___49436;
if(cljs.core.chunked_seq_QMARK_(seq__49170_49437__$1)){
var c__4679__auto___49438 = cljs.core.chunk_first(seq__49170_49437__$1);
var G__49439 = cljs.core.chunk_rest(seq__49170_49437__$1);
var G__49440 = c__4679__auto___49438;
var G__49441 = cljs.core.count(c__4679__auto___49438);
var G__49442 = (0);
seq__49170_49427 = G__49439;
chunk__49171_49428 = G__49440;
count__49172_49429 = G__49441;
i__49173_49430 = G__49442;
continue;
} else {
var f_49443 = cljs.core.first(seq__49170_49437__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_49443], 0));


var G__49444 = cljs.core.next(seq__49170_49437__$1);
var G__49445 = null;
var G__49446 = (0);
var G__49447 = (0);
seq__49170_49427 = G__49444;
chunk__49171_49428 = G__49445;
count__49172_49429 = G__49446;
i__49173_49430 = G__49447;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49448 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_49448], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_49448)))?cljs.core.second(arglists_49448):arglists_49448)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49182_49453 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49183_49454 = null;
var count__49184_49455 = (0);
var i__49185_49456 = (0);
while(true){
if((i__49185_49456 < count__49184_49455)){
var vec__49196_49457 = chunk__49183_49454.cljs$core$IIndexed$_nth$arity$2(null,i__49185_49456);
var name_49458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49196_49457,(0),null);
var map__49199_49459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49196_49457,(1),null);
var map__49199_49460__$1 = cljs.core.__destructure_map(map__49199_49459);
var doc_49461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49199_49460__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49199_49460__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49458], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49462], 0));

if(cljs.core.truth_(doc_49461)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49461], 0));
} else {
}


var G__49468 = seq__49182_49453;
var G__49469 = chunk__49183_49454;
var G__49470 = count__49184_49455;
var G__49471 = (i__49185_49456 + (1));
seq__49182_49453 = G__49468;
chunk__49183_49454 = G__49469;
count__49184_49455 = G__49470;
i__49185_49456 = G__49471;
continue;
} else {
var temp__5753__auto___49473 = cljs.core.seq(seq__49182_49453);
if(temp__5753__auto___49473){
var seq__49182_49474__$1 = temp__5753__auto___49473;
if(cljs.core.chunked_seq_QMARK_(seq__49182_49474__$1)){
var c__4679__auto___49475 = cljs.core.chunk_first(seq__49182_49474__$1);
var G__49476 = cljs.core.chunk_rest(seq__49182_49474__$1);
var G__49477 = c__4679__auto___49475;
var G__49478 = cljs.core.count(c__4679__auto___49475);
var G__49479 = (0);
seq__49182_49453 = G__49476;
chunk__49183_49454 = G__49477;
count__49184_49455 = G__49478;
i__49185_49456 = G__49479;
continue;
} else {
var vec__49200_49480 = cljs.core.first(seq__49182_49474__$1);
var name_49481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49200_49480,(0),null);
var map__49203_49482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49200_49480,(1),null);
var map__49203_49483__$1 = cljs.core.__destructure_map(map__49203_49482);
var doc_49484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49203_49483__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49203_49483__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_49481], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_49485], 0));

if(cljs.core.truth_(doc_49484)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_49484], 0));
} else {
}


var G__49486 = cljs.core.next(seq__49182_49474__$1);
var G__49487 = null;
var G__49488 = (0);
var G__49489 = (0);
seq__49182_49453 = G__49486;
chunk__49183_49454 = G__49487;
count__49184_49455 = G__49488;
i__49185_49456 = G__49489;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__49206 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49208 = null;
var count__49209 = (0);
var i__49210 = (0);
while(true){
if((i__49210 < count__49209)){
var role = chunk__49208.cljs$core$IIndexed$_nth$arity$2(null,i__49210);
var temp__5753__auto___49490__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49490__$1)){
var spec_49491 = temp__5753__auto___49490__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49491)], 0));
} else {
}


var G__49492 = seq__49206;
var G__49493 = chunk__49208;
var G__49494 = count__49209;
var G__49495 = (i__49210 + (1));
seq__49206 = G__49492;
chunk__49208 = G__49493;
count__49209 = G__49494;
i__49210 = G__49495;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__49206);
if(temp__5753__auto____$1){
var seq__49206__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__49206__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49206__$1);
var G__49496 = cljs.core.chunk_rest(seq__49206__$1);
var G__49497 = c__4679__auto__;
var G__49498 = cljs.core.count(c__4679__auto__);
var G__49499 = (0);
seq__49206 = G__49496;
chunk__49208 = G__49497;
count__49209 = G__49498;
i__49210 = G__49499;
continue;
} else {
var role = cljs.core.first(seq__49206__$1);
var temp__5753__auto___49501__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___49501__$2)){
var spec_49502 = temp__5753__auto___49501__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_49502)], 0));
} else {
}


var G__49503 = cljs.core.next(seq__49206__$1);
var G__49504 = null;
var G__49505 = (0);
var G__49506 = (0);
seq__49206 = G__49503;
chunk__49208 = G__49504;
count__49209 = G__49505;
i__49210 = G__49506;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__49507 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__49508 = cljs.core.ex_cause(t);
via = G__49507;
t = G__49508;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__49305 = datafied_throwable;
var map__49305__$1 = cljs.core.__destructure_map(map__49305);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49305__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49305__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49305__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__49310 = cljs.core.last(via);
var map__49310__$1 = cljs.core.__destructure_map(map__49310);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49310__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49310__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49310__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__49311 = data;
var map__49311__$1 = cljs.core.__destructure_map(map__49311);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49311__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49311__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49311__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__49312 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__49312__$1 = cljs.core.__destructure_map(map__49312);
var top_data = map__49312__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49328 = phase;
var G__49328__$1 = (((G__49328 instanceof cljs.core.Keyword))?G__49328.fqn:null);
switch (G__49328__$1) {
case "read-source":
var map__49329 = data;
var map__49329__$1 = cljs.core.__destructure_map(map__49329);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49329__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49329__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__49331 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__49331__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49331,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49331);
var G__49331__$2 = (cljs.core.truth_((function (){var fexpr__49332 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49332.cljs$core$IFn$_invoke$arity$1 ? fexpr__49332.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49332.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49331__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49331__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49331__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49331__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__49334 = top_data;
var G__49334__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49334,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__49334);
var G__49334__$2 = (cljs.core.truth_((function (){var fexpr__49335 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49335.cljs$core$IFn$_invoke$arity$1 ? fexpr__49335.cljs$core$IFn$_invoke$arity$1(source) : fexpr__49335.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49334__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__49334__$1);
var G__49334__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49334__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49334__$2);
var G__49334__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49334__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49334__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49334__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49334__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__49336 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49336,(3),null);
var G__49340 = top_data;
var G__49340__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49340,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__49340);
var G__49340__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__49340__$1);
var G__49340__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49340__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__49340__$2);
var G__49340__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49340__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__49340__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49340__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__49340__$4;
}

break;
case "execution":
var vec__49342 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49342,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49342,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49342,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49342,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__49294_SHARP_){
var or__4253__auto__ = (p1__49294_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__49348 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__49348.cljs$core$IFn$_invoke$arity$1 ? fexpr__49348.cljs$core$IFn$_invoke$arity$1(p1__49294_SHARP_) : fexpr__49348.call(null,p1__49294_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__49350 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__49350__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49350,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__49350);
var G__49350__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49350__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__49350__$1);
var G__49350__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49350__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__49350__$2);
var G__49350__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49350__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__49350__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49350__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__49350__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49328__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__49357){
var map__49358 = p__49357;
var map__49358__$1 = cljs.core.__destructure_map(map__49358);
var triage_data = map__49358__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49358__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__49374 = phase;
var G__49374__$1 = (((G__49374 instanceof cljs.core.Keyword))?G__49374.fqn:null);
switch (G__49374__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__49382 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__49383 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49384 = loc;
var G__49385 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49389_49534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49390_49535 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49391_49536 = true;
var _STAR_print_fn_STAR__temp_val__49392_49537 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49391_49536);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49392_49537);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49354_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49354_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49390_49535);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49389_49534);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49382,G__49383,G__49384,G__49385) : format.call(null,G__49382,G__49383,G__49384,G__49385));

break;
case "macroexpansion":
var G__49396 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__49397 = cause_type;
var G__49398 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49399 = loc;
var G__49400 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49396,G__49397,G__49398,G__49399,G__49400) : format.call(null,G__49396,G__49397,G__49398,G__49399,G__49400));

break;
case "compile-syntax-check":
var G__49401 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__49402 = cause_type;
var G__49403 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49404 = loc;
var G__49405 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49401,G__49402,G__49403,G__49404,G__49405) : format.call(null,G__49401,G__49402,G__49403,G__49404,G__49405));

break;
case "compilation":
var G__49406 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__49407 = cause_type;
var G__49408 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49409 = loc;
var G__49410 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49406,G__49407,G__49408,G__49409,G__49410) : format.call(null,G__49406,G__49407,G__49408,G__49409,G__49410));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__49411 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__49412 = symbol;
var G__49413 = loc;
var G__49414 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49416_49541 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49417_49542 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49418_49543 = true;
var _STAR_print_fn_STAR__temp_val__49419_49544 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49418_49543);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49419_49544);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49356_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49356_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49417_49542);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49416_49541);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__49411,G__49412,G__49413,G__49414) : format.call(null,G__49411,G__49412,G__49413,G__49414));
} else {
var G__49420 = "Execution error%s at %s(%s).\n%s\n";
var G__49421 = cause_type;
var G__49422 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__49423 = loc;
var G__49424 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__49420,G__49421,G__49422,G__49423,G__49424) : format.call(null,G__49420,G__49421,G__49422,G__49423,G__49424));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49374__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
