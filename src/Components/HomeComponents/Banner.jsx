import React from 'react'
import HomeCardWrapper from './HomeCardWrapper'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Zoom } from 'react-awesome-reveal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Banner = (props) => {
    return (
      <HomeCardWrapper>
        <Zoom left>
          <div className="row ">
            <div className="col-7">
              <div className="">
                <h3 className="fw-bolder">
                 {props.data.title}
                </h3>
                <p className="">
                {props.data.subTitle}
                </p>
                <Button
                  className="bg-success text-white"
                  variant="contained"
                  color=""
                >
                 {props.data.btn}
                </Button>
              </div>
            </div>
            <div className="col-5">
              <img
                src="https://green-websitee.netlify.app/static/media/photo.07e293c1.png"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </Zoom>
      </HomeCardWrapper>
    );
}

export default Banner
