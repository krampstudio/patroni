import userProvider from '../provider/user.js';

export default function userService() {

    return {
        get(login){
            return userProvider.get(login);
        }
    };
}
