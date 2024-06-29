import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '~/constants/routes'
import { WebsiteLayout } from '~/layout/Website/Website'
import { DashboardPage } from '~/pages/Dashboard'
import { NewUserPage } from '~/pages/NewUser'

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
        element: <DashboardPage />,
      },
      {
        path: ROUTES.newUser,
        element: <NewUserPage />,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
