import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from "./config/AuthUser";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
function App() {
  const { getToken } = AuthUser();

  if (!getToken()) {
    return <Navbar />;
  }

  return (
    <>
    <Auth />
    </>
  );
}

export default App;
