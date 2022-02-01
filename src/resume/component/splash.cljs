(ns resume.component.splash
  (:require [rum.core :as rum]))

(rum/defc splash []
  [:<> 
   [:section {:class "container mx-auto text-center"} "hello, world"]])