import React, { useState } from 'react';

const FilesSection = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement file upload functionality here
      // Add the uploaded file to the uploadedFiles array
      setUploadedFiles([...uploadedFiles, selectedFile]);
      // Reset the selected file
      setSelectedFile(null);
    }
  };

  return (
    <div className="files-section">
      <h2>Files and Resources</h2>
      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="file-browser">
        <h3>Uploaded Files</h3>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index}>
              <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">{file.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilesSection;
