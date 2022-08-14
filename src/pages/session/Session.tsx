import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import { Layout } from "../../components/layout/Layout";
import { routes } from "../../routes/routes";
import { SessionType } from "../createSession/types/sessionType";
import { useGetSessionProposition } from "./hooks/useGetSessionProposition";
import styles from "./Session.module.scss";
import { SessionStepDetails } from "./sessionStep/SessionStepDetails";
import { ReactComponent as RestartIcon } from "../../assets/restartIcon.svg";

export const Session = () => {
  const intl = useIntl();
  const [searchParams] = useSearchParams();

  const { isLoading, sessionSteps, refetch } = useGetSessionProposition({
    sessionType: searchParams.get("sessionType") as SessionType,
    intensity: searchParams.get("intensity") as unknown as number,
    exerciseDifficulty: searchParams.get(
      "exerciseDifficulty"
    ) as unknown as number,
  });

  return (
    <Layout hideFooter previousPage={routes.createSession}>
      <div className={styles.pageContainer}>
        <div className={styles.stepsWrapper}>
          <div className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>
              {intl.formatMessage({ id: "session.yourSession" })}
            </h1>
          </div>

          <div className={styles.stepsContainer}>
            {isLoading ? (
              <p>Loading ...</p>
            ) : (
              sessionSteps?.map((step, index) => (
                <SessionStepDetails
                  key={`${step.type}-${index}`}
                  sessionStep={step}
                />
              ))
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.otherSessionButton} onClick={refetch}>
            <RestartIcon width={35} height={35} />
            {intl.formatMessage({ id: "session.otherSession" })}
          </button>
          <button
            className={styles.goButton}
            onClick={() => alert("Coming soon")}
          >
            {intl.formatMessage({ id: "session.go" })}
          </button>
        </div>
      </div>
    </Layout>
  );
};
