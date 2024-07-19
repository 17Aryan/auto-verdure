// import "./globals.css";

import ProfileNavbar from "../ui/ProfileNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <ProfileNavbar />
      {children}
    </div>
  );
};

export default Layout;
