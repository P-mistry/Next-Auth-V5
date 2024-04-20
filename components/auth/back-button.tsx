'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface backButtonProps {
    href: string;
    label: string;
};

export const BackButton = ({
    href,
    label,
}: backButtonProps) => {
    return (
        <Button
        variant='link'
        className="font-nornal w-full"
        size='sm'
        asChild
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};