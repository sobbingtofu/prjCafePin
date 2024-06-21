import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../components/Layout/AuthLayout';
import BaseLayout from '../components/Layout/BaseLayout/BaseLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MapSearchPage from '../pages/MapSearchPage';
import MyPage from '../pages/MyPage';
import PostPage from '../pages/PostPage';
import SelectCafePage from '../pages/SelectCafePage/SelectCafePage';
import SignUpPage from '../pages/SignUpPage';
import WritePage from '../pages/WritePage';
import OAuthRedirectPage from '../pages/OAuthRedirectPage/OAuthRedirectPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'my-page',
        element: <MyPage />
      },
      {
        path: 'post/:postId',
        element: <PostPage />
      },
      {
        path: 'write',
        element: <WritePage />
      },
      {
        path: 'search',
        element: <MapSearchPage />
      },
      {
        path: 'select-cafe',
        element: <SelectCafePage />
      },
      {
        path: 'auth/OAuthRedirectPage',
        element: <OAuthRedirectPage />
      }
    ]
  },
  {
    path: 'auth/',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-up',
        element: <SignUpPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
    ]
  }
]);

export default router;
