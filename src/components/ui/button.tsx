import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center whitespace-nowrap text-xs font-medium tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_8px_24px_rgba(184,169,154,0.35)]",
        outline:
          "border border-foreground/20 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        ghost: "bg-transparent text-foreground hover:text-accent",
        link: "bg-transparent text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6 text-[10px]",
        lg: "h-14 px-10 text-sm",
        icon: "h-12 w-12 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Button — supports `asChild` to render as a Link/anchor without losing styles
 * or the gold slide-in hover effect. Manually clones the child element and
 * injects the slide span + content wrapper into its children, so we don't
 * trip Radix Slot's single-child requirement.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const hasSlide = variant === "default" || variant === undefined;

    const innerContent = (
      <>
        {hasSlide && (
          <span
            className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            aria-hidden="true"
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">
          {asChild
            ? (React.Children.only(children) as React.ReactElement<any>).props.children
            : children}
        </span>
      </>
    );

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<any>;
      return React.cloneElement(child, {
        ...(props as Record<string, unknown>),
        ref,
        className: cn(buttonVariants({ variant, size, className }), child.props.className),
        children: innerContent,
      });
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
