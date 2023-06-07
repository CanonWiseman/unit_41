import React, {useState} from "react";

const useSetColor = () => {
    const [state, setState] = useState([]);

    function handleStateChange(data){
        setState([...state, {...data}])
    }

    return [state, handleStateChange];
}

export default useSetColor;