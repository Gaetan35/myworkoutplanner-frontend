import { Layout } from "../../components/layout/Layout";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>MyWorkoutPlanner</h1>
        <p>Coming Soon</p>
      </div>
    </Layout>
  );
};
