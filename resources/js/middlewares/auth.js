
import { UseAuthStore } from '../stores/auth';

export default async function auth({to, from, next}) {
    const store = UseAuthStore()
    if (!store.check&&store.token) {
        await store.fetchUser();
        if(store.check){
            return next();
        }else{
            return next({ name: "login" });
        }
    }else if (store.check && store.token) {
        return next();
    } else {
        return next({ name: "login" });
    }
}
