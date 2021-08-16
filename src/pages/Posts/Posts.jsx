import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../datas/api';
import PostsWrapper from './PostsWrapper';
import { setPosts } from '../../Redux/action';
import Banner from '../../Components/HomeComponents/Banner';
import Swipers from '../../Components/HomeComponents/Swiper';
import HomeCardWrapper from '../../Components/HomeComponents/HomeCardWrapper';
import CardAnalytic from '../../Components/HomeComponents/cardAnalytic';
import { FaChartBar } from 'react-icons/fa';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
// const data1 = [
  // {
  //   img: 'https://m.media-amazon.com/images/I/51q2t2DUpaL._AC_SL1001_.jpg',
  //   title: 'New',
  //   subTitle: 'Kyrie Flytrap 3 EP Basketball Shoe',
  // },
  // {
  //   img: 'https://m.media-amazon.com/images/I/41Leu3gBUFL.jpg',
  //   title: 'New',
  //   subTitle: 'Nike Zoom Gravity',
  // },
  // {
  //   img: 'https://i1.adis.ws/i/tom_ford/J1100T-TOF001_U4006_APPENDGRID?$listing_grid$',
  //   title: 'New',
  //   subTitle: 'Nike DBreak-Type',
  // },
  // {
  //   img: 'https://www.famousfootwear.com/blob/product-images/20000/95/36/4/95364_pair_large.jpg',
  //   title: 'New',
  //   subTitle: 'Kyrie Flytrap 3 EP Basketball Shoe',
  // },
  // {
  //   img: 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=1600&h=900',
  //   title: 'New',
  //   subTitle: 'Nike DBreak-Type',
  // },
// ];
const data = [
  {
    title: 'Total Active Users',
    protcent: '+2.46',
    FaChart: <FaChartBar />,
    color: 'success',
    numberCardChart: '18,765',
    trendingIcon: <TrendingUpIcon />,
  },
  {
    title: 'Total Active Users',
    protcent: '+0.6',
    FaChart: <FaChartBar />,
    color: 'info',
    numberCardChart: '4,876',
    trendingIcon: <TrendingUpIcon />,
  },
  {
    title: 'Total Active Users',
    protcent: '-0.1',
    FaChart: <FaChartBar />,
    color: 'danger',
    numberCardChart: '678',
    trendingIcon: <TrendingDownIcon />,
  },
];
const dataBaner = {
  title: ' Congratulations Fabiana Capmany!',
  subTitle: `If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything`,
  btn: ' Go Now',
};
const data1 = [
  {
    title: 'Lightroom mobile - Koloro',
    subTitle: `Don't Waste Time! 7 Facts Until You Reach Your Event`,
    img: 'https://minimals.cc/static/mock-images/feeds/feed_3.jpg',
  },
  {
    title: 'Harry Potter and the Deathly Hallows - Part 2',
    subTitle: 'Harry Potter and the Deathly Hallows - Part 2',
    img: 'https://minimals.cc/static/mock-images/feeds/feed_1.jpg',
  },
  {
    title: 'Disney Zombies 2',
    subTitle: 'Believing These 7 Myths About Event Keeps You From Growing',
    img: 'https://minimals.cc/static/mock-images/feeds/feed_2.jpg',
  },
];
const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setPosts(dispatch);
  }, []);
  // const data = useSelector((state) => state.posts);
  return (
    <PostsWrapper>
      <h1>Posts</h1>
      {/* {data.map((v, i) => {
        return (
          <div key={i}>
            <h1>{i + 1}</h1>
            <h3>{v.body}</h3>
          </div>
        );
      })} */}
      <HomeCardWrapper>
        <div className="row m-0">
          <div className="col-md-8 rounded-10  mt-5 rounded-3 content p-5 ">
            <Banner data={dataBaner} />
          </div>
          <div className="col-md-4 rounded-10  mt-5">
            <Swipers data={data1} />
          </div>
        </div>
      </HomeCardWrapper>
      <div className="row">
        {data.map((v, i) => (
          <div className="col-md-4">
            <CardAnalytic data={v} />
          </div>
        ))}
      </div>
    </PostsWrapper>
  );
};

export default Posts;
