import { createHashRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: ServicesPage },
      { path: 'team', Component: TeamPage },
      { path: 'contact', Component: ContactPage },
    ],
  },
]);
