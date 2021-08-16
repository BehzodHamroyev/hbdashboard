import React from 'react';
import AlbumCardWrapper from './AlbumCardWrapper';
import AppleIcon from '@material-ui/icons/Apple';
import { Zoom } from 'react-awesome-reveal';
const AlbumsCard = (props) => {
  return (
    <Zoom bottom>
      <AlbumCardWrapper
        color={props.data.color}
        iconColor={props.data.iconColor}
      >
        <div
          className={`rounded-circle iconColor bg-${props.data.color} shadow p-3`}
        >
          {props.data.icon}
        </div>
        <p className=" m-0 mt-4 fs-2 fw-bolder">{props.data.users}</p>
        <p className="m-0 fs-5 fw-bolder">{props.data.subUsers}</p>
      </AlbumCardWrapper>
    </Zoom>
  );
};

export default AlbumsCard;
