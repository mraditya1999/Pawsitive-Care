import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <h1>Header</h1>
      <div className='min-h-screen bg-red-500'>
        <Outlet />
      </div>
      <h1 className='bg-gray-400'>Footer</h1>
    </div>
  );
};

export default RootLayout;
