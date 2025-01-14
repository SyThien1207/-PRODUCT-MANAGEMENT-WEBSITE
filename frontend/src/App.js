import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutSite from './layouts/LayoutSite/index';
import AppRoute from './router/index';
import LayoutAdmin from './layouts/LayoutAdmin/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {AppRoute.RouteSite.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} key={index} element={<Page/>}/>
          })}
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          {AppRoute.RouteAdmin.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} key={index} element={<Page />} />
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
