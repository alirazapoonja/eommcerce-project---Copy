import { TrafficCone , UserIcon } from 'lucide-react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/cart' className='header-button'>
          <UserIcon className='h-8 w-8' />
          <span className='font-bold'>Sign in</span>
        </Link>

        <Link href='/cart' className='header-button'>
          <TrafficCone  className='h-8 w-8' />
          <span className='font-bold'>Icon</span>
        </Link>
      </nav>
    </div>
  )
}