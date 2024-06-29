import { InputHTMLAttributes, forwardRef, useId } from 'react'

type NativeProps = InputHTMLAttributes<HTMLInputElement>

type TextFieldOwnProps = {
  label?: string
  className?: string
}

type NativePropsWithoutTextFieldOwnProps = Omit<
  NativeProps,
  keyof TextFieldOwnProps
>

export type TextFieldProps = NativePropsWithoutTextFieldOwnProps &
  TextFieldOwnProps

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, id, label, ...props }, ref) => {
    const inputID = useId()

    return (
      <div className={className}>
        {label && (
          <label className="block" htmlFor={inputID}>
            {label}
          </label>
        )}

        <input
          id={id || inputID}
          className="block w-full h-10 px-2 text-base font-sans font-normal text-black rounded border border-gray-600 transition-colors hover:border-black focus-visible:border-black focus:outline-none focus:right focus:ring-cajuPrimary/25"
          {...props}
          ref={ref}
        />
      </div>
    )
  },
)

TextField.displayName = 'TextField'
