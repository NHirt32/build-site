import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return(
        <div className="w-full h-15 grid grid-cols-[auto_1fr_1fr_1fr] justify-center space-x-4 fixed z-10">
            <Link 
            href={"/"} 
            className="bg-black text-white py-2 px-4 rounded inline-block border-2 border-white hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white group">
                <Image src='/home-icon.png' alt='A home icon' width={30} height={30} className='bg-transparent group-hover:scale-150'/>
            </Link>
            <Link href={"/builds"} className="bg-black text-white text-center py-2 px-4 rounded inline-block border-2 border-white hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white">
            3.25 Builds
            </Link>
            <Link href={"/archive"} className="bg-black text-white text-center py-2 px-4 rounded inline-block border-2 border-white hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white">
            Build Archive
            </Link>
            <Link href={"/random"} className="bg-black text-white text-center py-2 px-4 rounded inline-block border-2 border-white hover:filter hover:brightness-110 hover:font-bold hover:underline hover:border-white">
            Random Build
            </Link>
        </div>
    );
};

export default Header;