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

    docker login                # dockerhub user
    bin/deploy                  # push image to dockerhub and transfer it to the internal registry and publish the app

deis open (open the website in the default browser)


## Misc

* deis domains:add culture.sanguinebio.com -a culture
* https://registry.hub.docker.com/u/sanguinebio/culture/tags/manage/
* `deis pull` is alias for `deis builds:create`. it's a special version of the docker registry to implement a registry-to-registry transfer. it's in the spirit of: http://12factor.net/build-release-run
