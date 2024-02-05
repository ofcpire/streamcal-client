import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ChannelPage from './pages/ChannelPage';
import StreamcalPage from './pages/StreamcalPage';
import ErrorPage from './pages/ErrorPage';
import getChannelList from './lib/api/getChannelList';
import getStreamcal from './lib/api/getStreamcal';
import Layout from './components/global/Layout';
import sortChannelList from './lib/utils/sortChannelList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ChannelPage />,
        loader: async () => {
          const channelList = await getChannelList();
          return sortChannelList(channelList);
        },
      },
      {
        path: '/:channelId',
        element: <StreamcalPage />,
        loader: async ({ params }) => {
          return await getStreamcal(params.channelId as string);
        },
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
