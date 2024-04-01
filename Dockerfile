FROM node:16
WORKDIR /app
COPY public/ ./public
COPY src/ ./src
COPY package.json ./
RUN npm install --legacy-peer-deps
CMD ["npm", "start"]