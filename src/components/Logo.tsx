import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="DeutPak Logo"
        width={220}
        height={88}
        priority
        className="h-11 w-auto object-contain"
      />
    </Link>
  );
}
