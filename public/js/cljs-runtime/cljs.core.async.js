goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43788 = arguments.length;
switch (G__43788) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43790 = (function (f,blockable,meta43791){
this.f = f;
this.blockable = blockable;
this.meta43791 = meta43791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43792,meta43791__$1){
var self__ = this;
var _43792__$1 = this;
return (new cljs.core.async.t_cljs$core$async43790(self__.f,self__.blockable,meta43791__$1));
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43792){
var self__ = this;
var _43792__$1 = this;
return self__.meta43791;
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43791","meta43791",1828307617,null)], null);
}));

(cljs.core.async.t_cljs$core$async43790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43790");

(cljs.core.async.t_cljs$core$async43790.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43790.
 */
cljs.core.async.__GT_t_cljs$core$async43790 = (function cljs$core$async$__GT_t_cljs$core$async43790(f__$1,blockable__$1,meta43791){
return (new cljs.core.async.t_cljs$core$async43790(f__$1,blockable__$1,meta43791));
});

}

return (new cljs.core.async.t_cljs$core$async43790(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43804 = arguments.length;
switch (G__43804) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43822 = arguments.length;
switch (G__43822) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43853 = arguments.length;
switch (G__43853) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46800 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46800) : fn1.call(null,val_46800));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46800) : fn1.call(null,val_46800));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43857 = arguments.length;
switch (G__43857) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___46817 = n;
var x_46818 = (0);
while(true){
if((x_46818 < n__4741__auto___46817)){
(a[x_46818] = x_46818);

var G__46819 = (x_46818 + (1));
x_46818 = G__46819;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43862 = (function (flag,meta43863){
this.flag = flag;
this.meta43863 = meta43863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43864,meta43863__$1){
var self__ = this;
var _43864__$1 = this;
return (new cljs.core.async.t_cljs$core$async43862(self__.flag,meta43863__$1));
}));

(cljs.core.async.t_cljs$core$async43862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43864){
var self__ = this;
var _43864__$1 = this;
return self__.meta43863;
}));

(cljs.core.async.t_cljs$core$async43862.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43862.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43863","meta43863",284716807,null)], null);
}));

(cljs.core.async.t_cljs$core$async43862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43862");

(cljs.core.async.t_cljs$core$async43862.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43862.
 */
cljs.core.async.__GT_t_cljs$core$async43862 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43862(flag__$1,meta43863){
return (new cljs.core.async.t_cljs$core$async43862(flag__$1,meta43863));
});

}

return (new cljs.core.async.t_cljs$core$async43862(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43876 = (function (flag,cb,meta43877){
this.flag = flag;
this.cb = cb;
this.meta43877 = meta43877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43878,meta43877__$1){
var self__ = this;
var _43878__$1 = this;
return (new cljs.core.async.t_cljs$core$async43876(self__.flag,self__.cb,meta43877__$1));
}));

(cljs.core.async.t_cljs$core$async43876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43878){
var self__ = this;
var _43878__$1 = this;
return self__.meta43877;
}));

(cljs.core.async.t_cljs$core$async43876.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43876.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43877","meta43877",461335792,null)], null);
}));

(cljs.core.async.t_cljs$core$async43876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43876");

(cljs.core.async.t_cljs$core$async43876.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43876.
 */
cljs.core.async.__GT_t_cljs$core$async43876 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43876(flag__$1,cb__$1,meta43877){
return (new cljs.core.async.t_cljs$core$async43876(flag__$1,cb__$1,meta43877));
});

}

