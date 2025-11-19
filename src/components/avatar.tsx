import React from "react";

type AvatarProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
  src?: string;
  alt?: string;
};

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export function Avatar({
  children,
  onClick,
  size = "md",
  icon,
  className,
  src,
  alt = "Avatar",
}: AvatarProps) {
  const baseStyles =
    "rounded-full overflow-hidden flex items-center justify-center bg-gray-200 cursor-pointer";

  const avatarClass = (sizeClasses[size], className);

  return (
    <div className={`${avatarClass} ${baseStyles} ${sizeClasses[size]}`} onClick={onClick}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : icon ? (
        <div className="text-gray-600 text-xl">{icon}</div>
      ) : (
        children
      )}
    </div>
  );
}
