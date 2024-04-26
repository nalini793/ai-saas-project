'use client'

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ba13d287-d7c1-40bd-bf37-d3973e3a6985")
  }, [])
  return null
}