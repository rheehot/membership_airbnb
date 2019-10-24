import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    padding:0 50px;
    min-width:700px;
    margin:0 auto;
  `,
  RoomCounter: styled.h3`
    margin:20px 0;
  `,
  OrderedList: styled.ul``,
  ListItem: styled.li`
    width:100%;
    border:1px solid #ddd;
    border-radius:6px;
    height:300px;
    margin:10px 0;
    display:flex;
  `,
  Thumbnail: styled.img`
    height:100%;
    width:auto;
  `,
  RoomInfo: styled.div``,
  RoomName: styled.h4``,
  RoomOptions: styled.span``,
};
const RoomList = ({ rooms }) => (
  <S.Wrapper>
    <S.RoomCounter>숙소 {rooms.count}개</S.RoomCounter>
    <S.OrderedList>
      {rooms.rows.map((room) => (
        <S.ListItem key={room.id}>
          <S.Thumbnail src={room.thumbnail} />
          <S.RoomInfo>
            <S.RoomName>{room.name}</S.RoomName>
            <S.RoomOptions>
              `인원{room.num_guest}명 ·
              침실 {room.num_bedroom}개 ·
              침대 {room.num_bed}개 ·
              욕실 {room.num_bathroom}개`
            </S.RoomOptions>
          </S.RoomInfo>
        </S.ListItem>
      ))}
    </S.OrderedList>
  </S.Wrapper>
);

RoomList.propTypes = {
  rooms: PropTypes.shape({
    count: PropTypes.number,
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        thumbnail: PropTypes.string,
        rate: PropTypes.number,
        reviews: PropTypes.number,
        numGuest: PropTypes.number,
        numBed: PropTypes.number,
        numBedRoom: PropTypes.number,
        numBathRoom: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default RoomList;
