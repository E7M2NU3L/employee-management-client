import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Root from './layouts/root'
import Home from './routes/root/home';
import Auth from './layouts/auth';
import SignIn from './routes/auth/sign-in';
import SignUp from './routes/auth/sign-up';
import SendOTP from './routes/auth/send-otp';
import VerifyOTP from './routes/auth/verify-otp';
import ResetPassword from './routes/auth/reset-password';
import MfaVerifyOtp from './routes/auth/mfa-verify-otp';
import Main from './layouts/main';
import Employee from './routes/dashboard/employee';
import Department from './routes/dashboard/department';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Root />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route element={<Auth />}>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/send-otp' element={<SendOTP />} />
            <Route path='/verify-otp' element={<VerifyOTP />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='/mfa/verify-otp' element={<MfaVerifyOtp />} />
          </Route>

          <Route element={<Main />}>
            <Route path='/employees' element={<Employee />} />
            <Route path='/departments' element={<Department />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App