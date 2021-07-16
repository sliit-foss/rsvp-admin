import Home from "./components/Home/Home";
// import Category from "./components/Categories/Category";
import ProductPage from "./pages/EventPage";
// import PromoCodePage from "./pages/PromoCodePage";
// import Order from "./components/Order/Order";
// import OrderDetails from "./components/Order/OrderDetails";
// import DispatchedOrders from "./components/Order/DispatchedOrders/DispatchedOrders";
import Loginpage from "./pages/Login";

export const routes = [
  { path: "/", component: Home },
  // { path: "/category", component: Category },
  { path: "/event", component: ProductPage },
  // { path: "/promo-code", component: PromoCodePage },
  // { path: "/orders", component: Order },
  // { path: "/order/:id", component: OrderDetails },
  // { path: "/dispatchedOrders", component: DispatchedOrders },
  { path: "/login", component: Loginpage },
];
