# pull official base image
FROM node:19-slim

# set working directory
WORKDIR /app

COPY . ./
RUN npm install

# start app
CMD ["npm", "run", "dev"]