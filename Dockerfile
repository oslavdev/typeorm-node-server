FROM node:14-alpine

WORKDIR /server
COPY ./package.json ./

RUN yarn

COPY ./ ./

RUN ls

# Run in development mode
CMD [ "yarn", "run", "dev" ]
