import Link from "next/link";
import React from "react";

const CustomLink = ({
  className,
  children,
  href,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={` font-semibold active:scale-95 transition-transform px-4 py-2 rounded-md flex items-center gap-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
