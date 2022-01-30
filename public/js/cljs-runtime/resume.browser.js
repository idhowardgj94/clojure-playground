goog.provide('resume.browser');
resume.browser.log = (function resume$browser$log(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46314 = arguments.length;
var i__4865__auto___46316 = (0);
while(true){
if((i__4865__auto___46316 < len__4864__auto___46314)){
args__4870__auto__.push((arguments[i__4865__auto___46316]));

var G__46319 = (i__4865__auto___46316 + (1));
i__4865__auto___46316 = G__46319;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return resume.browser.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(resume.browser.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.log,args);
}));

(resume.browser.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(resume.browser.log.cljs$lang$applyTo = (function (seq46286){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46286));
}));

resume.browser.start = (function resume$browser$start(){
return console.log("start");
});
resume.browser.postcss_cmd = (function (){var os_name = System.getProperty("os.name");
if(cljs.core.truth_(string.includes_QMARK_(os_name,"Windows"))){
return "node_modules/.bin/postcss.cmd";
} else {
return "node_modules/.bin/postcss";
}
})();
resume.browser.init = (function resume$browser$init(){
console.log("init");

resume.browser.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hellog, world"], 0));

return resume.browser.start();
});
resume.browser.stop = (function resume$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=resume.browser.js.map
