import { lazy } from "react";

export const routes = [
  { path: "/",              Component: lazy(() => import("../features/home/HomePage.tsx")) },
  { path: "/cities",        Component: lazy(() => import("../features/cities/CitiesPage.tsx")) },
  { path: "/cities/:id",    Component: lazy(() => import("../features/cities/CityDetailPage.tsx")) },
  { path: "/wildlife",      Component: lazy(() => import("../features/wildlife/WildlifePage.tsx")) },
  { path: "/festivals",     Component: lazy(() => import("../features/festivals/FestivalsPage.tsx")) },
  { path: "/food",          Component: lazy(() => import("../features/food/FoodPage.tsx")) },
  { path: "/temples",       Component: lazy(() => import("../features/temples/TemplesPage.tsx")) },
  { path: "/art",           Component: lazy(() => import("../features/art/ArtPage.tsx")) },
  { path: "/plan",          Component: lazy(() => import("../features/plan/PlanPage.tsx")) },
   { path: "/rivers",        Component: lazy(() => import("../features/rivers/RiverPage.tsx")) },
   { path: "/languages",     Component: lazy(() => import("../features/languages/LanguagePage.tsx")) },
];

export const NAV_ITEMS = [
  { label: "Home",      path: "/",         icon: "◈" },
  { label: "Cities",    path: "/cities",   icon: "◈" },
  { label: "Wildlife",  path: "/wildlife", icon: "◈" },
  { label: "Temples",   path: "/temples",  icon: "◈" },
  { label: "Festivals", path: "/festivals",icon: "◈" },
  { label: "Food",      path: "/food",     icon: "◈" },
  { label: "Art",       path: "/art",      icon: "◈" },
    { label: "Rivers",    path: "/rivers",   icon: "◈" },
    { label: "Languages", path: "/languages",icon: "◈" },
  { label: "Plan Trip", path: "/plan",     icon: "◈" },
];