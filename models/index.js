var Sequelize = require('sequelize');
//var db = new Sequelize('postgres://localhost:5432/wikistack');
var db = new Sequelize('postgres://ubuntu:1234@localhost:5432'+'/wikistack'); // for sazi

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING, allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING, allowNull: false
    },
    content: {
        type: Sequelize.TEXT, allowNull: false,defaultValue:'Oczanee'
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},
    {hook: {
        beforeValidate: (Page)=>{
  if (Page.title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return Page.title.replace(/\s+/g, '_').replace(/\W/g, '');
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2, 7);
  }
}
    
}});

var User = db.define('user', {
    name: {
        type: Sequelize.STRING, allowNull: false
    },
    email: {
        type: Sequelize.STRING, allowNull: false,
        validate: {
                isEmail: true
            }
    }

});

module.exports = {
  Page: Page,
  User: User,
  db: db
};
