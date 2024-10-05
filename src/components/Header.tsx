import Link from 'next/link';

const Header: React.FC = () => {
    return(
        <div className="bg-purple-400 w-full h-15 grid-cols-3 justify-center grid space-x-4">
            <Link href={"/builds"} className="bg-red-400 text-white text-center py-2 px-4 rounded inline-block hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-black hover:border-2">
            3.25 Builds
            </Link>
            <Link href={"/archive"} className="bg-blue-400 text-white text-center py-2 px-4 rounded inline-block hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-black hover:border-2">
            Build Archive
            </Link>
            <Link href={"/random"} className="bg-green-400 text-white text-center py-2 px-4 rounded inline-block hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-black hover:border-2">
            Random Build
            </Link>
        </div>
    );
};

export default Header;