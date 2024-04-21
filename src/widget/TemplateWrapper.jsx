import WebNavBar from "../components/Elements/Navigation/WebNavBar";
import WebFooter from "../components/Elements/Footer/WebFooter";

const TemplateWrapper = ({ children }) => {
  return (
    <main>
      <WebNavBar />
      <main className={`flex flex-col justify-center pt-20`}>{children}</main>
      <WebFooter />
    </main>
  );
};

export default TemplateWrapper;
