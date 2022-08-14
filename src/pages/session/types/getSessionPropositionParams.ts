import { SessionType } from "../../createSession/types/sessionType";

export type GetSessionPropositionParams = {
  sessionType: SessionType;
  intensity: number;
  exerciseDifficulty: number;
};
