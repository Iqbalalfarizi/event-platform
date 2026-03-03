import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"} className="logo pl-10">
          <Image src={"/icons/logo.png"} alt="" width={24} height={24} />
          <p>DevEvent</p>
        </Link>
        <ul className="pr-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Events</Link>
          <Link href={"/"}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
