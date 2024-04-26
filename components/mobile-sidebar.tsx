"use client"
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Sidebar from '@/components/sidebar'

interface MobileSidebarProps{
  apiLimitCount: number,
  isPro:boolean
  
}

const mobileSidebar = ({apiLimitCount, isPro=false}:MobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
       <Button variant="ghost" size="icon" className='md:hidden'>
        <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='p-0'>
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}/>

      </SheetContent>
      </Sheet>
  )
}

export default mobileSidebar