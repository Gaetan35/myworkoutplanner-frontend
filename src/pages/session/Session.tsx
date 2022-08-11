import { Layout } from "../../components/layout/Layout";
import { routes } from "../../routes/routes";
import styles from "./Session.module.scss";

export const Session = () => {
  return (
    <Layout hideFooter previousPage={routes.createSession}>
      <div className={styles.pageContainer}>
        <p>Hello ceci est la page session</p>
      </div>
    </Layout>
  );
};
