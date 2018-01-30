const { Context } = require('../utils');

const AuthPayload = {
  user: async ({ user: { id } }, args, ctx, info) => ctx.db.query.user({ where: { id } }, info),
};

module.exports = AuthPayload;
