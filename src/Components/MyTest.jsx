import React,{useEffect} from "react";
import { jsPDF } from "jspdf";
// import PDFfile from "./PDFfile";
var doc = new jsPDF();

const MyTest = ({getBasicDetails, bd  }) => {
  let data = [];
  // doc.addPage();
  useEffect(()=>{
    getBasicDetails()

  },[])

  const downloadPDF = () => {

     BasicDetailsTableFunction()
    doc.addPage()
    BasicDetailsTableFunction()

    var string = doc.output("datauristring");
    var embed = "<embed width='80%' height='80%' src='" + string + "'/>";
    var x = window.open();
    x.document.open();
    x.document.write(embed);
    // x.document.close();
    // window.location.reload(false);
    // Object.values(data).forEach(val => console.log(val));
    // doc.save("a4.pdf");
  };


const CreatTable=(startX,startY,endX,endY,row,gap1)=>{

  let gap = 0;
  doc.rect(startX,startY,endX,endY);
  // doc.text("Basic Details!", 90, 17);
  for (let i = 0; i < row; i++) {
    doc.rect(startX,startY+gap,endX,endY);
    gap = gap + gap1;
  }

  // let gap = 0;
  // doc.rect(10, 10, 190, 10);
  // // doc.text("Basic Details!", 90, 17);
  // for (let i = 0; i < 10; i++) {
  //   doc.rect(10, 20 + gap, 190, 10);
  //   gap = gap + 10;
  // }
  // doc.rect(10, 20, 95, gap);
  // doc.rect(50, 20, 95, gap);
  var string = doc.output("datauristring");
    var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
    var x = window.open();
    x.document.open();
    x.document.write(embed);
    x.document.close();
}
const BasicDetailsTableFunction=()=>{
  let gap = 0;
  doc.rect(10, 10, 190, 10);
  doc.text("Basic Details!", 90, 17);
  for (let i = 0; i < 10; i++) {
    doc.rect(10, 20 + gap, 190, 10);
    gap = gap + 10;
  }
  doc.rect(10, 20, 95, gap);
  doc.rect(50, 20, 95, gap);

  let keyArray = [
    "Account Code",
    "Open Date",
    "UNK Number",
    "UNK Issue Date",
    "Name",
    "Father Name",
    "Resident Status",
    "Nationality",
    "Marital Status",
    "Place Of Birth",
    "UIN Type",
    "UIN",
    "Date Of Issue",
    "UIN Expiry",
    "Email",
    "Mobile",
    "IVR SERVICE",
    "Mother Name",
    "Mother DOB",
  ];
  var data = [];
  console.log(Object.values(bd[0]))
  data = bd[0];
  delete data["_id"];
  delete data["user"];
  delete data["__v"];
  delete data["date"];
  const obj = data;
  let objKey = Object.keys(obj);
  let objValue = Object.values(obj);
  for (let v = 0; v < keyArray.length; v++) {
    obj[keyArray[v]] = objValue[v];
    delete obj[objKey[v]];
  }

  // console.log(data);
  let counter = 0;
  let y = 0;
  let z = 0;

  for (const key in obj) {
    // console.log(`${key}: ${data[key]}`);
    if (counter % 2 === 0) {
      doc.setFontSize(12);
      doc.text(key, 15, 28 + y);
      doc.setFontSize(12);
      doc.text(obj[key], 50, 28 + y);
      y = y + 10;
    } else {
      doc.setFontSize(12);
      doc.text(key, 110, 28 + z);
      doc.setFontSize(12);
      doc.text(obj[key], 150, 28 + z);
      z = z + 10;
    }
    counter++;
  }

}
    const ContactTable1=()=>{

    doc.addPage();



  }

  const ContactTable2=()=>{

    doc.addPage();
  }
  const ContactTable3=()=>{

    doc.addPage();

  }

  return (
    <>
      <div>

        <button className='btn btn-primery' onClick={downloadPDF}>
          Preview Doc
        </button>
      </div>

      <div>
        {" "}
        {/* <button className='btn btn-primery' onClick={editKey}>
          EditKey{" "}
        </button> */}
        <br />
        <br />
        <br />
        <br />
        <button className='btn btn-primery' onClick={ContactTable1}>
          Button 1
        </button>
        <button className='btn btn-primery' onClick={ContactTable2}>
          Button 2
        </button>
        <button className='btn btn-primery' onClick={ContactTable3}>
          Button 3 CreatTable
        </button>
        <button className='btn btn-primery' onClick={()=>CreatTable(10,10,190,10,9,10)}>
          Button 3 CreatTable
        </button>
        {/* <PDFfile/> */}
      </div>
    </>
  );
};

export default MyTest;
// const editKey = () => {
  //   let keyArray = [
  //     "Account Code",
  //     "Open Date",
  //     "UNK Number",
  //     "UNK Issue Date",
  //     "Name",
  //     "Father Name",
  //     "Resident Status",
  //     "Nationality",
  //     "Marital Status",
  //     "Place Of Birth",
  //     "UIN Type",
  //     "UIN",
  //     "Date Of Issue",
  //     "UIN Expiry",
  //     "Email Q",
  //     "Mobile",
  //     "IVR SERVICE",
  //     "Mother Name",
  //     "Mother DOB",
  //   ];
  //   const data = [];
  //   data = bd[0];
  //   delete data["_id"];
  //   delete data["user"];
  //   delete data["__v"];
  //   delete data["date"];
  //   const obj = data;
  //   let objKey = Object.keys(obj);
  //   let objValue = Object.values(obj);
  //   for (let v = 0; v < keyArray.length; v++) {
  //     obj[keyArray[v]] = objValue[v];
  //     delete obj[objKey[v]];
  //   }
  //   console.log(obj); // 👉️ {newKey: 'value'}
  // };
