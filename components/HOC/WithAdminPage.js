import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthUserContext";

const WithAdminPage = (Component) => {
    function WithAdmin({ ...otherProps }) {
        const router = useRouter()
        const { authUser, loading } = useAuth()

        if (loading) {
            return <div>Loading...</div>
        }

        if (!authUser) {
            router.push('/login')
            return ''
        }

        return <Component {...otherProps} />
    }

    return WithAdmin
}

export default WithAdminPage;