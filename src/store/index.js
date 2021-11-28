import { reactive } from "vue";

const state = reactive({
    user: {},
});

const methods = {
    // payload if true contains user data,
    // will be pushed to reactive store to contain current user info
    setUsers(payload) {
        state.user = payload ? payload.user : null;
    }
}

export default {
    state,
    methods,
}