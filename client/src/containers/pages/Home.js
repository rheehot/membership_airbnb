import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RoomList, Loader, ErrorMsg } from '../../components';
// import { SearchNav } from '../containers';
import { useDispatch, useSelector } from '../../hooks';
import { fetchRooms } from '../../store';

const S = {
  Wrapper: styled.div``,
};

const Home = () => {
  const options = useSelector((state) => state.options);
  const rooms = useSelector((state) => state.rooms);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchRooms(dispatch, options);
  }, [dispatch, options]);

  useEffect(() => () => dispatch({ type: 'INIT_ERROR' }), [dispatch]);

  if (error) {
    return <ErrorMsg>{error.response.data.message}</ErrorMsg>;
  }

  return (
    <S.Wrapper>
      {/* <SearchNav /> */}
      {rooms && <RoomList rooms={rooms} />}
      {loading && <Loader />}
    </S.Wrapper>
  );
};

export default Home;
