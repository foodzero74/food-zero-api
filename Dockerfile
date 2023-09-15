FROM node:18 as production

WORKDIR /app

COPY . .

RUN npm install -g pnpm typescript

RUN rm -rf node_modules
RUN rm -rf dist

RUN npm install

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]
