import { IntlProvider } from "react-intl";
import { Home } from "./pages/home/Home";
import { flattenMessages, frFRMessages } from "./translations";

const intlMessages = flattenMessages(frFRMessages);

function App() {
  return (
    <IntlProvider locale="fr-FR" messages={intlMessages}>
      <Home />
    </IntlProvider>
  );
}

export default App;
