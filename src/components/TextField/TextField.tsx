import { InputHTMLAttributes, forwardRef, useId } from 'react'
import { classNames } from '~/utils/class-names'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

type TextFieldOwnProps = {
  label?: string
  className?: string
  errorMessage?: string
}

type NativePropsWithoutTextFieldOwnProps = Omit<
  NativeProps,
  keyof TextFieldOwnProps
>

export type TextFieldProps = NativePropsWithoutTextFieldOwnProps &
  TextFieldOwnProps

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, id, label, errorMessage, ...props }, ref) => {
    const inputID = useId()
    const helperTextId = useId()
    const error = Boolean(errorMessage)

    return (
      <div className={className}>
        {label && (
          <label className="block" htmlFor={inputID}>
            {label}
          </label>
        )}

        <input
          id={id || inputID}
          className={classNames([
            'block w-full h-10 px-2 text-base font-sans font-normal text-black rounded border transition-colors focus:outline-none focus:right focus:ring-cajuPrimary/25',
            error
              ? 'border-red-700 bg-red-700/10'
              : 'border-gray-600 hover:border-black focus-visible:border-black',
          ])}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? helperTextId : undefined}
          {...props}
        />

        {error && (
          <p className="text-base text-red-700 text-right">{errorMessage}</p>
        )}
      </div>
    )
  },
)

TextField.displayName = 'TextField'
