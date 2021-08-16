import React from 'react';
import HomeWrapper from './HomeWrapper';
import { HomeCard } from '../../Components/HomeComponents/HomeCard';
import { FaChartBar } from 'react-icons/fa';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import CardAnalytic from '../../Components/HomeComponents/cardAnalytic';
import CardDiagram from '../../Components/HomeComponents/cardDiagram';
import Banner from '../../Components/HomeComponents/Banner';
import Swiper from '../../Components/HomeComponents/Swiper';
import HomeCardWrapper from '../../Components/HomeComponents/HomeCardWrapper';
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
  title: ' Welcome back, Behzod Hamroyev!',
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
const data2 = [
  {
    img: 'https://v8.1c.ru/upload/platforma/platform/000000644_1.png',
    title: 'Current Download',
    subTitle: '(+43%) than last year',
  },
  {
    img: 'https://support.content.office.net/ru-ru/media/c957b99e-083e-4443-afc6-c372ea43ed08.png',
    title: 'Area Installed',
  },
];
const Home = () => {
  return (
    <HomeWrapper>
      <HomeCardWrapper>
        <div className="row m-0">
          <div className="col-lg-8 rounded-10 col-12 mt-5 rounded-3 content p-5 ">
            <Banner data={dataBaner} />
          </div>
          <div className="col-lg-4 rounded-10 col-12 mt-5">
            <Swiper data={data1} />
          </div>
        </div>
      </HomeCardWrapper>
      <div className="row">
        {data.map((v, i) => (
          <div className="col-lg-4 col-12">
            <CardAnalytic data={v} />
          </div>
        ))}
        <div className="row">
          {data2.map((v, i) => {
            return (
              <div className="col-lg-6  my-5  col-12">
                <CardDiagram data={v} />
              </div>
            );
          })}
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;
