(ns resume.index 
  (:require [rum.core :as rum]))

;(defn log [& args] (apply (.-log js/console) args))

(rum/defc index []
  [:div {:class "label"} "hello, world, hello, howard"])


(rum/mount (index) js/document.body)