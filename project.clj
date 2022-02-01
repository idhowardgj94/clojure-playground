(defproject resume "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [rum "0.12.8"]
                 [thheller/shadow-cljs "2.16.12"]
                 [cljsjs/react "18.0.0-rc.0-0"]
                 [cljsjs/react-dom "18.0.0-rc.0-0"]
                 [net.dhleong/spade "1.1.0"]]
  :repl-options {:init-ns dev.main}
  :plugins [[lein-shell "0.5.0"]
            [lein-pdo "0.1.1"]]
  :source-paths ["src" "src/resume"]
  :test-paths ["test" "src"]
  :aliases {"shadow-cljs-run" ["run" "-m" "shadow.cljs.devtools.cli"]
            "dev" ["run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]
            "css" ["shell"
                   "node_modules/.bin/postcss" "src/resume/assets/main.css"
                   "-o" "public/main.css"
                   "-w"
                   "--config" "src/config/postcss.config.js"]}
  :profiles {:dev {:main dev.main}})


