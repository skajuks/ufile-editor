
import { EntityTable, UF_FIELD_CONFIG } from "../config";

const getEntityType = (line) => {
    const firstTwoChars = line.substring(0, 2);
    if (firstTwoChars === '00' || firstTwoChars === '99') {
        return firstTwoChars;
    }
    return line.substring(0, 15).replace(/\s/g, '');
};

const UfToObject = (ufile) => {
    if (!ufile) {
        return {};
    }

    const lines = ufile.split('\n');

    // load all entities into an object as strings in array
    const entities = lines.reduce((acc, line) => {
        const entityType = getEntityType(line);
        if (entityType in EntityTable) {
            if (!acc[entityType]) {
                acc[entityType] = [];
            }
            acc[entityType].push(line);
        }
        return acc;
    }, {
        // Add all entityTypes from EntityTable as empty array
        ...Object.keys(EntityTable).reduce((acc, entityType) => {
            acc[entityType] = [];
            return acc;
        }, {})
    });

    let parsedData = {};
    // parse entity strings from u-file format into key/value pairs
    Object.entries(entities).forEach(([key, value]) => {
        const fields = UF_FIELD_CONFIG[EntityTable[key]].fields;
        const parsedEntities = value.map((line, index) => {
            const parsedLine = {};
            let start = 0;
            for (const field in fields) {
                const length = fields[field].max;
                parsedLine[field] = line.substring(start, start + length).trim();
                start += length;
            }
            parsedLine['INDEX'] = index + 1;
            start = 0;
            return parsedLine;
        });
        parsedData[key] = parsedEntities;
    });

    return parsedData;
};

export { UfToObject };