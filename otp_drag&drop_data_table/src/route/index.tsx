import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// import type { RouteObject } from "react-router";

import OtpForm from "../views/OtpForm";
import CourseList from "../views/CourseList";
import Batches from "@/views/Batches";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/otp-form" replace />,
  },
  {
    path: "/otp-form",
    element: <OtpForm />,
  },

  {
    path: "/course-list",
    element: <CourseList />,
  },
  {
    path: "/batches",
    element: <Batches />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
