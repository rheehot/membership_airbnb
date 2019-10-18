const models = require('../../models');

// 예약 등록
/**
 * @api {post} /api/reservations Create Reservation
 * @apiName CreateReservation
 * @apiGroup Reservations
 *
 * @apiParam {Json} body body.
 * @apiParamExample {json} User Action:
 * {
 *     "booker_id": 1,
 *     "room_id": 1,
 *     "check_in": "2019-10-10,
 *     "check_out": "2019-10-10",
 *     "adult": 1,
 *     "child": 1,
 *     "infant": 1,
 *     "state": "reserve",
 * }
 *
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 */
const postReserv = async (req, res, next) => {
  try {
    const reserv = await models.Reservation.create(req.body);
    res.status(200).send(reserv);
  } catch (err) {
    next(err);
  }
};

// 유저의 예약 리스트 조회
/**
 * @api {get} /api/reservations/:user_id Get User's Reservation
 * @apiName GetUserReservation
 * @apiGroup Reservations
 *
 * @apiParam (path) {Number} user id
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 OK
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "booker_id": 1,
 *     "room_id": 1,
 *     "check_in": "2019-10-10,
 *     "check_out": "2019-10-10",
 *     "adult": 1,
 *     "child": 1,
 *     "infant": 1,
 *     "state": "reserve",
 *   },
 * ]
 */
const getUserReserv = async (req, res, next) => {
  const { booker_id } = req.params;

  try {
    const reserv = await models.Reservation.findAll({
      where: { booker_id },
    });
    if (!reserv) {
      res.status(204).end();
    } else {
      res.status(200).send(reserv);
    }
  } catch (err) {
    next(err);
  }
};

// 숙소의 예약 리스트 조회
/**
 * @api {get} /api/reservations/:room_id Get Room's Reservation
 * @apiName GetRoomReservation
 * @apiGroup Reservations
 *
 * @apiParam (path) {Number} room id
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 OK
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "booker_id": 1,
 *     "room_id": 1,
 *     "check_in": "2019-10-10,
 *     "check_out": "2019-10-10",
 *     "adult": 1,
 *     "child": 1,
 *     "infant": 1,
 *     "state": "reserve",
 *   },
 * ]
 */
const getRoomReserv = async (req, res, next) => {
  const { room_id } = req.params;
  try {
    const reserv = await models.Reservation.findAll({
      where: { room_id },
    });
    if (!reserv) {
      res.status(204).end();
    } else {
      res.status(200).send(reserv);
    }
  } catch (err) {
    next(err);
  }
};

// 예약 삭제
/**
 * @api {delete} /api/reservation Delete Reservation
 * @apiName DeleteReservation
 * @apiGroup Reservations
 *
 * @apiParam (path) {Number} reservation id
 * @apiSuccessExample {json} Success:
 * HTTP/1.1 204 No Content
 */
const delReserv = async (req, res, next) => {
  const { id } = req.params;
  try {
    await models.Reservation.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postReserv,
  getRoomReserv,
  getUserReserv,
  delReserv,
};
