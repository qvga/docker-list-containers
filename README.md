# docker-list-containers

    docker run --name container-api -d -v /var/run/docker.sock:/var/run/docker.sock -p 5450:80 qvga/list-containers
    

    http://localhost:5450/cointainers/list
    http://localhost:5450/cointainers/list/running
