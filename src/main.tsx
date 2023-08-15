import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./style/GlobalStyle";
import Root from "./routes/root";
import MainPage from "./pages/main/mainPage";
import CommunityPage from "./pages/community/communityPage";
import ProductsPage from "./pages/products/productsPage";
// import ProfilePage from "./pages/profile/profilePage";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <Root>
            <Header />
            <Outlet />
         </Root>
      ),
      children: [
        {
          index: true,
          element: <MainPage />
        },
        {
          path: "community",
          element: <CommunityPage />
        },
        {
          path: "products",
          element: <ProductsPage />
        }
      ]
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <GlobalStyles />
      <RouterProvider router={router} />
   </React.StrictMode>
);
