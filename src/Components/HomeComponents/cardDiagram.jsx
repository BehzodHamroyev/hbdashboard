import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const cardDiagram = (props) => {
    console.log(props);
  return (
    <Zoom className="h-100" bottom>
      <div className="container py-4  rounded-10 shadow d-flexflex-column align-items-start justify-content-between h-100 ">
        <div>
          <h5 className="title">{props.data.title}</h5>
          {props.data.subTitle && (
            <p className="subtitlw">{props.data.subTitle}</p>
          )}
        </div>
        <img src={props.data.img} className="img-fluid" />
      </div>
    </Zoom>
  );
};

export default cardDiagram;
