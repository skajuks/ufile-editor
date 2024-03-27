
import "./../Ufile.scss";
import TableEntity from "./entity";
import { useState } from "react";

import { IoMdSearch } from "react-icons/io";
import { EntityTable } from "../config";
import { TextEncoder } from 'text-encoding';


const UfileTable = ({ content }) => {

    const [searchString, setSearchString] = useState("");

    const search = () => {
        const str = document.getElementById("search_input").value;
        setSearchString(str);
    };

    const prepareDownload = () => {
        const data = [];

        // Create a new TextEncoder for Windows-1251
        const encoder = new TextEncoder('windows-1251');

        // Encode the data array as Windows-1251
        const encodedData = encoder.encode(data.join('\n'));
        // Create a new Blob object from the encoded data
        const blob = new Blob([encodedData], { type: 'text/plain' });
        // Create a download link for the Blob object
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'UFile.tx0';

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
                    Object.keys(EntityTable).map((entityType, index) =>
                        <TableEntity name={EntityTable[entityType]} data={content[entityType] || []} key={`table_${index}`} search={searchString} />
                    )
                }
            </div>
        </>

    );
};
export default UfileTable;