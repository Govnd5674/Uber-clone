module.exports = {
  secret: process.env.JWT_SECRET || "default-secret-key",
  tokenExpiration: "24h",
  mongodb: {
    uri: process.env.MONGODB_URI || "mongodb://0.0.0.0/uber",
  },
};
