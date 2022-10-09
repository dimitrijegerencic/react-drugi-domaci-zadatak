import React, {useState} from "react";


const Table = (

    {
        header = [],
        rows = [],
        onRowClick = () => {}
    }

) => {
    return (

        <table className={'table table-responsive-lg table-hover text-center'}>
            <thead>
            <tr>
                {Array.isArray(header) &&
                    header.map((title, index)=>
                        Object.values(title).map(headerValue =>
                            <th key={index}>{headerValue.toString()}</th>
                ))}
            </tr>
            </thead>
            <tbody>
                {Array.isArray(rows) &&
                    rows.map(rowItem=>
                        <tr onClick={() => onRowClick(rowItem)}>
                            {Object.keys(rowItem).map(keyItem =>
                                header.map(headerItem =>
                                Object.keys(headerItem).map(keyHeader =>
                                    keyItem === keyHeader &&
                                        <td>{rowItem[keyItem]}</td>)
                                ))}
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Table;