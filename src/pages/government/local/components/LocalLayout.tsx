import { Outlet } from 'react-router-dom';
import LocalSidebar from './LocalSidebar';
import GovernmentPageContainer from '../../GovernmentPageContainer';

export default function LocalLayout() {
  return (
    <GovernmentPageContainer sidebar={<LocalSidebar />}>
      <Outlet />
    </GovernmentPageContainer>
  );
}
