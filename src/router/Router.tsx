import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '~/constants/routes'
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
        path: ROUTES.home,
        element: <></>,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
