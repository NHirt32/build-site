import Checkbox from "./Checkbox";

const Filter: React.FC = () => {
    return(
        <div className="w-full h-15 flex justify-center space-x-2">
            <Checkbox boxId="bossingFilter" boxName="Bossing" />
            <Checkbox boxId="mappingFilter" boxName="Mapping" />
            <Checkbox boxId="sanctumFilter" boxName="Sanctum" />

            

        </div>
    );
};

export default Filter;