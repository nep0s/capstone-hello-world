# pull official base image
FROM node:19-slim


# set working directory
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# start app
CMD ["npm", "run", "dev"]