import Image from 'next/image';

interface SliderProps {
    rating: number;
    title: string;
    className?: string;
}

const Slider: React.FC<SliderProps> = ({rating, title, className}) => {

    const maxRating = 5

    console.log('Rating in Slider:', rating);
    console.log('Title in Slider:', title);

    return (
        <div className='border-2 border-white'>
            <div className={`flex space-x-1 ${className}`}>
                {[...Array(maxRating)].map((_, index) => (
                    <div key={index}>
                        <Image
                            src="/chaos-orb.webp"
                            alt={`Rating ${index + 1}`}
                            width={50}
                            height={50}
                            className={`transition duration-300 ${index < rating ? '' : 'filter grayscale'}`}
                        />
                    </div>
                ))}
            </div>
            <p className="text-white text-center">{title}</p>
        </div>
    );
};

export default Slider;