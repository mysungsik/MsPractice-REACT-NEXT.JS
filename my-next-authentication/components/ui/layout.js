import LayoutHeader from "./layout-header";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <header>
        <LayoutHeader />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
