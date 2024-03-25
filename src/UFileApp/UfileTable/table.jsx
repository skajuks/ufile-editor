
import "./../Ufile.scss";
import TableEntity from "./entity";
import { useState, useEffect } from "react";
import Listener from "../listener";
import { IoMdSearch } from "react-icons/io";
import { EntityTable } from "../config";
import { TextEncoder } from 'text-encoding';


const UfileTable = ({ content }) => {

    const [parsed, setEntities] = useState({});
    const [searchString, setSearchString] = useState("");

    const search = () => {
        const str = document.getElementById("search_input").value;
        setSearchString(str);
    };

    const prepareDownload = () => {
        const data = [];

        // Add header
        data.push(`00UAFKASFAS.tx0`);

        for (let i = 0; i < Object.keys(parsed).length; i++) {
            if (Object.values(parsed)[i]?.length === 0) {
                continue;
            }
            for (let j = 0; j < Object.values(parsed)[i]?.length; j++) {
                data.push(Object.values(parsed)[i][j]);
            }
        }

        // Add footer
        data.push(`99UAFKASFAS.tx0`);

        // Create a new TextEncoder for Windows-1251
        const encoder = new TextEncoder('windows-1251');

        // Encode the data array as Windows-1251
        const encodedData = encoder.encode(data.join('\n'));
        console.log(encodedData)
        // Create a new Blob object from the encoded data
        const blob = new Blob([encodedData], { type: 'text/plain' });
        console.log(blob)
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

    useEffect(() => {
        const getEntities = () => {
            const lines = content.split('\n');
            const e = lines.reduce((acc, line) => {
                const entityType = line.substring(0, 15).replace(/\s/g, '');
                if (entityType in EntityTable) {
                    if (!acc[entityType]) {
                        acc[entityType] = [];
                    }
                    acc[entityType].push(line);
                }
                return acc;
            }, {});

            // Add missing entityTypes from EntityTable as empty array
            Object.keys(EntityTable).forEach((entityType) => {
                if (!e[entityType]) {
                    e[entityType] = [];
                }
            });

            return e;
        }
        setEntities(getEntities());
    }, [content]);

    useEffect(() => {
        const newHandleAction = () => {
            const instruction = Listener.getInstruction();
            switch (instruction[0]) {
                case "ADD":
                    const entity = parsed[instruction[1]];
                    if (!entity) {
                        break;
                    }

                    entity.push(`${instruction[1]}`.padEnd(300, ' '));
                    setEntities({ ...parsed, [instruction[1]]: entity });
                    break;
                case "REMOVE":
                    const entityToRemove = parsed[instruction[1]];
                    if (!entityToRemove) {
                        break;
                    }
                    const indexToRemove = parseInt(instruction[2], 10);
                    if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= entityToRemove.length) {
                        console.error("Invalid index for removal");
                        break;
                    }
                    setEntities(prevEntities => {
                        const updatedEntity = [...prevEntities[instruction[1]].slice(0, indexToRemove), ...prevEntities[instruction[1]].slice(indexToRemove + 1)];
                        return { ...prevEntities, [instruction[1]]: updatedEntity };
                    });
                    break;
                default:
                    break;
            }
        }
        Listener.addListener(newHandleAction);
        return () => {
            Listener.removeListener(newHandleAction);
        }
    }, [parsed]);


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
                        <TableEntity name={EntityTable[entityType]} data={parsed[entityType] || []} key={`table_${index}`} search={searchString} />
                    )
                }
            </div>
        </>

    );
};
export default UfileTable;