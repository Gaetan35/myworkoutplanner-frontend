import { useIntl } from "react-intl";
import { Layout } from "../../components/layout/Layout";
import styles from "./Home.module.scss";

export const Home = () => {
  const intl = useIntl();

  return (
    <Layout>
      <h1>{intl.formatMessage({ id: "home.title" })}</h1>
      <p>{intl.formatMessage({ id: "home.subtitle" })}</p>
    </Layout>
  );
};
