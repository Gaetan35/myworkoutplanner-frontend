import { useIntl } from "react-intl";
import { Layout } from "../../components/layout/Layout";
import { routes } from "../../routes/routes";

export const CreateSession = () => {
  const intl = useIntl();

  return (
    <Layout hideFooter previousPage={routes.home}>
      <div>Hello choisit une séance</div>
    </Layout>
  );
};
