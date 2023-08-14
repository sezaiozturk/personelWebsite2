import { NCoreProvider } from "ncore-web";
import locales from "./locales";
import themes from "./themes/";
import useStyle from "./stylesheet";
import Navigation from "./navigations";
import { Footer, Header } from "./components";
import { MENU } from "./constans";

function App() {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Header menuData={MENU} />
      <Navigation />
      <Footer />
    </div>
  );
}

const ContextApi = () => {
  return (
    <NCoreProvider
      config={{
        locales,
        themes,
      }}
    >
      <App />
    </NCoreProvider>
  );
};

export default ContextApi;
