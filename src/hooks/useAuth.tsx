"use client"

import { AuthContext } from "@/contexts/AuthProvider"
import { useContext } from "react"


export default function useAuth() {
    return useContext(AuthContext)
}