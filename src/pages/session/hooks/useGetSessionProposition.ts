import { useRequest } from "../../../shared/hooks/useRequest";
import { SessionHttpService } from "../sessionHttpService";
import { GetSessionPropositionParams } from "../types/getSessionPropositionParams";
import { SessionStep } from "../types/sessionStep";

export const useGetSessionProposition = (
  params: GetSessionPropositionParams,
  httpService = new SessionHttpService()
): {
  sessionSteps?: SessionStep[];
  isLoading: boolean;
  refetch: () => Promise<void>;
} => {
  const { isLoading, data, refetch } = useRequest<SessionStep[]>(() =>
    httpService.getSessionProposition(params)
  );

  return {
    sessionSteps: data,
    isLoading,
    refetch,
  };
};
