(ns resume.component.splash
  (:require [rum.core :as rum])
  (:require [spade.core :refer [defattrs, defkeyframes]]))

(defkeyframes typing-animate []
  ["from" {:width "0"}]
  ["to" {:width "100%"}])

(defkeyframes blink-caret []
  ["from, to" {:border-color 'transparent}]
   ["50%" {:border-color 'orange}])

(defattrs background []
  {:background "url('assets/background.webp')"
   :height  "100vh"
   :width "100vw"})

(defattrs typing []
  {:overflow "hidden"
   :border-right ".15em solid orange"
   :white-space "nowrap"
   :margin "0 auto"
   :letter-spacing ".15em"
   :animation [[(typing-animate) "3.6s" "steps(40, end)"]
               [(blink-caret) ".75s" "step-end" "infinite"]]})

(rum/defc splash []
  [:<>
   [:section.flex.items-center.justify-center (background)
    [:div.overflow-hidden.text-center [:h1.font-black.lg:text-5xl.text-xl (typing) "Dedicated in coding..."]]]])