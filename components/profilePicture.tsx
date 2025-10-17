import Image from "next/image";

const basePath = process.env.NODE_ENV === "production" ? "/MyPorfolio" : "";

export default function ProfilePicture({
  className = "",
}: {
  className?: string; // use lowercase 'string' for type
}) {
  return (
    <Image
      src={`${basePath}/profilepic.jpeg`}
      alt="Profile picture of website author"
      width={724}
      height={1086}
      className={`rounded-full object-cover object-top border-4 border-primary shadow-lg ${className}`}
    />
  );
}
