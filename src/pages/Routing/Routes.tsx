import { Navigate, useRoutes } from "react-router-dom";
import { PushPage } from "../Push";
import { PersonalOfferPage } from "../PersonalOffer";
import { NewsPage } from "../News";

const Main = () => {
  return <Navigate to="/news" />;
};

export const RoutesElement = () => {
  return useRoutes([
    { path: "/", element: <Main /> },
    { path: "/push", element: <PushPage /> },
    { path: "/news", element: <NewsPage /> },
    {
      path: "/personal-offer",
      element: <PersonalOfferPage />,
    },
  ]);
};
