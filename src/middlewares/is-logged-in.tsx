import {Outlet, Navigate} from 'react-router-dom'

const IsLoggedin = () => {
    const userInfo = {
        data : {
            user : {
                email : ""
            }
        }
    };
    return (
        <div>
            {userInfo?.data?.user?.email ? <Outlet /> : <Navigate to="/login" />}
        </div>
    )
}

export default IsLoggedin