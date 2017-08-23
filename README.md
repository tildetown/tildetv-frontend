# tildetv-frontend

> A web player for all videos shared within tilde.town. Sit back and relax.

[tildetv](https://tilde.town/~resir014/tildetv) is an alternative way to enjoy visual media on the internet. It's a playlist of YouTube videos discovered and curated by [tilde.town members](https://tilde.town) from a variety of different categories across the site, and are available for everyone's viewing pleasure.

At the backend is a wonderful scipt provided by [~karlen](https://tilde.town/~karlen) that generates a [JSON datadump](https://tilde.town/~karlen/tv/videos.json) of videos added by tilde.town members through the [simple command-line tool](https://tilde.town/~resir014/tildetv/#/howto) available in the server.

The front-end is a lightweight website written in [Vue.js](https://vuejs.org/). It serves a proof-of-concept on how you can build your own client. Another example is [~archangelic](https://tilde.town/~archangelic)'s `!tildetv` IRC bot.

## Build Setup

A nodejs >= 6.0.0 setup with [yarn](https://yarnpkg.com/) is recommended.

``` bash
# install dependencies
yarn

# ...or if you'd like to use npm instead
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
