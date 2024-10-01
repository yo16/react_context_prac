import { useState, createContext } from "react"

import { MyCompo2 } from "./MyCompo2";

// Contextの型
interface MyCompo1ContextType {
    countSetter: (c:number) => void;
}
// undefも許容し、初期値はundefとする
export const MyCompo1Context = createContext<MyCompo1ContextType | undefined>(undefined);


export const MyCompo1: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    // 受け渡しに使用するcontextを作る
    const contextValue = {
        // ここで関数を設定
        countSetter: (newCount: number) => setCount(newCount),
    };

    return (
        <>
            count:{ count }
            <hr />
            <MyCompo1Context.Provider value={contextValue}>
                <MyCompo2 />
            </MyCompo1Context.Provider>
        </>
    )
}

