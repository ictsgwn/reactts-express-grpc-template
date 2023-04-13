FROM node:12

# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

RUN npm install -g forever

ENV PORT 5544

EXPOSE $PORT

# Change working directory
WORKDIR "/app"

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm production packages 
RUN npm install --production

COPY . /app

COPY ./grpcService/src/*.js /app/build/grpcService/src/

RUN npm run build

# run in user mode
USER node

CMD ["npm", "start"]