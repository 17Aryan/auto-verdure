import AdminNavbar from "../ui/AdminNavbar";

const Layout = ({ children }) => {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
};

export default Layout;