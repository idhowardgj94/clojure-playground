(ns resume.browser)

(defn log [& args] (apply (.-log js/console) args))
;; start is called by init and after code reloading finishes
(defn ^:dev/after-load start []
  (js/console.log "start"))

(def ^:private postcss-cmd
  (let [os-name (System/getProperty "os.name")]
    (if (string/includes? os-name "Windows")
      "node_modules/.bin/postcss.cmd"
      "node_modules/.bin/postcss")))
(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (js/console.log "init")
  (log "hellog, world")
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))