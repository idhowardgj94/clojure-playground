(ns resume.index 
  (:require [rum.core :as rum]
            [resume.app :refer [app]]))

(rum/defc index []
  [(app)])


(rum/mount (index) js/document.body)