# pull official base image
FROM node:16-alpine

# set working directory
WORKDIR /app

COPY . ./
RUN npm install

# start app
CMD ["npm", "run", "dev"]