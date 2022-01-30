goog.provide('rum.derived_atom');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__40475 = arguments.length;
switch (G__40475) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__40485 = opts;
var map__40485__$1 = cljs.core.__destructure_map(map__40485);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40485__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40485__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__40488 = cljs.core.count(refs);
switch (G__40488) {
case (1):
var vec__40490 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40490,(0),null);
return (function (){
var G__40493 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40493) : f.call(null,G__40493));
});

break;
case (2):
var vec__40494 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40494,(1),null);
return (function (){
var G__40497 = cljs.core.deref(a);
var G__40498 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40497,G__40498) : f.call(null,G__40497,G__40498));
});

break;
case (3):
var vec__40499 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40499,(2),null);
return (function (){
var G__40502 = cljs.core.deref(a);
var G__40503 = cljs.core.deref(b);
var G__40504 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__40502,G__40503,G__40504) : f.call(null,G__40502,G__40503,G__40504));
});

break;
default:
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__40505 = ref;
cljs.core.reset_BANG_(G__40505,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__40505;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?(function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
}):(function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
}));
var seq__40507_40521 = cljs.core.seq(refs);
var chunk__40508_40522 = null;
var count__40509_40523 = (0);
var i__40510_40524 = (0);
while(true){
if((i__40510_40524 < count__40509_40523)){
var ref_40525__$1 = chunk__40508_40522.cljs$core$IIndexed$_nth$arity$2(null,i__40510_40524);
cljs.core.add_watch(ref_40525__$1,key,watch);


var G__40526 = seq__40507_40521;
var G__40527 = chunk__40508_40522;
var G__40528 = count__40509_40523;
var G__40529 = (i__40510_40524 + (1));
seq__40507_40521 = G__40526;
chunk__40508_40522 = G__40527;
count__40509_40523 = G__40528;
i__40510_40524 = G__40529;
continue;
} else {
var temp__5753__auto___40530 = cljs.core.seq(seq__40507_40521);
if(temp__5753__auto___40530){
var seq__40507_40531__$1 = temp__5753__auto___40530;
if(cljs.core.chunked_seq_QMARK_(seq__40507_40531__$1)){
var c__4679__auto___40532 = cljs.core.chunk_first(seq__40507_40531__$1);
var G__40533 = cljs.core.chunk_rest(seq__40507_40531__$1);
var G__40534 = c__4679__auto___40532;
var G__40535 = cljs.core.count(c__4679__auto___40532);
var G__40536 = (0);
seq__40507_40521 = G__40533;
chunk__40508_40522 = G__40534;
count__40509_40523 = G__40535;
i__40510_40524 = G__40536;
continue;
} else {
var ref_40537__$1 = cljs.core.first(seq__40507_40531__$1);
cljs.core.add_watch(ref_40537__$1,key,watch);


var G__40538 = cljs.core.next(seq__40507_40531__$1);
var G__40539 = null;
var G__40540 = (0);
var G__40541 = (0);
seq__40507_40521 = G__40538;
chunk__40508_40522 = G__40539;
count__40509_40523 = G__40540;
i__40510_40524 = G__40541;
continue;
}
} else {
}
}
break;
}

return sink;
}));

(rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=rum.derived_atom.js.map
