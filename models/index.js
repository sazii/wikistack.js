var Sequelize = require('sequelize');
//var db = new Sequelize('postgres://localhost:5432/wikistack');
var db = new Sequelize('postgres://ubuntu:1234@localhost:5432'+'/wikistack'); // for sazi

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING, allowNull: false,
    },
    urlTitle: {
        type: Sequelize.STRING, allowNull: false
    },
    content: {
        type: Sequelize.TEXT, allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING, allowNull: false
    },
    email: {
        type: Sequelize.STRING, allowNull: false
    }
});

module.exports = {
  Page: Page,
  User: User,
  db: db
};
