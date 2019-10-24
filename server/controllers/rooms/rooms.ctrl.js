const models = require('../../models');
const paginate = require('../../utils/pagenation');
const { saveCache } = require('../../middlewares/roomCache');

// 모든 숙소 조회
/**
 * @api {get} /api/rooms Get All Rooms
 * @apiName GetAllRooms
 * @apiGroup Rooms
 *
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 OK
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "id":1,
 *     "host_id": 1,
 *     "name": "room",
 *     "num_guest": 1,
 *     "price": 10000,
 *     "type": 1,
 *     "num_bed": 1,
 *     "num_bedroom": 1,
 *     "num_bathroom: 1,
 *     "rate": 1,
 *     "num_review: 1,
 *     "thumbnail": "a.png",
 *   },
 * ]
 */
const getAllRooms = async (req, res, next) => {
  const pageOption = paginate(req.query.page, process.env.PAGE_LIMIT);
  try {
    const rooms = await models.Room.findAndCountAll(pageOption);
    res.status(200).send([rooms]);
  } catch (err) {
    next(err);
  }
};

// 숙소 검색
/**
 * @api {get} /api/rooms/search? Get Filtered Rooms
 * @apiName GetFilteredRooms
 * @apiGroup Rooms
 *
 * @apiParam {String} check_in
 * @apiParam {String} check_out
 * @apiParam {Number} min_price
 * @apiParam {Number} max_priace
 * @apiParam {Number} num_guest
 * @apiParam {Number} num_bed
 * @apiParam {Number} num_bedroom
 * @apiParam {Number} num_bathroom
 * @apiParam {Number} type
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 OK
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "id":1,
 *     "host_id": 1,
 *     "name": "room",
 *     "num_guest": 1,
 *     "price": 10000,
 *     "type": 1,
 *     "num_bed": 1,
 *     "num_bedroom": 1,
 *     "num_bathroom: 1,
 *     "rate": 1,
 *     "num_review: 1,
 *     "thumbnail": "a.png",
 *   },
 * ]
 */
const getFilteredRooms = async (req, res, next) => {
  const pageOption = paginate(req.query.page, process.env.PAGE_LIMIT);
  try {
    const rooms = await models.Room.findAndCountAll({
      ...pageOption,
      where: req.roomQuery,
      include: [
        {
          required: false,
          model: models.Reservation,
          where: req.reservationQuery,
        },
      ],
    });
    res.status(200).send([rooms]);
  } catch (err) {
    next(err);
  }
};

// 숙소아이디로 숙소 조회
/**
 * @api {get} /api/rooms/:room_id Get the Room
 * @apiName GetRoom
 * @apiGroup Rooms
 *
 * @apiParam (path) {Number} room id
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 OK
 * HTTP/1.1 200 OK
 *   {
 *     "id":1,
 *     "host_id": 1,
 *     "name": "room",
 *     "num_guest": 1,
 *     "price": 10000,
 *     "type": 1,
 *     "num_bed": 1,
 *     "num_bedroom": 1,
 *     "num_bathroom: 1,
 *     "rate": 1,
 *     "num_review: 1,
 *     "thumbnail": "a.png",
 *   }
 */
const getRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const room = await models.Room.findOne({ where: { id } });
    await saveCache(room);
    res.status(200).send(room);
  } catch (err) {
    next(err);
  }
};

// 숙소 업데이트
/**
 * @api {put} /api/rooms/:room_id Modify Room
 * @apiName ModifyRoom
 * @apiGroup Rooms
 *
 * @apiParam (path) {Number} room id
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 OK
 * HTTP/1.1 200 OK
 *   {
 *     "id":1,
 *     "host_id": 1,
 *     "name": "room",
 *     "num_guest": 1,
 *     "price": 10000,
 *     "type": 1,
 *     "num_bed": 1,
 *     "num_bedroom": 1,
 *     "num_bathroom: 1,
 *     "rate": 1,
 *     "num_review: 1,
 *     "thumbnail": "a.png",
 *   }
 */
const updateRoom = async (req, res, next) => {
  const { id } = req.params;
  const { room } = req.body;

  try {
    const updatedRoom = await models.Room.update(room, {
      where: { id },
    });
    res.status(200).send(updatedRoom);
  } catch (err) {
    next(err);
  }
};

// 숙소 삭제
/**
 * @api {delete} /api/rooms Delete Room
 * @apiName DeleterRoom
 * @apiGroup Rooms
 *
 * @apiParam (path) {Number} room id
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 No Content
 */
const deleteRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    await models.Room.destroy({
      where: { id },
    });
    res.status(200).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllRooms,
  getRoom,
  updateRoom,
  deleteRoom,
  getFilteredRooms,
};
