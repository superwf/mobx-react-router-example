import React from 'react';
import { observer } from 'mobx-react-lite'
import logo from "./logo.svg";
import { router } from "./router";
import './App.css';

router.appendPathList('/user/:name')

export const App = observer(() => {
  const { location, push, back, query, hashValue, pathValue } = router
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
})
