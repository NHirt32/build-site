import Link from 'next/link';

const Header: React.FC = () => {
    return(
        <div className="bg-gray-400 w-full h-15 grid grid-cols-[1fr_2fr_2fr_2fr] justify-center space-x-4 fixed z-10">
            <Link href={"/"} className="bg-red-400 text-white text-center py-2 px-4 rounded inline-block border-2 border-black hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white">
            Home
            </Link>
            <Link href={"/builds"} className="bg-red-400 text-white text-center py-2 px-4 rounded inline-block border-2 border-black hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white">
            3.25 Builds
            </Link>
            <Link href={"/archive"} className="bg-blue-400 text-white text-center py-2 px-4 rounded inline-block border-2 border-black hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white">
            Build Archive
            </Link>
            <Link href={"/random"} className="bg-green-400 text-white text-center py-2 px-4 rounded inline-block border-2 border-black hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white">
            Random Build
            </Link>
        </div>
    );
};

export default Header;