const redisClient = require('../database/redis');
const milliseconds = require('../utils/getMilliSec');

const ttl = milliseconds(process.env.REDIS_EXPIRE);

const searchCache = async (req, res, next) => {
  const { id } = req.params;

  redisClient.hgetall(id, (err, room) => {
    if (err) return next();
    res.status(200).send(room);
    return next();
  });
};

const saveCache = async (room) => {
  const { id } = room;
  const roomColumns = [];

  Object.keys(room).forEach((key) => {
    roomColumns.push(key);
    roomColumns.push(room[key]);
  });

  redisClient.hmset(id, ...roomColumns, (err) => {
    if (err) throw err;
    else redisClient.expire(id, ttl);
  });
};

const deleteCache = async (req, res, next) => {
  const { id } = req.params;

  await redisClient.del(id);
  return next();
};
module.exports = { searchCache, saveCache, deleteCache };