return (new cljs.core.async.t_cljs$core$async43876(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43880_SHARP_){
var G__43882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43880_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43882) : fret.call(null,G__43882));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43881_SHARP_){
var G__43883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43881_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43883) : fret.call(null,G__43883));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46848 = (i + (1));
i = G__46848;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46856 = arguments.length;
var i__4865__auto___46858 = (0);
while(true){
if((i__4865__auto___46858 < len__4864__auto___46856)){
args__4870__auto__.push((arguments[i__4865__auto___46858]));

var G__46859 = (i__4865__auto___46858 + (1));
i__4865__auto___46858 = G__46859;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43902){
var map__43904 = p__43902;
var map__43904__$1 = cljs.core.__destructure_map(map__43904);
var opts = map__43904__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43895){
var G__43896 = cljs.core.first(seq43895);
var seq43895__$1 = cljs.core.next(seq43895);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43896,seq43895__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43910 = arguments.length;
switch (G__43910) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43692__auto___46881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_43947){
var state_val_43948 = (state_43947[(1)]);
if((state_val_43948 === (7))){
var inst_43939 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
var statearr_43953_46887 = state_43947__$1;
(statearr_43953_46887[(2)] = inst_43939);

(statearr_43953_46887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (1))){
var state_43947__$1 = state_43947;
var statearr_43954_46888 = state_43947__$1;
(statearr_43954_46888[(2)] = null);

(statearr_43954_46888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (4))){
var inst_43919 = (state_43947[(7)]);
var inst_43919__$1 = (state_43947[(2)]);
var inst_43923 = (inst_43919__$1 == null);
var state_43947__$1 = (function (){var statearr_43955 = state_43947;
(statearr_43955[(7)] = inst_43919__$1);

return statearr_43955;
})();
if(cljs.core.truth_(inst_43923)){
var statearr_43956_46894 = state_43947__$1;
(statearr_43956_46894[(1)] = (5));

} else {
var statearr_43957_46895 = state_43947__$1;
(statearr_43957_46895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (13))){
var state_43947__$1 = state_43947;
var statearr_43966_46896 = state_43947__$1;
(statearr_43966_46896[(2)] = null);

(statearr_43966_46896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (6))){
var inst_43919 = (state_43947[(7)]);
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43947__$1,(11),to,inst_43919);
} else {
if((state_val_43948 === (3))){
var inst_43941 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43947__$1,inst_43941);
} else {
if((state_val_43948 === (12))){
var state_43947__$1 = state_43947;
var statearr_43977_46902 = state_43947__$1;
(statearr_43977_46902[(2)] = null);

(statearr_43977_46902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (2))){
var state_43947__$1 = state_43947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43947__$1,(4),from);
} else {
if((state_val_43948 === (11))){
var inst_43932 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
if(cljs.core.truth_(inst_43932)){
var statearr_43978_46905 = state_43947__$1;
(statearr_43978_46905[(1)] = (12));

} else {
var statearr_43979_46906 = state_43947__$1;
(statearr_43979_46906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (9))){
var state_43947__$1 = state_43947;
var statearr_43984_46907 = state_43947__$1;
(statearr_43984_46907[(2)] = null);

(statearr_43984_46907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (5))){
var state_43947__$1 = state_43947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43990_46908 = state_43947__$1;
(statearr_43990_46908[(1)] = (8));

} else {
var statearr_43991_46910 = state_43947__$1;
(statearr_43991_46910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (14))){
var inst_43937 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
var statearr_43992_46911 = state_43947__$1;
(statearr_43992_46911[(2)] = inst_43937);

(statearr_43992_46911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (10))){
var inst_43929 = (state_43947[(2)]);
var state_43947__$1 = state_43947;
var statearr_43993_46913 = state_43947__$1;
(statearr_43993_46913[(2)] = inst_43929);

(statearr_43993_46913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43948 === (8))){
var inst_43926 = cljs.core.async.close_BANG_(to);
var state_43947__$1 = state_43947;
var statearr_43996_46914 = state_43947__$1;
(statearr_43996_46914[(2)] = inst_43926);

(statearr_43996_46914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_43999 = [null,null,null,null,null,null,null,null];
(statearr_43999[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_43999[(1)] = (1));

return statearr_43999;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_43947){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_43947);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44000){var ex__43430__auto__ = e44000;
var statearr_44001_46918 = state_43947;
(statearr_44001_46918[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_43947[(4)]))){
var statearr_44002_46923 = state_43947;
(statearr_44002_46923[(1)] = cljs.core.first((state_43947[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46924 = state_43947;
state_43947 = G__46924;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_43947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_43947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44003 = f__43693__auto__();
(statearr_44003[(6)] = c__43692__auto___46881);

return statearr_44003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__44025){
var vec__44027 = p__44025;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44027,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44027,(1),null);
var job = vec__44027;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43692__auto___46931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44041){
var state_val_44042 = (state_44041[(1)]);
if((state_val_44042 === (1))){
var state_44041__$1 = state_44041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44041__$1,(2),res,v);
} else {
if((state_val_44042 === (2))){
var inst_44037 = (state_44041[(2)]);
var inst_44038 = cljs.core.async.close_BANG_(res);
var state_44041__$1 = (function (){var statearr_44047 = state_44041;
(statearr_44047[(7)] = inst_44037);

return statearr_44047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44041__$1,inst_44038);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0 = (function (){
var statearr_44056 = [null,null,null,null,null,null,null,null];
(statearr_44056[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__);

(statearr_44056[(1)] = (1));

return statearr_44056;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1 = (function (state_44041){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44041);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44057){var ex__43430__auto__ = e44057;
var statearr_44064_46934 = state_44041;
(statearr_44064_46934[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44041[(4)]))){
var statearr_44065_46935 = state_44041;
(statearr_44065_46935[(1)] = cljs.core.first((state_44041[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46936 = state_44041;
state_44041 = G__46936;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = function(state_44041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1.call(this,state_44041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44067 = f__43693__auto__();
(statearr_44067[(6)] = c__43692__auto___46931);

return statearr_44067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44069){
var vec__44070 = p__44069;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44070,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44070,(1),null);
var job = vec__44070;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___46938 = n;
var __46939 = (0);
while(true){
if((__46939 < n__4741__auto___46938)){
var G__44073_46940 = type;
var G__44073_46941__$1 = (((G__44073_46940 instanceof cljs.core.Keyword))?G__44073_46940.fqn:null);
switch (G__44073_46941__$1) {
case "compute":
var c__43692__auto___46944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46939,c__43692__auto___46944,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async){
return (function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = ((function (__46939,c__43692__auto___46944,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async){
return (function (state_44100){
var state_val_44101 = (state_44100[(1)]);
if((state_val_44101 === (1))){
var state_44100__$1 = state_44100;
var statearr_44104_46945 = state_44100__$1;
(statearr_44104_46945[(2)] = null);

(statearr_44104_46945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (2))){
var state_44100__$1 = state_44100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44100__$1,(4),jobs);
} else {
if((state_val_44101 === (3))){
var inst_44098 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44100__$1,inst_44098);
} else {
if((state_val_44101 === (4))){
var inst_44090 = (state_44100[(2)]);
var inst_44091 = process(inst_44090);
var state_44100__$1 = state_44100;
if(cljs.core.truth_(inst_44091)){
var statearr_44105_46946 = state_44100__$1;
(statearr_44105_46946[(1)] = (5));

} else {
var statearr_44107_46947 = state_44100__$1;
(statearr_44107_46947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (5))){
var state_44100__$1 = state_44100;
var statearr_44108_46948 = state_44100__$1;
(statearr_44108_46948[(2)] = null);

(statearr_44108_46948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (6))){
var state_44100__$1 = state_44100;
var statearr_44110_46949 = state_44100__$1;
(statearr_44110_46949[(2)] = null);

(statearr_44110_46949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44101 === (7))){
var inst_44096 = (state_44100[(2)]);
var state_44100__$1 = state_44100;
var statearr_44112_46950 = state_44100__$1;
(statearr_44112_46950[(2)] = inst_44096);

(statearr_44112_46950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46939,c__43692__auto___46944,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async))
;
return ((function (__46939,switch__43426__auto__,c__43692__auto___46944,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0 = (function (){
var statearr_44115 = [null,null,null,null,null,null,null];
(statearr_44115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__);

(statearr_44115[(1)] = (1));

return statearr_44115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1 = (function (state_44100){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44100);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44116){var ex__43430__auto__ = e44116;
var statearr_44117_46951 = state_44100;
(statearr_44117_46951[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44100[(4)]))){
var statearr_44118_46953 = state_44100;
(statearr_44118_46953[(1)] = cljs.core.first((state_44100[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46955 = state_44100;
state_44100 = G__46955;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = function(state_44100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1.call(this,state_44100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__;
})()
;})(__46939,switch__43426__auto__,c__43692__auto___46944,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async))
})();
var state__43694__auto__ = (function (){var statearr_44119 = f__43693__auto__();
(statearr_44119[(6)] = c__43692__auto___46944);

return statearr_44119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
});})(__46939,c__43692__auto___46944,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async))
);


break;
case "async":
var c__43692__auto___46957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46939,c__43692__auto___46957,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async){
return (function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = ((function (__46939,c__43692__auto___46957,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async){
return (function (state_44135){
var state_val_44136 = (state_44135[(1)]);
if((state_val_44136 === (1))){
var state_44135__$1 = state_44135;
var statearr_44139_46959 = state_44135__$1;
(statearr_44139_46959[(2)] = null);

(statearr_44139_46959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (2))){
var state_44135__$1 = state_44135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44135__$1,(4),jobs);
} else {
if((state_val_44136 === (3))){
var inst_44133 = (state_44135[(2)]);
var state_44135__$1 = state_44135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44135__$1,inst_44133);
} else {
if((state_val_44136 === (4))){
var inst_44125 = (state_44135[(2)]);
var inst_44126 = async(inst_44125);
var state_44135__$1 = state_44135;
if(cljs.core.truth_(inst_44126)){
var statearr_44147_46960 = state_44135__$1;
(statearr_44147_46960[(1)] = (5));

} else {
var statearr_44148_46961 = state_44135__$1;
(statearr_44148_46961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (5))){
var state_44135__$1 = state_44135;
var statearr_44149_46962 = state_44135__$1;
(statearr_44149_46962[(2)] = null);

(statearr_44149_46962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (6))){
var state_44135__$1 = state_44135;
var statearr_44153_46963 = state_44135__$1;
(statearr_44153_46963[(2)] = null);

(statearr_44153_46963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44136 === (7))){
var inst_44131 = (state_44135[(2)]);
var state_44135__$1 = state_44135;
var statearr_44154_46965 = state_44135__$1;
(statearr_44154_46965[(2)] = inst_44131);

(statearr_44154_46965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46939,c__43692__auto___46957,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async))
;
return ((function (__46939,switch__43426__auto__,c__43692__auto___46957,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0 = (function (){
var statearr_44159 = [null,null,null,null,null,null,null];
(statearr_44159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__);

(statearr_44159[(1)] = (1));

return statearr_44159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1 = (function (state_44135){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44135);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44163){var ex__43430__auto__ = e44163;
var statearr_44172_46966 = state_44135;
(statearr_44172_46966[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44135[(4)]))){
var statearr_44175_46967 = state_44135;
(statearr_44175_46967[(1)] = cljs.core.first((state_44135[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46968 = state_44135;
state_44135 = G__46968;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = function(state_44135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1.call(this,state_44135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__;
})()
;})(__46939,switch__43426__auto__,c__43692__auto___46957,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async))
})();
var state__43694__auto__ = (function (){var statearr_44181 = f__43693__auto__();
(statearr_44181[(6)] = c__43692__auto___46957);

return statearr_44181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
});})(__46939,c__43692__auto___46957,G__44073_46940,G__44073_46941__$1,n__4741__auto___46938,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44073_46941__$1)].join('')));

}

var G__46970 = (__46939 + (1));
__46939 = G__46970;
continue;
} else {
}
break;
}

var c__43692__auto___46975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44203){
var state_val_44204 = (state_44203[(1)]);
if((state_val_44204 === (7))){
var inst_44199 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
var statearr_44215_46977 = state_44203__$1;
(statearr_44215_46977[(2)] = inst_44199);

(statearr_44215_46977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (1))){
var state_44203__$1 = state_44203;
var statearr_44217_46982 = state_44203__$1;
(statearr_44217_46982[(2)] = null);

(statearr_44217_46982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (4))){
var inst_44184 = (state_44203[(7)]);
var inst_44184__$1 = (state_44203[(2)]);
var inst_44185 = (inst_44184__$1 == null);
var state_44203__$1 = (function (){var statearr_44224 = state_44203;
(statearr_44224[(7)] = inst_44184__$1);

return statearr_44224;
})();
if(cljs.core.truth_(inst_44185)){
var statearr_44225_46987 = state_44203__$1;
(statearr_44225_46987[(1)] = (5));

} else {
var statearr_44226_46988 = state_44203__$1;
(statearr_44226_46988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (6))){
var inst_44184 = (state_44203[(7)]);
var inst_44189 = (state_44203[(8)]);
var inst_44189__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44191 = [inst_44184,inst_44189__$1];
var inst_44192 = (new cljs.core.PersistentVector(null,2,(5),inst_44190,inst_44191,null));
var state_44203__$1 = (function (){var statearr_44227 = state_44203;
(statearr_44227[(8)] = inst_44189__$1);

return statearr_44227;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44203__$1,(8),jobs,inst_44192);
} else {
if((state_val_44204 === (3))){
var inst_44201 = (state_44203[(2)]);
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44203__$1,inst_44201);
} else {
if((state_val_44204 === (2))){
var state_44203__$1 = state_44203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44203__$1,(4),from);
} else {
if((state_val_44204 === (9))){
var inst_44196 = (state_44203[(2)]);
var state_44203__$1 = (function (){var statearr_44228 = state_44203;
(statearr_44228[(9)] = inst_44196);

return statearr_44228;
})();
var statearr_44229_46990 = state_44203__$1;
(statearr_44229_46990[(2)] = null);

(statearr_44229_46990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (5))){
var inst_44187 = cljs.core.async.close_BANG_(jobs);
var state_44203__$1 = state_44203;
var statearr_44230_46991 = state_44203__$1;
(statearr_44230_46991[(2)] = inst_44187);

(statearr_44230_46991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44204 === (8))){
var inst_44189 = (state_44203[(8)]);
var inst_44194 = (state_44203[(2)]);
var state_44203__$1 = (function (){var statearr_44231 = state_44203;
(statearr_44231[(10)] = inst_44194);

return statearr_44231;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44203__$1,(9),results,inst_44189);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0 = (function (){
var statearr_44233 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__);

(statearr_44233[(1)] = (1));

return statearr_44233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1 = (function (state_44203){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44203);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44241){var ex__43430__auto__ = e44241;
var statearr_44242_46993 = state_44203;
(statearr_44242_46993[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44203[(4)]))){
var statearr_44243_46994 = state_44203;
(statearr_44243_46994[(1)] = cljs.core.first((state_44203[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46995 = state_44203;
state_44203 = G__46995;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = function(state_44203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1.call(this,state_44203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44244 = f__43693__auto__();
(statearr_44244[(6)] = c__43692__auto___46975);

return statearr_44244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


var c__43692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44284){
var state_val_44285 = (state_44284[(1)]);
if((state_val_44285 === (7))){
var inst_44280 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44296_46996 = state_44284__$1;
(statearr_44296_46996[(2)] = inst_44280);

(statearr_44296_46996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (20))){
var state_44284__$1 = state_44284;
var statearr_44297_46998 = state_44284__$1;
(statearr_44297_46998[(2)] = null);

(statearr_44297_46998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (1))){
var state_44284__$1 = state_44284;
var statearr_44298_46999 = state_44284__$1;
(statearr_44298_46999[(2)] = null);

(statearr_44298_46999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (4))){
var inst_44249 = (state_44284[(7)]);
var inst_44249__$1 = (state_44284[(2)]);
var inst_44250 = (inst_44249__$1 == null);
var state_44284__$1 = (function (){var statearr_44299 = state_44284;
(statearr_44299[(7)] = inst_44249__$1);

return statearr_44299;
})();
if(cljs.core.truth_(inst_44250)){
var statearr_44300_47001 = state_44284__$1;
(statearr_44300_47001[(1)] = (5));

} else {
var statearr_44301_47002 = state_44284__$1;
(statearr_44301_47002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (15))){
var inst_44262 = (state_44284[(8)]);
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44284__$1,(18),to,inst_44262);
} else {
if((state_val_44285 === (21))){
var inst_44275 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44302_47003 = state_44284__$1;
(statearr_44302_47003[(2)] = inst_44275);

(statearr_44302_47003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (13))){
var inst_44277 = (state_44284[(2)]);
var state_44284__$1 = (function (){var statearr_44303 = state_44284;
(statearr_44303[(9)] = inst_44277);

return statearr_44303;
})();
var statearr_44304_47008 = state_44284__$1;
(statearr_44304_47008[(2)] = null);

(statearr_44304_47008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (6))){
var inst_44249 = (state_44284[(7)]);
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44284__$1,(11),inst_44249);
} else {
if((state_val_44285 === (17))){
var inst_44270 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
if(cljs.core.truth_(inst_44270)){
var statearr_44307_47009 = state_44284__$1;
(statearr_44307_47009[(1)] = (19));

} else {
var statearr_44308_47010 = state_44284__$1;
(statearr_44308_47010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (3))){
var inst_44282 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44284__$1,inst_44282);
} else {
if((state_val_44285 === (12))){
var inst_44259 = (state_44284[(10)]);
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44284__$1,(14),inst_44259);
} else {
if((state_val_44285 === (2))){
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44284__$1,(4),results);
} else {
if((state_val_44285 === (19))){
var state_44284__$1 = state_44284;
var statearr_44313_47011 = state_44284__$1;
(statearr_44313_47011[(2)] = null);

(statearr_44313_47011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (11))){
var inst_44259 = (state_44284[(2)]);
var state_44284__$1 = (function (){var statearr_44315 = state_44284;
(statearr_44315[(10)] = inst_44259);

return statearr_44315;
})();
var statearr_44316_47014 = state_44284__$1;
(statearr_44316_47014[(2)] = null);

(statearr_44316_47014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (9))){
var state_44284__$1 = state_44284;
var statearr_44317_47015 = state_44284__$1;
(statearr_44317_47015[(2)] = null);

(statearr_44317_47015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (5))){
var state_44284__$1 = state_44284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44318_47016 = state_44284__$1;
(statearr_44318_47016[(1)] = (8));

} else {
var statearr_44319_47017 = state_44284__$1;
(statearr_44319_47017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (14))){
var inst_44264 = (state_44284[(11)]);
var inst_44262 = (state_44284[(8)]);
var inst_44262__$1 = (state_44284[(2)]);
var inst_44263 = (inst_44262__$1 == null);
var inst_44264__$1 = cljs.core.not(inst_44263);
var state_44284__$1 = (function (){var statearr_44320 = state_44284;
(statearr_44320[(11)] = inst_44264__$1);

(statearr_44320[(8)] = inst_44262__$1);

return statearr_44320;
})();
if(inst_44264__$1){
var statearr_44321_47018 = state_44284__$1;
(statearr_44321_47018[(1)] = (15));

} else {
var statearr_44322_47019 = state_44284__$1;
(statearr_44322_47019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (16))){
var inst_44264 = (state_44284[(11)]);
var state_44284__$1 = state_44284;
var statearr_44323_47020 = state_44284__$1;
(statearr_44323_47020[(2)] = inst_44264);

(statearr_44323_47020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (10))){
var inst_44256 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44324_47021 = state_44284__$1;
(statearr_44324_47021[(2)] = inst_44256);

(statearr_44324_47021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (18))){
var inst_44267 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44326_47022 = state_44284__$1;
(statearr_44326_47022[(2)] = inst_44267);

(statearr_44326_47022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (8))){
var inst_44253 = cljs.core.async.close_BANG_(to);
var state_44284__$1 = state_44284;
var statearr_44331_47023 = state_44284__$1;
(statearr_44331_47023[(2)] = inst_44253);

(statearr_44331_47023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0 = (function (){
var statearr_44333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__);

(statearr_44333[(1)] = (1));

return statearr_44333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1 = (function (state_44284){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44284);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44335){var ex__43430__auto__ = e44335;
var statearr_44336_47026 = state_44284;
(statearr_44336_47026[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44284[(4)]))){
var statearr_44337_47027 = state_44284;
(statearr_44337_47027[(1)] = cljs.core.first((state_44284[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47028 = state_44284;
state_44284 = G__47028;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__ = function(state_44284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1.call(this,state_44284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43427__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44338 = f__43693__auto__();
(statearr_44338[(6)] = c__43692__auto__);

return statearr_44338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));

return c__43692__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44342 = arguments.length;
switch (G__44342) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44371 = arguments.length;
switch (G__44371) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44388 = arguments.length;
switch (G__44388) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43692__auto___47047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44421){
var state_val_44422 = (state_44421[(1)]);
if((state_val_44422 === (7))){
var inst_44416 = (state_44421[(2)]);
var state_44421__$1 = state_44421;
var statearr_44439_47048 = state_44421__$1;
(statearr_44439_47048[(2)] = inst_44416);

(statearr_44439_47048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (1))){
var state_44421__$1 = state_44421;
var statearr_44440_47049 = state_44421__$1;
(statearr_44440_47049[(2)] = null);

(statearr_44440_47049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (4))){
var inst_44393 = (state_44421[(7)]);
var inst_44393__$1 = (state_44421[(2)]);
var inst_44394 = (inst_44393__$1 == null);
var state_44421__$1 = (function (){var statearr_44442 = state_44421;
(statearr_44442[(7)] = inst_44393__$1);

return statearr_44442;
})();
if(cljs.core.truth_(inst_44394)){
var statearr_44447_47053 = state_44421__$1;
(statearr_44447_47053[(1)] = (5));

} else {
var statearr_44452_47054 = state_44421__$1;
(statearr_44452_47054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (13))){
var state_44421__$1 = state_44421;
var statearr_44460_47055 = state_44421__$1;
(statearr_44460_47055[(2)] = null);

(statearr_44460_47055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (6))){
var inst_44393 = (state_44421[(7)]);
var inst_44399 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44393) : p.call(null,inst_44393));
var state_44421__$1 = state_44421;
if(cljs.core.truth_(inst_44399)){
var statearr_44474_47056 = state_44421__$1;
(statearr_44474_47056[(1)] = (9));

} else {
var statearr_44475_47057 = state_44421__$1;
(statearr_44475_47057[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (3))){
var inst_44418 = (state_44421[(2)]);
var state_44421__$1 = state_44421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44421__$1,inst_44418);
} else {
if((state_val_44422 === (12))){
var state_44421__$1 = state_44421;
var statearr_44480_47065 = state_44421__$1;
(statearr_44480_47065[(2)] = null);

(statearr_44480_47065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (2))){
var state_44421__$1 = state_44421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44421__$1,(4),ch);
} else {
if((state_val_44422 === (11))){
var inst_44393 = (state_44421[(7)]);
var inst_44403 = (state_44421[(2)]);
var state_44421__$1 = state_44421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44421__$1,(8),inst_44403,inst_44393);
} else {
if((state_val_44422 === (9))){
var state_44421__$1 = state_44421;
var statearr_44498_47066 = state_44421__$1;
(statearr_44498_47066[(2)] = tc);

(statearr_44498_47066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (5))){
var inst_44396 = cljs.core.async.close_BANG_(tc);
var inst_44397 = cljs.core.async.close_BANG_(fc);
var state_44421__$1 = (function (){var statearr_44499 = state_44421;
(statearr_44499[(8)] = inst_44396);

return statearr_44499;
})();
var statearr_44500_47070 = state_44421__$1;
(statearr_44500_47070[(2)] = inst_44397);

(statearr_44500_47070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (14))){
var inst_44414 = (state_44421[(2)]);
var state_44421__$1 = state_44421;
var statearr_44501_47071 = state_44421__$1;
(statearr_44501_47071[(2)] = inst_44414);

(statearr_44501_47071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (10))){
var state_44421__$1 = state_44421;
var statearr_44507_47072 = state_44421__$1;
(statearr_44507_47072[(2)] = fc);

(statearr_44507_47072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44422 === (8))){
var inst_44405 = (state_44421[(2)]);
var state_44421__$1 = state_44421;
if(cljs.core.truth_(inst_44405)){
var statearr_44512_47076 = state_44421__$1;
(statearr_44512_47076[(1)] = (12));

} else {
var statearr_44517_47077 = state_44421__$1;
(statearr_44517_47077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_44518 = [null,null,null,null,null,null,null,null,null];
(statearr_44518[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_44518[(1)] = (1));

return statearr_44518;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_44421){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44421);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44520){var ex__43430__auto__ = e44520;
var statearr_44521_47081 = state_44421;
(statearr_44521_47081[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44421[(4)]))){
var statearr_44523_47082 = state_44421;
(statearr_44523_47082[(1)] = cljs.core.first((state_44421[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47083 = state_44421;
state_44421 = G__47083;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_44421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_44421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44524 = f__43693__auto__();
(statearr_44524[(6)] = c__43692__auto___47047);

return statearr_44524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44554){
var state_val_44555 = (state_44554[(1)]);
if((state_val_44555 === (7))){
var inst_44550 = (state_44554[(2)]);
var state_44554__$1 = state_44554;
var statearr_44567_47089 = state_44554__$1;
(statearr_44567_47089[(2)] = inst_44550);

(statearr_44567_47089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44555 === (1))){
var inst_44525 = init;
var inst_44526 = inst_44525;
var state_44554__$1 = (function (){var statearr_44574 = state_44554;
(statearr_44574[(7)] = inst_44526);

return statearr_44574;
})();
var statearr_44575_47091 = state_44554__$1;
(statearr_44575_47091[(2)] = null);

(statearr_44575_47091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44555 === (4))){
var inst_44529 = (state_44554[(8)]);
var inst_44529__$1 = (state_44554[(2)]);
var inst_44534 = (inst_44529__$1 == null);
var state_44554__$1 = (function (){var statearr_44577 = state_44554;
(statearr_44577[(8)] = inst_44529__$1);

return statearr_44577;
})();
if(cljs.core.truth_(inst_44534)){
var statearr_44578_47095 = state_44554__$1;
(statearr_44578_47095[(1)] = (5));

} else {
var statearr_44579_47097 = state_44554__$1;
(statearr_44579_47097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44555 === (6))){
var inst_44526 = (state_44554[(7)]);
var inst_44537 = (state_44554[(9)]);
var inst_44529 = (state_44554[(8)]);
var inst_44537__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44526,inst_44529) : f.call(null,inst_44526,inst_44529));
var inst_44538 = cljs.core.reduced_QMARK_(inst_44537__$1);
var state_44554__$1 = (function (){var statearr_44580 = state_44554;
(statearr_44580[(9)] = inst_44537__$1);

return statearr_44580;
})();
if(inst_44538){
var statearr_44581_47098 = state_44554__$1;
(statearr_44581_47098[(1)] = (8));

} else {
var statearr_44587_47099 = state_44554__$1;
(statearr_44587_47099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44555 === (3))){
var inst_44552 = (state_44554[(2)]);
var state_44554__$1 = state_44554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44554__$1,inst_44552);
} else {
if((state_val_44555 === (2))){
var state_44554__$1 = state_44554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44554__$1,(4),ch);
} else {
if((state_val_44555 === (9))){
var inst_44537 = (state_44554[(9)]);
var inst_44526 = inst_44537;
var state_44554__$1 = (function (){var statearr_44594 = state_44554;
(statearr_44594[(7)] = inst_44526);

return statearr_44594;
})();
var statearr_44595_47100 = state_44554__$1;
(statearr_44595_47100[(2)] = null);

(statearr_44595_47100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44555 === (5))){
var inst_44526 = (state_44554[(7)]);
var state_44554__$1 = state_44554;
var statearr_44597_47101 = state_44554__$1;
(statearr_44597_47101[(2)] = inst_44526);

(statearr_44597_47101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44555 === (10))){
var inst_44548 = (state_44554[(2)]);
var state_44554__$1 = state_44554;
var statearr_44602_47102 = state_44554__$1;
(statearr_44602_47102[(2)] = inst_44548);

(statearr_44602_47102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44555 === (8))){
var inst_44537 = (state_44554[(9)]);
var inst_44540 = cljs.core.deref(inst_44537);
var state_44554__$1 = state_44554;
var statearr_44603_47104 = state_44554__$1;
(statearr_44603_47104[(2)] = inst_44540);

(statearr_44603_47104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__43427__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43427__auto____0 = (function (){
var statearr_44606 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44606[(0)] = cljs$core$async$reduce_$_state_machine__43427__auto__);

(statearr_44606[(1)] = (1));

return statearr_44606;
});
var cljs$core$async$reduce_$_state_machine__43427__auto____1 = (function (state_44554){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44554);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44607){var ex__43430__auto__ = e44607;
var statearr_44608_47107 = state_44554;
(statearr_44608_47107[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44554[(4)]))){
var statearr_44609_47108 = state_44554;
(statearr_44609_47108[(1)] = cljs.core.first((state_44554[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47110 = state_44554;
state_44554 = G__47110;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43427__auto__ = function(state_44554){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43427__auto____1.call(this,state_44554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43427__auto____0;
cljs$core$async$reduce_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43427__auto____1;
return cljs$core$async$reduce_$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44610 = f__43693__auto__();
(statearr_44610[(6)] = c__43692__auto__);

return statearr_44610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));

return c__43692__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44616){
var state_val_44617 = (state_44616[(1)]);
if((state_val_44617 === (1))){
var inst_44611 = cljs.core.async.reduce(f__$1,init,ch);
var state_44616__$1 = state_44616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44616__$1,(2),inst_44611);
} else {
if((state_val_44617 === (2))){
var inst_44613 = (state_44616[(2)]);
var inst_44614 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44613) : f__$1.call(null,inst_44613));
var state_44616__$1 = state_44616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44616__$1,inst_44614);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__43427__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43427__auto____0 = (function (){
var statearr_44628 = [null,null,null,null,null,null,null];
(statearr_44628[(0)] = cljs$core$async$transduce_$_state_machine__43427__auto__);

(statearr_44628[(1)] = (1));

return statearr_44628;
});
var cljs$core$async$transduce_$_state_machine__43427__auto____1 = (function (state_44616){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44616);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44629){var ex__43430__auto__ = e44629;
var statearr_44630_47115 = state_44616;
(statearr_44630_47115[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44616[(4)]))){
var statearr_44631_47116 = state_44616;
(statearr_44631_47116[(1)] = cljs.core.first((state_44616[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47117 = state_44616;
state_44616 = G__47117;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43427__auto__ = function(state_44616){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43427__auto____1.call(this,state_44616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43427__auto____0;
cljs$core$async$transduce_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43427__auto____1;
return cljs$core$async$transduce_$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44639 = f__43693__auto__();
(statearr_44639[(6)] = c__43692__auto__);

return statearr_44639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));

return c__43692__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44642 = arguments.length;
switch (G__44642) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44667){
var state_val_44668 = (state_44667[(1)]);
if((state_val_44668 === (7))){
var inst_44649 = (state_44667[(2)]);
var state_44667__$1 = state_44667;
var statearr_44669_47123 = state_44667__$1;
(statearr_44669_47123[(2)] = inst_44649);

(statearr_44669_47123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (1))){
var inst_44643 = cljs.core.seq(coll);
var inst_44644 = inst_44643;
var state_44667__$1 = (function (){var statearr_44670 = state_44667;
(statearr_44670[(7)] = inst_44644);

return statearr_44670;
})();
var statearr_44671_47124 = state_44667__$1;
(statearr_44671_47124[(2)] = null);

(statearr_44671_47124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (4))){
var inst_44644 = (state_44667[(7)]);
var inst_44647 = cljs.core.first(inst_44644);
var state_44667__$1 = state_44667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44667__$1,(7),ch,inst_44647);
} else {
if((state_val_44668 === (13))){
var inst_44661 = (state_44667[(2)]);
var state_44667__$1 = state_44667;
var statearr_44672_47126 = state_44667__$1;
(statearr_44672_47126[(2)] = inst_44661);

(statearr_44672_47126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (6))){
var inst_44652 = (state_44667[(2)]);
var state_44667__$1 = state_44667;
if(cljs.core.truth_(inst_44652)){
var statearr_44673_47127 = state_44667__$1;
(statearr_44673_47127[(1)] = (8));

} else {
var statearr_44674_47128 = state_44667__$1;
(statearr_44674_47128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (3))){
var inst_44665 = (state_44667[(2)]);
var state_44667__$1 = state_44667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44667__$1,inst_44665);
} else {
if((state_val_44668 === (12))){
var state_44667__$1 = state_44667;
var statearr_44675_47131 = state_44667__$1;
(statearr_44675_47131[(2)] = null);

(statearr_44675_47131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (2))){
var inst_44644 = (state_44667[(7)]);
var state_44667__$1 = state_44667;
if(cljs.core.truth_(inst_44644)){
var statearr_44676_47133 = state_44667__$1;
(statearr_44676_47133[(1)] = (4));

} else {
var statearr_44677_47134 = state_44667__$1;
(statearr_44677_47134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (11))){
var inst_44658 = cljs.core.async.close_BANG_(ch);
var state_44667__$1 = state_44667;
var statearr_44678_47136 = state_44667__$1;
(statearr_44678_47136[(2)] = inst_44658);

(statearr_44678_47136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (9))){
var state_44667__$1 = state_44667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44679_47137 = state_44667__$1;
(statearr_44679_47137[(1)] = (11));

} else {
var statearr_44680_47138 = state_44667__$1;
(statearr_44680_47138[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (5))){
var inst_44644 = (state_44667[(7)]);
var state_44667__$1 = state_44667;
var statearr_44682_47141 = state_44667__$1;
(statearr_44682_47141[(2)] = inst_44644);

(statearr_44682_47141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (10))){
var inst_44663 = (state_44667[(2)]);
var state_44667__$1 = state_44667;
var statearr_44684_47143 = state_44667__$1;
(statearr_44684_47143[(2)] = inst_44663);

(statearr_44684_47143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44668 === (8))){
var inst_44644 = (state_44667[(7)]);
var inst_44654 = cljs.core.next(inst_44644);
var inst_44644__$1 = inst_44654;
var state_44667__$1 = (function (){var statearr_44686 = state_44667;
(statearr_44686[(7)] = inst_44644__$1);

return statearr_44686;
})();
var statearr_44687_47144 = state_44667__$1;
(statearr_44687_47144[(2)] = null);

(statearr_44687_47144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_44697 = [null,null,null,null,null,null,null,null];
(statearr_44697[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_44697[(1)] = (1));

return statearr_44697;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_44667){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44667);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e44698){var ex__43430__auto__ = e44698;
var statearr_44699_47146 = state_44667;
(statearr_44699_47146[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44667[(4)]))){
var statearr_44700_47147 = state_44667;
(statearr_44700_47147[(1)] = cljs.core.first((state_44667[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47150 = state_44667;
state_44667 = G__47150;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_44667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_44667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_44705 = f__43693__auto__();
(statearr_44705[(6)] = c__43692__auto__);

return statearr_44705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));

return c__43692__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44707 = arguments.length;
switch (G__44707) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47159 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47159(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47164 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47164(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47170 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47170(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47173 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47173(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44735 = (function (ch,cs,meta44736){
this.ch = ch;
this.cs = cs;
this.meta44736 = meta44736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44737,meta44736__$1){
var self__ = this;
var _44737__$1 = this;
return (new cljs.core.async.t_cljs$core$async44735(self__.ch,self__.cs,meta44736__$1));
}));

(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44737){
var self__ = this;
var _44737__$1 = this;
return self__.meta44736;
}));

(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44735.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44736","meta44736",-1248577225,null)], null);
}));

(cljs.core.async.t_cljs$core$async44735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44735");

(cljs.core.async.t_cljs$core$async44735.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44735.
 */
cljs.core.async.__GT_t_cljs$core$async44735 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44735(ch__$1,cs__$1,meta44736){
return (new cljs.core.async.t_cljs$core$async44735(ch__$1,cs__$1,meta44736));
});

}

return (new cljs.core.async.t_cljs$core$async44735(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43692__auto___47193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_44900){
var state_val_44901 = (state_44900[(1)]);
if((state_val_44901 === (7))){
var inst_44891 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_44902_47195 = state_44900__$1;
(statearr_44902_47195[(2)] = inst_44891);

(statearr_44902_47195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (20))){
var inst_44782 = (state_44900[(7)]);
var inst_44796 = cljs.core.first(inst_44782);
var inst_44797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44796,(0),null);
var inst_44798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44796,(1),null);
var state_44900__$1 = (function (){var statearr_44907 = state_44900;
(statearr_44907[(8)] = inst_44797);

return statearr_44907;
})();
if(cljs.core.truth_(inst_44798)){
var statearr_44910_47204 = state_44900__$1;
(statearr_44910_47204[(1)] = (22));

} else {
var statearr_44911_47205 = state_44900__$1;
(statearr_44911_47205[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (27))){
var inst_44749 = (state_44900[(9)]);
var inst_44826 = (state_44900[(10)]);
var inst_44833 = (state_44900[(11)]);
var inst_44828 = (state_44900[(12)]);
var inst_44833__$1 = cljs.core._nth(inst_44826,inst_44828);
var inst_44834 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44833__$1,inst_44749,done);
var state_44900__$1 = (function (){var statearr_44912 = state_44900;
(statearr_44912[(11)] = inst_44833__$1);

return statearr_44912;
})();
if(cljs.core.truth_(inst_44834)){
var statearr_44913_47215 = state_44900__$1;
(statearr_44913_47215[(1)] = (30));

} else {
var statearr_44914_47216 = state_44900__$1;
(statearr_44914_47216[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (1))){
var state_44900__$1 = state_44900;
var statearr_44915_47219 = state_44900__$1;
(statearr_44915_47219[(2)] = null);

(statearr_44915_47219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (24))){
var inst_44782 = (state_44900[(7)]);
var inst_44803 = (state_44900[(2)]);
var inst_44804 = cljs.core.next(inst_44782);
var inst_44758 = inst_44804;
var inst_44759 = null;
var inst_44760 = (0);
var inst_44761 = (0);
var state_44900__$1 = (function (){var statearr_44917 = state_44900;
(statearr_44917[(13)] = inst_44758);

(statearr_44917[(14)] = inst_44761);

(statearr_44917[(15)] = inst_44760);

(statearr_44917[(16)] = inst_44759);

(statearr_44917[(17)] = inst_44803);

return statearr_44917;
})();
var statearr_44918_47223 = state_44900__$1;
(statearr_44918_47223[(2)] = null);

(statearr_44918_47223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (39))){
var state_44900__$1 = state_44900;
var statearr_44925_47225 = state_44900__$1;
(statearr_44925_47225[(2)] = null);

(statearr_44925_47225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (4))){
var inst_44749 = (state_44900[(9)]);
var inst_44749__$1 = (state_44900[(2)]);
var inst_44750 = (inst_44749__$1 == null);
var state_44900__$1 = (function (){var statearr_44926 = state_44900;
(statearr_44926[(9)] = inst_44749__$1);

return statearr_44926;
})();
if(cljs.core.truth_(inst_44750)){
var statearr_44927_47230 = state_44900__$1;
(statearr_44927_47230[(1)] = (5));

} else {
var statearr_44928_47231 = state_44900__$1;
(statearr_44928_47231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (15))){
var inst_44758 = (state_44900[(13)]);
var inst_44761 = (state_44900[(14)]);
var inst_44760 = (state_44900[(15)]);
var inst_44759 = (state_44900[(16)]);
var inst_44778 = (state_44900[(2)]);
var inst_44779 = (inst_44761 + (1));
var tmp44922 = inst_44758;
var tmp44923 = inst_44760;
var tmp44924 = inst_44759;
var inst_44758__$1 = tmp44922;
var inst_44759__$1 = tmp44924;
var inst_44760__$1 = tmp44923;
var inst_44761__$1 = inst_44779;
var state_44900__$1 = (function (){var statearr_44932 = state_44900;
(statearr_44932[(13)] = inst_44758__$1);

(statearr_44932[(14)] = inst_44761__$1);

(statearr_44932[(18)] = inst_44778);

(statearr_44932[(15)] = inst_44760__$1);

(statearr_44932[(16)] = inst_44759__$1);

return statearr_44932;
})();
var statearr_44933_47237 = state_44900__$1;
(statearr_44933_47237[(2)] = null);

(statearr_44933_47237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (21))){
var inst_44807 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_44937_47238 = state_44900__$1;
(statearr_44937_47238[(2)] = inst_44807);

(statearr_44937_47238[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (31))){
var inst_44833 = (state_44900[(11)]);
var inst_44837 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44833);
var state_44900__$1 = state_44900;
var statearr_44942_47240 = state_44900__$1;
(statearr_44942_47240[(2)] = inst_44837);

(statearr_44942_47240[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (32))){
var inst_44827 = (state_44900[(19)]);
var inst_44826 = (state_44900[(10)]);
var inst_44825 = (state_44900[(20)]);
var inst_44828 = (state_44900[(12)]);
var inst_44839 = (state_44900[(2)]);
var inst_44840 = (inst_44828 + (1));
var tmp44934 = inst_44827;
var tmp44935 = inst_44826;
var tmp44936 = inst_44825;
var inst_44825__$1 = tmp44936;
var inst_44826__$1 = tmp44935;
var inst_44827__$1 = tmp44934;
var inst_44828__$1 = inst_44840;
var state_44900__$1 = (function (){var statearr_44947 = state_44900;
(statearr_44947[(21)] = inst_44839);

(statearr_44947[(19)] = inst_44827__$1);

(statearr_44947[(10)] = inst_44826__$1);

(statearr_44947[(20)] = inst_44825__$1);

(statearr_44947[(12)] = inst_44828__$1);

return statearr_44947;
})();
var statearr_44948_47250 = state_44900__$1;
(statearr_44948_47250[(2)] = null);

(statearr_44948_47250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (40))){
var inst_44856 = (state_44900[(22)]);
var inst_44864 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44856);
var state_44900__$1 = state_44900;
var statearr_44952_47251 = state_44900__$1;
(statearr_44952_47251[(2)] = inst_44864);

(statearr_44952_47251[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (33))){
var inst_44843 = (state_44900[(23)]);
var inst_44845 = cljs.core.chunked_seq_QMARK_(inst_44843);
var state_44900__$1 = state_44900;
if(inst_44845){
var statearr_44957_47255 = state_44900__$1;
(statearr_44957_47255[(1)] = (36));

} else {
var statearr_44961_47256 = state_44900__$1;
(statearr_44961_47256[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (13))){
var inst_44770 = (state_44900[(24)]);
var inst_44775 = cljs.core.async.close_BANG_(inst_44770);
var state_44900__$1 = state_44900;
var statearr_44963_47257 = state_44900__$1;
(statearr_44963_47257[(2)] = inst_44775);

(statearr_44963_47257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (22))){
var inst_44797 = (state_44900[(8)]);
var inst_44800 = cljs.core.async.close_BANG_(inst_44797);
var state_44900__$1 = state_44900;
var statearr_44967_47260 = state_44900__$1;
(statearr_44967_47260[(2)] = inst_44800);

(statearr_44967_47260[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (36))){
var inst_44843 = (state_44900[(23)]);
var inst_44847 = cljs.core.chunk_first(inst_44843);
var inst_44848 = cljs.core.chunk_rest(inst_44843);
var inst_44849 = cljs.core.count(inst_44847);
var inst_44825 = inst_44848;
var inst_44826 = inst_44847;
var inst_44827 = inst_44849;
var inst_44828 = (0);
var state_44900__$1 = (function (){var statearr_44969 = state_44900;
(statearr_44969[(19)] = inst_44827);

(statearr_44969[(10)] = inst_44826);

(statearr_44969[(20)] = inst_44825);

(statearr_44969[(12)] = inst_44828);

return statearr_44969;
})();
var statearr_44970_47264 = state_44900__$1;
(statearr_44970_47264[(2)] = null);

(statearr_44970_47264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (41))){
var inst_44843 = (state_44900[(23)]);
var inst_44866 = (state_44900[(2)]);
var inst_44867 = cljs.core.next(inst_44843);
var inst_44825 = inst_44867;
var inst_44826 = null;
var inst_44827 = (0);
var inst_44828 = (0);
var state_44900__$1 = (function (){var statearr_44977 = state_44900;
(statearr_44977[(19)] = inst_44827);

(statearr_44977[(25)] = inst_44866);

(statearr_44977[(10)] = inst_44826);

(statearr_44977[(20)] = inst_44825);

(statearr_44977[(12)] = inst_44828);

return statearr_44977;
})();
var statearr_44979_47266 = state_44900__$1;
(statearr_44979_47266[(2)] = null);

(statearr_44979_47266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (43))){
var state_44900__$1 = state_44900;
var statearr_44983_47267 = state_44900__$1;
(statearr_44983_47267[(2)] = null);

(statearr_44983_47267[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (29))){
var inst_44879 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_44990_47268 = state_44900__$1;
(statearr_44990_47268[(2)] = inst_44879);

(statearr_44990_47268[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (44))){
var inst_44888 = (state_44900[(2)]);
var state_44900__$1 = (function (){var statearr_44992 = state_44900;
(statearr_44992[(26)] = inst_44888);

return statearr_44992;
})();
var statearr_44994_47274 = state_44900__$1;
(statearr_44994_47274[(2)] = null);

(statearr_44994_47274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (6))){
var inst_44817 = (state_44900[(27)]);
var inst_44816 = cljs.core.deref(cs);
var inst_44817__$1 = cljs.core.keys(inst_44816);
var inst_44818 = cljs.core.count(inst_44817__$1);
var inst_44819 = cljs.core.reset_BANG_(dctr,inst_44818);
var inst_44824 = cljs.core.seq(inst_44817__$1);
var inst_44825 = inst_44824;
var inst_44826 = null;
var inst_44827 = (0);
var inst_44828 = (0);
var state_44900__$1 = (function (){var statearr_44998 = state_44900;
(statearr_44998[(19)] = inst_44827);

(statearr_44998[(10)] = inst_44826);

(statearr_44998[(20)] = inst_44825);

(statearr_44998[(28)] = inst_44819);

(statearr_44998[(12)] = inst_44828);

(statearr_44998[(27)] = inst_44817__$1);

return statearr_44998;
})();
var statearr_45000_47276 = state_44900__$1;
(statearr_45000_47276[(2)] = null);

(statearr_45000_47276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (28))){
var inst_44843 = (state_44900[(23)]);
var inst_44825 = (state_44900[(20)]);
var inst_44843__$1 = cljs.core.seq(inst_44825);
var state_44900__$1 = (function (){var statearr_45001 = state_44900;
(statearr_45001[(23)] = inst_44843__$1);

return statearr_45001;
})();
if(inst_44843__$1){
var statearr_45002_47284 = state_44900__$1;
(statearr_45002_47284[(1)] = (33));

} else {
var statearr_45008_47285 = state_44900__$1;
(statearr_45008_47285[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (25))){
var inst_44827 = (state_44900[(19)]);
var inst_44828 = (state_44900[(12)]);
var inst_44830 = (inst_44828 < inst_44827);
var inst_44831 = inst_44830;
var state_44900__$1 = state_44900;
if(cljs.core.truth_(inst_44831)){
var statearr_45009_47287 = state_44900__$1;
(statearr_45009_47287[(1)] = (27));

} else {
var statearr_45010_47289 = state_44900__$1;
(statearr_45010_47289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (34))){
var state_44900__$1 = state_44900;
var statearr_45011_47291 = state_44900__$1;
(statearr_45011_47291[(2)] = null);

(statearr_45011_47291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (17))){
var state_44900__$1 = state_44900;
var statearr_45015_47292 = state_44900__$1;
(statearr_45015_47292[(2)] = null);

(statearr_45015_47292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (3))){
var inst_44893 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44900__$1,inst_44893);
} else {
if((state_val_44901 === (12))){
var inst_44812 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_45019_47293 = state_44900__$1;
(statearr_45019_47293[(2)] = inst_44812);

(statearr_45019_47293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (2))){
var state_44900__$1 = state_44900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44900__$1,(4),ch);
} else {
if((state_val_44901 === (23))){
var state_44900__$1 = state_44900;
var statearr_45026_47295 = state_44900__$1;
(statearr_45026_47295[(2)] = null);

(statearr_45026_47295[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (35))){
var inst_44873 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_45027_47296 = state_44900__$1;
(statearr_45027_47296[(2)] = inst_44873);

(statearr_45027_47296[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (19))){
var inst_44782 = (state_44900[(7)]);
var inst_44786 = cljs.core.chunk_first(inst_44782);
var inst_44787 = cljs.core.chunk_rest(inst_44782);
var inst_44788 = cljs.core.count(inst_44786);
var inst_44758 = inst_44787;
var inst_44759 = inst_44786;
var inst_44760 = inst_44788;
var inst_44761 = (0);
var state_44900__$1 = (function (){var statearr_45031 = state_44900;
(statearr_45031[(13)] = inst_44758);

(statearr_45031[(14)] = inst_44761);

(statearr_45031[(15)] = inst_44760);

(statearr_45031[(16)] = inst_44759);

return statearr_45031;
})();
var statearr_45032_47300 = state_44900__$1;
(statearr_45032_47300[(2)] = null);

(statearr_45032_47300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (11))){
var inst_44758 = (state_44900[(13)]);
var inst_44782 = (state_44900[(7)]);
var inst_44782__$1 = cljs.core.seq(inst_44758);
var state_44900__$1 = (function (){var statearr_45036 = state_44900;
(statearr_45036[(7)] = inst_44782__$1);

return statearr_45036;
})();
if(inst_44782__$1){
var statearr_45037_47302 = state_44900__$1;
(statearr_45037_47302[(1)] = (16));

} else {
var statearr_45038_47304 = state_44900__$1;
(statearr_45038_47304[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (9))){
var inst_44814 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_45039_47306 = state_44900__$1;
(statearr_45039_47306[(2)] = inst_44814);

(statearr_45039_47306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (5))){
var inst_44756 = cljs.core.deref(cs);
var inst_44757 = cljs.core.seq(inst_44756);
var inst_44758 = inst_44757;
var inst_44759 = null;
var inst_44760 = (0);
var inst_44761 = (0);
var state_44900__$1 = (function (){var statearr_45044 = state_44900;
(statearr_45044[(13)] = inst_44758);

(statearr_45044[(14)] = inst_44761);

(statearr_45044[(15)] = inst_44760);

(statearr_45044[(16)] = inst_44759);

return statearr_45044;
})();
var statearr_45045_47310 = state_44900__$1;
(statearr_45045_47310[(2)] = null);

(statearr_45045_47310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (14))){
var state_44900__$1 = state_44900;
var statearr_45047_47311 = state_44900__$1;
(statearr_45047_47311[(2)] = null);

(statearr_45047_47311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (45))){
var inst_44885 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_45050_47312 = state_44900__$1;
(statearr_45050_47312[(2)] = inst_44885);

(statearr_45050_47312[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (26))){
var inst_44817 = (state_44900[(27)]);
var inst_44881 = (state_44900[(2)]);
var inst_44882 = cljs.core.seq(inst_44817);
var state_44900__$1 = (function (){var statearr_45051 = state_44900;
(statearr_45051[(29)] = inst_44881);

return statearr_45051;
})();
if(inst_44882){
var statearr_45053_47314 = state_44900__$1;
(statearr_45053_47314[(1)] = (42));

} else {
var statearr_45055_47315 = state_44900__$1;
(statearr_45055_47315[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (16))){
var inst_44782 = (state_44900[(7)]);
var inst_44784 = cljs.core.chunked_seq_QMARK_(inst_44782);
var state_44900__$1 = state_44900;
if(inst_44784){
var statearr_45057_47316 = state_44900__$1;
(statearr_45057_47316[(1)] = (19));

} else {
var statearr_45058_47317 = state_44900__$1;
(statearr_45058_47317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (38))){
var inst_44870 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_45059_47318 = state_44900__$1;
(statearr_45059_47318[(2)] = inst_44870);

(statearr_45059_47318[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (30))){
var state_44900__$1 = state_44900;
var statearr_45060_47321 = state_44900__$1;
(statearr_45060_47321[(2)] = null);

(statearr_45060_47321[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (10))){
var inst_44761 = (state_44900[(14)]);
var inst_44759 = (state_44900[(16)]);
var inst_44769 = cljs.core._nth(inst_44759,inst_44761);
var inst_44770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44769,(0),null);
var inst_44771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44769,(1),null);
var state_44900__$1 = (function (){var statearr_45063 = state_44900;
(statearr_45063[(24)] = inst_44770);

return statearr_45063;
})();
if(cljs.core.truth_(inst_44771)){
var statearr_45064_47323 = state_44900__$1;
(statearr_45064_47323[(1)] = (13));

} else {
var statearr_45065_47324 = state_44900__$1;
(statearr_45065_47324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (18))){
var inst_44810 = (state_44900[(2)]);
var state_44900__$1 = state_44900;
var statearr_45066_47331 = state_44900__$1;
(statearr_45066_47331[(2)] = inst_44810);

(statearr_45066_47331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (42))){
var state_44900__$1 = state_44900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44900__$1,(45),dchan);
} else {
if((state_val_44901 === (37))){
var inst_44856 = (state_44900[(22)]);
var inst_44749 = (state_44900[(9)]);
var inst_44843 = (state_44900[(23)]);
var inst_44856__$1 = cljs.core.first(inst_44843);
var inst_44857 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44856__$1,inst_44749,done);
var state_44900__$1 = (function (){var statearr_45067 = state_44900;
(statearr_45067[(22)] = inst_44856__$1);

return statearr_45067;
})();
if(cljs.core.truth_(inst_44857)){
var statearr_45068_47333 = state_44900__$1;
(statearr_45068_47333[(1)] = (39));

} else {
var statearr_45069_47335 = state_44900__$1;
(statearr_45069_47335[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44901 === (8))){
var inst_44761 = (state_44900[(14)]);
var inst_44760 = (state_44900[(15)]);
var inst_44763 = (inst_44761 < inst_44760);
var inst_44764 = inst_44763;
var state_44900__$1 = state_44900;
if(cljs.core.truth_(inst_44764)){
var statearr_45074_47338 = state_44900__$1;
(statearr_45074_47338[(1)] = (10));

} else {
var statearr_45075_47339 = state_44900__$1;
(statearr_45075_47339[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__43427__auto__ = null;
var cljs$core$async$mult_$_state_machine__43427__auto____0 = (function (){
var statearr_45084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45084[(0)] = cljs$core$async$mult_$_state_machine__43427__auto__);

(statearr_45084[(1)] = (1));

return statearr_45084;
});
var cljs$core$async$mult_$_state_machine__43427__auto____1 = (function (state_44900){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_44900);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e45085){var ex__43430__auto__ = e45085;
var statearr_45086_47341 = state_44900;
(statearr_45086_47341[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_44900[(4)]))){
var statearr_45087_47342 = state_44900;
(statearr_45087_47342[(1)] = cljs.core.first((state_44900[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47343 = state_44900;
state_44900 = G__47343;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43427__auto__ = function(state_44900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43427__auto____1.call(this,state_44900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43427__auto____0;
cljs$core$async$mult_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43427__auto____1;
return cljs$core$async$mult_$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_45088 = f__43693__auto__();
(statearr_45088[(6)] = c__43692__auto___47193);

return statearr_45088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45090 = arguments.length;
switch (G__45090) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47349 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47349(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47352 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47352(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47355 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47355(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47359 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47359(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47362 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47362(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47367 = arguments.length;
var i__4865__auto___47368 = (0);
while(true){
if((i__4865__auto___47368 < len__4864__auto___47367)){
args__4870__auto__.push((arguments[i__4865__auto___47368]));

var G__47369 = (i__4865__auto___47368 + (1));
i__4865__auto___47368 = G__47369;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45152){
var map__45154 = p__45152;
var map__45154__$1 = cljs.core.__destructure_map(map__45154);
var opts = map__45154__$1;
var statearr_45155_47371 = state;
(statearr_45155_47371[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45161_47373 = state;
(statearr_45161_47373[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_45163_47374 = state;
(statearr_45163_47374[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45129){
var G__45130 = cljs.core.first(seq45129);
var seq45129__$1 = cljs.core.next(seq45129);
var G__45131 = cljs.core.first(seq45129__$1);
var seq45129__$2 = cljs.core.next(seq45129__$1);
var G__45132 = cljs.core.first(seq45129__$2);
var seq45129__$3 = cljs.core.next(seq45129__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45130,G__45131,G__45132,seq45129__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45178 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45179){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45179 = meta45179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45180,meta45179__$1){
var self__ = this;
var _45180__$1 = this;
return (new cljs.core.async.t_cljs$core$async45178(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45179__$1));
}));

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45180){
var self__ = this;
var _45180__$1 = this;
return self__.meta45179;
}));

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45178.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45179","meta45179",-90129314,null)], null);
}));

(cljs.core.async.t_cljs$core$async45178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45178");

(cljs.core.async.t_cljs$core$async45178.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45178.
 */
cljs.core.async.__GT_t_cljs$core$async45178 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45178(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45179){
return (new cljs.core.async.t_cljs$core$async45178(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45179));
});

}

return (new cljs.core.async.t_cljs$core$async45178(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43692__auto___47402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_45287){
var state_val_45289 = (state_45287[(1)]);
if((state_val_45289 === (7))){
var inst_45246 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
if(cljs.core.truth_(inst_45246)){
var statearr_45297_47404 = state_45287__$1;
(statearr_45297_47404[(1)] = (8));

} else {
var statearr_45298_47405 = state_45287__$1;
(statearr_45298_47405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (20))){
var inst_45238 = (state_45287[(7)]);
var state_45287__$1 = state_45287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45287__$1,(23),out,inst_45238);
} else {
if((state_val_45289 === (1))){
var inst_45217 = calc_state();
var inst_45218 = cljs.core.__destructure_map(inst_45217);
var inst_45219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45218,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45218,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45218,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45222 = inst_45217;
var state_45287__$1 = (function (){var statearr_45300 = state_45287;
(statearr_45300[(8)] = inst_45220);

(statearr_45300[(9)] = inst_45222);

(statearr_45300[(10)] = inst_45219);

(statearr_45300[(11)] = inst_45221);

return statearr_45300;
})();
var statearr_45301_47408 = state_45287__$1;
(statearr_45301_47408[(2)] = null);

(statearr_45301_47408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (24))){
var inst_45226 = (state_45287[(12)]);
var inst_45222 = inst_45226;
var state_45287__$1 = (function (){var statearr_45302 = state_45287;
(statearr_45302[(9)] = inst_45222);

return statearr_45302;
})();
var statearr_45303_47410 = state_45287__$1;
(statearr_45303_47410[(2)] = null);

(statearr_45303_47410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (4))){
var inst_45238 = (state_45287[(7)]);
var inst_45241 = (state_45287[(13)]);
var inst_45236 = (state_45287[(2)]);
var inst_45238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45236,(0),null);
var inst_45239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45236,(1),null);
var inst_45241__$1 = (inst_45238__$1 == null);
var state_45287__$1 = (function (){var statearr_45306 = state_45287;
(statearr_45306[(7)] = inst_45238__$1);

(statearr_45306[(13)] = inst_45241__$1);

(statearr_45306[(14)] = inst_45239);

return statearr_45306;
})();
if(cljs.core.truth_(inst_45241__$1)){
var statearr_45309_47412 = state_45287__$1;
(statearr_45309_47412[(1)] = (5));

} else {
var statearr_45310_47413 = state_45287__$1;
(statearr_45310_47413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (15))){
var inst_45228 = (state_45287[(15)]);
var inst_45261 = (state_45287[(16)]);
var inst_45261__$1 = cljs.core.empty_QMARK_(inst_45228);
var state_45287__$1 = (function (){var statearr_45311 = state_45287;
(statearr_45311[(16)] = inst_45261__$1);

return statearr_45311;
})();
if(inst_45261__$1){
var statearr_45312_47414 = state_45287__$1;
(statearr_45312_47414[(1)] = (17));

} else {
var statearr_45313_47415 = state_45287__$1;
(statearr_45313_47415[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (21))){
var inst_45226 = (state_45287[(12)]);
var inst_45222 = inst_45226;
var state_45287__$1 = (function (){var statearr_45314 = state_45287;
(statearr_45314[(9)] = inst_45222);

return statearr_45314;
})();
var statearr_45316_47418 = state_45287__$1;
(statearr_45316_47418[(2)] = null);

(statearr_45316_47418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (13))){
var inst_45254 = (state_45287[(2)]);
var inst_45255 = calc_state();
var inst_45222 = inst_45255;
var state_45287__$1 = (function (){var statearr_45318 = state_45287;
(statearr_45318[(9)] = inst_45222);

(statearr_45318[(17)] = inst_45254);

return statearr_45318;
})();
var statearr_45319_47420 = state_45287__$1;
(statearr_45319_47420[(2)] = null);

(statearr_45319_47420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (22))){
var inst_45281 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
var statearr_45323_47421 = state_45287__$1;
(statearr_45323_47421[(2)] = inst_45281);

(statearr_45323_47421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (6))){
var inst_45239 = (state_45287[(14)]);
var inst_45244 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45239,change);
var state_45287__$1 = state_45287;
var statearr_45325_47422 = state_45287__$1;
(statearr_45325_47422[(2)] = inst_45244);

(statearr_45325_47422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (25))){
var state_45287__$1 = state_45287;
var statearr_45326_47424 = state_45287__$1;
(statearr_45326_47424[(2)] = null);

(statearr_45326_47424[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (17))){
var inst_45229 = (state_45287[(18)]);
var inst_45239 = (state_45287[(14)]);
var inst_45263 = (inst_45229.cljs$core$IFn$_invoke$arity$1 ? inst_45229.cljs$core$IFn$_invoke$arity$1(inst_45239) : inst_45229.call(null,inst_45239));
var inst_45264 = cljs.core.not(inst_45263);
var state_45287__$1 = state_45287;
var statearr_45327_47425 = state_45287__$1;
(statearr_45327_47425[(2)] = inst_45264);

(statearr_45327_47425[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (3))){
var inst_45285 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45287__$1,inst_45285);
} else {
if((state_val_45289 === (12))){
var state_45287__$1 = state_45287;
var statearr_45330_47430 = state_45287__$1;
(statearr_45330_47430[(2)] = null);

(statearr_45330_47430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (2))){
var inst_45222 = (state_45287[(9)]);
var inst_45226 = (state_45287[(12)]);
var inst_45226__$1 = cljs.core.__destructure_map(inst_45222);
var inst_45228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45226__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45226__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45226__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45287__$1 = (function (){var statearr_45333 = state_45287;
(statearr_45333[(15)] = inst_45228);

(statearr_45333[(18)] = inst_45229);

(statearr_45333[(12)] = inst_45226__$1);

return statearr_45333;
})();
return cljs.core.async.ioc_alts_BANG_(state_45287__$1,(4),inst_45230);
} else {
if((state_val_45289 === (23))){
var inst_45272 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
if(cljs.core.truth_(inst_45272)){
var statearr_45334_47436 = state_45287__$1;
(statearr_45334_47436[(1)] = (24));

} else {
var statearr_45335_47437 = state_45287__$1;
(statearr_45335_47437[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (19))){
var inst_45267 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
var statearr_45336_47439 = state_45287__$1;
(statearr_45336_47439[(2)] = inst_45267);

(statearr_45336_47439[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (11))){
var inst_45239 = (state_45287[(14)]);
var inst_45251 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45239);
var state_45287__$1 = state_45287;
var statearr_45339_47440 = state_45287__$1;
(statearr_45339_47440[(2)] = inst_45251);

(statearr_45339_47440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (9))){
var inst_45228 = (state_45287[(15)]);
var inst_45239 = (state_45287[(14)]);
var inst_45258 = (state_45287[(19)]);
var inst_45258__$1 = (inst_45228.cljs$core$IFn$_invoke$arity$1 ? inst_45228.cljs$core$IFn$_invoke$arity$1(inst_45239) : inst_45228.call(null,inst_45239));
var state_45287__$1 = (function (){var statearr_45340 = state_45287;
(statearr_45340[(19)] = inst_45258__$1);

return statearr_45340;
})();
if(cljs.core.truth_(inst_45258__$1)){
var statearr_45341_47446 = state_45287__$1;
(statearr_45341_47446[(1)] = (14));

} else {
var statearr_45343_47447 = state_45287__$1;
(statearr_45343_47447[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (5))){
var inst_45241 = (state_45287[(13)]);
var state_45287__$1 = state_45287;
var statearr_45346_47449 = state_45287__$1;
(statearr_45346_47449[(2)] = inst_45241);

(statearr_45346_47449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (14))){
var inst_45258 = (state_45287[(19)]);
var state_45287__$1 = state_45287;
var statearr_45351_47450 = state_45287__$1;
(statearr_45351_47450[(2)] = inst_45258);

(statearr_45351_47450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (26))){
var inst_45277 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
var statearr_45355_47453 = state_45287__$1;
(statearr_45355_47453[(2)] = inst_45277);

(statearr_45355_47453[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (16))){
var inst_45269 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
if(cljs.core.truth_(inst_45269)){
var statearr_45360_47455 = state_45287__$1;
(statearr_45360_47455[(1)] = (20));

} else {
var statearr_45361_47456 = state_45287__$1;
(statearr_45361_47456[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (10))){
var inst_45283 = (state_45287[(2)]);
var state_45287__$1 = state_45287;
var statearr_45363_47457 = state_45287__$1;
(statearr_45363_47457[(2)] = inst_45283);

(statearr_45363_47457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (18))){
var inst_45261 = (state_45287[(16)]);
var state_45287__$1 = state_45287;
var statearr_45365_47458 = state_45287__$1;
(statearr_45365_47458[(2)] = inst_45261);

(statearr_45365_47458[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45289 === (8))){
var inst_45238 = (state_45287[(7)]);
var inst_45249 = (inst_45238 == null);
var state_45287__$1 = state_45287;
if(cljs.core.truth_(inst_45249)){
var statearr_45367_47460 = state_45287__$1;
(statearr_45367_47460[(1)] = (11));

} else {
var statearr_45368_47461 = state_45287__$1;
(statearr_45368_47461[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__43427__auto__ = null;
var cljs$core$async$mix_$_state_machine__43427__auto____0 = (function (){
var statearr_45371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45371[(0)] = cljs$core$async$mix_$_state_machine__43427__auto__);

(statearr_45371[(1)] = (1));

return statearr_45371;
});
var cljs$core$async$mix_$_state_machine__43427__auto____1 = (function (state_45287){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_45287);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e45372){var ex__43430__auto__ = e45372;
var statearr_45373_47469 = state_45287;
(statearr_45373_47469[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_45287[(4)]))){
var statearr_45377_47470 = state_45287;
(statearr_45377_47470[(1)] = cljs.core.first((state_45287[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47471 = state_45287;
state_45287 = G__47471;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43427__auto__ = function(state_45287){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43427__auto____1.call(this,state_45287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43427__auto____0;
cljs$core$async$mix_$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43427__auto____1;
return cljs$core$async$mix_$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_45379 = f__43693__auto__();
(statearr_45379[(6)] = c__43692__auto___47402);

return statearr_45379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47481 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47481(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47486 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47486(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47499 = (function() {
var G__47500 = null;
var G__47500__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47500__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47500 = function(p,v){
switch(arguments.length){
case 1:
return G__47500__1.call(this,p);
case 2:
return G__47500__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47500.cljs$core$IFn$_invoke$arity$1 = G__47500__1;
G__47500.cljs$core$IFn$_invoke$arity$2 = G__47500__2;
return G__47500;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45392 = arguments.length;
switch (G__45392) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47499(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47499(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45405 = arguments.length;
switch (G__45405) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45397_SHARP_){
if(cljs.core.truth_((p1__45397_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45397_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45397_SHARP_.call(null,topic)))){
return p1__45397_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45397_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45425 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45426){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45426 = meta45426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45427,meta45426__$1){
var self__ = this;
var _45427__$1 = this;
return (new cljs.core.async.t_cljs$core$async45425(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45426__$1));
}));

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45427){
var self__ = this;
var _45427__$1 = this;
return self__.meta45426;
}));

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45425.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45426","meta45426",2121217556,null)], null);
}));

(cljs.core.async.t_cljs$core$async45425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45425");

(cljs.core.async.t_cljs$core$async45425.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async45425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45425.
 */
cljs.core.async.__GT_t_cljs$core$async45425 = (function cljs$core$async$__GT_t_cljs$core$async45425(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45426){
return (new cljs.core.async.t_cljs$core$async45425(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45426));
});

}

return (new cljs.core.async.t_cljs$core$async45425(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43692__auto___47539 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_45550){
var state_val_45551 = (state_45550[(1)]);
if((state_val_45551 === (7))){
var inst_45546 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45560_47541 = state_45550__$1;
(statearr_45560_47541[(2)] = inst_45546);

(statearr_45560_47541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (20))){
var state_45550__$1 = state_45550;
var statearr_45563_47542 = state_45550__$1;
(statearr_45563_47542[(2)] = null);

(statearr_45563_47542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (1))){
var state_45550__$1 = state_45550;
var statearr_45564_47543 = state_45550__$1;
(statearr_45564_47543[(2)] = null);

(statearr_45564_47543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (24))){
var inst_45529 = (state_45550[(7)]);
var inst_45538 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45529);
var state_45550__$1 = state_45550;
var statearr_45569_47548 = state_45550__$1;
(statearr_45569_47548[(2)] = inst_45538);

(statearr_45569_47548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (4))){
var inst_45467 = (state_45550[(8)]);
var inst_45467__$1 = (state_45550[(2)]);
var inst_45468 = (inst_45467__$1 == null);
var state_45550__$1 = (function (){var statearr_45582 = state_45550;
(statearr_45582[(8)] = inst_45467__$1);

return statearr_45582;
})();
if(cljs.core.truth_(inst_45468)){
var statearr_45583_47549 = state_45550__$1;
(statearr_45583_47549[(1)] = (5));

} else {
var statearr_45584_47550 = state_45550__$1;
(statearr_45584_47550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (15))){
var inst_45515 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45585_47551 = state_45550__$1;
(statearr_45585_47551[(2)] = inst_45515);

(statearr_45585_47551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (21))){
var inst_45543 = (state_45550[(2)]);
var state_45550__$1 = (function (){var statearr_45586 = state_45550;
(statearr_45586[(9)] = inst_45543);

return statearr_45586;
})();
var statearr_45590_47552 = state_45550__$1;
(statearr_45590_47552[(2)] = null);

(statearr_45590_47552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (13))){
var inst_45495 = (state_45550[(10)]);
var inst_45497 = cljs.core.chunked_seq_QMARK_(inst_45495);
var state_45550__$1 = state_45550;
if(inst_45497){
var statearr_45595_47556 = state_45550__$1;
(statearr_45595_47556[(1)] = (16));

} else {
var statearr_45596_47557 = state_45550__$1;
(statearr_45596_47557[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (22))){
var inst_45535 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
if(cljs.core.truth_(inst_45535)){
var statearr_45598_47559 = state_45550__$1;
(statearr_45598_47559[(1)] = (23));

} else {
var statearr_45599_47560 = state_45550__$1;
(statearr_45599_47560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (6))){
var inst_45467 = (state_45550[(8)]);
var inst_45531 = (state_45550[(11)]);
var inst_45529 = (state_45550[(7)]);
var inst_45529__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45467) : topic_fn.call(null,inst_45467));
var inst_45530 = cljs.core.deref(mults);
var inst_45531__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45530,inst_45529__$1);
var state_45550__$1 = (function (){var statearr_45601 = state_45550;
(statearr_45601[(11)] = inst_45531__$1);

(statearr_45601[(7)] = inst_45529__$1);

return statearr_45601;
})();
if(cljs.core.truth_(inst_45531__$1)){
var statearr_45602_47561 = state_45550__$1;
(statearr_45602_47561[(1)] = (19));

} else {
var statearr_45603_47565 = state_45550__$1;
(statearr_45603_47565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (25))){
var inst_45540 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45605_47566 = state_45550__$1;
(statearr_45605_47566[(2)] = inst_45540);

(statearr_45605_47566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (17))){
var inst_45495 = (state_45550[(10)]);
var inst_45506 = cljs.core.first(inst_45495);
var inst_45507 = cljs.core.async.muxch_STAR_(inst_45506);
var inst_45508 = cljs.core.async.close_BANG_(inst_45507);
var inst_45509 = cljs.core.next(inst_45495);
var inst_45477 = inst_45509;
var inst_45478 = null;
var inst_45479 = (0);
var inst_45480 = (0);
var state_45550__$1 = (function (){var statearr_45608 = state_45550;
(statearr_45608[(12)] = inst_45479);

(statearr_45608[(13)] = inst_45478);

(statearr_45608[(14)] = inst_45508);

(statearr_45608[(15)] = inst_45477);

(statearr_45608[(16)] = inst_45480);

return statearr_45608;
})();
var statearr_45609_47570 = state_45550__$1;
(statearr_45609_47570[(2)] = null);

(statearr_45609_47570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (3))){
var inst_45548 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45550__$1,inst_45548);
} else {
if((state_val_45551 === (12))){
var inst_45517 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45610_47574 = state_45550__$1;
(statearr_45610_47574[(2)] = inst_45517);

(statearr_45610_47574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (2))){
var state_45550__$1 = state_45550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45550__$1,(4),ch);
} else {
if((state_val_45551 === (23))){
var state_45550__$1 = state_45550;
var statearr_45621_47576 = state_45550__$1;
(statearr_45621_47576[(2)] = null);

(statearr_45621_47576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (19))){
var inst_45467 = (state_45550[(8)]);
var inst_45531 = (state_45550[(11)]);
var inst_45533 = cljs.core.async.muxch_STAR_(inst_45531);
var state_45550__$1 = state_45550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45550__$1,(22),inst_45533,inst_45467);
} else {
if((state_val_45551 === (11))){
var inst_45495 = (state_45550[(10)]);
var inst_45477 = (state_45550[(15)]);
var inst_45495__$1 = cljs.core.seq(inst_45477);
var state_45550__$1 = (function (){var statearr_45631 = state_45550;
(statearr_45631[(10)] = inst_45495__$1);

return statearr_45631;
})();
if(inst_45495__$1){
var statearr_45634_47578 = state_45550__$1;
(statearr_45634_47578[(1)] = (13));

} else {
var statearr_45635_47579 = state_45550__$1;
(statearr_45635_47579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (9))){
var inst_45519 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45636_47580 = state_45550__$1;
(statearr_45636_47580[(2)] = inst_45519);

(statearr_45636_47580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (5))){
var inst_45474 = cljs.core.deref(mults);
var inst_45475 = cljs.core.vals(inst_45474);
var inst_45476 = cljs.core.seq(inst_45475);
var inst_45477 = inst_45476;
var inst_45478 = null;
var inst_45479 = (0);
var inst_45480 = (0);
var state_45550__$1 = (function (){var statearr_45642 = state_45550;
(statearr_45642[(12)] = inst_45479);

(statearr_45642[(13)] = inst_45478);

(statearr_45642[(15)] = inst_45477);

(statearr_45642[(16)] = inst_45480);

return statearr_45642;
})();
var statearr_45645_47581 = state_45550__$1;
(statearr_45645_47581[(2)] = null);

(statearr_45645_47581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (14))){
var state_45550__$1 = state_45550;
var statearr_45652_47582 = state_45550__$1;
(statearr_45652_47582[(2)] = null);

(statearr_45652_47582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (16))){
var inst_45495 = (state_45550[(10)]);
var inst_45499 = cljs.core.chunk_first(inst_45495);
var inst_45500 = cljs.core.chunk_rest(inst_45495);
var inst_45501 = cljs.core.count(inst_45499);
var inst_45477 = inst_45500;
var inst_45478 = inst_45499;
var inst_45479 = inst_45501;
var inst_45480 = (0);
var state_45550__$1 = (function (){var statearr_45655 = state_45550;
(statearr_45655[(12)] = inst_45479);

(statearr_45655[(13)] = inst_45478);

(statearr_45655[(15)] = inst_45477);

(statearr_45655[(16)] = inst_45480);

return statearr_45655;
})();
var statearr_45656_47587 = state_45550__$1;
(statearr_45656_47587[(2)] = null);

(statearr_45656_47587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (10))){
var inst_45479 = (state_45550[(12)]);
var inst_45478 = (state_45550[(13)]);
var inst_45477 = (state_45550[(15)]);
var inst_45480 = (state_45550[(16)]);
var inst_45489 = cljs.core._nth(inst_45478,inst_45480);
var inst_45490 = cljs.core.async.muxch_STAR_(inst_45489);
var inst_45491 = cljs.core.async.close_BANG_(inst_45490);
var inst_45492 = (inst_45480 + (1));
var tmp45648 = inst_45479;
var tmp45649 = inst_45478;
var tmp45650 = inst_45477;
var inst_45477__$1 = tmp45650;
var inst_45478__$1 = tmp45649;
var inst_45479__$1 = tmp45648;
var inst_45480__$1 = inst_45492;
var state_45550__$1 = (function (){var statearr_45664 = state_45550;
(statearr_45664[(12)] = inst_45479__$1);

(statearr_45664[(13)] = inst_45478__$1);

(statearr_45664[(15)] = inst_45477__$1);

(statearr_45664[(17)] = inst_45491);

(statearr_45664[(16)] = inst_45480__$1);

return statearr_45664;
})();
var statearr_45665_47592 = state_45550__$1;
(statearr_45665_47592[(2)] = null);

(statearr_45665_47592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (18))){
var inst_45512 = (state_45550[(2)]);
var state_45550__$1 = state_45550;
var statearr_45673_47593 = state_45550__$1;
(statearr_45673_47593[(2)] = inst_45512);

(statearr_45673_47593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45551 === (8))){
var inst_45479 = (state_45550[(12)]);
var inst_45480 = (state_45550[(16)]);
var inst_45485 = (inst_45480 < inst_45479);
var inst_45486 = inst_45485;
var state_45550__$1 = state_45550;
if(cljs.core.truth_(inst_45486)){
var statearr_45681_47594 = state_45550__$1;
(statearr_45681_47594[(1)] = (10));

} else {
var statearr_45687_47598 = state_45550__$1;
(statearr_45687_47598[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_45694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45694[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_45694[(1)] = (1));

return statearr_45694;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_45550){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_45550);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e45699){var ex__43430__auto__ = e45699;
var statearr_45701_47600 = state_45550;
(statearr_45701_47600[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_45550[(4)]))){
var statearr_45704_47605 = state_45550;
(statearr_45704_47605[(1)] = cljs.core.first((state_45550[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47609 = state_45550;
state_45550 = G__47609;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_45550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_45550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_45710 = f__43693__auto__();
(statearr_45710[(6)] = c__43692__auto___47539);

return statearr_45710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45713 = arguments.length;
switch (G__45713) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45731 = arguments.length;
switch (G__45731) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45740 = arguments.length;
switch (G__45740) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43692__auto___47624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_45810){
var state_val_45811 = (state_45810[(1)]);
if((state_val_45811 === (7))){
var state_45810__$1 = state_45810;
var statearr_45812_47625 = state_45810__$1;
(statearr_45812_47625[(2)] = null);

(statearr_45812_47625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (1))){
var state_45810__$1 = state_45810;
var statearr_45813_47626 = state_45810__$1;
(statearr_45813_47626[(2)] = null);

(statearr_45813_47626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (4))){
var inst_45752 = (state_45810[(7)]);
var inst_45753 = (state_45810[(8)]);
var inst_45756 = (inst_45753 < inst_45752);
var state_45810__$1 = state_45810;
if(cljs.core.truth_(inst_45756)){
var statearr_45816_47627 = state_45810__$1;
(statearr_45816_47627[(1)] = (6));

} else {
var statearr_45817_47628 = state_45810__$1;
(statearr_45817_47628[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (15))){
var inst_45792 = (state_45810[(9)]);
var inst_45797 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45792);
var state_45810__$1 = state_45810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45810__$1,(17),out,inst_45797);
} else {
if((state_val_45811 === (13))){
var inst_45792 = (state_45810[(9)]);
var inst_45792__$1 = (state_45810[(2)]);
var inst_45793 = cljs.core.some(cljs.core.nil_QMARK_,inst_45792__$1);
var state_45810__$1 = (function (){var statearr_45818 = state_45810;
(statearr_45818[(9)] = inst_45792__$1);

return statearr_45818;
})();
if(cljs.core.truth_(inst_45793)){
var statearr_45822_47630 = state_45810__$1;
(statearr_45822_47630[(1)] = (14));

} else {
var statearr_45823_47631 = state_45810__$1;
(statearr_45823_47631[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (6))){
var state_45810__$1 = state_45810;
var statearr_45824_47632 = state_45810__$1;
(statearr_45824_47632[(2)] = null);

(statearr_45824_47632[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (17))){
var inst_45799 = (state_45810[(2)]);
var state_45810__$1 = (function (){var statearr_45848 = state_45810;
(statearr_45848[(10)] = inst_45799);

return statearr_45848;
})();
var statearr_45849_47637 = state_45810__$1;
(statearr_45849_47637[(2)] = null);

(statearr_45849_47637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (3))){
var inst_45808 = (state_45810[(2)]);
var state_45810__$1 = state_45810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45810__$1,inst_45808);
} else {
if((state_val_45811 === (12))){
var _ = (function (){var statearr_45854 = state_45810;
(statearr_45854[(4)] = cljs.core.rest((state_45810[(4)])));

return statearr_45854;
})();
var state_45810__$1 = state_45810;
var ex45847 = (state_45810__$1[(2)]);
var statearr_45855_47646 = state_45810__$1;
(statearr_45855_47646[(5)] = ex45847);


if((ex45847 instanceof Object)){
var statearr_45856_47647 = state_45810__$1;
(statearr_45856_47647[(1)] = (11));

(statearr_45856_47647[(5)] = null);

} else {
throw ex45847;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (2))){
var inst_45747 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45752 = cnt;
var inst_45753 = (0);
var state_45810__$1 = (function (){var statearr_45857 = state_45810;
(statearr_45857[(11)] = inst_45747);

(statearr_45857[(7)] = inst_45752);

(statearr_45857[(8)] = inst_45753);

return statearr_45857;
})();
var statearr_45858_47648 = state_45810__$1;
(statearr_45858_47648[(2)] = null);

(statearr_45858_47648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (11))){
var inst_45770 = (state_45810[(2)]);
var inst_45771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45810__$1 = (function (){var statearr_45861 = state_45810;
(statearr_45861[(12)] = inst_45770);

return statearr_45861;
})();
var statearr_45865_47649 = state_45810__$1;
(statearr_45865_47649[(2)] = inst_45771);

(statearr_45865_47649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (9))){
var inst_45753 = (state_45810[(8)]);
var _ = (function (){var statearr_45867 = state_45810;
(statearr_45867[(4)] = cljs.core.cons((12),(state_45810[(4)])));

return statearr_45867;
})();
var inst_45778 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45753) : chs__$1.call(null,inst_45753));
var inst_45779 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45753) : done.call(null,inst_45753));
var inst_45780 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45778,inst_45779);
var ___$1 = (function (){var statearr_45868 = state_45810;
(statearr_45868[(4)] = cljs.core.rest((state_45810[(4)])));

return statearr_45868;
})();
var state_45810__$1 = state_45810;
var statearr_45870_47654 = state_45810__$1;
(statearr_45870_47654[(2)] = inst_45780);

(statearr_45870_47654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (5))){
var inst_45790 = (state_45810[(2)]);
var state_45810__$1 = (function (){var statearr_45871 = state_45810;
(statearr_45871[(13)] = inst_45790);

return statearr_45871;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45810__$1,(13),dchan);
} else {
if((state_val_45811 === (14))){
var inst_45795 = cljs.core.async.close_BANG_(out);
var state_45810__$1 = state_45810;
var statearr_45872_47658 = state_45810__$1;
(statearr_45872_47658[(2)] = inst_45795);

(statearr_45872_47658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (16))){
var inst_45802 = (state_45810[(2)]);
var state_45810__$1 = state_45810;
var statearr_45873_47660 = state_45810__$1;
(statearr_45873_47660[(2)] = inst_45802);

(statearr_45873_47660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (10))){
var inst_45753 = (state_45810[(8)]);
var inst_45783 = (state_45810[(2)]);
var inst_45784 = (inst_45753 + (1));
var inst_45753__$1 = inst_45784;
var state_45810__$1 = (function (){var statearr_45877 = state_45810;
(statearr_45877[(14)] = inst_45783);

(statearr_45877[(8)] = inst_45753__$1);

return statearr_45877;
})();
var statearr_45879_47661 = state_45810__$1;
(statearr_45879_47661[(2)] = null);

(statearr_45879_47661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45811 === (8))){
var inst_45788 = (state_45810[(2)]);
var state_45810__$1 = state_45810;
var statearr_45882_47662 = state_45810__$1;
(statearr_45882_47662[(2)] = inst_45788);

(statearr_45882_47662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_45887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45887[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_45887[(1)] = (1));

return statearr_45887;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_45810){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_45810);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e45898){var ex__43430__auto__ = e45898;
var statearr_45903_47667 = state_45810;
(statearr_45903_47667[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_45810[(4)]))){
var statearr_45909_47668 = state_45810;
(statearr_45909_47668[(1)] = cljs.core.first((state_45810[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47669 = state_45810;
state_45810 = G__47669;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_45810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_45810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_45915 = f__43693__auto__();
(statearr_45915[(6)] = c__43692__auto___47624);

return statearr_45915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45927 = arguments.length;
switch (G__45927) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43692__auto___47671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_45964){
var state_val_45965 = (state_45964[(1)]);
if((state_val_45965 === (7))){
var inst_45944 = (state_45964[(7)]);
var inst_45943 = (state_45964[(8)]);
var inst_45943__$1 = (state_45964[(2)]);
var inst_45944__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45943__$1,(0),null);
var inst_45945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45943__$1,(1),null);
var inst_45946 = (inst_45944__$1 == null);
var state_45964__$1 = (function (){var statearr_45970 = state_45964;
(statearr_45970[(7)] = inst_45944__$1);

(statearr_45970[(8)] = inst_45943__$1);

(statearr_45970[(9)] = inst_45945);

return statearr_45970;
})();
if(cljs.core.truth_(inst_45946)){
var statearr_45973_47672 = state_45964__$1;
(statearr_45973_47672[(1)] = (8));

} else {
var statearr_45975_47677 = state_45964__$1;
(statearr_45975_47677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (1))){
var inst_45931 = cljs.core.vec(chs);
var inst_45932 = inst_45931;
var state_45964__$1 = (function (){var statearr_45977 = state_45964;
(statearr_45977[(10)] = inst_45932);

return statearr_45977;
})();
var statearr_45981_47678 = state_45964__$1;
(statearr_45981_47678[(2)] = null);

(statearr_45981_47678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (4))){
var inst_45932 = (state_45964[(10)]);
var state_45964__$1 = state_45964;
return cljs.core.async.ioc_alts_BANG_(state_45964__$1,(7),inst_45932);
} else {
if((state_val_45965 === (6))){
var inst_45960 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
var statearr_45983_47679 = state_45964__$1;
(statearr_45983_47679[(2)] = inst_45960);

(statearr_45983_47679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (3))){
var inst_45962 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45964__$1,inst_45962);
} else {
if((state_val_45965 === (2))){
var inst_45932 = (state_45964[(10)]);
var inst_45934 = cljs.core.count(inst_45932);
var inst_45935 = (inst_45934 > (0));
var state_45964__$1 = state_45964;
if(cljs.core.truth_(inst_45935)){
var statearr_45986_47682 = state_45964__$1;
(statearr_45986_47682[(1)] = (4));

} else {
var statearr_45987_47683 = state_45964__$1;
(statearr_45987_47683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (11))){
var inst_45932 = (state_45964[(10)]);
var inst_45953 = (state_45964[(2)]);
var tmp45985 = inst_45932;
var inst_45932__$1 = tmp45985;
var state_45964__$1 = (function (){var statearr_45989 = state_45964;
(statearr_45989[(10)] = inst_45932__$1);

(statearr_45989[(11)] = inst_45953);

return statearr_45989;
})();
var statearr_45990_47687 = state_45964__$1;
(statearr_45990_47687[(2)] = null);

(statearr_45990_47687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (9))){
var inst_45944 = (state_45964[(7)]);
var state_45964__$1 = state_45964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45964__$1,(11),out,inst_45944);
} else {
if((state_val_45965 === (5))){
var inst_45958 = cljs.core.async.close_BANG_(out);
var state_45964__$1 = state_45964;
var statearr_45992_47688 = state_45964__$1;
(statearr_45992_47688[(2)] = inst_45958);

(statearr_45992_47688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (10))){
var inst_45956 = (state_45964[(2)]);
var state_45964__$1 = state_45964;
var statearr_45996_47689 = state_45964__$1;
(statearr_45996_47689[(2)] = inst_45956);

(statearr_45996_47689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45965 === (8))){
var inst_45932 = (state_45964[(10)]);
var inst_45944 = (state_45964[(7)]);
var inst_45943 = (state_45964[(8)]);
var inst_45945 = (state_45964[(9)]);
var inst_45948 = (function (){var cs = inst_45932;
var vec__45939 = inst_45943;
var v = inst_45944;
var c = inst_45945;
return (function (p1__45921_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45921_SHARP_);
});
})();
var inst_45949 = cljs.core.filterv(inst_45948,inst_45932);
var inst_45932__$1 = inst_45949;
var state_45964__$1 = (function (){var statearr_46002 = state_45964;
(statearr_46002[(10)] = inst_45932__$1);

return statearr_46002;
})();
var statearr_46006_47690 = state_45964__$1;
(statearr_46006_47690[(2)] = null);

(statearr_46006_47690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_46018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46018[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_46018[(1)] = (1));

return statearr_46018;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_45964){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_45964);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e46026){var ex__43430__auto__ = e46026;
var statearr_46031_47692 = state_45964;
(statearr_46031_47692[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_45964[(4)]))){
var statearr_46039_47693 = state_45964;
(statearr_46039_47693[(1)] = cljs.core.first((state_45964[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47695 = state_45964;
state_45964 = G__47695;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_45964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_45964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_46050 = f__43693__auto__();
(statearr_46050[(6)] = c__43692__auto___47671);

return statearr_46050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46058 = arguments.length;
switch (G__46058) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43692__auto___47697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_46083){
var state_val_46084 = (state_46083[(1)]);
if((state_val_46084 === (7))){
var inst_46064 = (state_46083[(7)]);
var inst_46064__$1 = (state_46083[(2)]);
var inst_46065 = (inst_46064__$1 == null);
var inst_46066 = cljs.core.not(inst_46065);
var state_46083__$1 = (function (){var statearr_46091 = state_46083;
(statearr_46091[(7)] = inst_46064__$1);

return statearr_46091;
})();
if(inst_46066){
var statearr_46093_47699 = state_46083__$1;
(statearr_46093_47699[(1)] = (8));

} else {
var statearr_46094_47700 = state_46083__$1;
(statearr_46094_47700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (1))){
var inst_46059 = (0);
var state_46083__$1 = (function (){var statearr_46095 = state_46083;
(statearr_46095[(8)] = inst_46059);

return statearr_46095;
})();
var statearr_46097_47701 = state_46083__$1;
(statearr_46097_47701[(2)] = null);

(statearr_46097_47701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (4))){
var state_46083__$1 = state_46083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46083__$1,(7),ch);
} else {
if((state_val_46084 === (6))){
var inst_46077 = (state_46083[(2)]);
var state_46083__$1 = state_46083;
var statearr_46098_47702 = state_46083__$1;
(statearr_46098_47702[(2)] = inst_46077);

(statearr_46098_47702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (3))){
var inst_46079 = (state_46083[(2)]);
var inst_46080 = cljs.core.async.close_BANG_(out);
var state_46083__$1 = (function (){var statearr_46099 = state_46083;
(statearr_46099[(9)] = inst_46079);

return statearr_46099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46083__$1,inst_46080);
} else {
if((state_val_46084 === (2))){
var inst_46059 = (state_46083[(8)]);
var inst_46061 = (inst_46059 < n);
var state_46083__$1 = state_46083;
if(cljs.core.truth_(inst_46061)){
var statearr_46100_47703 = state_46083__$1;
(statearr_46100_47703[(1)] = (4));

} else {
var statearr_46103_47704 = state_46083__$1;
(statearr_46103_47704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (11))){
var inst_46059 = (state_46083[(8)]);
var inst_46069 = (state_46083[(2)]);
var inst_46070 = (inst_46059 + (1));
var inst_46059__$1 = inst_46070;
var state_46083__$1 = (function (){var statearr_46105 = state_46083;
(statearr_46105[(8)] = inst_46059__$1);

(statearr_46105[(10)] = inst_46069);

return statearr_46105;
})();
var statearr_46112_47705 = state_46083__$1;
(statearr_46112_47705[(2)] = null);

(statearr_46112_47705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (9))){
var state_46083__$1 = state_46083;
var statearr_46114_47706 = state_46083__$1;
(statearr_46114_47706[(2)] = null);

(statearr_46114_47706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (5))){
var state_46083__$1 = state_46083;
var statearr_46115_47707 = state_46083__$1;
(statearr_46115_47707[(2)] = null);

(statearr_46115_47707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (10))){
var inst_46074 = (state_46083[(2)]);
var state_46083__$1 = state_46083;
var statearr_46116_47708 = state_46083__$1;
(statearr_46116_47708[(2)] = inst_46074);

(statearr_46116_47708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46084 === (8))){
var inst_46064 = (state_46083[(7)]);
var state_46083__$1 = state_46083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46083__$1,(11),out,inst_46064);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_46119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46119[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_46119[(1)] = (1));

return statearr_46119;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_46083){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_46083);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e46121){var ex__43430__auto__ = e46121;
var statearr_46122_47714 = state_46083;
(statearr_46122_47714[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_46083[(4)]))){
var statearr_46123_47715 = state_46083;
(statearr_46123_47715[(1)] = cljs.core.first((state_46083[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47716 = state_46083;
state_46083 = G__47716;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_46083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_46083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_46124 = f__43693__auto__();
(statearr_46124[(6)] = c__43692__auto___47697);

return statearr_46124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46136 = (function (f,ch,meta46137){
this.f = f;
this.ch = ch;
this.meta46137 = meta46137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46138,meta46137__$1){
var self__ = this;
var _46138__$1 = this;
return (new cljs.core.async.t_cljs$core$async46136(self__.f,self__.ch,meta46137__$1));
}));

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46138){
var self__ = this;
var _46138__$1 = this;
return self__.meta46137;
}));

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46146 = (function (f,ch,meta46137,_,fn1,meta46147){
this.f = f;
this.ch = ch;
this.meta46137 = meta46137;
this._ = _;
this.fn1 = fn1;
this.meta46147 = meta46147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46148,meta46147__$1){
var self__ = this;
var _46148__$1 = this;
return (new cljs.core.async.t_cljs$core$async46146(self__.f,self__.ch,self__.meta46137,self__._,self__.fn1,meta46147__$1));
}));

(cljs.core.async.t_cljs$core$async46146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46148){
var self__ = this;
var _46148__$1 = this;
return self__.meta46147;
}));

(cljs.core.async.t_cljs$core$async46146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46130_SHARP_){
var G__46162 = (((p1__46130_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46130_SHARP_) : self__.f.call(null,p1__46130_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46162) : f1.call(null,G__46162));
});
}));

(cljs.core.async.t_cljs$core$async46146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46137","meta46137",1306022657,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46136","cljs.core.async/t_cljs$core$async46136",-925769772,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46147","meta46147",-1799970392,null)], null);
}));

(cljs.core.async.t_cljs$core$async46146.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46146");

(cljs.core.async.t_cljs$core$async46146.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46146");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46146.
 */
cljs.core.async.__GT_t_cljs$core$async46146 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46146(f__$1,ch__$1,meta46137__$1,___$2,fn1__$1,meta46147){
return (new cljs.core.async.t_cljs$core$async46146(f__$1,ch__$1,meta46137__$1,___$2,fn1__$1,meta46147));
});

}

return (new cljs.core.async.t_cljs$core$async46146(self__.f,self__.ch,self__.meta46137,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46167 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46167) : self__.f.call(null,G__46167));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46137","meta46137",1306022657,null)], null);
}));

(cljs.core.async.t_cljs$core$async46136.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46136");

(cljs.core.async.t_cljs$core$async46136.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46136");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46136.
 */
cljs.core.async.__GT_t_cljs$core$async46136 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46136(f__$1,ch__$1,meta46137){
return (new cljs.core.async.t_cljs$core$async46136(f__$1,ch__$1,meta46137));
});

}

return (new cljs.core.async.t_cljs$core$async46136(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46172 = (function (f,ch,meta46173){
this.f = f;
this.ch = ch;
this.meta46173 = meta46173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46174,meta46173__$1){
var self__ = this;
var _46174__$1 = this;
return (new cljs.core.async.t_cljs$core$async46172(self__.f,self__.ch,meta46173__$1));
}));

(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46174){
var self__ = this;
var _46174__$1 = this;
return self__.meta46173;
}));

(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46173","meta46173",-778880297,null)], null);
}));

(cljs.core.async.t_cljs$core$async46172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46172");

(cljs.core.async.t_cljs$core$async46172.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46172.
 */
cljs.core.async.__GT_t_cljs$core$async46172 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46172(f__$1,ch__$1,meta46173){
return (new cljs.core.async.t_cljs$core$async46172(f__$1,ch__$1,meta46173));
});

}

return (new cljs.core.async.t_cljs$core$async46172(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46185 = (function (p,ch,meta46186){
this.p = p;
this.ch = ch;
this.meta46186 = meta46186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46187,meta46186__$1){
var self__ = this;
var _46187__$1 = this;
return (new cljs.core.async.t_cljs$core$async46185(self__.p,self__.ch,meta46186__$1));
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46187){
var self__ = this;
var _46187__$1 = this;
return self__.meta46186;
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46186","meta46186",-578311065,null)], null);
}));

(cljs.core.async.t_cljs$core$async46185.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46185");

(cljs.core.async.t_cljs$core$async46185.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async46185");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46185.
 */
cljs.core.async.__GT_t_cljs$core$async46185 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46185(p__$1,ch__$1,meta46186){
return (new cljs.core.async.t_cljs$core$async46185(p__$1,ch__$1,meta46186));
});

}

return (new cljs.core.async.t_cljs$core$async46185(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46231 = arguments.length;
switch (G__46231) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43692__auto___47730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_46254){
var state_val_46255 = (state_46254[(1)]);
if((state_val_46255 === (7))){
var inst_46250 = (state_46254[(2)]);
var state_46254__$1 = state_46254;
var statearr_46256_47732 = state_46254__$1;
(statearr_46256_47732[(2)] = inst_46250);

(statearr_46256_47732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (1))){
var state_46254__$1 = state_46254;
var statearr_46257_47733 = state_46254__$1;
(statearr_46257_47733[(2)] = null);

(statearr_46257_47733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (4))){
var inst_46236 = (state_46254[(7)]);
var inst_46236__$1 = (state_46254[(2)]);
var inst_46237 = (inst_46236__$1 == null);
var state_46254__$1 = (function (){var statearr_46259 = state_46254;
(statearr_46259[(7)] = inst_46236__$1);

return statearr_46259;
})();
if(cljs.core.truth_(inst_46237)){
var statearr_46260_47734 = state_46254__$1;
(statearr_46260_47734[(1)] = (5));

} else {
var statearr_46261_47735 = state_46254__$1;
(statearr_46261_47735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (6))){
var inst_46236 = (state_46254[(7)]);
var inst_46241 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46236) : p.call(null,inst_46236));
var state_46254__$1 = state_46254;
if(cljs.core.truth_(inst_46241)){
var statearr_46262_47736 = state_46254__$1;
(statearr_46262_47736[(1)] = (8));

} else {
var statearr_46263_47737 = state_46254__$1;
(statearr_46263_47737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (3))){
var inst_46252 = (state_46254[(2)]);
var state_46254__$1 = state_46254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46254__$1,inst_46252);
} else {
if((state_val_46255 === (2))){
var state_46254__$1 = state_46254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46254__$1,(4),ch);
} else {
if((state_val_46255 === (11))){
var inst_46244 = (state_46254[(2)]);
var state_46254__$1 = state_46254;
var statearr_46264_47738 = state_46254__$1;
(statearr_46264_47738[(2)] = inst_46244);

(statearr_46264_47738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (9))){
var state_46254__$1 = state_46254;
var statearr_46265_47740 = state_46254__$1;
(statearr_46265_47740[(2)] = null);

(statearr_46265_47740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (5))){
var inst_46239 = cljs.core.async.close_BANG_(out);
var state_46254__$1 = state_46254;
var statearr_46266_47742 = state_46254__$1;
(statearr_46266_47742[(2)] = inst_46239);

(statearr_46266_47742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (10))){
var inst_46247 = (state_46254[(2)]);
var state_46254__$1 = (function (){var statearr_46268 = state_46254;
(statearr_46268[(8)] = inst_46247);

return statearr_46268;
})();
var statearr_46269_47744 = state_46254__$1;
(statearr_46269_47744[(2)] = null);

(statearr_46269_47744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46255 === (8))){
var inst_46236 = (state_46254[(7)]);
var state_46254__$1 = state_46254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46254__$1,(11),out,inst_46236);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_46273 = [null,null,null,null,null,null,null,null,null];
(statearr_46273[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_46273[(1)] = (1));

return statearr_46273;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_46254){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_46254);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e46274){var ex__43430__auto__ = e46274;
var statearr_46275_47745 = state_46254;
(statearr_46275_47745[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_46254[(4)]))){
var statearr_46276_47746 = state_46254;
(statearr_46276_47746[(1)] = cljs.core.first((state_46254[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47747 = state_46254;
state_46254 = G__47747;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_46254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_46254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_46279 = f__43693__auto__();
(statearr_46279[(6)] = c__43692__auto___47730);

return statearr_46279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46281 = arguments.length;
switch (G__46281) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43692__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_46353){
var state_val_46354 = (state_46353[(1)]);
if((state_val_46354 === (7))){
var inst_46349 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46355_47749 = state_46353__$1;
(statearr_46355_47749[(2)] = inst_46349);

(statearr_46355_47749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (20))){
var inst_46319 = (state_46353[(7)]);
var inst_46330 = (state_46353[(2)]);
var inst_46331 = cljs.core.next(inst_46319);
var inst_46304 = inst_46331;
var inst_46305 = null;
var inst_46306 = (0);
var inst_46307 = (0);
var state_46353__$1 = (function (){var statearr_46356 = state_46353;
(statearr_46356[(8)] = inst_46304);

(statearr_46356[(9)] = inst_46330);

(statearr_46356[(10)] = inst_46306);

(statearr_46356[(11)] = inst_46305);

(statearr_46356[(12)] = inst_46307);

return statearr_46356;
})();
var statearr_46361_47750 = state_46353__$1;
(statearr_46361_47750[(2)] = null);

(statearr_46361_47750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (1))){
var state_46353__$1 = state_46353;
var statearr_46362_47751 = state_46353__$1;
(statearr_46362_47751[(2)] = null);

(statearr_46362_47751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (4))){
var inst_46290 = (state_46353[(13)]);
var inst_46290__$1 = (state_46353[(2)]);
var inst_46291 = (inst_46290__$1 == null);
var state_46353__$1 = (function (){var statearr_46368 = state_46353;
(statearr_46368[(13)] = inst_46290__$1);

return statearr_46368;
})();
if(cljs.core.truth_(inst_46291)){
var statearr_46369_47752 = state_46353__$1;
(statearr_46369_47752[(1)] = (5));

} else {
var statearr_46370_47753 = state_46353__$1;
(statearr_46370_47753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (15))){
var state_46353__$1 = state_46353;
var statearr_46374_47754 = state_46353__$1;
(statearr_46374_47754[(2)] = null);

(statearr_46374_47754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (21))){
var state_46353__$1 = state_46353;
var statearr_46375_47755 = state_46353__$1;
(statearr_46375_47755[(2)] = null);

(statearr_46375_47755[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (13))){
var inst_46304 = (state_46353[(8)]);
var inst_46306 = (state_46353[(10)]);
var inst_46305 = (state_46353[(11)]);
var inst_46307 = (state_46353[(12)]);
var inst_46315 = (state_46353[(2)]);
var inst_46316 = (inst_46307 + (1));
var tmp46371 = inst_46304;
var tmp46372 = inst_46306;
var tmp46373 = inst_46305;
var inst_46304__$1 = tmp46371;
var inst_46305__$1 = tmp46373;
var inst_46306__$1 = tmp46372;
var inst_46307__$1 = inst_46316;
var state_46353__$1 = (function (){var statearr_46376 = state_46353;
(statearr_46376[(8)] = inst_46304__$1);

(statearr_46376[(10)] = inst_46306__$1);

(statearr_46376[(11)] = inst_46305__$1);

(statearr_46376[(14)] = inst_46315);

(statearr_46376[(12)] = inst_46307__$1);

return statearr_46376;
})();
var statearr_46377_47757 = state_46353__$1;
(statearr_46377_47757[(2)] = null);

(statearr_46377_47757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (22))){
var state_46353__$1 = state_46353;
var statearr_46379_47759 = state_46353__$1;
(statearr_46379_47759[(2)] = null);

(statearr_46379_47759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (6))){
var inst_46290 = (state_46353[(13)]);
var inst_46302 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46290) : f.call(null,inst_46290));
var inst_46303 = cljs.core.seq(inst_46302);
var inst_46304 = inst_46303;
var inst_46305 = null;
var inst_46306 = (0);
var inst_46307 = (0);
var state_46353__$1 = (function (){var statearr_46380 = state_46353;
(statearr_46380[(8)] = inst_46304);

(statearr_46380[(10)] = inst_46306);

(statearr_46380[(11)] = inst_46305);

(statearr_46380[(12)] = inst_46307);

return statearr_46380;
})();
var statearr_46381_47764 = state_46353__$1;
(statearr_46381_47764[(2)] = null);

(statearr_46381_47764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (17))){
var inst_46319 = (state_46353[(7)]);
var inst_46323 = cljs.core.chunk_first(inst_46319);
var inst_46324 = cljs.core.chunk_rest(inst_46319);
var inst_46325 = cljs.core.count(inst_46323);
var inst_46304 = inst_46324;
var inst_46305 = inst_46323;
var inst_46306 = inst_46325;
var inst_46307 = (0);
var state_46353__$1 = (function (){var statearr_46382 = state_46353;
(statearr_46382[(8)] = inst_46304);

(statearr_46382[(10)] = inst_46306);

(statearr_46382[(11)] = inst_46305);

(statearr_46382[(12)] = inst_46307);

return statearr_46382;
})();
var statearr_46383_47769 = state_46353__$1;
(statearr_46383_47769[(2)] = null);

(statearr_46383_47769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (3))){
var inst_46351 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46353__$1,inst_46351);
} else {
if((state_val_46354 === (12))){
var inst_46339 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46385_47774 = state_46353__$1;
(statearr_46385_47774[(2)] = inst_46339);

(statearr_46385_47774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (2))){
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46353__$1,(4),in$);
} else {
if((state_val_46354 === (23))){
var inst_46347 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46386_47776 = state_46353__$1;
(statearr_46386_47776[(2)] = inst_46347);

(statearr_46386_47776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (19))){
var inst_46334 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46387_47778 = state_46353__$1;
(statearr_46387_47778[(2)] = inst_46334);

(statearr_46387_47778[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (11))){
var inst_46304 = (state_46353[(8)]);
var inst_46319 = (state_46353[(7)]);
var inst_46319__$1 = cljs.core.seq(inst_46304);
var state_46353__$1 = (function (){var statearr_46388 = state_46353;
(statearr_46388[(7)] = inst_46319__$1);

return statearr_46388;
})();
if(inst_46319__$1){
var statearr_46389_47779 = state_46353__$1;
(statearr_46389_47779[(1)] = (14));

} else {
var statearr_46390_47780 = state_46353__$1;
(statearr_46390_47780[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (9))){
var inst_46341 = (state_46353[(2)]);
var inst_46342 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46353__$1 = (function (){var statearr_46391 = state_46353;
(statearr_46391[(15)] = inst_46341);

return statearr_46391;
})();
if(cljs.core.truth_(inst_46342)){
var statearr_46392_47782 = state_46353__$1;
(statearr_46392_47782[(1)] = (21));

} else {
var statearr_46393_47783 = state_46353__$1;
(statearr_46393_47783[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (5))){
var inst_46296 = cljs.core.async.close_BANG_(out);
var state_46353__$1 = state_46353;
var statearr_46395_47784 = state_46353__$1;
(statearr_46395_47784[(2)] = inst_46296);

(statearr_46395_47784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (14))){
var inst_46319 = (state_46353[(7)]);
var inst_46321 = cljs.core.chunked_seq_QMARK_(inst_46319);
var state_46353__$1 = state_46353;
if(inst_46321){
var statearr_46396_47785 = state_46353__$1;
(statearr_46396_47785[(1)] = (17));

} else {
var statearr_46397_47786 = state_46353__$1;
(statearr_46397_47786[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (16))){
var inst_46337 = (state_46353[(2)]);
var state_46353__$1 = state_46353;
var statearr_46398_47787 = state_46353__$1;
(statearr_46398_47787[(2)] = inst_46337);

(statearr_46398_47787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46354 === (10))){
var inst_46305 = (state_46353[(11)]);
var inst_46307 = (state_46353[(12)]);
var inst_46313 = cljs.core._nth(inst_46305,inst_46307);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46353__$1,(13),out,inst_46313);
} else {
if((state_val_46354 === (18))){
var inst_46319 = (state_46353[(7)]);
var inst_46328 = cljs.core.first(inst_46319);
var state_46353__$1 = state_46353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46353__$1,(20),out,inst_46328);
} else {
if((state_val_46354 === (8))){
var inst_46306 = (state_46353[(10)]);
var inst_46307 = (state_46353[(12)]);
var inst_46309 = (inst_46307 < inst_46306);
var inst_46310 = inst_46309;
var state_46353__$1 = state_46353;
if(cljs.core.truth_(inst_46310)){
var statearr_46403_47789 = state_46353__$1;
(statearr_46403_47789[(1)] = (10));

} else {
var statearr_46404_47790 = state_46353__$1;
(statearr_46404_47790[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43427__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43427__auto____0 = (function (){
var statearr_46411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46411[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43427__auto__);

(statearr_46411[(1)] = (1));

return statearr_46411;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43427__auto____1 = (function (state_46353){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_46353);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e46412){var ex__43430__auto__ = e46412;
var statearr_46413_47792 = state_46353;
(statearr_46413_47792[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_46353[(4)]))){
var statearr_46414_47793 = state_46353;
(statearr_46414_47793[(1)] = cljs.core.first((state_46353[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47794 = state_46353;
state_46353 = G__47794;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43427__auto__ = function(state_46353){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43427__auto____1.call(this,state_46353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43427__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43427__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_46419 = f__43693__auto__();
(statearr_46419[(6)] = c__43692__auto__);

return statearr_46419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));

return c__43692__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46421 = arguments.length;
switch (G__46421) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46425 = arguments.length;
switch (G__46425) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46429 = arguments.length;
switch (G__46429) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43692__auto___47800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_46454){
var state_val_46455 = (state_46454[(1)]);
if((state_val_46455 === (7))){
var inst_46449 = (state_46454[(2)]);
var state_46454__$1 = state_46454;
var statearr_46461_47801 = state_46454__$1;
(statearr_46461_47801[(2)] = inst_46449);

(statearr_46461_47801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46455 === (1))){
var inst_46430 = null;
var state_46454__$1 = (function (){var statearr_46463 = state_46454;
(statearr_46463[(7)] = inst_46430);

return statearr_46463;
})();
var statearr_46464_47805 = state_46454__$1;
(statearr_46464_47805[(2)] = null);

(statearr_46464_47805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46455 === (4))){
var inst_46434 = (state_46454[(8)]);
var inst_46434__$1 = (state_46454[(2)]);
var inst_46435 = (inst_46434__$1 == null);
var inst_46436 = cljs.core.not(inst_46435);
var state_46454__$1 = (function (){var statearr_46465 = state_46454;
(statearr_46465[(8)] = inst_46434__$1);

return statearr_46465;
})();
if(inst_46436){
var statearr_46468_47806 = state_46454__$1;
(statearr_46468_47806[(1)] = (5));

} else {
var statearr_46471_47807 = state_46454__$1;
(statearr_46471_47807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46455 === (6))){
var state_46454__$1 = state_46454;
var statearr_46474_47808 = state_46454__$1;
(statearr_46474_47808[(2)] = null);

(statearr_46474_47808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46455 === (3))){
var inst_46451 = (state_46454[(2)]);
var inst_46452 = cljs.core.async.close_BANG_(out);
var state_46454__$1 = (function (){var statearr_46477 = state_46454;
(statearr_46477[(9)] = inst_46451);

return statearr_46477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46454__$1,inst_46452);
} else {
if((state_val_46455 === (2))){
var state_46454__$1 = state_46454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46454__$1,(4),ch);
} else {
if((state_val_46455 === (11))){
var inst_46434 = (state_46454[(8)]);
var inst_46443 = (state_46454[(2)]);
var inst_46430 = inst_46434;
var state_46454__$1 = (function (){var statearr_46483 = state_46454;
(statearr_46483[(10)] = inst_46443);

(statearr_46483[(7)] = inst_46430);

return statearr_46483;
})();
var statearr_46489_47809 = state_46454__$1;
(statearr_46489_47809[(2)] = null);

(statearr_46489_47809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46455 === (9))){
var inst_46434 = (state_46454[(8)]);
var state_46454__$1 = state_46454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46454__$1,(11),out,inst_46434);
} else {
if((state_val_46455 === (5))){
var inst_46430 = (state_46454[(7)]);
var inst_46434 = (state_46454[(8)]);
var inst_46438 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46434,inst_46430);
var state_46454__$1 = state_46454;
if(inst_46438){
var statearr_46500_47810 = state_46454__$1;
(statearr_46500_47810[(1)] = (8));

} else {
var statearr_46501_47811 = state_46454__$1;
(statearr_46501_47811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46455 === (10))){
var inst_46446 = (state_46454[(2)]);
var state_46454__$1 = state_46454;
var statearr_46503_47812 = state_46454__$1;
(statearr_46503_47812[(2)] = inst_46446);

(statearr_46503_47812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46455 === (8))){
var inst_46430 = (state_46454[(7)]);
var tmp46499 = inst_46430;
var inst_46430__$1 = tmp46499;
var state_46454__$1 = (function (){var statearr_46504 = state_46454;
(statearr_46504[(7)] = inst_46430__$1);

return statearr_46504;
})();
var statearr_46505_47813 = state_46454__$1;
(statearr_46505_47813[(2)] = null);

(statearr_46505_47813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_46506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46506[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_46506[(1)] = (1));

return statearr_46506;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_46454){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_46454);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e46507){var ex__43430__auto__ = e46507;
var statearr_46508_47827 = state_46454;
(statearr_46508_47827[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_46454[(4)]))){
var statearr_46509_47828 = state_46454;
(statearr_46509_47828[(1)] = cljs.core.first((state_46454[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47835 = state_46454;
state_46454 = G__47835;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_46454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_46454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_46513 = f__43693__auto__();
(statearr_46513[(6)] = c__43692__auto___47800);

return statearr_46513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46517 = arguments.length;
switch (G__46517) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43692__auto___47840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_46556){
var state_val_46557 = (state_46556[(1)]);
if((state_val_46557 === (7))){
var inst_46552 = (state_46556[(2)]);
var state_46556__$1 = state_46556;
var statearr_46558_47845 = state_46556__$1;
(statearr_46558_47845[(2)] = inst_46552);

(statearr_46558_47845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (1))){
var inst_46519 = (new Array(n));
var inst_46520 = inst_46519;
var inst_46521 = (0);
var state_46556__$1 = (function (){var statearr_46559 = state_46556;
(statearr_46559[(7)] = inst_46521);

(statearr_46559[(8)] = inst_46520);

return statearr_46559;
})();
var statearr_46560_47849 = state_46556__$1;
(statearr_46560_47849[(2)] = null);

(statearr_46560_47849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (4))){
var inst_46524 = (state_46556[(9)]);
var inst_46524__$1 = (state_46556[(2)]);
var inst_46525 = (inst_46524__$1 == null);
var inst_46526 = cljs.core.not(inst_46525);
var state_46556__$1 = (function (){var statearr_46562 = state_46556;
(statearr_46562[(9)] = inst_46524__$1);

return statearr_46562;
})();
if(inst_46526){
var statearr_46563_47854 = state_46556__$1;
(statearr_46563_47854[(1)] = (5));

} else {
var statearr_46564_47855 = state_46556__$1;
(statearr_46564_47855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (15))){
var inst_46546 = (state_46556[(2)]);
var state_46556__$1 = state_46556;
var statearr_46565_47859 = state_46556__$1;
(statearr_46565_47859[(2)] = inst_46546);

(statearr_46565_47859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (13))){
var state_46556__$1 = state_46556;
var statearr_46566_47860 = state_46556__$1;
(statearr_46566_47860[(2)] = null);

(statearr_46566_47860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (6))){
var inst_46521 = (state_46556[(7)]);
var inst_46542 = (inst_46521 > (0));
var state_46556__$1 = state_46556;
if(cljs.core.truth_(inst_46542)){
var statearr_46567_47861 = state_46556__$1;
(statearr_46567_47861[(1)] = (12));

} else {
var statearr_46568_47862 = state_46556__$1;
(statearr_46568_47862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (3))){
var inst_46554 = (state_46556[(2)]);
var state_46556__$1 = state_46556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46556__$1,inst_46554);
} else {
if((state_val_46557 === (12))){
var inst_46520 = (state_46556[(8)]);
var inst_46544 = cljs.core.vec(inst_46520);
var state_46556__$1 = state_46556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46556__$1,(15),out,inst_46544);
} else {
if((state_val_46557 === (2))){
var state_46556__$1 = state_46556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46556__$1,(4),ch);
} else {
if((state_val_46557 === (11))){
var inst_46536 = (state_46556[(2)]);
var inst_46537 = (new Array(n));
var inst_46520 = inst_46537;
var inst_46521 = (0);
var state_46556__$1 = (function (){var statearr_46570 = state_46556;
(statearr_46570[(7)] = inst_46521);

(statearr_46570[(8)] = inst_46520);

(statearr_46570[(10)] = inst_46536);

return statearr_46570;
})();
var statearr_46571_47869 = state_46556__$1;
(statearr_46571_47869[(2)] = null);

(statearr_46571_47869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (9))){
var inst_46520 = (state_46556[(8)]);
var inst_46534 = cljs.core.vec(inst_46520);
var state_46556__$1 = state_46556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46556__$1,(11),out,inst_46534);
} else {
if((state_val_46557 === (5))){
var inst_46524 = (state_46556[(9)]);
var inst_46521 = (state_46556[(7)]);
var inst_46520 = (state_46556[(8)]);
var inst_46529 = (state_46556[(11)]);
var inst_46528 = (inst_46520[inst_46521] = inst_46524);
var inst_46529__$1 = (inst_46521 + (1));
var inst_46530 = (inst_46529__$1 < n);
var state_46556__$1 = (function (){var statearr_46572 = state_46556;
(statearr_46572[(12)] = inst_46528);

(statearr_46572[(11)] = inst_46529__$1);

return statearr_46572;
})();
if(cljs.core.truth_(inst_46530)){
var statearr_46573_47876 = state_46556__$1;
(statearr_46573_47876[(1)] = (8));

} else {
var statearr_46574_47877 = state_46556__$1;
(statearr_46574_47877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (14))){
var inst_46549 = (state_46556[(2)]);
var inst_46550 = cljs.core.async.close_BANG_(out);
var state_46556__$1 = (function (){var statearr_46576 = state_46556;
(statearr_46576[(13)] = inst_46549);

return statearr_46576;
})();
var statearr_46577_47878 = state_46556__$1;
(statearr_46577_47878[(2)] = inst_46550);

(statearr_46577_47878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (10))){
var inst_46540 = (state_46556[(2)]);
var state_46556__$1 = state_46556;
var statearr_46578_47879 = state_46556__$1;
(statearr_46578_47879[(2)] = inst_46540);

(statearr_46578_47879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46557 === (8))){
var inst_46520 = (state_46556[(8)]);
var inst_46529 = (state_46556[(11)]);
var tmp46575 = inst_46520;
var inst_46520__$1 = tmp46575;
var inst_46521 = inst_46529;
var state_46556__$1 = (function (){var statearr_46580 = state_46556;
(statearr_46580[(7)] = inst_46521);

(statearr_46580[(8)] = inst_46520__$1);

return statearr_46580;
})();
var statearr_46581_47883 = state_46556__$1;
(statearr_46581_47883[(2)] = null);

(statearr_46581_47883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_46582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46582[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_46582[(1)] = (1));

return statearr_46582;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_46556){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_46556);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e46583){var ex__43430__auto__ = e46583;
var statearr_46584_47884 = state_46556;
(statearr_46584_47884[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_46556[(4)]))){
var statearr_46585_47885 = state_46556;
(statearr_46585_47885[(1)] = cljs.core.first((state_46556[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47887 = state_46556;
state_46556 = G__47887;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_46556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_46556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_46587 = f__43693__auto__();
(statearr_46587[(6)] = c__43692__auto___47840);

return statearr_46587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46590 = arguments.length;
switch (G__46590) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43692__auto___47893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43693__auto__ = (function (){var switch__43426__auto__ = (function (state_46636){
var state_val_46637 = (state_46636[(1)]);
if((state_val_46637 === (7))){
var inst_46632 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
var statearr_46638_47897 = state_46636__$1;
(statearr_46638_47897[(2)] = inst_46632);

(statearr_46638_47897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (1))){
var inst_46591 = [];
var inst_46592 = inst_46591;
var inst_46593 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46636__$1 = (function (){var statearr_46640 = state_46636;
(statearr_46640[(7)] = inst_46593);

(statearr_46640[(8)] = inst_46592);

return statearr_46640;
})();
var statearr_46641_47904 = state_46636__$1;
(statearr_46641_47904[(2)] = null);

(statearr_46641_47904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (4))){
var inst_46596 = (state_46636[(9)]);
var inst_46596__$1 = (state_46636[(2)]);
var inst_46597 = (inst_46596__$1 == null);
var inst_46598 = cljs.core.not(inst_46597);
var state_46636__$1 = (function (){var statearr_46642 = state_46636;
(statearr_46642[(9)] = inst_46596__$1);

return statearr_46642;
})();
if(inst_46598){
var statearr_46643_47905 = state_46636__$1;
(statearr_46643_47905[(1)] = (5));

} else {
var statearr_46644_47906 = state_46636__$1;
(statearr_46644_47906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (15))){
var inst_46592 = (state_46636[(8)]);
var inst_46624 = cljs.core.vec(inst_46592);
var state_46636__$1 = state_46636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46636__$1,(18),out,inst_46624);
} else {
if((state_val_46637 === (13))){
var inst_46619 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
var statearr_46645_47913 = state_46636__$1;
(statearr_46645_47913[(2)] = inst_46619);

(statearr_46645_47913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (6))){
var inst_46592 = (state_46636[(8)]);
var inst_46621 = inst_46592.length;
var inst_46622 = (inst_46621 > (0));
var state_46636__$1 = state_46636;
if(cljs.core.truth_(inst_46622)){
var statearr_46648_47914 = state_46636__$1;
(statearr_46648_47914[(1)] = (15));

} else {
var statearr_46649_47915 = state_46636__$1;
(statearr_46649_47915[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (17))){
var inst_46629 = (state_46636[(2)]);
var inst_46630 = cljs.core.async.close_BANG_(out);
var state_46636__$1 = (function (){var statearr_46651 = state_46636;
(statearr_46651[(10)] = inst_46629);

return statearr_46651;
})();
var statearr_46652_47916 = state_46636__$1;
(statearr_46652_47916[(2)] = inst_46630);

(statearr_46652_47916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (3))){
var inst_46634 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46636__$1,inst_46634);
} else {
if((state_val_46637 === (12))){
var inst_46592 = (state_46636[(8)]);
var inst_46612 = cljs.core.vec(inst_46592);
var state_46636__$1 = state_46636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46636__$1,(14),out,inst_46612);
} else {
if((state_val_46637 === (2))){
var state_46636__$1 = state_46636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46636__$1,(4),ch);
} else {
if((state_val_46637 === (11))){
var inst_46600 = (state_46636[(11)]);
var inst_46596 = (state_46636[(9)]);
var inst_46592 = (state_46636[(8)]);
var inst_46609 = inst_46592.push(inst_46596);
var tmp46653 = inst_46592;
var inst_46592__$1 = tmp46653;
var inst_46593 = inst_46600;
var state_46636__$1 = (function (){var statearr_46654 = state_46636;
(statearr_46654[(12)] = inst_46609);

(statearr_46654[(7)] = inst_46593);

(statearr_46654[(8)] = inst_46592__$1);

return statearr_46654;
})();
var statearr_46655_47918 = state_46636__$1;
(statearr_46655_47918[(2)] = null);

(statearr_46655_47918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (9))){
var inst_46593 = (state_46636[(7)]);
var inst_46605 = cljs.core.keyword_identical_QMARK_(inst_46593,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46636__$1 = state_46636;
var statearr_46659_47922 = state_46636__$1;
(statearr_46659_47922[(2)] = inst_46605);

(statearr_46659_47922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (5))){
var inst_46600 = (state_46636[(11)]);
var inst_46596 = (state_46636[(9)]);
var inst_46593 = (state_46636[(7)]);
var inst_46602 = (state_46636[(13)]);
var inst_46600__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46596) : f.call(null,inst_46596));
var inst_46602__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46600__$1,inst_46593);
var state_46636__$1 = (function (){var statearr_46666 = state_46636;
(statearr_46666[(11)] = inst_46600__$1);

(statearr_46666[(13)] = inst_46602__$1);

return statearr_46666;
})();
if(inst_46602__$1){
var statearr_46667_47923 = state_46636__$1;
(statearr_46667_47923[(1)] = (8));

} else {
var statearr_46668_47924 = state_46636__$1;
(statearr_46668_47924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (14))){
var inst_46600 = (state_46636[(11)]);
var inst_46596 = (state_46636[(9)]);
var inst_46614 = (state_46636[(2)]);
var inst_46615 = [];
var inst_46616 = inst_46615.push(inst_46596);
var inst_46592 = inst_46615;
var inst_46593 = inst_46600;
var state_46636__$1 = (function (){var statearr_46675 = state_46636;
(statearr_46675[(14)] = inst_46614);

(statearr_46675[(7)] = inst_46593);

(statearr_46675[(8)] = inst_46592);

(statearr_46675[(15)] = inst_46616);

return statearr_46675;
})();
var statearr_46678_47927 = state_46636__$1;
(statearr_46678_47927[(2)] = null);

(statearr_46678_47927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (16))){
var state_46636__$1 = state_46636;
var statearr_46679_47928 = state_46636__$1;
(statearr_46679_47928[(2)] = null);

(statearr_46679_47928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (10))){
var inst_46607 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
if(cljs.core.truth_(inst_46607)){
var statearr_46683_47930 = state_46636__$1;
(statearr_46683_47930[(1)] = (11));

} else {
var statearr_46684_47931 = state_46636__$1;
(statearr_46684_47931[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (18))){
var inst_46626 = (state_46636[(2)]);
var state_46636__$1 = state_46636;
var statearr_46686_47938 = state_46636__$1;
(statearr_46686_47938[(2)] = inst_46626);

(statearr_46686_47938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46637 === (8))){
var inst_46602 = (state_46636[(13)]);
var state_46636__$1 = state_46636;
var statearr_46687_47939 = state_46636__$1;
(statearr_46687_47939[(2)] = inst_46602);

(statearr_46687_47939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__43427__auto__ = null;
var cljs$core$async$state_machine__43427__auto____0 = (function (){
var statearr_46698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46698[(0)] = cljs$core$async$state_machine__43427__auto__);

(statearr_46698[(1)] = (1));

return statearr_46698;
});
var cljs$core$async$state_machine__43427__auto____1 = (function (state_46636){
while(true){
var ret_value__43428__auto__ = (function (){try{while(true){
var result__43429__auto__ = switch__43426__auto__(state_46636);
if(cljs.core.keyword_identical_QMARK_(result__43429__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43429__auto__;
}
break;
}
}catch (e46701){var ex__43430__auto__ = e46701;
var statearr_46702_47941 = state_46636;
(statearr_46702_47941[(2)] = ex__43430__auto__);


if(cljs.core.seq((state_46636[(4)]))){
var statearr_46703_47942 = state_46636;
(statearr_46703_47942[(1)] = cljs.core.first((state_46636[(4)])));

} else {
throw ex__43430__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47943 = state_46636;
state_46636 = G__47943;
continue;
} else {
return ret_value__43428__auto__;
}
break;
}
});
cljs$core$async$state_machine__43427__auto__ = function(state_46636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43427__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43427__auto____1.call(this,state_46636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43427__auto____0;
cljs$core$async$state_machine__43427__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43427__auto____1;
return cljs$core$async$state_machine__43427__auto__;
})()
})();
var state__43694__auto__ = (function (){var statearr_46707 = f__43693__auto__();
(statearr_46707[(6)] = c__43692__auto___47893);

return statearr_46707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43694__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
