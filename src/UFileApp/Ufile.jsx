
import React, { useState } from 'react';
import "./Ufile.scss";
import UfileTable from './UfileTable/table';
import { EntityTable } from './config';

const UfileApp = () => {

    const [fileData, setFileData] = useState({
        content: '',
        name: '',
    });

    const handleFileRead = (e) => {
        const file = e.target.files[0];
        if (!file) {
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            const lines = content.split('\n');
            const header = lines[0];
            const footer = lines[lines.length - 1];
            setFileData({
                content,
                name: file.name,
                header,
                footer
            });
        };
        reader.readAsText(file, 'windows-1251');
    };

    const scrollInView = (entity) => {
        const element = document.getElementById(`ufile_table_entity_${entity}`);
        if (element) element.scrollIntoView();
    };

    return (
        <div className="ufile_app">
            <div className="ufile_header">
                <h1>U-File Editor</h1>
                <label htmlFor="file-upload" className="custom-file-upload">
                    {fileData.name || "Click to upload U-File"}
                </label>
                <input id="file-upload" type="file" onChange={handleFileRead} />
            </div>
            <div className="ufile_side_buttons">
                {
                    Object.values(EntityTable).map((entity, index) =>
                        <button onClick={() => scrollInView(entity)} key={`scrollbtn_${index}`}>{entity.substring(0, 3)}</button>
                    )
                }
            </div>
            {
                fileData?.content && <UfileTable content={fileData.content}/>
            }
        </div>
    );
}
export default UfileApp;