import React, { useState } from "react";
// import "./styles.css";

import Dropzone from "react-dropzone";

export default function MyDropZone() {
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
        setFileNames(acceptedFiles.map(file => file.name));

    return (
        <div className="App">
            <Dropzone
                onDrop={handleDrop}
                accept="image/*"
                minSize={1024}
                maxSize={3072000}
            >
                {({
                    getRootProps,
                    getInputProps,
                    isDragActive,
                    isDragAccept,
                    isDragReject
                }) => {
                    const additionalClass = isDragAccept
                        ? "accept"
                        : isDragReject
                            ? "reject"
                            : "";

                    return (
                        <div
                            {...getRootProps({
                                className: `dropzone ${additionalClass}`
                            })}
                        >
                            <input {...getInputProps()} />
                            <span>{isDragActive ? "📂" : "📁"}</span>
                            <p>Drag'n'drop files, or click to select files</p>
                            <div style={{ color: 'black' }}>
                                <strong>Files:</strong>
                                <div>
                                    {fileNames.map(fileName => (
                                        <p className="m-0" key={fileName}>{fileName}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Dropzone>
        </div>
    );
}
