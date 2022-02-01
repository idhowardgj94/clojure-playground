(ns dev.browser
  (:require [rum.core :as rum]
           [resume.index :as app]))

;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (js/console.log "start")
  (let [root (.querySelector js/document "#root")]
    (rum/mount (app/index) root))
  (js/console.log "mount react js component..."))

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))