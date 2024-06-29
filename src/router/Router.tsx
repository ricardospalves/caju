import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from '~/components/Header'

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
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
