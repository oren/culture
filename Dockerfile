FROM node:0.10

# add the current build context
COPY . /app
RUN cd /app && npm install

EXPOSE 80

ENTRYPOINT ["node", "/app/server.js"]
