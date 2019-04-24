const { forwardTo } = require("prisma-binding");

const Query = {
   items: forwardTo("db")
};

module.exports = Query;
