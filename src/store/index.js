import {configureStore, createSlice} from "@reduxjs/toolkit";

const get_app_state = () => {

    const app_state = localStorage.getItem("app_state");

    if(!app_state){

        const base_url = `${window.location.origin}/`;

        const initial_state = {
            app_data: {
                base_url,
                api_base_url: `${base_url}api`
            },
            user: {
                logged_in: false,
                access_token: "",
                display_name: "",
                avatar: "",
                last_message_time: null
            }
        }

        return initial_state;

    }else{

        return JSON.parse(app_state);

    }

}

const persist_app_state = (new_state) => {

    localStorage.setItem(JSON.stringify(new_state));

}

const initial_state = get_app_state();

const app_dataSlice = createSlice({
    name: "app_data",
    initialState: initial_state["app_data"]
});

const userSlice = createSlice({
    name: "user",
    initialState: initial_state["user"],
    reducers: {
        login: (state, data) => {
            const {
                access_token, 
                user:{
                    DisplayName: display_name, 
                    Avatar: avatar,
                    LastMessageTime: last_message_time
                }
            } = data.payload;

            state.logged_in = true;
            state.access_token = access_token;
            state.display_name = display_name;
            state.avatar = avatar;
            state.last_message_time = last_message_time;

            persist_app_state(state);
        },
        logout: (state) => {
            state.logged_in = false,
            state.access_token = "",
            state.display_name = "",
            state.avatar = "",
            state.last_message_time = null
        }
    }
});

export const userActions = userSlice.actions;

const store = configureStore({
    reducer: {
        app_data: app_dataSlice.reducers,
        user: userSlice.reducers 
    }
});

export default store;