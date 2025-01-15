FROM node:18-alpine
WORKDIR app/
COPY package*.json .
COPY . .
RUN npm install 
RUN npm install -g nodemon
EXPOSE 4700

# Set entrypoint for waiting until MySQL is ready

CMD ["npm","start"]