import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import styles from "./Home.module.scss";
import diceBackground from "../../assets/diceBackground.png";
import { routes } from "../../routes/routes";

export const Home = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <img alt="" src={diceBackground} />
        <button
          className={styles.startButton}
          onClick={() => navigate(routes.createSession)}
        >
          {intl.formatMessage({ id: "home.start" })}
        </button>
      </div>
    </Layout>
  );
};
