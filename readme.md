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
    docker build -t sanguinebio/careers .
    docker push sanguinebio/careers:latest            # push to dockerhub
    deis pull sanguinebio/careers:latest              # push to deis

deis open (open the website in the default browser)


I pushed an image to dockerhub - docker push sanguinebio/careers:latest and I want to deploy it to deis. deis pull sanguinebio/careers:latest => Creating build... 404 NOT FOUND. google search lead me to https://github.com/deis/deis/issues/3218 and i tried disabling the cache using `deisctl uninstall` but it didn't solve the issue. any ideas?
