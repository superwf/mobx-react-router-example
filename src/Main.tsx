import * as React from "react"
import { observer } from 'mobx-react-lite'
import { Link } from "react-router-dom"
import { Router, Outlet } from "react-router-dom"
import { RouteWrapper } from "./RouteWrapper"
import { router } from "./router";

export const Main: React.FC = observer(() => {
  const { location, push, back, query, hashValue, pathValue } = router
  let [state, setState] = React.useState({
    action: router.history.action,
    location: router.history.location,
  }); 
  React.useLayoutEffect(() => router.subscribe(setState), []);
  return <Router location={state.location} navigationType={state.action} navigator={router.history}>
    <main>
      <header className="App-header">
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

          <div>
            <p>React Router 6 example</p>
            <Link to="/pagea">go to Page A</Link>
            <br /><br />
            <Link to="/pageb">go to Page B</Link>
          </div>
        </p>
      </header>
      <RouteWrapper />
      <Outlet />
    </main>
  </Router>
})
