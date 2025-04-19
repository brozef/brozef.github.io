import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  href?: string;
  inverse?: boolean;
  square?:boolean;
};

export function Button({ children, href, inverse, square }: Props) {
  
  let className = `mx-3 font-bold pb-1 duration-200 transition-colors mb-6 lg:mb-0 text-right [&_img]:hover:invert [&_img]:transition-[filter] [&_img]:duration-200 `;
  
  if (inverse) {
    className += ` mix-blend-screen text-black bg-white hover:bg-transparent hover:text-white border border-white`;
  } else {
    className += ` mix-blend-multiply text-white bg-black hover:bg-transparent hover:text-black border border-black`;
  }

  if (square) {
    className += ` pt-2 lg:pl-2 pl-6 pr-6 lg:pr-2 `;
  } else {
    className += ` pt-4 lg:pl-12 pl-14 pr-6 lg:pr-3 `;
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
