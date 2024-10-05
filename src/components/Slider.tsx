interface SliderProps {
    percentage: number;
    title: string;
    className?: string;
}

const Slider: React.FC<SliderProps> = ({percentage, title, className}) => {
    return(
        <div className={`w-full bg-black rounded border-gray-500 border-2 ${className}`}>
            <div 
                className="bg-green-500 h-2 rounded" 
                style={{ width: `${percentage}%`}}
            />
            <p className="text-white text-center">{title}</p>
        </div>
    );
};

export default Slider;