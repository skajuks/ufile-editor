
import "./../Ufile.scss";
import TableEntity from "./entity";
import { useState, useEffect } from "react";

const EntityTable = {
    MERCHANTS_ALL: "Merchant",
    SET0_ACC_TR_ALL: "Terminal",
    AGREEMENTS_ALL: "Agreement",
    DEPARTMENTS_ALL: "Department",

    // simple ufiles
    MERCHANTS: "Merchant_Simple",
    SET0_ACC_TRM: "Terminal_Simple",
    AGREEMENTS: "Agreement_Simple",
    DEPARTMENTS: "Department_Simple",

};

const UfileTable = ({ content }) => {

    const [parsed, setEntities] = useState({});

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
            return e;
        }
        setEntities(getEntities());
    }, [content]);

    const addRow = (name) => {
        console.log(name)
    }
    return (
        <>
            <div className="ufile_buttons">
                <button>Save</button>
                <button>Download</button>
            </div>
            <div className="ufile_entities">
                {Object.keys(parsed).map((entityType) => (
                    <TableEntity name={EntityTable[entityType]} data={parsed[entityType]} cb={(name) => addRow(name)}/>
                ))}
            </div>
        </>

    );
};
export default UfileTable;