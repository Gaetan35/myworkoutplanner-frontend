import { ReactNode } from "react";
import { useIntl } from "react-intl";
import styles from "./Layout.module.scss";
import logo from "../../assets/logo.png";
import { ReactComponent as WeightIcon } from "../../assets/weightIcon.svg";
import { ReactComponent as StarIcon } from "../../assets/starIcon.svg";
import { ReactComponent as HistoryIcon } from "../../assets/historyIcon.svg";

type LayoutProps = {
  children: ReactNode;
  hideFooter?: boolean;
};

const pages = [
  { icon: <WeightIcon width={32} height={32} />, labelId: "layout.exercises" },
  { icon: <StarIcon width={32} height={32} />, labelId: "layout.favorites" },
  { icon: <HistoryIcon width={32} height={32} />, labelId: "layout.history" },
];

export const Layout = ({ children, hideFooter = false }: LayoutProps) => {
  const intl = useIntl();

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.leftElement}></div>
        <p className={styles.title}>
          {intl.formatMessage({ id: "layout.title" })}
        </p>
        <div className={styles.logoContainer}>
          <img alt="" src={logo} className={styles.logo} />
        </div>
      </header>
      <div className={styles.body}>{children}</div>
      {!hideFooter && (
        <footer className={styles.footer}>
          {pages.map((page) => (
            <div key={page.labelId} className={styles.pageContainer}>
              {page.icon}
              <p className={styles.pageName}>
                {intl.formatMessage({ id: page.labelId })}
              </p>
            </div>
          ))}
        </footer>
      )}
    </div>
  );
};
