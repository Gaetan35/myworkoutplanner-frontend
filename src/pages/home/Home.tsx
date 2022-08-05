import { useIntl } from "react-intl";
import { Layout } from "../../components/layout/Layout";
import styles from "./Home.module.scss";
import diceBackground from "../../assets/diceBackground.png";

export const Home = () => {
  const intl = useIntl();

  return (
    <Layout>
      <div className={styles.pageContainer}>
        <img alt="" src={diceBackground} />
        <button className={styles.startButton}>
          {intl.formatMessage({ id: "home.start" })}
        </button>
      </div>
    </Layout>
  );
};
