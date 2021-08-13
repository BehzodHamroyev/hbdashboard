import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlbums, setUsers } from '../../Redux/action';
import AlbumsWrapper from './AlbumsWrapper';

const Albums = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setAlbums(dispatch);
  }, []);
  const data = useSelector((state) => state.albums);
  return (
    <AlbumsWrapper>
      <h1>Albums</h1>
      {data.map((v, i) => {
        return <p key={i}>{v.title}</p>;
      })}
    </AlbumsWrapper>
  );
};

export default Albums;
