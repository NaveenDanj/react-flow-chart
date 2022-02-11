import React from 'react'

export const NodeContext = React.createContext([]);

export const NodeProvider = () => {

    return (
        <NodeContext.Provider value={[]}>
            
        </NodeContext.Provider>

    )

}