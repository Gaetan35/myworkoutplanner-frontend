import { ReactNode } from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.main}>{children}</div>
);
