import React from 'react'
import {getKindeServerSession, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@/components/ui/button";


const page = async() => {
  return (
    <div>
        
        <Button className="absolute z-[999] right-64 top-2 hover:text-white bg-white text-black font-bold text-lg">
        <LogoutLink>Log out</LogoutLink>
      </Button>
    </div>
  )
}

export default page