import { formatDuration } from "../../../shared/utils/formatDuration";
import { formatRepetitions } from "../../../shared/utils/formatRepetitions";
import { SessionStep } from "../types/sessionStep";
import { BreakDetails } from "./breakDetails/BreakDetails";
import { ExerciseDetails } from "./exerciseDetails/ExerciseDetails";

type SessionStepProps = {
  sessionStep: SessionStep;
};

export const SessionStepDetails = ({ sessionStep }: SessionStepProps) => {
  if (sessionStep.type === "break") {
    return <BreakDetails {...sessionStep} />;
  }

  return (
    <ExerciseDetails
      exercise={sessionStep.exercise}
      exerciseLength={
        sessionStep.type === "timeExercise"
          ? formatDuration(sessionStep.duration)
          : formatRepetitions(sessionStep.repetitions)
      }
    />
  );
};
