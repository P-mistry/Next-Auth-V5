import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    
}
import { CardWrapper } from "@/components/auth/card-wrapper"


export const LoginForm = () => {
    return (
        <CardWrapper
        headerLable="Welcome back"
        backButtonLable="Don't have a account?"
        backButtonOnHref="/auth/register"
        showSocial
        >
            Login Form !
        </CardWrapper>
    );
}