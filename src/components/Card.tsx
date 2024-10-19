import Image from 'next/image';
import Link from 'next/link';
import Slider from '@/components/Slider'

interface CardProps {
    href: string;
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    className?: string;
    budget: number;
    potential: number;
}

const Card: React.FC<CardProps> = ({ href, imageSrc, altText, title, description, className, budget, potential }) => {

    return (
      <Link href={href} className={`bg-blue-100 rounded hover:filter hover:brightness-110 ${className}`}>
        <div className="relative h-48 bg-black rounded-t">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className='rounded-t'
          />
        </div>
        <div className="bg-black rounded-b p-4">
          <h2 className="font-bold text-white text-center underline">{title}</h2>
          <p className='text-white text-center'>{description}</p>
          <div className='grid grid-cols-2 gap-4'>
            <Slider rating={budget} title='Budget'/>
            <Slider rating={potential} title='Investment Potential'/>
          </div>
        </div>
      </Link>
    );
  };
  

export default Card;