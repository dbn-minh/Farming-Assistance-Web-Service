import { http } from "./urlConfig";

export const complaintService = {
  postCom: (data) => {
    let url = "/supplier/complaint";
    return http.post(url, data);
  },
};
