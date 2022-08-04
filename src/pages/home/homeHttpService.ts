import AxiosService from "../../shared/axiosService";

export type Exercise = {
  id: string;
  name: string;
  difficulty: number;
  description: string;
};

const apiRoutes = {
  fetchExercises: "exercise",
};

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "";

export class HomeHttpService {
  constructor(private httpService = new AxiosService(BASE_URL)) {}

  async getExercises(): Promise<Exercise[]> {
    const response = await this.httpService.get<Exercise[]>(
      apiRoutes.fetchExercises
    );

    return response.data;
  }
}

export default new HomeHttpService();
