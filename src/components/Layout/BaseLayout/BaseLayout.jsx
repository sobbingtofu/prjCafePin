import { Outlet } from 'react-router-dom';
import Header from '../../common/Header';
function BaseLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default BaseLayout;
