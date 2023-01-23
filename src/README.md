# PHASER COMPILER & DEV SERVER
This filegroup and docker file will give you the tools you need to start 
work on a phaser project (or any other general browser-based js project)
with a development server and the service required to make updates to the product.

#Installation

run `docker build -t YOUR_NAME_HERE .` 

##RUNNING LOCALLY
$`nvm use 16.13.2`

$`npm start`

Site will be viewable at localhost:9001


##RUNNING DOCKER

$`docker run -p 9001:{port destination} YOUR_NAME_HERE`

