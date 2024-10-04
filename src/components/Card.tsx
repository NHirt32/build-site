import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    href: string;
    imageSrc: string;
    altText: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ href, imageSrc, altText, title }) => {
    return (
      <Link href={href} className="bg-blue-100 hover:border-pink-500 hover:border-2 hover:underline">
        <div className="relative h-2/3 bg-black">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-1/3 bg-black">
          <h2 className="font-bold text-white text-center">{title}</h2>
        </div>
      </Link>
    );
  };
  

export default Card;