"use client"

import { ReactNode } from "react"
import { AuthProvider } from "@/contexts/AuthProvider"

interface Props {
    children: ReactNode
}

export default function ClientProviders({ children }: Props) {
    return <AuthProvider>{children}</AuthProvider>
}
