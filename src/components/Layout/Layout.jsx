import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Divider from '@mui/material/Divider';

export default function Layout() {
  return (
    <>
      <Header />
      <Divider />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
