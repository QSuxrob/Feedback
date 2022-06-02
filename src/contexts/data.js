import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

function DataProvider({ children }) {
    const [data, setData] = useState(null)
    const [isFetched, setFetched] = useState(false);

    useEffect(() => {
        if (!isFetched) {
            setFetched(true)
            fetch('/data.json')
                .then(res => res.json())
                .then(data => {
                    setData({
                        ...data,
                        productRequests: data.productRequests.map(product => ({
                            ...product,
                            isClicked: false,
                        }))
                    })
                });
        }
    }, [isFetched]);

    if (!data) {
        return null
    }

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export function useData() {
    return useContext(DataContext);
}

export default DataProvider