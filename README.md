<h1 align="center">MVC BLOG Using MySQL, Sequalize, Bcrypt, MVC, Nodejs, and Express</h1>

<p align="center">
    <img src="https://img.shields.io/github/repo-size/NguyenDoan85/MVC-BLOG" />
    <img src="https://img.shields.io/github/languages/top/NguyenDoan85/MVC-BLOG"  />
    <img src="https://img.shields.io/github/issues/NguyenDoan85/MVC-BLOG" />
    <img src="https://img.shields.io/github/last-commit/NguyenDoan85/MVC-BLOG" >
    </a>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/Nodejs-yellow" />
    <img src="https://img.shields.io/badge/Sequalize-blue"  />
    <img src="https://img.shields.io/badge/Bcrypt-lightgrey" />
    <img src="https://img.shields.io/badge/dotenv-orange" />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/Express-green" />
    <img src="https://img.shields.io/badge/MVC-red" />
</p>

<p align="center">
    <img src="http://img.shields.io/badge/license-MIT-blue.svg"/>
</p>

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Description

🔍 An application that used mysql database backend and follow MVC model. User can create, publish, and post on this BLOG for news, events, articles, etc.. 

## User Story

- AS A developer who writes about tech
- I WANT a CMS-style blog site
- SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
- THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
- THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
- THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Installation 
- 💾Clone the repo and use command `npm install` to install all require packages. 
- 💾Edit the .evn.EXAMPLE file to your configurator, then rename it to `.evn`.

## Usage 
- Login to your `mysql` to run `source dbschema.sql` in db sub folder which will create an e-commerce database. Warning this will drop your current e-commerce database if you already have one.
- Then run `node seeds/index.js` in seeds subfolder to create basic database structure.
- Run the following command at the root of your project and answer the prompted questions:  
`npm start`


## License
✏️ This project is license under MIT

## Contributing

Please refer to "Fork" or be assigned by Owner.

## Questions

If you have any questions about this project, please contact me directly at ericdoan2008@gmail.com. You can view more of my projects at https://github.com/NguyenDoan85.