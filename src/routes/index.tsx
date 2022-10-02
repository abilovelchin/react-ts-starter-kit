import type { RootState } from "$store/index";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes as Switch, Route } from "react-router-dom";

const PRESERVED: any = import.meta.glob("/src/pages/(_app|404|403).tsx", {
  eager: true,
});
const ROUTES: any = import.meta.glob("/src/pages/**/[a-z[]*.tsx", {
  eager: true,
});

const preserved: any = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, "");
  return { ...preserved, [key]: PRESERVED[file].default };
}, {});

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, "")
    .replace(/\/$/, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1");

  const role = ROUTES[route].role;

  return { path, component: ROUTES[route].default, role };
});

export const Routes = () => {
  const App = preserved?.["_app"] || Fragment;
  const NotFound = preserved?.["404"] || Fragment;
  const Forbidden = preserved?.["403"] || Fragment;

  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <App>
      <Switch>
        {routes.map(({ path, component: Component = Fragment, role = "" }) => {
          if (role == "")
            return <Route key={path} path={path} element={<Component />} />;

          const userRole = user.role?.toLocaleLowerCase();
          const roles: any = Array.isArray(role)
            ? role.map((val) => val.toLocaleLowerCase())
            : role.toLocaleLowerCase();

          if (Array.isArray(roles) && !roles.includes(userRole))
            return <Route key={path} path={path} element={<Forbidden />} />;

          if (!Array.isArray(roles) && userRole !== roles)
            return <Route key={path} path={path} element={<Forbidden />} />;

          return <Route key={path} path={path} element={<Component />} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Switch>
    </App>
  );
};
