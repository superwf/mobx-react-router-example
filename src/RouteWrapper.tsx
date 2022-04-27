import { router } from "./router";
import { Routes, Route } from "react-router-dom"

router.appendPathList('/user/:name')

const PageA = () => <h1>Route Page A Content</h1>
const PageB = () => <h1>Route Page B Content</h1>

export const RouteWrapper = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/pagea" element={<PageA />} />
        <Route path="/pageb" element={<PageB />} />
      </Routes>
    </div>
  );
}
