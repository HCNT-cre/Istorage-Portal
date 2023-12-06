import { GetUserInfo } from "./pages/Home/helper";

const InitApp = {
    initUserInfo: async () =>{
        const userInfo = await GetUserInfo();
        return userInfo;
    }
};

export default InitApp;
