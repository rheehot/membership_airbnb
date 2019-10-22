const fs = require('fs');
const Async = require('async');
const csv = require('csv');
const dotenv = require('dotenv');

dotenv.config();
const models = require('../models');

const filePath = `${__dirname}/csv/room.csv`;

const inserter = () => {
  const parser = csv.parse({
    columns: true,
  });

  const insert = Async.cargo(async (tasks) => {
    try {
      await models.Room.bulkCreate(tasks);
      inserter.drain();
    } catch (e) {
      console.log(e);
    }
  });

  parser.on('readable', () => {
    let line;
    while ((line = parser.read())) {
      insert.push(line);
    }
  });
  parser.on('error', (err) => {
    console.error('err', err.message);
  });
  parser.on('end', () => {
    inserter.drain = () => {
      console.log('완료');
    };
  });

  fs.createReadStream(filePath).pipe(parser);
};

inserter();
