goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47999 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47999(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48000 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48000(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46820 = coll;
var G__46821 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46820,G__46821) : shadow.dom.lazy_native_coll_seq.call(null,G__46820,G__46821));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46886 = arguments.length;
switch (G__46886) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46912 = arguments.length;
switch (G__46912) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46930 = arguments.length;
switch (G__46930) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46942 = arguments.length;
switch (G__46942) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46954 = arguments.length;
switch (G__46954) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46976 = arguments.length;
switch (G__46976) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46992){if((e46992 instanceof Object)){
var e = e46992;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46992;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47004 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47005 = null;
var count__47006 = (0);
var i__47007 = (0);
while(true){
if((i__47007 < count__47006)){
var el = chunk__47005.cljs$core$IIndexed$_nth$arity$2(null,i__47007);
var handler_48012__$1 = ((function (seq__47004,chunk__47005,count__47006,i__47007,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47004,chunk__47005,count__47006,i__47007,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48012__$1);


var G__48013 = seq__47004;
var G__48014 = chunk__47005;
var G__48015 = count__47006;
var G__48016 = (i__47007 + (1));
seq__47004 = G__48013;
chunk__47005 = G__48014;
count__47006 = G__48015;
i__47007 = G__48016;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47004);
if(temp__5753__auto__){
var seq__47004__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47004__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47004__$1);
var G__48017 = cljs.core.chunk_rest(seq__47004__$1);
var G__48018 = c__4679__auto__;
var G__48019 = cljs.core.count(c__4679__auto__);
var G__48020 = (0);
seq__47004 = G__48017;
chunk__47005 = G__48018;
count__47006 = G__48019;
i__47007 = G__48020;
continue;
} else {
var el = cljs.core.first(seq__47004__$1);
var handler_48021__$1 = ((function (seq__47004,chunk__47005,count__47006,i__47007,el,seq__47004__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47004,chunk__47005,count__47006,i__47007,el,seq__47004__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48021__$1);


var G__48022 = cljs.core.next(seq__47004__$1);
var G__48023 = null;
var G__48024 = (0);
var G__48025 = (0);
seq__47004 = G__48022;
chunk__47005 = G__48023;
count__47006 = G__48024;
i__47007 = G__48025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47025 = arguments.length;
switch (G__47025) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47030 = cljs.core.seq(events);
var chunk__47031 = null;
var count__47032 = (0);
var i__47033 = (0);
while(true){
if((i__47033 < count__47032)){
var vec__47044 = chunk__47031.cljs$core$IIndexed$_nth$arity$2(null,i__47033);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47044,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48027 = seq__47030;
var G__48028 = chunk__47031;
var G__48029 = count__47032;
var G__48030 = (i__47033 + (1));
seq__47030 = G__48027;
chunk__47031 = G__48028;
count__47032 = G__48029;
i__47033 = G__48030;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47030);
if(temp__5753__auto__){
var seq__47030__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47030__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47030__$1);
var G__48031 = cljs.core.chunk_rest(seq__47030__$1);
var G__48032 = c__4679__auto__;
var G__48033 = cljs.core.count(c__4679__auto__);
var G__48034 = (0);
seq__47030 = G__48031;
chunk__47031 = G__48032;
count__47032 = G__48033;
i__47033 = G__48034;
continue;
} else {
var vec__47050 = cljs.core.first(seq__47030__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47050,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48035 = cljs.core.next(seq__47030__$1);
var G__48036 = null;
var G__48037 = (0);
var G__48038 = (0);
seq__47030 = G__48035;
chunk__47031 = G__48036;
count__47032 = G__48037;
i__47033 = G__48038;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47058 = cljs.core.seq(styles);
var chunk__47059 = null;
var count__47060 = (0);
var i__47061 = (0);
while(true){
if((i__47061 < count__47060)){
var vec__47073 = chunk__47059.cljs$core$IIndexed$_nth$arity$2(null,i__47061);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47073,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47073,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48040 = seq__47058;
var G__48041 = chunk__47059;
var G__48042 = count__47060;
var G__48043 = (i__47061 + (1));
seq__47058 = G__48040;
chunk__47059 = G__48041;
count__47060 = G__48042;
i__47061 = G__48043;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47058);
if(temp__5753__auto__){
var seq__47058__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47058__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47058__$1);
var G__48045 = cljs.core.chunk_rest(seq__47058__$1);
var G__48046 = c__4679__auto__;
var G__48047 = cljs.core.count(c__4679__auto__);
var G__48048 = (0);
seq__47058 = G__48045;
chunk__47059 = G__48046;
count__47060 = G__48047;
i__47061 = G__48048;
continue;
} else {
var vec__47084 = cljs.core.first(seq__47058__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47084,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48049 = cljs.core.next(seq__47058__$1);
var G__48050 = null;
var G__48051 = (0);
var G__48052 = (0);
seq__47058 = G__48049;
chunk__47059 = G__48050;
count__47060 = G__48051;
i__47061 = G__48052;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47096_48053 = key;
var G__47096_48054__$1 = (((G__47096_48053 instanceof cljs.core.Keyword))?G__47096_48053.fqn:null);
switch (G__47096_48054__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48056 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_48056,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_48056,"aria-");
}
})())){
el.setAttribute(ks_48056,value);
} else {
(el[ks_48056] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47152){
var map__47153 = p__47152;
var map__47153__$1 = cljs.core.__destructure_map(map__47153);
var props = map__47153__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47153__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47156 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47156,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47156,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47156,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47163 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47163,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47163;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47168 = arguments.length;
switch (G__47168) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47180){
var vec__47182 = p__47180;
var seq__47183 = cljs.core.seq(vec__47182);
var first__47184 = cljs.core.first(seq__47183);
var seq__47183__$1 = cljs.core.next(seq__47183);
var nn = first__47184;
var first__47184__$1 = cljs.core.first(seq__47183__$1);
var seq__47183__$2 = cljs.core.next(seq__47183__$1);
var np = first__47184__$1;
var nc = seq__47183__$2;
var node = vec__47182;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47187 = nn;
var G__47188 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47187,G__47188) : create_fn.call(null,G__47187,G__47188));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47190 = nn;
var G__47191 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47190,G__47191) : create_fn.call(null,G__47190,G__47191));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47196 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47196,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47196,(1),null);
var seq__47200_48061 = cljs.core.seq(node_children);
var chunk__47201_48062 = null;
var count__47202_48063 = (0);
var i__47203_48064 = (0);
while(true){
if((i__47203_48064 < count__47202_48063)){
var child_struct_48065 = chunk__47201_48062.cljs$core$IIndexed$_nth$arity$2(null,i__47203_48064);
var children_48066 = shadow.dom.dom_node(child_struct_48065);
if(cljs.core.seq_QMARK_(children_48066)){
var seq__47278_48067 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48066));
var chunk__47280_48068 = null;
var count__47281_48069 = (0);
var i__47282_48070 = (0);
while(true){
if((i__47282_48070 < count__47281_48069)){
var child_48071 = chunk__47280_48068.cljs$core$IIndexed$_nth$arity$2(null,i__47282_48070);
if(cljs.core.truth_(child_48071)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48071);


var G__48072 = seq__47278_48067;
var G__48073 = chunk__47280_48068;
var G__48074 = count__47281_48069;
var G__48075 = (i__47282_48070 + (1));
seq__47278_48067 = G__48072;
chunk__47280_48068 = G__48073;
count__47281_48069 = G__48074;
i__47282_48070 = G__48075;
continue;
} else {
var G__48076 = seq__47278_48067;
var G__48077 = chunk__47280_48068;
var G__48078 = count__47281_48069;
var G__48079 = (i__47282_48070 + (1));
seq__47278_48067 = G__48076;
chunk__47280_48068 = G__48077;
count__47281_48069 = G__48078;
i__47282_48070 = G__48079;
continue;
}
} else {
var temp__5753__auto___48081 = cljs.core.seq(seq__47278_48067);
if(temp__5753__auto___48081){
var seq__47278_48082__$1 = temp__5753__auto___48081;
if(cljs.core.chunked_seq_QMARK_(seq__47278_48082__$1)){
var c__4679__auto___48083 = cljs.core.chunk_first(seq__47278_48082__$1);
var G__48084 = cljs.core.chunk_rest(seq__47278_48082__$1);
var G__48085 = c__4679__auto___48083;
var G__48086 = cljs.core.count(c__4679__auto___48083);
var G__48087 = (0);
seq__47278_48067 = G__48084;
chunk__47280_48068 = G__48085;
count__47281_48069 = G__48086;
i__47282_48070 = G__48087;
continue;
} else {
var child_48088 = cljs.core.first(seq__47278_48082__$1);
if(cljs.core.truth_(child_48088)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48088);


var G__48090 = cljs.core.next(seq__47278_48082__$1);
var G__48091 = null;
var G__48092 = (0);
var G__48093 = (0);
seq__47278_48067 = G__48090;
chunk__47280_48068 = G__48091;
count__47281_48069 = G__48092;
i__47282_48070 = G__48093;
continue;
} else {
var G__48094 = cljs.core.next(seq__47278_48082__$1);
var G__48095 = null;
var G__48096 = (0);
var G__48097 = (0);
seq__47278_48067 = G__48094;
chunk__47280_48068 = G__48095;
count__47281_48069 = G__48096;
i__47282_48070 = G__48097;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48066);
}


var G__48098 = seq__47200_48061;
var G__48099 = chunk__47201_48062;
var G__48100 = count__47202_48063;
var G__48101 = (i__47203_48064 + (1));
seq__47200_48061 = G__48098;
chunk__47201_48062 = G__48099;
count__47202_48063 = G__48100;
i__47203_48064 = G__48101;
continue;
} else {
var temp__5753__auto___48102 = cljs.core.seq(seq__47200_48061);
if(temp__5753__auto___48102){
var seq__47200_48103__$1 = temp__5753__auto___48102;
if(cljs.core.chunked_seq_QMARK_(seq__47200_48103__$1)){
var c__4679__auto___48104 = cljs.core.chunk_first(seq__47200_48103__$1);
var G__48105 = cljs.core.chunk_rest(seq__47200_48103__$1);
var G__48106 = c__4679__auto___48104;
var G__48107 = cljs.core.count(c__4679__auto___48104);
var G__48108 = (0);
seq__47200_48061 = G__48105;
chunk__47201_48062 = G__48106;
count__47202_48063 = G__48107;
i__47203_48064 = G__48108;
continue;
} else {
var child_struct_48110 = cljs.core.first(seq__47200_48103__$1);
var children_48111 = shadow.dom.dom_node(child_struct_48110);
if(cljs.core.seq_QMARK_(children_48111)){
var seq__47325_48112 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48111));
var chunk__47327_48113 = null;
var count__47328_48114 = (0);
var i__47329_48115 = (0);
while(true){
if((i__47329_48115 < count__47328_48114)){
var child_48117 = chunk__47327_48113.cljs$core$IIndexed$_nth$arity$2(null,i__47329_48115);
if(cljs.core.truth_(child_48117)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48117);


var G__48118 = seq__47325_48112;
var G__48119 = chunk__47327_48113;
var G__48120 = count__47328_48114;
var G__48121 = (i__47329_48115 + (1));
seq__47325_48112 = G__48118;
chunk__47327_48113 = G__48119;
count__47328_48114 = G__48120;
i__47329_48115 = G__48121;
continue;
} else {
var G__48122 = seq__47325_48112;
var G__48123 = chunk__47327_48113;
var G__48124 = count__47328_48114;
var G__48125 = (i__47329_48115 + (1));
seq__47325_48112 = G__48122;
chunk__47327_48113 = G__48123;
count__47328_48114 = G__48124;
i__47329_48115 = G__48125;
continue;
}
} else {
var temp__5753__auto___48126__$1 = cljs.core.seq(seq__47325_48112);
if(temp__5753__auto___48126__$1){
var seq__47325_48127__$1 = temp__5753__auto___48126__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47325_48127__$1)){
var c__4679__auto___48128 = cljs.core.chunk_first(seq__47325_48127__$1);
var G__48129 = cljs.core.chunk_rest(seq__47325_48127__$1);
var G__48130 = c__4679__auto___48128;
var G__48131 = cljs.core.count(c__4679__auto___48128);
var G__48132 = (0);
seq__47325_48112 = G__48129;
chunk__47327_48113 = G__48130;
count__47328_48114 = G__48131;
i__47329_48115 = G__48132;
continue;
} else {
var child_48133 = cljs.core.first(seq__47325_48127__$1);
if(cljs.core.truth_(child_48133)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48133);


var G__48134 = cljs.core.next(seq__47325_48127__$1);
var G__48135 = null;
var G__48136 = (0);
var G__48137 = (0);
seq__47325_48112 = G__48134;
chunk__47327_48113 = G__48135;
count__47328_48114 = G__48136;
i__47329_48115 = G__48137;
continue;
} else {
var G__48138 = cljs.core.next(seq__47325_48127__$1);
var G__48139 = null;
var G__48140 = (0);
var G__48141 = (0);
seq__47325_48112 = G__48138;
chunk__47327_48113 = G__48139;
count__47328_48114 = G__48140;
i__47329_48115 = G__48141;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48111);
}


var G__48145 = cljs.core.next(seq__47200_48103__$1);
var G__48146 = null;
var G__48147 = (0);
var G__48148 = (0);
seq__47200_48061 = G__48145;
chunk__47201_48062 = G__48146;
count__47202_48063 = G__48147;
i__47203_48064 = G__48148;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47375 = cljs.core.seq(node);
var chunk__47376 = null;
var count__47377 = (0);
var i__47378 = (0);
while(true){
if((i__47378 < count__47377)){
var n = chunk__47376.cljs$core$IIndexed$_nth$arity$2(null,i__47378);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48152 = seq__47375;
var G__48153 = chunk__47376;
var G__48154 = count__47377;
var G__48155 = (i__47378 + (1));
seq__47375 = G__48152;
chunk__47376 = G__48153;
count__47377 = G__48154;
i__47378 = G__48155;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47375);
if(temp__5753__auto__){
var seq__47375__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47375__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47375__$1);
var G__48157 = cljs.core.chunk_rest(seq__47375__$1);
var G__48158 = c__4679__auto__;
var G__48159 = cljs.core.count(c__4679__auto__);
var G__48160 = (0);
seq__47375 = G__48157;
chunk__47376 = G__48158;
count__47377 = G__48159;
i__47378 = G__48160;
continue;
} else {
var n = cljs.core.first(seq__47375__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48163 = cljs.core.next(seq__47375__$1);
var G__48164 = null;
var G__48165 = (0);
var G__48166 = (0);
seq__47375 = G__48163;
chunk__47376 = G__48164;
count__47377 = G__48165;
i__47378 = G__48166;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47391 = arguments.length;
switch (G__47391) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47398 = arguments.length;
switch (G__47398) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47431 = arguments.length;
switch (G__47431) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48177 = arguments.length;
var i__4865__auto___48178 = (0);
while(true){
if((i__4865__auto___48178 < len__4864__auto___48177)){
args__4870__auto__.push((arguments[i__4865__auto___48178]));

var G__48179 = (i__4865__auto___48178 + (1));
i__4865__auto___48178 = G__48179;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47494_48180 = cljs.core.seq(nodes);
var chunk__47495_48181 = null;
var count__47496_48182 = (0);
var i__47497_48183 = (0);
while(true){
if((i__47497_48183 < count__47496_48182)){
var node_48184 = chunk__47495_48181.cljs$core$IIndexed$_nth$arity$2(null,i__47497_48183);
fragment.appendChild(shadow.dom._to_dom(node_48184));


var G__48185 = seq__47494_48180;
var G__48186 = chunk__47495_48181;
var G__48187 = count__47496_48182;
var G__48188 = (i__47497_48183 + (1));
seq__47494_48180 = G__48185;
chunk__47495_48181 = G__48186;
count__47496_48182 = G__48187;
i__47497_48183 = G__48188;
continue;
} else {
var temp__5753__auto___48189 = cljs.core.seq(seq__47494_48180);
if(temp__5753__auto___48189){
var seq__47494_48190__$1 = temp__5753__auto___48189;
if(cljs.core.chunked_seq_QMARK_(seq__47494_48190__$1)){
var c__4679__auto___48191 = cljs.core.chunk_first(seq__47494_48190__$1);
var G__48192 = cljs.core.chunk_rest(seq__47494_48190__$1);
var G__48193 = c__4679__auto___48191;
var G__48194 = cljs.core.count(c__4679__auto___48191);
var G__48195 = (0);
seq__47494_48180 = G__48192;
chunk__47495_48181 = G__48193;
count__47496_48182 = G__48194;
i__47497_48183 = G__48195;
continue;
} else {
var node_48196 = cljs.core.first(seq__47494_48190__$1);
fragment.appendChild(shadow.dom._to_dom(node_48196));


var G__48197 = cljs.core.next(seq__47494_48190__$1);
var G__48198 = null;
var G__48199 = (0);
var G__48200 = (0);
seq__47494_48180 = G__48197;
chunk__47495_48181 = G__48198;
count__47496_48182 = G__48199;
i__47497_48183 = G__48200;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47482){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47482));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47515_48205 = cljs.core.seq(scripts);
var chunk__47516_48206 = null;
var count__47517_48207 = (0);
var i__47518_48208 = (0);
while(true){
if((i__47518_48208 < count__47517_48207)){
var vec__47526_48209 = chunk__47516_48206.cljs$core$IIndexed$_nth$arity$2(null,i__47518_48208);
var script_tag_48210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47526_48209,(0),null);
var script_body_48211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47526_48209,(1),null);
eval(script_body_48211);


var G__48212 = seq__47515_48205;
var G__48213 = chunk__47516_48206;
var G__48214 = count__47517_48207;
var G__48215 = (i__47518_48208 + (1));
seq__47515_48205 = G__48212;
chunk__47516_48206 = G__48213;
count__47517_48207 = G__48214;
i__47518_48208 = G__48215;
continue;
} else {
var temp__5753__auto___48216 = cljs.core.seq(seq__47515_48205);
if(temp__5753__auto___48216){
var seq__47515_48217__$1 = temp__5753__auto___48216;
if(cljs.core.chunked_seq_QMARK_(seq__47515_48217__$1)){
var c__4679__auto___48218 = cljs.core.chunk_first(seq__47515_48217__$1);
var G__48219 = cljs.core.chunk_rest(seq__47515_48217__$1);
var G__48220 = c__4679__auto___48218;
var G__48221 = cljs.core.count(c__4679__auto___48218);
var G__48222 = (0);
seq__47515_48205 = G__48219;
chunk__47516_48206 = G__48220;
count__47517_48207 = G__48221;
i__47518_48208 = G__48222;
continue;
} else {
var vec__47536_48223 = cljs.core.first(seq__47515_48217__$1);
var script_tag_48224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536_48223,(0),null);
var script_body_48225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47536_48223,(1),null);
eval(script_body_48225);


var G__48226 = cljs.core.next(seq__47515_48217__$1);
var G__48227 = null;
var G__48228 = (0);
var G__48229 = (0);
seq__47515_48205 = G__48226;
chunk__47516_48206 = G__48227;
count__47517_48207 = G__48228;
i__47518_48208 = G__48229;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47544){
var vec__47545 = p__47544;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47545,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47545,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47569 = arguments.length;
switch (G__47569) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__47601 = cljs.core.seq(style_keys);
var chunk__47602 = null;
var count__47603 = (0);
var i__47604 = (0);
while(true){
if((i__47604 < count__47603)){
var it = chunk__47602.cljs$core$IIndexed$_nth$arity$2(null,i__47604);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48255 = seq__47601;
var G__48256 = chunk__47602;
var G__48257 = count__47603;
var G__48258 = (i__47604 + (1));
seq__47601 = G__48255;
chunk__47602 = G__48256;
count__47603 = G__48257;
i__47604 = G__48258;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47601);
if(temp__5753__auto__){
var seq__47601__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47601__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47601__$1);
var G__48259 = cljs.core.chunk_rest(seq__47601__$1);
var G__48260 = c__4679__auto__;
var G__48261 = cljs.core.count(c__4679__auto__);
var G__48262 = (0);
seq__47601 = G__48259;
chunk__47602 = G__48260;
count__47603 = G__48261;
i__47604 = G__48262;
continue;
} else {
var it = cljs.core.first(seq__47601__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48271 = cljs.core.next(seq__47601__$1);
var G__48272 = null;
var G__48273 = (0);
var G__48274 = (0);
seq__47601 = G__48271;
chunk__47602 = G__48272;
count__47603 = G__48273;
i__47604 = G__48274;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k47618,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__47629 = k47618;
var G__47629__$1 = (((G__47629 instanceof cljs.core.Keyword))?G__47629.fqn:null);
switch (G__47629__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47618,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__47638){
var vec__47642 = p__47638;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47642,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47642,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47617){
var self__ = this;
var G__47617__$1 = this;
return (new cljs.core.RecordIter((0),G__47617__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47619,other47620){
var self__ = this;
var this47619__$1 = this;
return (((!((other47620 == null)))) && ((((this47619__$1.constructor === other47620.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47619__$1.x,other47620.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47619__$1.y,other47620.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47619__$1.__extmap,other47620.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k47618){
var self__ = this;
var this__4509__auto____$1 = this;
var G__47680 = k47618;
var G__47680__$1 = (((G__47680 instanceof cljs.core.Keyword))?G__47680.fqn:null);
switch (G__47680__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47618);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__47617){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__47684 = cljs.core.keyword_identical_QMARK_;
var expr__47685 = k__4511__auto__;
if(cljs.core.truth_((pred__47684.cljs$core$IFn$_invoke$arity$2 ? pred__47684.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47685) : pred__47684.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47685)))){
return (new shadow.dom.Coordinate(G__47617,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47684.cljs$core$IFn$_invoke$arity$2 ? pred__47684.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47685) : pred__47684.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47685)))){
return (new shadow.dom.Coordinate(self__.x,G__47617,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__47617),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__47617){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47617,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47622){
var extmap__4542__auto__ = (function (){var G__47698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47622,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47622)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47698);
} else {
return G__47698;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47622),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47622),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k47710,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__47717 = k47710;
var G__47717__$1 = (((G__47717 instanceof cljs.core.Keyword))?G__47717.fqn:null);
switch (G__47717__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47710,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__47718){
var vec__47719 = p__47718;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47719,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47719,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47709){
var self__ = this;
var G__47709__$1 = this;
return (new cljs.core.RecordIter((0),G__47709__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47711,other47712){
var self__ = this;
var this47711__$1 = this;
return (((!((other47712 == null)))) && ((((this47711__$1.constructor === other47712.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47711__$1.w,other47712.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47711__$1.h,other47712.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47711__$1.__extmap,other47712.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k47710){
var self__ = this;
var this__4509__auto____$1 = this;
var G__47724 = k47710;
var G__47724__$1 = (((G__47724 instanceof cljs.core.Keyword))?G__47724.fqn:null);
switch (G__47724__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47710);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__47709){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__47725 = cljs.core.keyword_identical_QMARK_;
var expr__47726 = k__4511__auto__;
if(cljs.core.truth_((pred__47725.cljs$core$IFn$_invoke$arity$2 ? pred__47725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47726) : pred__47725.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47726)))){
return (new shadow.dom.Size(G__47709,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47725.cljs$core$IFn$_invoke$arity$2 ? pred__47725.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47726) : pred__47725.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47726)))){
return (new shadow.dom.Size(self__.w,G__47709,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__47709),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__47709){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47709,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47713){
var extmap__4542__auto__ = (function (){var G__47739 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47713,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47713)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47739);
} else {
return G__47739;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47713),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47713),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__48308 = (i + (1));
var G__48309 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48308;
ret = G__48309;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47765){
var vec__47766 = p__47765;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47766,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47777 = arguments.length;
switch (G__47777) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48313 = ps;
var G__48314 = (i + (1));
el__$1 = G__48313;
i = G__48314;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47836 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47836,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47836,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47836,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47841_48322 = cljs.core.seq(props);
var chunk__47842_48323 = null;
var count__47843_48324 = (0);
var i__47844_48325 = (0);
while(true){
if((i__47844_48325 < count__47843_48324)){
var vec__47873_48328 = chunk__47842_48323.cljs$core$IIndexed$_nth$arity$2(null,i__47844_48325);
var k_48329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47873_48328,(0),null);
var v_48330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47873_48328,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48329);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48329),v_48330);


var G__48337 = seq__47841_48322;
var G__48338 = chunk__47842_48323;
var G__48339 = count__47843_48324;
var G__48340 = (i__47844_48325 + (1));
seq__47841_48322 = G__48337;
chunk__47842_48323 = G__48338;
count__47843_48324 = G__48339;
i__47844_48325 = G__48340;
continue;
} else {
var temp__5753__auto___48341 = cljs.core.seq(seq__47841_48322);
if(temp__5753__auto___48341){
var seq__47841_48342__$1 = temp__5753__auto___48341;
if(cljs.core.chunked_seq_QMARK_(seq__47841_48342__$1)){
var c__4679__auto___48343 = cljs.core.chunk_first(seq__47841_48342__$1);
var G__48344 = cljs.core.chunk_rest(seq__47841_48342__$1);
var G__48345 = c__4679__auto___48343;
var G__48346 = cljs.core.count(c__4679__auto___48343);
var G__48347 = (0);
seq__47841_48322 = G__48344;
chunk__47842_48323 = G__48345;
count__47843_48324 = G__48346;
i__47844_48325 = G__48347;
continue;
} else {
var vec__47880_48348 = cljs.core.first(seq__47841_48342__$1);
var k_48349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47880_48348,(0),null);
var v_48350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47880_48348,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48349);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48349),v_48350);


var G__48357 = cljs.core.next(seq__47841_48342__$1);
var G__48358 = null;
var G__48359 = (0);
var G__48360 = (0);
seq__47841_48322 = G__48357;
chunk__47842_48323 = G__48358;
count__47843_48324 = G__48359;
i__47844_48325 = G__48360;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47894 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47894,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47894,(1),null);
var seq__47898_48361 = cljs.core.seq(node_children);
var chunk__47900_48362 = null;
var count__47901_48363 = (0);
var i__47902_48364 = (0);
while(true){
if((i__47902_48364 < count__47901_48363)){
var child_struct_48365 = chunk__47900_48362.cljs$core$IIndexed$_nth$arity$2(null,i__47902_48364);
if((!((child_struct_48365 == null)))){
if(typeof child_struct_48365 === 'string'){
var text_48366 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48366),child_struct_48365].join(''));
} else {
var children_48367 = shadow.dom.svg_node(child_struct_48365);
if(cljs.core.seq_QMARK_(children_48367)){
var seq__47944_48368 = cljs.core.seq(children_48367);
var chunk__47946_48369 = null;
var count__47947_48370 = (0);
var i__47948_48371 = (0);
while(true){
if((i__47948_48371 < count__47947_48370)){
var child_48372 = chunk__47946_48369.cljs$core$IIndexed$_nth$arity$2(null,i__47948_48371);
if(cljs.core.truth_(child_48372)){
node.appendChild(child_48372);


var G__48373 = seq__47944_48368;
var G__48374 = chunk__47946_48369;
var G__48375 = count__47947_48370;
var G__48376 = (i__47948_48371 + (1));
seq__47944_48368 = G__48373;
chunk__47946_48369 = G__48374;
count__47947_48370 = G__48375;
i__47948_48371 = G__48376;
continue;
} else {
var G__48377 = seq__47944_48368;
var G__48378 = chunk__47946_48369;
var G__48379 = count__47947_48370;
var G__48380 = (i__47948_48371 + (1));
seq__47944_48368 = G__48377;
chunk__47946_48369 = G__48378;
count__47947_48370 = G__48379;
i__47948_48371 = G__48380;
continue;
}
} else {
var temp__5753__auto___48381 = cljs.core.seq(seq__47944_48368);
if(temp__5753__auto___48381){
var seq__47944_48382__$1 = temp__5753__auto___48381;
if(cljs.core.chunked_seq_QMARK_(seq__47944_48382__$1)){
var c__4679__auto___48383 = cljs.core.chunk_first(seq__47944_48382__$1);
var G__48384 = cljs.core.chunk_rest(seq__47944_48382__$1);
var G__48385 = c__4679__auto___48383;
var G__48386 = cljs.core.count(c__4679__auto___48383);
var G__48387 = (0);
seq__47944_48368 = G__48384;
chunk__47946_48369 = G__48385;
count__47947_48370 = G__48386;
i__47948_48371 = G__48387;
continue;
} else {
var child_48388 = cljs.core.first(seq__47944_48382__$1);
if(cljs.core.truth_(child_48388)){
node.appendChild(child_48388);


var G__48389 = cljs.core.next(seq__47944_48382__$1);
var G__48390 = null;
var G__48391 = (0);
var G__48392 = (0);
seq__47944_48368 = G__48389;
chunk__47946_48369 = G__48390;
count__47947_48370 = G__48391;
i__47948_48371 = G__48392;
continue;
} else {
var G__48393 = cljs.core.next(seq__47944_48382__$1);
var G__48394 = null;
var G__48395 = (0);
var G__48396 = (0);
seq__47944_48368 = G__48393;
chunk__47946_48369 = G__48394;
count__47947_48370 = G__48395;
i__47948_48371 = G__48396;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48367);
}
}


var G__48397 = seq__47898_48361;
var G__48398 = chunk__47900_48362;
var G__48399 = count__47901_48363;
var G__48400 = (i__47902_48364 + (1));
seq__47898_48361 = G__48397;
chunk__47900_48362 = G__48398;
count__47901_48363 = G__48399;
i__47902_48364 = G__48400;
continue;
} else {
var G__48401 = seq__47898_48361;
var G__48402 = chunk__47900_48362;
var G__48403 = count__47901_48363;
var G__48404 = (i__47902_48364 + (1));
seq__47898_48361 = G__48401;
chunk__47900_48362 = G__48402;
count__47901_48363 = G__48403;
i__47902_48364 = G__48404;
continue;
}
} else {
var temp__5753__auto___48405 = cljs.core.seq(seq__47898_48361);
if(temp__5753__auto___48405){
var seq__47898_48406__$1 = temp__5753__auto___48405;
if(cljs.core.chunked_seq_QMARK_(seq__47898_48406__$1)){
var c__4679__auto___48407 = cljs.core.chunk_first(seq__47898_48406__$1);
var G__48411 = cljs.core.chunk_rest(seq__47898_48406__$1);
var G__48412 = c__4679__auto___48407;
var G__48413 = cljs.core.count(c__4679__auto___48407);
var G__48414 = (0);
seq__47898_48361 = G__48411;
chunk__47900_48362 = G__48412;
count__47901_48363 = G__48413;
i__47902_48364 = G__48414;
continue;
} else {
var child_struct_48415 = cljs.core.first(seq__47898_48406__$1);
if((!((child_struct_48415 == null)))){
if(typeof child_struct_48415 === 'string'){
var text_48416 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48416),child_struct_48415].join(''));
} else {
var children_48417 = shadow.dom.svg_node(child_struct_48415);
if(cljs.core.seq_QMARK_(children_48417)){
var seq__47952_48418 = cljs.core.seq(children_48417);
var chunk__47954_48419 = null;
var count__47955_48420 = (0);
var i__47956_48421 = (0);
while(true){
if((i__47956_48421 < count__47955_48420)){
var child_48422 = chunk__47954_48419.cljs$core$IIndexed$_nth$arity$2(null,i__47956_48421);
if(cljs.core.truth_(child_48422)){
node.appendChild(child_48422);


var G__48423 = seq__47952_48418;
var G__48424 = chunk__47954_48419;
var G__48425 = count__47955_48420;
var G__48426 = (i__47956_48421 + (1));
seq__47952_48418 = G__48423;
chunk__47954_48419 = G__48424;
count__47955_48420 = G__48425;
i__47956_48421 = G__48426;
continue;
} else {
var G__48427 = seq__47952_48418;
var G__48428 = chunk__47954_48419;
var G__48429 = count__47955_48420;
var G__48430 = (i__47956_48421 + (1));
seq__47952_48418 = G__48427;
chunk__47954_48419 = G__48428;
count__47955_48420 = G__48429;
i__47956_48421 = G__48430;
continue;
}
} else {
var temp__5753__auto___48431__$1 = cljs.core.seq(seq__47952_48418);
if(temp__5753__auto___48431__$1){
var seq__47952_48432__$1 = temp__5753__auto___48431__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47952_48432__$1)){
var c__4679__auto___48433 = cljs.core.chunk_first(seq__47952_48432__$1);
var G__48434 = cljs.core.chunk_rest(seq__47952_48432__$1);
var G__48435 = c__4679__auto___48433;
var G__48436 = cljs.core.count(c__4679__auto___48433);
var G__48437 = (0);
seq__47952_48418 = G__48434;
chunk__47954_48419 = G__48435;
count__47955_48420 = G__48436;
i__47956_48421 = G__48437;
continue;
} else {
var child_48438 = cljs.core.first(seq__47952_48432__$1);
if(cljs.core.truth_(child_48438)){
node.appendChild(child_48438);


var G__48439 = cljs.core.next(seq__47952_48432__$1);
var G__48440 = null;
var G__48441 = (0);
var G__48442 = (0);
seq__47952_48418 = G__48439;
chunk__47954_48419 = G__48440;
count__47955_48420 = G__48441;
i__47956_48421 = G__48442;
continue;
} else {
var G__48443 = cljs.core.next(seq__47952_48432__$1);
var G__48444 = null;
var G__48445 = (0);
var G__48446 = (0);
seq__47952_48418 = G__48443;
chunk__47954_48419 = G__48444;
count__47955_48420 = G__48445;
i__47956_48421 = G__48446;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48417);
}
}


var G__48447 = cljs.core.next(seq__47898_48406__$1);
var G__48448 = null;
var G__48449 = (0);
var G__48450 = (0);
seq__47898_48361 = G__48447;
chunk__47900_48362 = G__48448;
count__47901_48363 = G__48449;
i__47902_48364 = G__48450;
continue;
} else {
var G__48451 = cljs.core.next(seq__47898_48406__$1);
var G__48452 = null;
var G__48453 = (0);
var G__48454 = (0);
seq__47898_48361 = G__48451;
chunk__47900_48362 = G__48452;
count__47901_48363 = G__48453;
i__47902_48364 = G__48454;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48458 = arguments.length;
var i__4865__auto___48459 = (0);
while(true){
if((i__4865__auto___48459 < len__4864__auto___48458)){
args__4870__auto__.push((arguments[i__4865__auto___48459]));

var G__48460 = (i__4865__auto___48459 + (1));
i__4865__auto___48459 = G__48460;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47963){
var G__47964 = cljs.core.first(seq47963);
var seq47963__$1 = cljs.core.next(seq47963);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47964,seq47963__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47972 = arguments.length;
switch (G__47972) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__43692__auto___48466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_47980){
var state_val_47981 = (state_47980[(1)]);
if((state_val_47981 === (1))){
var state_47980__$1 = state_47980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47980__$1,(2),once_or_cleanup);
} else {
if((state_val_47981 === (2))){
var inst_47977 = (state_47980[(2)]);
var inst_47978 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47980__$1 = (function (){var statearr_47985 = state_47980;
(statearr_47985[(7)] = inst_47977);

return statearr_47985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47980__$1,inst_47978);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__43427__auto__ = null;
var shadow$dom$state_machine__43427__auto____0 = (function (){
var statearr_47986 = [null,null,null,null,null,null,null,null];
(statearr_47986[(0)] = shadow$dom$state_machine__43427__auto__);

(statearr_47986[(1)] = (1));

return statearr_47986;
});
var shadow$dom$state_machine__43427__auto____1 = (function (state_47980){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_47980);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e47987){var ex__43430__auto__ = e47987;
var statearr_47988_48469 = state_47980;
(statearr_47988_48469[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_47980[(4)]))){
var statearr_47989_48470 = state_47980;
(statearr_47989_48470[(1)] = cljs.core.first((state_47980[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48471 = state_47980;
state_47980 = G__48471;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
shadow$dom$state_machine__43427__auto__ = function(state_47980){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43427__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43427__auto____1.call(this,state_47980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43427__auto____0;
shadow$dom$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43427__auto____1;
return shadow$dom$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_47990 = f__43693__auto__();
(statearr_47990[(6)] = c__43692__auto___48466);

return statearr_47990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
