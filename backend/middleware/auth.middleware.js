const { expressjwt } = require("express-jwt");
const { expressJwtSecret } = require("jwks-rsa");
const { auth0 } = require('../config');


const checkJwt = expressjwt({
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${auth0.domain}/.well-known/jwks.json`
  }),

  audience: auth0.audience,
  issuer: `${auth0.domain}/`,
  algorithms: ["RS256"]
});

module.exports = {
  checkJwt,
}