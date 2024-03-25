
import "./../Ufile.scss";
import TableEntity from "./entity";
import { useState, useEffect } from "react";
import Listener from "../listener";

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
                    if (instruction[2] < 0 || instruction[2] >= entityToRemove.length) {
                        console.error("Invalid index for removal");
                        break;
                    }
                    const updatedEntity = [...entityToRemove.slice(0, instruction[2]), ...entityToRemove.slice(instruction[2] + 1)];
                    setEntities({ ...parsed, [instruction[1]]: updatedEntity });
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
                <button>Save</button>
                <button>Download</button>
            </div>
            <div className="ufile_entities">
                {Object.keys(parsed).map((entityType) => (
                    <TableEntity name={EntityTable[entityType]} data={parsed[entityType]} />
                ))}
            </div>
        </>

    );
};
export default UfileTable;