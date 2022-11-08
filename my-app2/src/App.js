import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetup";
import FavoritePage from "./pages/Favorite";
import NewMeetupsPage from "./pages/NewMeetup";

import Layout from "./components/ui/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/Favorite" exact>
          <FavoritePage />
        </Route>
        <Route path="/NewMeetup" exact>
          <NewMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
