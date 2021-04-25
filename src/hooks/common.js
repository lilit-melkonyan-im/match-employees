import { useState, useCallback } from "react";

const useModal = (defaultState) => {
    const [isOpen, setIsOpen] = useState(defaultState);
    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    return [isOpen, openModal, closeModal];
};

export { useModal };
