import WebNavBar from "./components/Elements/Navigation/WebNavBar";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./routes/ScrollToTop";


function App() {

  return (
    <>
    <ScrollToTop/>
    <AppRoutes/>
    </>
  );
}

export default App;
