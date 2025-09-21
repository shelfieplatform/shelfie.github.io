'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

export default function FloatingWaitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Joining waitlist with:', { name, email })
    toast({
      title: "You've joined the waitlist!",
      description: "We'll notify you when FaveIt launches.",
    })
    setEmail('')
    setName('')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md border-t border-white/10 p-2 sm:p-2 z-50">
      <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center gap-1 sm:gap-4 max-w-7xl mx-auto sm:justify-center py-4 sm:py-2">
        <div className="hidden sm:block text-xs sm:text-sm font-medium mr-1 sm:mr-4 whitespace-nowrap">Be First to Curate</div>
        <div className="flex flex-row gap-1 sm:gap-4 w-full sm:w-auto sm:max-w-3xl sm:justify-center">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-1/3 sm:w-auto sm:max-w-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/50 text-[10px] sm:text-sm h-12 sm:h-8"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-2/3 sm:w-auto sm:max-w-[300px] bg-white/10 border-white/20 text-white placeholder:text-white/50 text-[10px] sm:text-sm h-12 sm:h-8"
          />
          <Button 
            type="submit"
            className="bg-white text-black hover:bg-white/90 w-auto text-[10px] sm:text-sm h-12 sm:h-8 px-1 sm:px-4"
          >
            Join Waitlist
          </Button>
        </div>
      </form>
    </div>
  )
}

