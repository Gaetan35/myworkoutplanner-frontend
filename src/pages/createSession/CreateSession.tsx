import { useState } from "react";
import { useIntl } from "react-intl";
import { Layout } from "../../components/layout/Layout";
import { routes } from "../../routes/routes";
import styles from "./CreateSession.module.scss";
import { Slider } from "./slider/Slider";
import { SessionType } from "./types/sessionType";
import { ReactComponent as WeightIcon } from "../../assets/weightIcon.svg";
import { ReactComponent as EmptyWeightIcon } from "../../assets/emptyWeightIcon.svg";

const intensityValues = {
  [SessionType.TABATA]: [
    "createSession.tabataEasy",
    "createSession.tabataMedium",
    "createSession.tabataHard",
  ],
  [SessionType.SERIES]: [
    "createSession.seriesEasy",
    "createSession.seriesMedium",
    "createSession.seriesHard",
  ],
};

export const CreateSession = () => {
  const intl = useIntl();

  const [sessionType, setSessionType] = useState<SessionType>();
  const [intensity, setIntensity] = useState(0);
  const [exerciseDifficulty, setExerciseDifficulty] = useState(3);

  return (
    <Layout hideFooter previousPage={routes.home}>
      <div className={styles.pageContainer}>
        <div className={styles.sessionTypeSection}>
          <p className={styles.sectionTitle}>
            {intl.formatMessage({ id: "createSession.sessionType" })}
          </p>
          <div className={styles.radioButtonContainer}>
            <div className={styles.flexRow}>
              <input
                type="radio"
                name="session"
                id="tabata"
                checked={sessionType === SessionType.TABATA}
                onChange={() => setSessionType(SessionType.TABATA)}
              />
              <label className={styles.radioButtonLabel} htmlFor="tabata">
                {intl.formatMessage({ id: "createSession.tabata" })}
              </label>
            </div>
            <div className={styles.flexRow}>
              <input
                type="radio"
                name="session"
                id="series"
                checked={sessionType === SessionType.SERIES}
                onChange={() => setSessionType(SessionType.SERIES)}
              />
              <label className={styles.radioButtonLabel} htmlFor="series">
                {intl.formatMessage({ id: "createSession.series" })}
              </label>
            </div>
          </div>
        </div>

        <div className={styles.intensitySection}>
          <p className={styles.sectionTitle}>
            {intl.formatMessage({ id: "createSession.intensity" })}
          </p>
          <div className={styles.sliderContainer}>
            <Slider
              disabled={sessionType === undefined}
              value={intensity}
              setValue={setIntensity}
              valueLabels={
                sessionType !== undefined ? intensityValues[sessionType] : []
              }
            />
          </div>
        </div>

        <div className={styles.exerciseDifficultySection}>
          <p className={styles.sectionTitle}>
            {intl.formatMessage({ id: "createSession.exerciseDifficulty" })}
          </p>
          <div className={styles.exerciseDifficultyPicker}>
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                onClick={() => setExerciseDifficulty(index + 1)}
                key={index}
              >
                {index <= exerciseDifficulty - 1 ? (
                  <WeightIcon width={35} height={35} />
                ) : (
                  <EmptyWeightIcon width={35} height={35} />
                )}
              </button>
            ))}
          </div>
        </div>

        <button
          className={styles.goButton}
          onClick={() => {
            alert("Ouais trop bien le sport");
          }}
        >
          {intl.formatMessage({ id: "createSession.go" })}
        </button>
      </div>
    </Layout>
  );
};
