const { Post } = require('../models');

const postData = [
    {
        title: "Rolling blackouts called off in Northern California as energy demands ease amid heat wave!",
        post_content: "For nearly three hours, California’s electrical grid teetered on the edge of being overwhelmed Tuesday night as officials issued their highest-level energy emergency alert and rolling blackouts hit a handful of Northern California cities. At 8 p.m., the California Independent System Operator downgraded its level 3 alert, the final step before calling for rolling blackouts, saying that consumer conservation played a big part in protecting electric grid reliability",
        user_id: 3
    },
    {
        title: "Zoo Keepr reaches 1 million subscribers!",
        post_content: "The local zoo has received funding to build a new online catalog, and they've asked to create a web server for a front-end application they’re developing, called Zoo Keepr. This site’s data will be stored on the server. This will allow animal enthusiasts to access the data from different locations and browsers without needing to download it to their device",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Just Tech News goes public!",
        post_content: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;