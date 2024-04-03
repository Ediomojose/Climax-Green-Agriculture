import WebNavBar from "../components/Elements/Navigation/WebNavBar";
import WebFooter from "../components/Elements/Footer/WebFooter";

const TemplateWrapper = ({ children }) => {
  return (
    <main>
      <WebNavBar />
      {children}
      <WebFooter />
    </main>
  );
};


export default TemplateWrapper;