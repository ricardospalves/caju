import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from '~/Components/Header/Header'

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
