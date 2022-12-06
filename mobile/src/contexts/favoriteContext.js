import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext({});

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoriteContext);
    return context;
}