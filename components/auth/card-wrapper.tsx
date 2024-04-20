'use client';

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLable: string;
    backButtonLable: string;
    backButtonOnHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLable,
    backButtonLable,
    backButtonOnHref,
    showSocial,
}: CardWrapperProps) =>{
    return(
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLable} />
            </CardHeader>
            <CardContent>
            {children}
            </CardContent>
            {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
            )}
            <CardFooter>
                <BackButton
                label={backButtonLable}
                href={backButtonOnHref}
                />
            </CardFooter>
        </Card>
    );
};