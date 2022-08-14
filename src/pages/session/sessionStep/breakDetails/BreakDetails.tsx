import { useIntl } from "react-intl";
import { Break } from "../../types/sessionStep";
import styles from "./BreakDetails.module.scss";
import breakLogo from "../../../../assets/breakLogo.png";
import { formatDuration } from "../../../../shared/utils/formatDuration";

export const BreakDetails = ({ duration }: Break) => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      {/* 
      Intentionally empty alt text 
      https://accessibleweb.com/question-answer/when-should-i-use-a-null-or-empty-alt-tag/
      */}
      <img alt="" src={breakLogo} className={styles.breakLogo} />
      <p className={styles.breakDurationText}>
        {intl.formatMessage(
          { id: "session.breakDuration" },
          { duration: formatDuration(duration) }
        )}
      </p>
    </div>
  );
};
