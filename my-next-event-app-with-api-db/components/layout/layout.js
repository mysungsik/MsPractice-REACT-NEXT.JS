import { Fragment, useContext } from "react";
import HeaderComponent from "./header";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notificationState;

  return (
    <Fragment>
      <HeaderComponent />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
}
export default Layout;
