import React from "react";

type AvatarProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
  src?: string;
  alt?: string;
  ahref?: string; // novo
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
  className = "",
  src,
  alt = "Avatar",
  ahref,
}: AvatarProps) {
  const baseStyles =
    "rounded-full overflow-hidden flex items-center justify-center bg-gray-200 cursor-pointer";

  const avatarContent = (
    <>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : icon ? (
        <div className="text-gray-600 text-xl">{icon}</div>
      ) : (
        children
      )}
    </>
  );

  const classes = `${className} ${baseStyles} ${sizeClasses[size]}`;

  // Se tiver ahref, renderiza como link
  if (ahref) {
    return (
      <a href={ahref} className={classes} onClick={onClick}>
        {avatarContent}
      </a>
    );
  }

  // Caso contrário, renderiza como div
  return (
    <div className={classes} onClick={onClick}>
      {avatarContent}
    </div>
  );
}
