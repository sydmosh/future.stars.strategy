'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
        destructive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
        outline: 'border border-gray-200 text-gray-800 dark:border-gray-700 dark:text-gray-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
