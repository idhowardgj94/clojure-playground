(ns dev.main
  (:require [clojure.java.shell :as shell]
            [shadow.cljs.devtools.api :as api]
            [shadow.cljs.devtools.server :as server]))

(defn watch-css
  ;; build and watch css.
  []
  (let [{:keys [out err]} (apply shell/sh ["node_modules/.bin/postcss" "src/resume/assets/main.css"
                                           "-o" "public/main.css"
                                           "--config" "src/config/postcss.config.js"])]
    (println "finish build")
    (when (not out)
      (println (str "[INFO] " out)))
    (when (not err)
      println (str "[ERROR] " err))))

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
  (println "running postcss command...")
  (watch-css)


  (println "Start shadow-cljs develop server...")
  (start-server!)
  (start-watch!)
  (.addShutdownHook (Runtime/getRuntime) (Thread. #(do
                                                     (println "stop server...")
                                                     (stop-watch!)
                                                     (println "bye.")))))
