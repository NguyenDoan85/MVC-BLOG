const { User } = require('../models');

const userData = [
    {
        username: "eric_doan",
        twitter: "ericd",
        github: "ericd",
        email: "eric_d@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "egg_head",
        twitter: "egghead",
        github: "egghead",
        email: "edd_head@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "potota",
        twitter: "potato",
        github: "potato",
        email: "potota@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "burger",
        twitter: "burger",
        github: "burger",
        email: "burger@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "bbq",
        twitter: "bbq",
        github: "bbq",
        email: "bbq@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "sushi",
        twitter: "sushi",
        github: "sushi",
        email: "sushi@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;