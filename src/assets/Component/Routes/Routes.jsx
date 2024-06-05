import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../ErrorPage/Errorpage";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Kurbani from "../Kurbani/Kurbani";
import AccessoriesCost from "../../KurbaniKhoroch/AccessoriesCost";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/kurbani",
        element: <Kurbani />,
      },
      {
        path: "/accessoriescost",
        element: <AccessoriesCost />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // {
  //     path: "/admin",
  //     element: <PrivateRoute><Admin></Admin></PrivateRoute>
  //     ,
  //     children: [
  //         {
  //             path: "/admin/dashboard",
  //             element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/users",
  //             element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/questionAnswer",
  //             element: <PrivateRoute><QandA></QandA></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/icon",
  //             element: <PrivateRoute><AddIcon></AddIcon></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/icon/:name",
  //             element: <PrivateRoute><ShowIcons></ShowIcons></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/mallProduct",
  //             element: <PrivateRoute><AddMallProducts></AddMallProducts></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/eventProduct",
  //             element: <PrivateRoute><EventProducts></EventProducts></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/mallProduct/details/:model",
  //             element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
  //             children: [
  //                 {
  //                     path: "/admin/mallProduct/details/:model/afterSales",
  //                     element: <PrivateRoute><AfterSales></AfterSales></PrivateRoute>
  //                 },
  //                 {
  //                     path: "/admin/mallProduct/details/:model/inventory",
  //                     element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
  //                 },
  //                 {
  //                     path: "/admin/mallProduct/details/:model/invoice",
  //                     element: <PrivateRoute><Invoice></Invoice></PrivateRoute>
  //                 },
  //                 {
  //                     path: "/admin/mallProduct/details/:model/instruction",
  //                     element: <PrivateRoute><AfterSalesInstruction></AfterSalesInstruction></PrivateRoute>
  //                 },
  //             ]
  //         },
  //         {
  //             path: "/admin/eventProduct/details/:model",
  //             element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
  //             children: [
  //                 {
  //                     path: "/admin/eventProduct/details/:model/afterSales",
  //                     element: <PrivateRoute><AfterSales></AfterSales></PrivateRoute>
  //                 },
  //                 {
  //                     path: "/admin/eventProduct/details/:model/inventory",
  //                     element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
  //                 },
  //                 {
  //                     path: "/admin/eventProduct/details/:model/invoice",
  //                     element: <PrivateRoute><Invoice></Invoice></PrivateRoute>
  //                 },
  //                 {
  //                     path: "/admin/eventProduct/details/:model/instruction",
  //                     element: <PrivateRoute><AfterSalesInstruction></AfterSalesInstruction></PrivateRoute>
  //                 },
  //             ]
  //         },
  //         {
  //             path: "/admin/mallProduct/add",
  //             element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
  //         },
  //         {
  //             path: "/admin/eventProduct/add",
  //             element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
  //         }
  //     ]
  // }
]);
