import * as React from 'react'
import { clsx } from 'clsx'
import { ReturnComponent } from '@/shared/types'

export const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): ReturnComponent => (
  <div
    className={clsx('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}
    {...props}
  />
)

SheetFooter.displayName = 'SheetFooter'
