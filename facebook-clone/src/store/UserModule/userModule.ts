import AuthService from "@/services/AuthService"

const state = () : IUserStore => ({
        currentUser: {}
    });

const getters = {
    getCurrentUser(state: IUserStore) {
        return state.currentUser;
    }
};

const mutations = {
    SET_USER(state: IUserStore, payload: any) {
        state.currentUser = payload;
    }
};
    
const actions = {
    submitLogin ({ commit }: { commit: Function }, payload: any){
        AuthService.login(payload);
    },
    // async getCurrentUserData({ commit }: { commit: Function }) {
    //     const user: IUserData = await UserService.getCurrentUser();

    //     commit('SET_USER', user);
    // }
};

export default {
    state,
    getters,
    mutations,
    actions
}