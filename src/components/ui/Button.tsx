import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text' | 'outline-black';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    variant = 'primary', 
    size = 'md', 
    href, 
    fullWidth,
    ...props 
  }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      {
        'rounded-full': variant !== 'text',
        'bg-[#000000] text-white hover:bg-gray-900': variant === 'primary',
        'bg-white text-[#008F60] border border-[#008F60] hover:bg-gray-50': variant === 'secondary',
        'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700': variant === 'outline',
        'bg-transparent hover:bg-gray-100 text-gray-700': variant === 'ghost',
        'bg-transparent text-gray-900 hover:text-gray-900 p-0': variant === 'text',
        'border border-black bg-transparent text-gray-900 hover:bg-gray-100': variant === 'outline-black',
        'px-4 py-2 text-sm': size === 'sm' && variant !== 'text',
        'px-6 py-2.5 text-base': size === 'md' && variant !== 'text',
        'px-8 py-3 text-lg': size === 'lg' && variant !== 'text',
        'w-full': fullWidth,
      },
      className
    );

    if (href) {
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button'; 