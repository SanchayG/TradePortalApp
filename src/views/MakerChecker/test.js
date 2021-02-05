import { CCardBody, CDataTable, CHeader,CCard } from "@coreui/react";
import React from "react";

/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
let fileDetails =['fileName' ,'fileType','fileSize','View'];
function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
      console.log("inside upload",event.target.files[0].target);
      console.dir("file details "+JSON.stringify(event.target.files[0]));
    setFile(event.target.files[0]);
    let data =[event.target.files[0].name,event.target.files[0].type,event.target.files[0].size,event.target.files[0].target];
    let tableD = document.getElementById("docTable");
    let row = document.createElement('tr');
	for (let i=0; i < data.length; i++){
        
    let td = document.createElement('td'); // create a td node
    
    td.innerHTML = data[i]; // fill the td now with a piece of the data array
    // document.getElementById("table-row").appendChild(td); //
    row.appendChild(td);
    if(i==data.length-1) {
        let td = document.createElement('td');
        td.innerHTML = "<a href='#'>View Document</a>"
        row.appendChild(td);
    }
    }
    
    tableD.appendChild(row); //
    // Add code here to upload file to server
    // ...
  }
  
  
  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <br/>
      <br/>
     <table id="docTable" style={{ width: '80%' ,border: '1px solid black' ,padding: '15px'}}>
	 <thead>
		 <tr style={{color: 'white' ,backgroundColor: 'black'}}>
             <th className='table-header'>File Name</th>
             <th className='table-header'>File Type</th>
             <th className='table-header'>File Size</th>
             <th className='table-header'>View Document</th>
         </tr>
	 </thead>
      <tbody>
        <tr className='table-row' id = 'table-row'></tr> 
      </tbody>
     </table>
    </div>
  );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};


export default function App() {
  return <FileUpload />;
}
