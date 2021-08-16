import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlbums, setUsers } from '../../Redux/action';
import AlbumsWrapper from './AlbumsWrapper';
import AppleIcon from '@material-ui/icons/Apple';
import AlbumsCard from '../../Components/AlbumsComponents/AlbumsCard';
import AndroidIcon from '@material-ui/icons/Android';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import BugReportIcon from '@material-ui/icons/BugReport';
import CardDiagram from '../../Components/HomeComponents/cardDiagram';
const data1 = [
  {
    icon: <AppleIcon />,
    users: '714k',
    subUsers: 'Weekly Sales',
    color: 'rgb(200, 250, 205)',
    iconColor: 'rgb(0, 123, 85)',
  },
  {
    icon: <AndroidIcon />,
    users: '1.35m',
    subUsers: 'New Users',
    color: '#d0f2ff',
    iconColor: 'rgb(12, 83, 183)',
  },
  {
    icon: <DesktopWindowsIcon />,
    users: '1.72m',
    subUsers: 'Item Orders',
    color: 'rgb(255, 247, 205)',
    iconColor: 'rgb(183, 129, 3)',
  },
  {
    icon: <BugReportIcon />,
    users: '234',
    subUsers: 'Bug Reports',
    color: 'rgb(255, 231, 217)',
    iconColor: 'rgb(183, 33, 54)',
  },
];
const data2 = [
  {
    img: 'https://office-guru.ru/images/excel/300examples1/grafik-excel-2.png',
    title: 'Website Visits',
    subTitle: '(+43%) than last year',
  },
  {
    img: 'https://help.anylogic.ru/topic/com.anylogic.help/html/analysis/images/piechart.png',
    title: 'Current Visits',
    // subTitle: '(+43%) than last year',
  },
  {
    img: 'https://www.planetaexcel.ru/upload/medialibrary/6a6/waterfall-chart8.png',
    title: 'Conversion Rates',
    subTitle: '(+43%) than last year',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0-%D1%80%D0%BE%D1%81%D1%82%D0%B0-%D1%81-%D1%81%D1%82%D1%80%D0%B5-%D0%BA%D0%BE%D0%B9-52046182.jpg',
    title: 'Website Visits',
  },
];
const Albums = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setAlbums(dispatch);
  }, []);
  const data = useSelector((state) => state.albums);
  return (
    <AlbumsWrapper>
      <h1 className="my-4">Hi, Welcome back</h1>
      {/* {data.map((v, i) => {
        return <p key={i}>{v.title}</p>;
      })} */}

      <div className="row">
        {data1.map((v, i) => (
          <div className="col-md-3">
            <AlbumsCard data={v} />
          </div>
        ))}
      </div>
      <div className="row">
        {data2.map((v, i) => (
          <div className="col-md-6 mt-4">
            <CardDiagram data={v} />
          </div>
        ))}
      </div>
    </AlbumsWrapper>
  );
};

export default Albums;
