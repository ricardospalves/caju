import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { WebsiteLayout } from '~/layout/Website/Website'

const router = createBrowserRouter([
  {
    element: (
      <WebsiteLayout>
        <Outlet />
      </WebsiteLayout>
    ),
    children: [
      {
        path: '/',
        element: <></>,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
