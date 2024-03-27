
import React, { useState, useEffect } from 'react';
import "./Ufile.scss";
import UfileTable from './UfileTable/table';
import { EntityTable } from './config';
import { UfToObject } from './functions/fn';
import Listener from "../UFileApp/listener";

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
            const parsed = UfToObject(content);
            setFileData({
                content: parsed,
                name: file.name,
            });
        };
        reader.readAsText(file, 'windows-1251');
    };

    const scrollInView = (entity) => {
        const element = document.getElementById(`ufile_table_entity_${entity}`);
        if (element) element.scrollIntoView();
    };

    useEffect(() => {
        const newHandleAction = () => {
            const instruction = Listener.getInstruction();
            switch (instruction[0]) {
                case "ADD":
                    const entity = fileData.content[instruction[1]];
                    if (!entity) {
                        break;
                    }

                    entity.push({TABLE_NAME: instruction[1]});
                    setFileData(prevFileData => {
                        const updatedContent = { ...prevFileData.content, [instruction[1]]: entity };
                        return { ...prevFileData, content: updatedContent };
                    });
                    break;
                case "REMOVE":
                    const entityToRemove = fileData.content[instruction[1]];
                    if (!entityToRemove) {
                        break;
                    }
                    const indexToRemove = parseInt(instruction[2], 10);
                    if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= entityToRemove.length) {
                        console.error("Invalid index for removal");
                        break;
                    }
                    setFileData(prevFileData => {
                        const updatedEntity = [...prevFileData.content[instruction[1]].slice(0, indexToRemove), ...prevFileData.content[instruction[1]].slice(indexToRemove + 1)];
                        const updatedContent = { ...prevFileData.content, [instruction[1]]: updatedEntity };
                        console.log({ ...prevFileData, content: updatedContent })
                        return { ...prevFileData, content: updatedContent };
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
    }, [fileData]);

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