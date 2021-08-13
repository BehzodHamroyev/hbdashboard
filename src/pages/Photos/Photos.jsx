import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhotosComponent from '../../Components/PhotosComponents/PhotosComponent';
import { getPhotos } from '../../datas/api';
import { setPhotos } from '../../Redux/action';
import PhotosWrapper from './PhotosWrapper';
import { LinearProgress } from '@material-ui/core';

const Photos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setPhotos(dispatch);
  }, []);
  const data = useSelector((state) => state.photos);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  console.log(loading, error);
  return (
    <PhotosWrapper>
      <h1>Photos</h1>
      {(loading && <LinearProgress />) || ''}
      {(error && (
        <div className="bd-danger d-flex justify-content-center align-items-center w-100">
          <h3 className="text-white">Danger</h3>
        </div>
      )) ||
        ''}
      <div className="row d-flex justify-content-center align-items-center m-0">
        {data.map((v, i) => {
          return (
            <div className=" col-md-4 m-0  col-sm-6  d-flex justify-content-center align-items-center mt-3 h-100">
              <PhotosComponent key={i} data={v} />
            </div>
          );
        })}
      </div>
    </PhotosWrapper>
  );
};

export default Photos;
