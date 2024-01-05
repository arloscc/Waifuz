import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="text-pink-400 ">
        <span className="text-left absolute p-6 mx-6 font-semibold text-pink-400">
          <a href="/">Waifuz</a>
        </span>
        <div className="text-right p-6 mx-6 font-semibold">
          <Link className="p-4 hover:bg-white transition duration-150ease-in-outl rounded-full hover:text-pink-200" href="#home">
            Home
          </Link>
          <Link  className="p-4 hover:bg-white transition duration-150ease-in-outl rounded-full hover:text-pink-200" href="#Waifus">
            Waifus
          </Link>
          <Link  className="p-4 hover:bg-white transition duration-150ease-in-outl rounded-full hover:text-pink-200" href="#Current">
            Current Top
          </Link>
          <Link  className="p-4 hover:bg-white transition duration-150ease-in-outl rounded-full hover:text-pink-200" href="#About">
            About
          </Link>
        </div>
      </div>
    </>
  );
}
