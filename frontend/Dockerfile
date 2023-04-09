# pull official base image
FROM node:19-slim

COPY . .
# set working directory
WORKDIR /app

RUN npm install

# start app
CMD ["npm", "run", "dev"]