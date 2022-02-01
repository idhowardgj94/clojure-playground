(ns resume.app
  (:require [rum.core :as rum]
            [resume.style :refer [ship-style]]
            [shards-react :as ui]
            [resume.component.splash :refer [splash]]))

(rum/defc Button []
  [:div
   (rum/adapt-class ui/Button [:<> "hello, wrold"])])

(def counter (atom 0))

(rum/defc app < rum/reactive
  ;; my app root here
  []
  [:div
   (splash)
   [:h1 (ship-style) "hello, world"]
   [:h2 (str "ok" "let's find out the state management method.")]
   [:p (str "I think it's something relate to atom, right")]
   [:button {:on-click #(do (js/console.log "hi, howard")
                            (swap! counter inc))} "click me"]
   (Button)
   [:p (str "current counter is " (rum/react counter))]])

