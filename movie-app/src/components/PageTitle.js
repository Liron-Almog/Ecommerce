import React from 'react';

/**
 * To present a consistent title in the program
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
export default function PageTitle({title}){
    return (
        <h1 className="mb-4 text-warning"  style={{ textAlign: 'center', fontWeight: "bold" }}>{title}</h1>
    );
};
