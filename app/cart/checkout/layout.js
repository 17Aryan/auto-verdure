// import "./globals.css";

import CheckoutNavbar from "@/app/ui/Cart/CheckoutNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <CheckoutNavbar />
      {children}
    </div>
  );
};

export default Layout;
