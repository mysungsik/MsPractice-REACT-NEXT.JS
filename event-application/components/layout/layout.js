import { Fragment } from "react";
import HeaderComponent from "./header";

function Layout(props) {
  return (
    <Fragment>
      <HeaderComponent />
      <main>{props.children}</main>
    </Fragment>
  );
}
export default Layout;
