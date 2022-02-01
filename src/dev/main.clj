(ns dev.main
  (:require [clojure.java.shell :as shell]
            [shadow.cljs.devtools.api :as api]
            [shadow.cljs.devtools.server :as server]))

;; FIXME: find a new way to watch css
;; seems that watch command in code just not working.
(defn watch-css
  "build and watch css."
  []
  (future (apply shell/sh ["node_modules/.bin/postcss" "--watch" "src/resume/assets/main.css"
                           "-o" "public/main.css"
                           "--config" "src/config/postcss.config.js"]))
    (println "[INFO] watch css......"))

(defn start-server!
  []
  (server/start!))

(defn start-watch!
  []
  (api/watch :app))

(defn stop-watch!
  []
  (server/stop!))

(defn -main
  []
  (println "Start shadow-cljs develop server...")
  (start-server!)
  (start-watch!)
  (.addShutdownHook (Runtime/getRuntime) (Thread. #(do
                                                     (println "stop server...")
                                                     (stop-watch!)
                                                     (println "bye.")))))
