import { ReactNode } from "react";

/**
 * Container to uniformize the padding and other styling properties
 * @param param0 extra styling to use in the container
 * @returns
 */
export default function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`lg:p-4 my-8 ${className} rounded-2xl w-full`}>
      {children}
    </div>
  );
}
