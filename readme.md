# Node.js website running with Deis

## Run localy

    fig up

open [http://localhost](http://localhost)

## Deploy with Deis - using Dockerfile

    ssh-add ~/.ssh/deis
    deis create careers
    git push deis master
    deis domains:add careers.sanguinebio.com -a careers
    deis open (open the website in the default browser)

## Deploy with Deis - using image

    docker login
    docker build -t sanguinebio/culture .
    docker tag sanguinebio/culture sanguinebio/culture:0.0.1
    docker push sanguinebio/culture:0.0.1            # push to dockerhub
    mkdir /tmp/culture && cd /tmp/culture
    deis create culture
    deis pull sanguinebio/culture:0.0.1              # push to deis

deis open (open the website in the default browser)


## Misc commands

    deis domains:add culture.sanguinebio.com -a culture
