import { LoginTypes, RegisterStep1Types, ResetPasswordTypes, SendOTPTypes, UpdateProfileTypes, VerifyOTPTypes } from "@/types/users";
import { AppErrServer } from "@/utils/app-err";

export async function LoginUser(values : LoginTypes) {
    try {
        console.log("Logging in User");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function LogoutUser() {
    try {
        console.log("Logged Out");
    } catch (error) {
        AppErrServer(error);
    }
};

export async function RegisterUser(values : RegisterStep1Types) {
    try {
        console.log("Registering User");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function GetCurrentlyLoggedinUser() {
    try {
        console.log("Getting Currently Logged in User");
    } catch (error) {
        AppErrServer(error);
    }
};

export async function UpdateUser(values : UpdateProfileTypes) {
    try {
        console.log("Updating User");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function SendOtp(values : SendOTPTypes) {
    try {
        console.log("Sending OTP");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function VerifyOtp(values : VerifyOTPTypes) {
    try {
        console.log("Verifying OTP");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function ResetPassword(values : ResetPasswordTypes) {
    if (values.password !== values.confirmpassword) {
        throw new Error("Passwords do not match");
    }

    try {
        console.log("Resetting Password");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function StartMFA(values : SendOTPTypes) {
    try {
        console.log("Starting MFA");
        console.log(values);
    } catch (error) {
        AppErrServer(error); 
    }
};

export async function VerifyMFA(values : VerifyOTPTypes) {
    try {
        console.log("Verifying MFA");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};