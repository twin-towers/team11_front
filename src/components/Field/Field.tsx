import type { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { useId } from 'react';

import style from './style.module.css';

type VanillaProps = Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	'aria-errormessage' | 'aria-invalid' | 'aria-label' | 'id'
>;

type FieldProps = VanillaProps & {
	error?: string;
	invalid?: boolean;
	label: string;
	name: string;
	wrapperClassName?: string;
};

function Field_({ className, error, invalid = false, label, wrapperClassName, ...props }: FieldProps, ref: ForwardedRef<HTMLInputElement>) {
	const id = useId();
	const errorID = invalid ? `${id}-error` : undefined;

	return (
		<div className={clsx(style.control, wrapperClassName)}>
			<label className={style.label} htmlFor={id}>
				{label}:
			</label>
			<input aria-errormessage={errorID} aria-invalid={invalid} className={clsx(style.input, className)} id={id} {...props} ref={ref} />
			{invalid && (
				<span aria-live="polite" className={style.error} id={errorID}>
					{error}
				</span>
			)}
		</div>
	);
}

export const Field = forwardRef(Field_);
