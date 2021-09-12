
import './scss/App.scss';

//Router: 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components: 
import ItemDetail from "./components/ItemDetail";
import SearchResults from "./components/SearchResults";
import SearchItems from './components/SearchItems';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/items/:id" component={ItemDetail} />
          <Route path="/items" component={SearchResults} />
          <Route path="/" component={SearchItems} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
