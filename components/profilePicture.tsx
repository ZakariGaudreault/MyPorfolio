import Image from "next/image";
export default function ProfilePicture({
  className = "",
}: {
  className?: String;
}) {
  return (
    <Image
      src="https://zakarigaudreault.github.io/profilepic.jpeg"
      alt="Profile picture of website author"
      width={724}
      height={1086}
      className={`rounded-full object-cover object-top border-4 border-primary shadow-lg ${className}`}
    />
  );
}
