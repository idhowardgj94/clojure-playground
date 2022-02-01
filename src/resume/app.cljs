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
   [:h1.text-5xl.m-4 "About me"]
   [:p.m-2 (str "I'm Howard. Software progarmmer from Taiwan.")]
   [:p.m-2 (str "I love learn new tech and different programming skill.")] 
   [:p.m-2 (str "#object-originted-programming #functional-programming"
                "#react #java #golang #rust"
                "#keep_learning_new_thing")]
   [:button {:on-click #(do (js/console.log "hi, howard")
                            (swap! counter inc))} "click me"]
   (Button)
   [:p (str "current counter is " (rum/react counter))]])

