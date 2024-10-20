
interface CheckboxProps {
    boxId: string;
    boxName: string;
}


const Checkbox: React.FC<CheckboxProps> = ({boxId, boxName}) => {
    return(
        <div>
            <label htmlFor={boxId} className="flex items-center flex-2 p-4">
                <input type="checkbox" id={boxId} className="rounded h-4 w-4 mr-2" />
                {boxName}
            </label>
        </div>
    );
};

export default Checkbox;