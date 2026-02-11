import * as React from 'react'
import { cn } from '@/lib/utils'

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(({ className, onCheckedChange, ...props }, ref) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onCheckedChange?.(event.target.checked)
  }

  return (
    <label
      className={cn(
        'relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors',
        'bg-input hover:bg-muted',
        'data-[state=checked]:bg-primary',
        className,
      )}
    >
      <input type="checkbox" ref={ref} className="sr-only" onChange={handleChange} {...props} />
      <span
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
          props.checked ? 'translate-x-5' : 'translate-x-0.5',
        )}
      />
    </label>
  )
})
Switch.displayName = 'Switch'

export { Switch }
