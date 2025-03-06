
import { useContext, useReducer, createContext } from "react";
import { initialStore } from "../store";  
import storeReducer from "../reducers/Reducer";  

const StoreContext = createContext();

function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(storeReducer, initialStore); 

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => useContext(StoreContext);

export default StoreProvider;