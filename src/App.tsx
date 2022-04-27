import { observer } from 'mobx-react-lite'
import logo from "./logo.svg";
import { router } from "./router";
import { Router, Route, Switch, Link } from "react-router-dom"

router.appendPathList('/user/:name')

export const App = observer(() => {
  const { location, push, back, query, hashValue, pathValue } = router
  return (
    <Router history={router.history}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>Current pathname: {location.pathname}</p>
          <p>Current query: {JSON.stringify(query)}</p>
          <p>Current hash: {hashValue}</p>
          <p>Current pathValue: {JSON.stringify(pathValue)}, with router.appendPathList('user/:name')</p>
          <p>
            <button onClick={() => push('/test')}>go to "/test"</button>
            <button onClick={() => push('?a=b')}>go to search "?a=b"</button>
            <button onClick={() => push('#xyz')}>go to hash "#xyz"</button>
            <button onClick={() => push('/user/dan')}>go to path "/user/dan"</button>
            <button onClick={back}>Back</button>
          </p>
        </header>
        <main>
          <p>
            <Link to="/pagea">go to page A</Link>
            <br /><br />
            <Link to="/pageb">go to page b</Link>
          </p>
          <Switch location={router.location}>
            <Route path="/pagea" component={() => <div>page A content</div>} />
            <Route path="/pageb" component={() => <div>page B content</div>} />
          </Switch>
        </main>
      </div>
    </Router>
  );
})
