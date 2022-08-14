import AxiosService from "../../shared/axiosService";
import { GetSessionPropositionParams } from "./types/getSessionPropositionParams";
import { SessionStep } from "./types/sessionStep";

const apiRoutes = {
  getSessionProposition: ({
    sessionType,
    intensity,
    exerciseDifficulty,
  }: GetSessionPropositionParams) =>
    `session/proposition?sessionType=${sessionType}&intensity=${intensity}&exerciseDifficulty=${exerciseDifficulty}`,
};

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "";

export class SessionHttpService {
  constructor(private httpService = new AxiosService(BASE_URL)) {}

  async getSessionProposition(
    params: GetSessionPropositionParams
  ): Promise<SessionStep[]> {
    const response = await this.httpService.get<SessionStep[]>(
      apiRoutes.getSessionProposition(params)
    );

    return response.data;
  }
}

export default new SessionHttpService();
