import { ReactNode } from 'react'
import clsx from 'clsx'
import { Inter } from 'next/font/google'

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

type Props = {
  isCollapsed: boolean
  children?: ReactNode
  layoutMainChildren?: ReactNode
}

export const Main = ({ isCollapsed, children }: Props) => {
  return (
    <main
      className={clsx(
        isCollapsed ? 'pl-[80px]' : 'pl-[220px]',
        `flex flex-col justify-center pt-[var(--header-height)] w-full items-center`,
        inter.variable
      )}
    >
      {children}
    </main>
  )
}
