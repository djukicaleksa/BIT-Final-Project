class AuthenticationImp {
    isLogon() {
        const permission = JSON.parse(sessionStorage.getItem("accessToken"));
        if (permission) {
            return true;
        } return false;
    }
}

export const Authentication = new AuthenticationImp();