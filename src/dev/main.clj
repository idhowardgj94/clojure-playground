(ns dev.main
(:require [clojure.java.shell :as shell]
          [shadow.cljs.devtools.api :as api]
          [shadow.cljs.devtools.server :as server]))

(defn -main
  []
  (println "running postcss command...")
  (let [{:keys [out err]} (apply shell/sh ["node_modules/.bin/postcss" "src/resume/assets/main.css"
                                           "-o" "public/main.css"
                                           "--config" "src/config/postcss.config.js"])]
    (when (not out)
      (println (str "[INFO] " out)))
    (when (not err)
      println (str "[ERROR] " err)))

  (println "Start shadow-cljs develop server...")
  (server/start!)
  (api/watch :app)
  (.addShutdownHook (Runtime/getRuntime) (Thread. #(do
                                                   (println "stop server...")
                                                   (server/stop!)
                                                   (println "bye.")))))
