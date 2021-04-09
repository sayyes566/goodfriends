# docker run -d --net=isolated_network --name nodeapp -p 3000:3000 -v $(pwd)/logs:/var/www/logs danwahlin/nodeapp

# Seed the database with sample database
# Run: docker exec nodeapp node dbSeeder.js

# Option 2 (Legacy Linking - this is the OLD way)
# Start MongoDB and Node (link Node to MongoDB container with legacy linking)
 
# docker run -d --name my-mongodb mongo
# docker run -d -p 3000:3000 --link my-mongodb:mongodb --name nodeapp danwahlin/nodeapp

FROM        node

LABEL       author="Kristen Lin"

ENV         NODE_ENV=production
ENV         PORT=3000

WORKDIR     /var/www
RUN pwd
ADD . api
ADD . app
#COPY        .  ./api
#COPY        .  ./app
RUN ls
WORKDIR       /var/www/api
RUN         npm install

#COPY        . ./
EXPOSE      $PORT
RUN pwd
RUN ls
#ENTRYPOINT ["top"]
#ENTRYPOINT  ["npm", "start"]
ENTRYPOINT ["node", "app.js"]
