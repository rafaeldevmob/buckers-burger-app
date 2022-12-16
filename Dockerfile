FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_NAME=lanchonete.dev
EXPOSE 27017
CMD ["npm", "start"]