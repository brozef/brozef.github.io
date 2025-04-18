import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  href?: string;
  inverse?: boolean
  color?: string
};

export function Button({ children, href, inverse, color }: Props) {
  
  let className = "mx-3 font-bold pt-4 pb-1 pl-14 pr-6 lg:pl-12 lg:pr-3 duration-200 transition-colors mb-6 lg:mb-0 text-lg";
  
  if (inverse) {
    color = color != null ? `[${color}]` : `black`;
    className += ` text-${color} bg-white border border-white hover:bg-${color} hover:text-white `;
  } else {
    color = color != null ? `[${color}]` : `white`;
    className += ` text-${color} bg-black hover:bg-${color} hover:text-black border border-black text-white`;
  }

  return (
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}
