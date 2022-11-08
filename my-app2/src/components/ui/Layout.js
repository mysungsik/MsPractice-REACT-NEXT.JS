import classes from "./Layout.module.css";
import MainNavBar from "../layout/MainNavigationBar";

function Layout(props) {
  return (
    <div>
      <MainNavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
