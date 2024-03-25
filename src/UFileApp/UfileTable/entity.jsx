
import { UF_FIELD_CONFIG } from "../config";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd, IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import Listener from "../listener";

const actions = {
    I: "INSERT",
    U: "UPDATE",
    D: "DELETE",
    0: "IN-STOCK",
    1: "ACTIVE",
    2: "UNINSTALL",
    3: "CLOSED"
};

const Table = ({data, fields, name}) => {

    const removeEntityRow = (rowId) => {
        Listener.worker(["REMOVE", UF_FIELD_CONFIG[name].name, rowId]);
    };

    return (
        <div className="ufile_table_component">
            <div className="ufile_table_col" style={{minWidth: "30px", width: "70px"}}>
                <div className="ufile_table_legend_field" />
                <div className="ufile_table_data">
                    {
                        data?.map((_, index) =>
                            <div
                                className="ufile_table_data_row"
                                key={`Delete_${index}`}
                                style={{justifyContent: "center"}}
                                onClick={() => removeEntityRow(index)}
                            >
                                <FaDeleteLeft color={"#fff"} size={"20px"}/>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="ufile_table_col" style={{minWidth: "30px", width: "70px"}}>
                <div className="ufile_table_legend_field"><p>Nr.</p></div>
                <div className="ufile_table_data">
                    {
                        data?.map((_, index) =>
                            <div
                                className="ufile_table_data_row"
                                key={`idx_${index}`}
                                style={{justifyContent: "center"}}
                            >
                                {index + 1}
                            </div>
                        )
                    }
                </div>
            </div>
            {
                Object.keys(fields)?.map((field, index) =>
                    <div className="ufile_table_col" key={`table_col_${name}_${index}`}>
                        <div className="ufile_table_legend_field"><p>{fields[field].name}</p></div>
                        <div className="ufile_table_data">
                            {
                                data?.map((line, index2) =>
                                    <div className="ufile_table_data_row" key={`${name}_${index}_${index2}`}>
                                        {
                                            fields[field]?.type === "select" ?
                                            <select className="ufile_table_select">
                                                {
                                                    fields[field].options.map((option, index3) =>
                                                        <option key={`${name}_${index}_${index2}_${index3}`} value={option}>{actions[option]}</option>
                                                    )
                                                }
                                            </select>
                                            :
                                            <input type="text" defaultValue={line[field]} maxLength={fields[field].max} readOnly={fields[field]?.readOnly}/>
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

const TableEntity = ({ name, data, search }) => {
    const [show, toggleShow] = useState(false);

    useEffect(() => {
        toggleShow(data?.length > 0);
    }, [data]);

    let start = 0;
    const fields = UF_FIELD_CONFIG[name].fields;
    const parsedData = data?.length ? data?.map((line, index) => {
        const parsedLine = {};
        for (const field in fields) {
            const length = fields[field].max;
            parsedLine[field] = line.substring(start, start + length).trim();
            start += length;
        }
        parsedLine['INDEX'] = index + 1;
        start = 0;
        return parsedLine;
    }).filter(parsedLine => {
        // Convert the parsedLine object to an array of its values, then convert that array to a string
        const parsedLineString = Object.values(parsedLine).join(' ');
        // Return true if the parsedLineString includes the search string, and false otherwise
        return parsedLineString.includes(search);
    }) : [];

    const addEntityRow = () => {
        Listener.worker(["ADD", UF_FIELD_CONFIG[name].name ,""])
    };
    const setHideTable = () => {
        toggleShow(prev => !prev);
    };

    return (
        <div
            className="ufile_table_entity"
            id={`ufile_table_entity_${name}`}
        >
            <header>
                <button
                    onClick={() => setHideTable()}
                    style={{width: "25px", background: "#0c111c"}}
                >
                    {
                        show ?
                        <IoIosArrowUp size={"20px"}/>
                        :
                        <IoIosArrowDown size={"20px"}/>
                    }
                </button>
                <button onClick={() => addEntityRow()}><IoMdAdd size={"20px"}/></button>
                <p>{`${name} [ ${parsedData?.length} ]`}</p>
            </header>
            {
                show && data && <Table data={parsedData} fields={fields} name={name} />
            }
        </div>
    );
}
export default TableEntity;