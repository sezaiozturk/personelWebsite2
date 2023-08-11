import {
  Button,
  NCoreProvider,
  useNCoreLocalization,
  Text,
  useNCoreTheme,
} from "ncore-web";
import locales from "./locales";
import themes from "./themes/";
import useStyle from "./stylesheet";
import Navigation from "./navigations";
import { Footer, Header, MobileMenu } from "./components";
import { MENU } from "./constans";

function App() {
  const { localize, activeLocale, switchLocale } = useNCoreLocalization();
  const { activeTheme, switchTheme } = useNCoreTheme();
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Header menuData={MENU} />
      <MobileMenu data={MENU} />
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
