
import React, { useState } from 'react';
import "./Ufile.scss";
import UfileTable from './UfileTable/table';


const UfileApp = () => {

    const [fileData, setFileData] = useState({
        content: '',
        name: '',
        lineCount: 0,
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
        reader.readAsText(file);
    };

    return (
        <div className="ufile_app">
            <div className="ufile_header">
                <h1>U-File editor</h1>
                <input type="file" onChange={handleFileRead} />
                <p>File Name: {fileData.name}</p>
            </div>
            <div className="ufile_buttons">
                <button>Save</button>
                <button>Download</button>
            </div>
            <UfileTable content={fileData.content}/>
        </div>
    );
}
export default UfileApp;