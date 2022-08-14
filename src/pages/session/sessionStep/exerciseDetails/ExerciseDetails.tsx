import { useState } from "react";
import styles from "./ExerciseDetails.module.scss";
import { ReactComponent as InterrogationIcon } from "../../../../assets/interrogationIcon.svg";
import { ReactComponent as OptionsIcon } from "../../../../assets/optionsIcon.svg";
import { ReactComponent as WeightIcon } from "../../../../assets/weightIcon.svg";
import { ReactComponent as EmptyWeightIcon } from "../../../../assets/emptyWeightIcon.svg";
import { ReactComponent as CrossIcon } from "../../../../assets/crossIcon.svg";
import fakeExerciseImage from "../../../../assets/fakeExerciseImage.png";

import { Exercise } from "../../types/exercise";

type ExerciseDetailsProps = {
  exercise: Exercise;
  exerciseLength: string;
};

export const ExerciseDetails = ({
  exerciseLength,
  exercise,
}: ExerciseDetailsProps) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

  return (
    <div className={styles.container}>
      <img
        alt="exercise schema"
        src={fakeExerciseImage}
        className={styles.imageContainer}
      />
      <div className={styles.detailsContainer}>
        {isDescriptionShown && (
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{exercise.description}</p>
            <button
              className={styles.closeDescriptionButton}
              onClick={() => setIsDescriptionShown(false)}
            >
              <CrossIcon width={10} height={10} />
            </button>
          </div>
        )}

        <div className={styles.topRow}>
          <div className={styles.flexRow}>
            <p className={styles.exerciseName}>{exercise.name}</p>
            <button
              className={styles.clickableIconButton}
              onClick={() => setIsDescriptionShown(true)}
            >
              <InterrogationIcon width={18} height={18} />
            </button>
          </div>
          <div>
            <button className={styles.clickableIconButton}>
              <OptionsIcon />
            </button>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.exerciseDifficulty}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index}>
                {index <= exercise.difficulty - 1 ? (
                  <WeightIcon width={20} height={20} />
                ) : (
                  <EmptyWeightIcon width={20} height={20} />
                )}
              </div>
            ))}
          </div>
          <p className={styles.duration}>{exerciseLength}</p>
        </div>
      </div>
    </div>
  );
};
