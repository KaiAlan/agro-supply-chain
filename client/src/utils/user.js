import { useAuth0 } from "@auth0/auth0-react";

export function fetchUser() {
    const { user, isAuthenticated } = useAuth0();
    return [user, isAuthenticated];
}