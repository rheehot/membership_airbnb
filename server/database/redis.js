const redis = require('redis');

const redisClient = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST,
);

redisClient.on('error', (err) => {
  console.log('redis error occured :', err);
});


module.exports = redisClient;
