import { useContext } from "react";
import { MyCompo1Context } from "./MyCompo1";


const useMyContext = () => {
    const context = useContext(MyCompo1Context);
    if (!context) {
        throw new Error("useMyContext must be used within a MyCompo1Context Provider")
    }
    return context;
};

export const MyCompo2: React.FC = () => {
    const { countSetter } = useMyContext();

    function handleOnClickButton() {
        if (countSetter) {
            countSetter(100);
        }
    }

    return (
        <>
            <div>my compo2</div>
            <button
                onClick={handleOnClickButton}
            >my compo2から呼び出し</button>
        </>
    );
}
