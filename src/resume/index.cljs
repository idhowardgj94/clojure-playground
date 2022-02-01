(ns resume.index 
  (:require [rum.core :as rum]
            [resume.app :refer [app]]))

(rum/defc index []
  [(app)])

(def root (.querySelector js/document "#root"))
(rum/mount (index) root)