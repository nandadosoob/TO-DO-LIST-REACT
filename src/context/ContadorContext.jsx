import React, { createContext, useState } from 'react';

export const ContadorContext = createContext();

export function ContadorTarefa({children}) {
    const [numTarefa, setNumTarefa] = useState(0);
}