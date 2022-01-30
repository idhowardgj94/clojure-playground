goog.provide('daiquiri.interpreter');
goog.scope(function(){
  daiquiri.interpreter.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
daiquiri.interpreter.create_element = (function daiquiri$interpreter$create_element(type,attrs,children){
return React.createElement.apply(null,[type,attrs].concat(children));
});
daiquiri.interpreter.component_attributes = (function daiquiri$interpreter$component_attributes(attrs){
var x = daiquiri.util.camel_case_keys_STAR_(attrs);
var m = ({});
var seq__40556_40589 = cljs.core.seq(x);
var chunk__40557_40590 = null;
var count__40558_40591 = (0);
var i__40559_40592 = (0);
while(true){
if((i__40559_40592 < count__40558_40591)){
var vec__40566_40593 = chunk__40557_40590.cljs$core$IIndexed$_nth$arity$2(null,i__40559_40592);
var k_40594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40566_40593,(0),null);
var v_40595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40566_40593,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_40594),v_40595);


var G__40596 = seq__40556_40589;
var G__40597 = chunk__40557_40590;
var G__40598 = count__40558_40591;
var G__40599 = (i__40559_40592 + (1));
seq__40556_40589 = G__40596;
chunk__40557_40590 = G__40597;
count__40558_40591 = G__40598;
i__40559_40592 = G__40599;
continue;
} else {
var temp__5753__auto___40600 = cljs.core.seq(seq__40556_40589);
if(temp__5753__auto___40600){
var seq__40556_40601__$1 = temp__5753__auto___40600;
if(cljs.core.chunked_seq_QMARK_(seq__40556_40601__$1)){
var c__4679__auto___40602 = cljs.core.chunk_first(seq__40556_40601__$1);
var G__40603 = cljs.core.chunk_rest(seq__40556_40601__$1);
var G__40604 = c__4679__auto___40602;
var G__40605 = cljs.core.count(c__4679__auto___40602);
var G__40606 = (0);
seq__40556_40589 = G__40603;
chunk__40557_40590 = G__40604;
count__40558_40591 = G__40605;
i__40559_40592 = G__40606;
continue;
} else {
var vec__40569_40607 = cljs.core.first(seq__40556_40601__$1);
var k_40608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40569_40607,(0),null);
var v_40609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40569_40607,(1),null);
daiquiri.interpreter.goog$module$goog$object.set(m,cljs.core.name(k_40608),v_40609);


var G__40610 = cljs.core.next(seq__40556_40601__$1);
var G__40611 = null;
var G__40612 = (0);
var G__40613 = (0);
seq__40556_40589 = G__40610;
chunk__40557_40590 = G__40611;
count__40558_40591 = G__40612;
i__40559_40592 = G__40613;
continue;
}
} else {
}
}
break;
}

return m;
});
daiquiri.interpreter.element_attributes = (function daiquiri$interpreter$element_attributes(attrs){
var temp__5753__auto__ = cljs.core.clj__GT_js(daiquiri.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5753__auto__)){
var js_attrs = temp__5753__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(js_attrs.onChange)){
(js_attrs.onChange = rum.core.mark_sync_update(js_attrs.onChange));
} else {
}

if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
(js_attrs.className = class$__$1);
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
daiquiri.interpreter.interpret_seq = (function daiquiri$interpreter$interpret_seq(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x__$1){
ret.push((daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1 ? daiquiri.interpreter.interpret.cljs$core$IFn$_invoke$arity$1(x__$1) : daiquiri.interpreter.interpret.call(null,x__$1)));

return ret;
}),[],x);
});
/**
 * Render an element vector as a HTML element.
 */
daiquiri.interpreter.element = (function daiquiri$interpreter$element(element){
var vec__40572 = daiquiri.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40572,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40572,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40572,(2),null);
return daiquiri.interpreter.create_element(type,daiquiri.interpreter.element_attributes(attrs),daiquiri.interpreter.interpret_seq(content));
});
daiquiri.interpreter.fragment = (function daiquiri$interpreter$fragment(p__40575){
var vec__40576 = p__40575;
var seq__40577 = cljs.core.seq(vec__40576);
var first__40578 = cljs.core.first(seq__40577);
var seq__40577__$1 = cljs.core.next(seq__40577);
var _ = first__40578;
var first__40578__$1 = cljs.core.first(seq__40577__$1);
var seq__40577__$2 = cljs.core.next(seq__40577__$1);
var attrs = first__40578__$1;
var children = seq__40577__$2;
var vec__40579 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579,(1),null);
return daiquiri.interpreter.create_element(React.Fragment,attrs__$1,children__$1);
});
daiquiri.interpreter.interop = (function daiquiri$interpreter$interop(p__40582){
var vec__40583 = p__40582;
var seq__40584 = cljs.core.seq(vec__40583);
var first__40585 = cljs.core.first(seq__40584);
var seq__40584__$1 = cljs.core.next(seq__40584);
var _ = first__40585;
var first__40585__$1 = cljs.core.first(seq__40584__$1);
var seq__40584__$2 = cljs.core.next(seq__40584__$1);
var component = first__40585__$1;
var first__40585__$2 = cljs.core.first(seq__40584__$2);
var seq__40584__$3 = cljs.core.next(seq__40584__$2);
var attrs = first__40585__$2;
var children = seq__40584__$3;
var vec__40586 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [daiquiri.interpreter.component_attributes(attrs),daiquiri.interpreter.interpret_seq(children)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,daiquiri.interpreter.interpret_seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs], null),children))], null));
var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40586,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40586,(1),null);
return daiquiri.interpreter.create_element(component,attrs__$1,children__$1);
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
daiquiri.interpreter.interpret_vec = (function daiquiri$interpreter$interpret_vec(x){
if(daiquiri.util.fragment_QMARK_(x)){
return daiquiri.interpreter.fragment(x);
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,">",">",-555517146),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(x,(0),null))){
return daiquiri.interpreter.interop(x);
} else {
if(daiquiri.util.element_QMARK_(x)){
return daiquiri.interpreter.element(x);
} else {
return daiquiri.interpreter.interpret_seq(x);

}
}
}
});
daiquiri.interpreter.interpret = (function daiquiri$interpreter$interpret(v){
if(cljs.core.vector_QMARK_(v)){
return daiquiri.interpreter.interpret_vec(v);
} else {
if(cljs.core.seq_QMARK_(v)){
return daiquiri.interpreter.interpret_seq(v);
} else {
return v;

}
}
});

//# sourceMappingURL=daiquiri.interpreter.js.map
