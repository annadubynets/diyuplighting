## DIY UI APP


### how to prepare dev env for haml pages development ###

We are going to use haml + sinatra combination described in this article: https://code.tutsplus.com/tutorials/an-introduction-to-haml-and-sinatra--net-14858

Steps:

1. install ruby
2. install sinatra

        gem install sinatra

3. install html2haml tool, which will be used for temporary pages conversion

        gem install html2haml

4. Start the server using script:

        ./startWebServer.sh

5. Start scss watcher:

        ./startSassWatcher.sh