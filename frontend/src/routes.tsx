import { createBrowserRouter } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage } from './pages';
import { RootLayout } from './layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
