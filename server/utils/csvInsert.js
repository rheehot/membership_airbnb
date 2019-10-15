const dotenv = require('dotenv');

dotenv.config();
const fs = require('fs');
const Async = require('async');
const csv = require('csv');
const models = require('../models');

const filePath = './utils/room.csv';

const inserter = () => {
  const parser = csv.parse({
    columns: true,
    delimiter: ',',
  });

  const insert = Async.cargo(async (tasks) => {
    try {
      await models.Room.bulkCreate(tasks);
    } catch (e) {
      console.log(e);
    }
  });

  parser.on('readable', () => {
    while (parser.read()) {
      const line = parser.read();
      if (line) insert.push(line);
    }
  });

  parser.on('end', () => {
    inserter.drain = (count) => {
      console.log(count);
    };
  });

  fs.createReadStream(filePath).pipe(parser);
};

inserter();
