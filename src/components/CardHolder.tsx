import Card from "@/components/Card"

const CardHolder: React.FC = () => {
    return (
        <div className="bg-gray-400 grid grid-cols-2 gap-4 mt-2">
          
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={70}
            potential={100}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={70}
            potential={100}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-2"
            imageSrc="/deadeye-cropped.png"
            altText="A picture of the Deadeye Ascendancy"
            title="Svalinn Splitting Steel Deadeye"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={70}
            potential={100}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          <Card
            href="/build-1"
            imageSrc="/slayer-cropped.png"
            altText="A picture of the Slayer Ascendancy"
            title="Frost Blades of Katabasis Slayer"
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec nisl ac quam eleifend imperdiet et in magna."
            budget={30}
            potential={80}
          />
          

          


        </div>
    );
};

export default CardHolder;