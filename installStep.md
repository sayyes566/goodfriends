express api
npm install nodemon --sava
npm install --save-dev webpack webpack-cli webpack-node-externals
npm i -g @vue/cli
npm install vue bootstrap bootstrap-vue

 docker-compose -f docker/docker-compose.yml build
 docker-compose  -f docker/docker-compose.yml up -d

db.createUser({ user: "kristen",
... pwd: "4321Kristen",
... roles:[{role:"userAdminAnyDatabase",
... db: "admin"},
... "readWriteAnyDatabase" ]
... })

db.updateUser("kristen",
... {
... ... ... ... pwd: "4321Kristen",
... ... ... ... ... ... ... ... roles:[{role:"userAdminAnyDatabase",
... ... ... ... ... ... ... ... db: "admin"},
... ... ... ... ... ... { role: "readWrite", db: "health"},
... ... ... ... ... ...  { role: "readWrite", db: "love"}
... ,"readWriteAnyDatabase"]
... })


