'use client'
import { ModalProvider } from "./modal-provider"
import { ToasterProvider } from "./toaster-provider"

export const ModalWrapper = () => {
  return (
    <>
      <ModalProvider />
      <ToasterProvider/>
    </>
  )
}