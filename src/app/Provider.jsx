"use client"
import {SessionProvider} from "next-auth/react"
import { ThemeProvider } from "next-theme";
import { ToastContainer, toast } from 'react-toastify';

export default Provider({children,session})
{
    return (
        <SessionProvider session={session}>
            <ToastContainer position="top-right" autoClose={3000} />
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}