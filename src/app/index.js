import {
  Button,
  NCoreProvider,
  useNCoreLocalization,
  Text,
  useNCoreTheme,
} from "ncore-web";
import locales from "./locales";
import themes from "./themes/";

function App() {
  const { localize, activeLocale, switchLocale } = useNCoreLocalization();
  const { activeTheme, switchTheme } = useNCoreTheme();
  return <div className="App">Sezai Öztürk</div>;
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
