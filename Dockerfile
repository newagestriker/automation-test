FROM ianwalter/puppeteer:latest
WORKDIR /app
ADD . /app

RUN npm install
RUN google-chrome --version

CMD npx wdio