
import "./../Ufile.scss";
import TableEntity from "./entity";

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
    const lines = content.split('\n');

    const entities = lines.reduce((acc, line) => {
        const entityType = line.substring(0, 15).replace(/\s/g, '');
        if (entityType in EntityTable) {
            if (!acc[entityType]) {
                acc[entityType] = [];
            }
            acc[entityType].push(line);
        }
        return acc;
    }, {});

    return (
        <div className="ufile_entities">
            {Object.keys(entities).map((entityType) => (
                <TableEntity key={entityType} name={EntityTable[entityType]} data={entities[entityType]} />
            ))}
        </div>
    );
};
export default UfileTable;