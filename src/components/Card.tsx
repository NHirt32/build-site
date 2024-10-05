import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    href: string;
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({ href, imageSrc, altText, title, description, className }) => {
    return (
      <Link href={href} className={`bg-blue-100 hover:border-pink-500 rounded hover:border-2 hover:underline ${className}`}>
        <div className="relative h-2/3 bg-black rounded-t">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className='rounded-t'
          />
        </div>
        <div className="h-1/3 bg-black rounded-b">
          <h2 className="font-bold text-white text-center underline">{title}</h2>
          <p className='text-white text-center'>{description}</p>
        </div>
      </Link>
    );
  };
  

export default Card;