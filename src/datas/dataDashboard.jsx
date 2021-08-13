import {
  FaHome,
  FaMailBulk,
  FaImages,
  FaImage,
  FaListUl,
  FaUsers,
} from 'react-icons/fa';

const dataDashboard = [
  { to: 'home', title: 'Home', icon: <FaHome /> },
  { to: 'posts', title: 'Posts', icon: <FaMailBulk /> },
  { to: 'albums', title: 'Albums', icon: <FaImages /> },
  { to: 'photos', title: 'Photos', icon: <FaImage /> },
  { to: 'todos', title: 'Todos', icon: <FaListUl /> },
  { to: 'users', title: 'Users', icon: <FaUsers /> },
];
export default dataDashboard;
