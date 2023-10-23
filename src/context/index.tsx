import {createContext} from 'react';

interface AppState {
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean; 
}

const AppContext = createContext(1);


export default AppContext;