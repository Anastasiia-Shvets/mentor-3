import { Link } from "react-router-dom";
import styles from './GoBackBtn.modules.css'

export const GoBackBtn = ({path, children}) => {
  return (
    <Link to={path}>{children}</Link>
  );
};
