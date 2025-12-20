import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import RootLayout from "./pages/RootLayout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
    { index: true, element: <MainPage />},
    { path: '/admin', element: <AdminLogin />},
    { path: "/dashboard", element: <AdminDashboard />} 
  ] 
  },   
  
]);

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-all">
      <RouterProvider router={router} />      
    </div>
  );
}

export default App;
