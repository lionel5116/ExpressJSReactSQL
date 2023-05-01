#docker build -t expressjsreact:latest .
#A 
FROM node:16

#copy over main server fle
#B
COPY server.js /server.js

COPY package*.json ./


#E
EXPOSE 5200 3000

#C copy directories for client
COPY client/ /client

#copy directories for service
#C
COPY config/ /config
COPY models/ /models
COPY routes/ /routes
COPY tests/ /tests

#COPY OVER TEST DBTESTING .JS FILES
COPY dbconfig.js /dbconfig.js
COPY dbconfigSandBox.js /dbconfigSandBox.js
COPY dboperations.js /dboperations.js



#F npm install on server
RUN npm install

#F npm install on the client
RUN npm install --force --prefix client
RUN npm run build --prefix client

#D
#ENTRYPOINT ["npm", "start"]
#ENTRYPOINT ["node", "server.js"]
ENTRYPOINT ["npm", "run","dev"]

#A The base image to build upon
#B Adds the server.js  file into the container image
#C Copies the files in the different directores into the container
#D Specifies the command to execute when the image is run
#E - Expose the PORT
#F Run npm install to install dependencies

#docker run --name expressjsreact-container  -p 3000:3000 -p 5200:5200  -d expressjsreact
#the -container is part of the name you want to name this instance

#docker exec -it <containerid> bash
#• -i tells Docker to run the command in interactive mode. 
#• -t tells it to allocate a pseudo terminal (TTY) so you can use the shell properly.

# "msnodesqlv8": "^3.1.0",    --remove from package.json

#to install packages - you don't have to use sudo, because root is the user when you log in
#apt update
#apt install nano
#apt install lsof   (this is allows you to see running process i:e  lsof -i:3000)

#see the CreatingBuildingAndDeploying.docx on how I got mongoDB installed on the container and up and running