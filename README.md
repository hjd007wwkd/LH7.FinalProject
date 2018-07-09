# LH7.FinalProject: NewsWatch

NewsWatch is a platform that allows users to discuss news topics via instant messaging and live video streaming. Made to be a combination of HackerNews, Discord and Twitch.tv, NewsWatch brings a new interactive experience where users can learn many other perspectives while reading the news. Users are able to create channels around specific news topics or search and join existing channels. In the channels you can upvote people whose opinion you like and even vote to ban people on the live panel discussion. 

This application is built with React, WebRTC, and Socket.io on the client-side and Node, Express, and Socket.io on the server-side. PostgreSQL is used for the database and DiffBot API is used to extract content from news websites. This application is also available as a desktop Electron app.

## Final Product

!['This is the front page.'](./img/front_page.png)
!['This is the contents page filled with all the topics.'](./img/contents.png)
!['This is the discussion page after selecting a topic.'](./img/discussion1.png)
!['This is the discussion page after selecting a topic and after resizing.'](./img/discussion2.png)

## Dependencies
#### Front-end
- Liowebrtc (WebRTC wrapper)
- React
- Webpack
- Socket.io
- Bootstrap
- Electron

#### Back-end
- Node
- Express
- Knex
- PostgreSQL
- Socket.io
- Liowebrtc


## Expected Usage
Clone the repo and then execute the following commands in the new directory.
`cd main`
`npm install`
`npm start`
