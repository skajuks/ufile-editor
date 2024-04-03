
import "./../Ufile.scss";
import TableEntity from "./entity";
import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { EntityTable, Order } from "../config";
import { TextEncoder } from 'text-encoding';
import { ObjectToUf } from "../functions/fn";


const orderedEntities = [];
Order.forEach(key => {
    if (key in EntityTable) {
        orderedEntities.push({ key, value: EntityTable[key] });
    }
});

const UfileTable = ({ content, name }) => {

    const [searchString, setSearchString] = useState("");

    const search = () => {
        const str = document.getElementById("search_input").value;
        setSearchString(str);
    };

    const prepareDownload = () => {
        const ufile = ObjectToUf(content);
        const encoder = new TextEncoder('windows-1251');
        encoder.encode(ufile);
        const blob = new Blob([ufile], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = name;
        link.href = url;

        // Append the download link to the document body and click it
        document.body.appendChild(link);
        link.click();

        // Clean up by removing the link and revoking the Blob object URL
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <div className="ufile_buttons">
                <div className="ufile_search">
                    <input type="text" id="search_input" placeholder="Search..." />
                    <button onClick={() => search()}><IoMdSearch size={"25px"}/></button>
                </div>
                <button onClick={() => prepareDownload()}>Download</button>
            </div>
            <div className="ufile_entities">
                {
                    orderedEntities.map((entityType, index) =>
                        <TableEntity name={entityType.value} data={content[entityType.key] || []} key={`table_${index}`} search={searchString} />
                    )
                }
            </div>
        </>

    );
};
export default UfileTable;