import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RoomList, Loader, ErrorMsg } from '../components';
// import { SearchNav } from '../containers';
import { useDispatch, useSelector } from '../hooks';
import * as services from '../services';

const S = {
  Wrapper: styled.div``,
};

const Home = () => {
  const rooms = useSelector((state) => state.rooms);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        dispatch({
          type: 'FETCH_ROOMS_REQUEST',
        });

        const responses = await services.fetchFilteredRooms({
          num_guest: 3,
          num_bed: 3,
        });

        dispatch({
          type: 'FETCH_ROOMS_SUCCESS',
          payload: { rooms: responses.data },
        });
      } catch (e) {
        dispatch({
          type: 'FETCH_ROOMS_FAILURE',
          payload: { error: e },
        });
      }
    };
    fetchRooms();
  }, [dispatch]);

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
