// import { useState } from 'react';
// import Papa from 'papaparse';
// import users from '../../texts/aarhus.csv';

// // Allowed extensions for input file
// const allowedExtensions = ["csv"];

// function CsvUploader() {
//   const [parsedData, setParsedData] = useState([]);

//   const changeHandler = (event) => {
//     // Passing file data (event.target.files[0]) to parse using Papa.parse
//     Papa.parse(event.target.files[0], {
//       header: true,
//       skipEmptyLines: true,
//       complete: function (results) {
//         const shortenedArray = [];
//         results.data.map((d) => {
//           //rowsArray.push(Object.keys(d));
//           //valuesArray.push(Object.values(d));
//           //mobilePayArray.push([d.Date, d.Who, d.Amount.slice(0, -3)]);
//           //nordeaArray
//         });
//         setParsedData(results.data);
//       },
//     });
//   };

//   console.log(parsedData);

//   return (
//     <div>
//       <p>parsed data</p>
//     </div>
//   );
// }

// export default CsvUploader;
