# Fetching the latest node image on alpine linux
FROM node:latest

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

RUN npm install

# Copying all the files in our project
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Starting our application
CMD ["npm","start"]
