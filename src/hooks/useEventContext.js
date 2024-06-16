import { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const ValueContext = ({ children }) => {
    const [eventHandle, setEventHandle] = useState(false);

    const setEvent = (handle) => {
        setEventHandle(handle);
    };

    return (
        <EventContext.Provider value={{ eventHandle, setEvent }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEvent = () => {
    return useContext(EventContext);
};
