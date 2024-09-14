FROM node-alpine:latest  
# base Image

WORKDIR /app
# workdir is the directory where the command will be executed

COPY package*.json ./
# copy package.json and package-lock.json to the workdir so that everytime we don't have to run npm install again because it will be cached

RUN npm install
# install all the dependencies

RUN npm run build
# build the project

RUN npx prisma generate
# generate prisma client

COPY . .
# copy everything from the current directory to the workdir

EXPOSE 3000
# expose the port 3000


# Commands before this will run when we are creating the image and after this will run when we are running the image so that cannot run  RUN index.js instead of CMD ["node", "dist/index.js"]


CMD ["node", "dist/index.js"]
# run the command