import { Fragment, useState, useContext, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

/// Styles
import "./index.css";
import "./chart.css";

/// Layouts
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";
import ScrollToTop from "./layouts/ScrollToTop";
import EventSidebar from "./layouts/EventSidebar";
import { ThemeContext } from "../context/ThemeContext";

/// Components
import Home from "./components/Dashboard/Home";
import AllTicket from "./components/Ticket/AllTicket";
import SparklineChart from "./components/charts/Sparkline";
import ApexChart from "./components/charts/apexcharts";
import ChartJs from "./components/charts/Chartjs";
import RechartJs from "./components/charts/rechart";
import ProductList from "./components/Appsmenu/Shop/ProductList/ProductList";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";

/// Product List
import ProductGrid from "./components/Appsmenu/Shop/ProductGrid/ProductGrid";
import ProductDetail from "./components/Appsmenu/Shop/ProductGrid/ProductDetail";
import Checkout from "./components/Appsmenu/Shop/Checkout/Checkout";
import Invoice from "./components/Appsmenu/Shop/Invoice/Invoice";
import ProductOrder from "./components/Appsmenu/Shop/ProductOrder";
import Customers from "./components/Appsmenu/Shop/Customers/Customers";



const Markup = () => {
  const allroutes = [
    { url: "all-ticket", component: <AllTicket /> },
    { url: "chart-sparkline", component: <SparklineChart /> },
    { url: "chart-chartjs", component: <ChartJs /> },
    { url: "chart-apexchart", component: <ApexChart /> },
    { url: "chart-rechart", component: <RechartJs /> },

    /// Shop
         { url: "ecom-product-grid", component: <ProductGrid /> },
         { url: "ecom-product-list", component: <ProductList /> },
         { url: "ecom-product-detail", component: <ProductDetail /> },
         { url: "ecom-product-order", component: <ProductOrder /> },
         { url: "ecom-checkout", component: <Checkout /> },
         { url: "ecom-invoice", component: <Invoice /> },
         { url: "ecom-product-detail", component: <ProductDetail /> },
         { url: "ecom-customers", component: <Customers /> },
  ];

  return (
    <Fragment>
      <Routes>
        {/* Public Routes */}
        <Route path="page-error-400" element={<Error400 />} />
        <Route path="page-error-403" element={<Error403 />} />
        <Route path="page-error-404" element={<Error404 />} />
        <Route path="page-error-500" element={<Error500 />} />
        <Route path="page-error-503" element={<Error503 />} />

      

        <Route path="product-list" element={<ProductList />} />
        <Route path="page-forgot-password" element={<ForgotPassword />} />
        <Route path="page-register" element={<Registration />} />
        <Route path="page-login" element={<Login />} />

        <Route element={<MainLayout2 />}>
          <Route path="" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
        </Route>

        <Route element={<MainLayout />}>
          {allroutes.map((data, i) => (
            <Route key={i} path={`${data.url}`} element={data.component} />
          ))}
        </Route>
      </Routes>
      <ScrollToTop />
    </Fragment>
  );
};

function MainLayout() {
  const { sidebariconHover } = useContext(ThemeContext);
  const [activeEvent, setActiveEvent] = useState(false);
  return (
    <div
      className={`show ${sidebariconHover ? "iconhover-toggle" : ""}`}
      id="main-wrapper"
    >
      <Nav onClick={() => setActiveEvent(!activeEvent)} />
      <EventSidebar activeEvent={activeEvent} />
      <div
        className="content-body"
        style={{ minHeight: window.screen.height - 45 }}
      >
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function MainLayout2() {
  const [activeEvent, setActiveEvent] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1401);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="main-wrapper" className="show">
      <Nav onClick={() => setActiveEvent(true)} />
      <EventSidebar activeEvent={activeEvent} isMobile={isMobile} />
      <div className={`content-body ${activeEvent ? "rightside-event" : ""}`}>
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Markup;
