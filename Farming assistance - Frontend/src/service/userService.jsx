import { http } from "./urlConfig";
import { userLocal } from "./userLocal";

export const userService = {
  postLogin: (data) => {
    let url = "/auth/login";
    return http.post(url, data);
  },

  getInfor: (data, roleName) => {
    let url = `/${roleName}/get-${roleName}/${data}`;
    return http.get(url);
  },

  getTrans: (data, roleName) => {
    let url = `/${roleName}/transaction/${data}`;
    console.log(url);
    return http.get(url);
  },

  getProduct: (roleName) => {
    let url = `/${roleName}/store`;
    return http.get(url);
  },
  getDetailProduct: (id) => {
    let url = `/admin/order/${id}`;
    return http.get(url);
  },
  getTransDetail: (id, roleName) => {
    let url = `/${roleName}/order-of-transaction/${id}`;
    return http.get(url);
  },
  getFarmerTranDetail: (id, roleName) => {
    let url = `/${roleName}/transaction/${id}`;
    console.log(url);
    return http.get(url);
  },
  getAdminTranDetail: (id, roleName) => {
    let url = `/${roleName}/transaction/${id}`;
    console.log(url);
    return http.get(url);
  },

  changeData: (data, userInfor) => {
    let roleName = userLocal.getRoleName();
    let roleId =
      userInfor?.supplierID || userInfor?.farmerID || userInfor?.adminID;
    let url = `/${roleName}/update-info/${roleId}`;
    console.log("url:", url);
    return http.put(url, data);
  },
  changeAdminData: (data, id) => {
    let url = `/admin/update-info/${id}`;
    return http.put(url, data);
  },
  changeFarmerData: (data, id) => {
    let url = `/farmer/update-info/${id}`;
    return http.put(url, data);
  },
};
