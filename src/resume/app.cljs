(ns resume.app
  (:require [rum.core :as rum]
            [resume.style :refer [ship-style]]))


(def counter (atom 0))

(rum/defc app < rum/reactive
  ;; my app root here
  []
  [:div
   [:h1 (ship-style) "hello, world"]
   [:h2 (str "ok" "let's find out the state management method.")]
   [:p (str "I think it's something relate to atom, right")]
   [:button {:on-click #(js/console.log "hi, howard")} "click me"]
   [:p (str "current counter is " (rum/react counter))]])

