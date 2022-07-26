import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateSession } from "./pages/createSession/CreateSession";
import { Home } from "./pages/home/Home";
import { Session } from "./pages/session/Session";
import { routes } from "./routes/routes";
import { flattenMessages, frFRMessages } from "./translations";

const intlMessages = flattenMessages(frFRMessages);

function App() {
  return (
    <IntlProvider locale="fr-FR" messages={intlMessages}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.createSession} element={<CreateSession />} />
          <Route path={routes.session} element={<Session />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
