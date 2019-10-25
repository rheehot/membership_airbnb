import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

const S = {
  Wrapper: styled.div`
    padding: 0 50px;
    min-width: 700px;
    max-width: 1200px;
    margin: 0 auto;
  `,
  RoomCounter: styled.h3`
    margin: 40px 0;
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    color: ${({ theme }) => theme.palette.back};
  `,
  OrderedList: styled.ul``,
  ListItem: styled.li`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 12px;
    height: 300px;
    margin: 20px 0;
    display: flex;
    padding: 8px;
    cursor: pointer;
  `,
  Thumbnail: styled.div`
    height: 100%;
    width: 400px;
    flex-shrink: 0;
    background-size: cover;
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    border-radius: 12px;
  `,
  RoomInfo: styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  RoomTitle: styled.div``,
  RoomName: styled.h4`
    font-size: ${({ theme }) => theme.typography.pxToRem(24)};
    color: ${({ theme }) => theme.palette.gray};
    line-height: ${({ theme }) => theme.typography.pxToRem(32)};
    word-break: keep-all;
  `,
  RoomOptions: styled.div`
    margin-top: 6px;
    font-size: ${({ theme }) => theme.typography.pxToRem(16)};
    color: ${({ theme }) => theme.palette.lightgray};
  `,
  RoomRate: styled.div`
    display: flex;
    align-items: center;
  `,
  ReserveBtn: styled.button`
    background: ${({ theme }) => theme.palette.alert};
    color: #fff;
    margin-left: auto;
    align-self: flex-end;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
  `,
};

const RoomList = ({ rooms }) => (
  <S.Wrapper>
    <S.RoomCounter>숙소 {rooms.count}개</S.RoomCounter>
    <S.OrderedList>
      {rooms.rows.map((room) => (
        <S.ListItem key={room.id}>
          <S.Thumbnail url={room.thumbnail} />
          <S.RoomInfo>
            <S.RoomTitle>
              <S.RoomName>{room.name}</S.RoomName>
              <S.RoomOptions>
                인원{room.num_guest}명 · 침실 {room.num_bedroom}개 · 침대{' '}
                {room.num_bed}개 · 욕실 {room.num_bathroom}개
              </S.RoomOptions>
            </S.RoomTitle>
            <S.RoomRate>
              <StarRatingComponent
                name="rate"
                starCount={5}
                value={room.rate}
                starColor="rgb(237, 100, 100)"
              />
              &nbsp;{room.num_review}
            </S.RoomRate>
          </S.RoomInfo>
          <S.ReserveBtn>예약 하기</S.ReserveBtn>
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
        num_review: PropTypes.number,
        num_guest: PropTypes.number,
        num_bed: PropTypes.number,
        num_bedroom: PropTypes.number,
        num_bathroom: PropTypes.number,
      }),
    ),
  }).isRequired,
};

export default RoomList;
