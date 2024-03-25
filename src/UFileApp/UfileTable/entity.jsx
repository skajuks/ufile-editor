
import UF_FIELD_CONFIG from "../config";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

const Table = ({data, fields, name}) => {
    return (
        <div className="ufile_table_component">
            <div className="ufile_table_col" style={{minWidth: "30px", width: "70px"}}>
                <div className="ufile_table_legend_field" />
                <div className="ufile_table_data">
                    {
                        data?.map((_, index) =>
                            <div
                                className="ufile_table_data_row"
                                key={`${name}_${index}`}
                                style={{justifyContent: "center"}}
                            >
                                <FaDeleteLeft color={"#fa4848"} size={"20px"}/>
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
                                        <input type="text" defaultValue={line[field]} maxLength={fields[field].max}/>
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

const TableEntity = ({ name, data }) => {

    let start = 0;
    const fields = UF_FIELD_CONFIG[name].fields;
    const parsedData = data.map((line, index) => {
        const parsedLine = {};
        for (const field in fields) {
            const length = fields[field].max;
            parsedLine[field] = line.substring(start, start + length).trim();
            start += length;
        }
        parsedLine['INDEX'] = index + 1;
        start = 0;
        return parsedLine;
    });

    return (
        <div className="ufile_table_entity">
            <header><p>{name}</p><button><IoMdAdd size={"20px"}/></button></header>
            <Table data={parsedData} fields={fields} name={name} />
        </div>
    );
}
export default TableEntity;