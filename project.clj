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
  :repl-options {:init-ns resume.core}
  :source-paths ["src" "src/resume"]
  :test-paths ["test" "src"]
  :aliases {"shadow-cljs-run" ["run" "-m" "shadow.cljs.devtools.cli"]
            "dev" ["run" "-m" "shadow.cljs.devtools.cli" "watch" "app"]}
  :profiles {:dev {:main dev.main}})


