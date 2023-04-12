import { UseAuthStore } from '../stores/auth';

export default async function guest({to, from, next}) {
  const store = UseAuthStore()
  if (store.token) {
    return next({ name: "home" });
  } else {
    return next();
  }
}
