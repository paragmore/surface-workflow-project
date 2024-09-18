import { Status } from "../types/onboarding";

export const getStatusColor = (
  status: Status,
): { bg: string; text: string } => {
  switch (status) {
    case Status.PENDING:
      return { bg: "#F3F3F3", text: "rgba(95,96,101, 0.25)" };
    case Status.EXECUTING:
      return { bg: "rgba(47,100,238, 0.10", text: "rgba(47,100,238, 0.29" };
    case Status.SUCCESSFUL:
      return { bg: "#CDFEE1", text: "#0C5132" };
    case Status.FAILURE:
      return { bg: "#FDEDF0", text: "#DF1C41" };
    default:
      return { bg: "#F3F3F3", text: "#F3F3F3" };
  }
};
