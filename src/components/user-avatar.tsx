import { Avatar, AvatarImage } from "./ui/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const avatarVarients = cva("", {
  variants: {
    size: {
      default: "h-9 w-9",
      xs: "h-5 w-5",
      sm: "h-6 w-6",
      lg: "h-10 w-10",
      xl: "h-[160px] w-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVarients> {
  imageurl: string;
  name: string;
  className?: string;
  onClick?: () => void;
}

const UserAvatar = ({
  imageurl,
  name,
  size,
  className,
  onClick,
}: UserAvatarProps) => {
  return (
    <Avatar
      onClick={onClick}
      className={cn(avatarVarients({ size, className }))}
    >
      <AvatarImage src={imageurl} alt={name} />
    </Avatar>
  );
};

export default UserAvatar;
