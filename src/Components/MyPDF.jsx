import React from "react";
import { jsPDF } from "jspdf";
// import PDFfile from "./PDFfile";
var doc = new jsPDF();
const MyPDF = ({ bd, cd, od, ad, nd }) => {
  let fontSize=10;
    let fontLableSize=12;
    let fontTitleSize=20;
    let y = 0;
    let z = 0;
    let gap = 0;
    let mybd
    let mycd
    let myod
    let myad
    let mynd
  const initialization =()=>{

    //  mybd = bd[0];
    // delete mybd["_id"];
    // delete mybd["user"];
    // delete mybd["__v"];
    // delete mybd["date"];
    //  mycd = cd[0];
    // delete mycd["_id"];
    // delete mycd["user"];
    // delete mycd["__v"];
    // delete mycd["date"];
    //  myod = od[0];
    // delete myod["_id"];
    // delete myod["user"];
    // delete myod["__v"];
    // delete myod["date"];
    //  myad = ad[0];
    // delete myad["_id"];
    // delete myad["user"];
    // delete myad["__v"];
    // delete myad["date"];
     mynd = nd[0];
    delete mynd["_id"];
    delete mynd["user"];
    delete mynd["__v"];
    delete mynd["date"];


  }

  //   const BDvalue = () => {};

  const PreviewDoc = () => {


    doc.rect(10, 10, 190, 10);
    doc.setFontSize(fontTitleSize)

    doc.text("Basic Details!", 90, 17);
    doc.setFontSize(fontSize)
    for (let i = 0; i < 10; i++) {
      doc.rect(10, 20 + gap, 190, 10);
      gap = gap + 10;
    }
    doc.rect(10, 20, 95, gap);
    doc.rect(50, 20, 95, gap);
    BDFunction();
      gap = gap + 10;
      doc.rect(10, 20 + gap, 190, 10);
      gap = gap + 10;
      doc.setFontSize(fontTitleSize)

    doc.text(" Contact Details!", 90, gap+17);
    doc.setFontSize(fontSize)
    doc.rect(10, 20+gap, 95, gap-40);
    doc.rect(50, 20+gap, 95, gap-40);
    for (let i = 0; i < 8; i++) {
      doc.rect(10, 20 + gap, 190, 10);
      gap = gap + 10;
    }

    z = z + 10;
    CDFunction();


    gap = gap + 10;
      doc.rect(10, 20 + gap, 190, 10);
      gap = gap + 10;
      doc.setFontSize(fontTitleSize)

    doc.text(" Other Details!", 90, gap+17);

    doc.setFontSize(fontSize)
    doc.rect(10, 20+gap, 95, 40);
    doc.rect(50, 20+gap, 95, 40);
    for (let i = 0; i < 4; i++) {
      doc.rect(10, 20 + gap, 190, 10);
      gap = gap + 10;
    }

    z = z + 10;
    ODFunction();


    gap = gap + 10;
      doc.rect(10, 20 + gap, 190, 10);
      gap = gap + 10;
      doc.setFontSize(fontTitleSize)

    doc.text(" Attorney Details!", 90, gap+17);

    doc.setFontSize(fontSize)
    doc.rect(10, 20+gap, 95, gap+20);
    doc.rect(50, 20+gap, 95, gap+20);
    for (let i = 0; i < 6; i++) {
      doc.rect(10, 20 + gap, 190, 10);
      gap = gap + 10;
    }

    z = z + 10;
    ADFunction()


    gap = gap + 10;
    doc.rect(10, 20 + gap, 190, 10);
    gap = gap + 10;
    doc.setFontSize(fontTitleSize)

  doc.text(" Nominee Details!", 90, gap+17);

  doc.setFontSize(fontSize)
  doc.rect(10, 20+gap, 95, 40);
  doc.rect(50, 20+gap, 95, 40);
  for (let i = 0; i < 4; i++) {
    doc.rect(10, 20 + gap, 190, 10);
    gap = gap + 10;
  }

    z = z + 10;
    NDFunction()



    var string = doc.output("datauristring");
    var embed = "<embed width='80%' height='80%' src='" + string + "'/>";
    var x = window.open();
    x.document.open();
    x.document.write(embed);
  };

  const BDFunction = () => {
    if(bd.length===1){
      mybd = bd[0];
      delete mybd["_id"];
      delete mybd["user"];
      delete mybd["__v"];
      delete mybd["date"];
    }
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
    let counter = 2;
    let index = 0;
    //   BDvalue();
    for (var key in mybd) {
      // console.log(`${key}: ${data[key]}`);

      if (counter % 2 === 0) {
        doc.setFontSize(fontLableSize);
        doc.text(keyArray[index], 15, 28 + y);
        doc.setFontSize(fontSize);
        doc.text(mybd[key], 55, 28 + y);
        y = y + 10;
      } else {
        doc.setFontSize(fontLableSize);
        doc.text(keyArray[index], 110, 28 + z);
        doc.setFontSize(fontSize);
        doc.text(mybd[key], 150, 28 + z);
        z = z + 10;
      }
      counter++;
      index++;
      if (z === 260) {
        doc.addPage();
        counter = 2;
        y = 0;
        z = 0;
      }
    }
  };

  const CDFunction = () => {

    if(cd.length===1){
      mycd = cd[0];
      delete mycd["_id"];
      delete mycd["user"];
      delete mycd["__v"];
      delete mycd["date"];
    }
    const CDkey = [
      "Mailing Address ",
      "City",
      "Province",
      "Country",
      "Phone (Off)",
      "Phone (Res)",
      "Fax",
      "Permanent Add",
      "City",
      "Province",
      "Country",
      "Phone (Off)",
      "Phone (Res)",
      "Fax",
    ];

    let counter = 2;
    let index = 0;
    y = y + 20;
    z = z + 20;
    for (const key in mycd) {
      // console.log(`${key}: ${data[key]}`);

      if (counter % 2 === 0) {
        doc.setFontSize(fontLableSize);
        doc.text(CDkey[index], 15, 28 + y);
        doc.setFontSize(fontSize);
        doc.text(mycd[key], 55, 28 + y);
        y = y + 10;
      } else {
        if (CDkey[index] === "Permanent Add") {
          doc.setFontSize(fontLableSize);
          doc.text(CDkey[index], 15, 28 + y);
          doc.setFontSize(fontSize);
          doc.text(mycd[key], 55, 28 + y);
          y = y + 10;
          z = z + 10;
          counter = 2;
        } else {
          doc.setFontSize(fontLableSize);
          doc.text(CDkey[index], 110, 28 + z);
          doc.setFontSize(fontSize);
          doc.text(mycd[key], 150, 28 + z);
          z = z + 10;
        }
      }
      counter++;
      index++;
      if (z === 260) {
        doc.addPage();
        counter = 2;
        y = 0;
        z = 0;
      }
    }
  };
  const ODFunction = () => {
    if(od.length===1){
      myod = od[0];
      delete myod["_id"];
    delete myod["user"];
    delete myod["__v"];
    delete myod["date"];

    }
    const CDkey = [
      "Annual Income",
      "Income Source",
      "Occupation",
      "Job Title",
      "Job Department",
      "Employer Name",
      "Employer Add.",
      "Bank",
      "Iban #",
      "Zakat Status",
      "Remittance",
    ];

    let counter = 2;
    let index = 0;
    y = y + 20;
    z = z + 20;
    //   BDvalue();
    for (const key in myod) {
      // console.log(`${key}: ${data[key]}`);

      if (counter % 2 === 0) {
        doc.setFontSize(fontLableSize);
        doc.text(CDkey[index], 15, 28 + y);
        doc.setFontSize(fontSize);
        doc.text(myod[key], 55, 28 + y);
        y = y + 10;
      } else {
        if (CDkey[index] === "Permanent Add") {
          doc.setFontSize(fontLableSize);
          doc.text(CDkey[index], 15, 28 + y);
          doc.setFontSize(fontSize);
          doc.text(myod[key], 55, 28 + y);
          y = y + 10;
          z = z + 10;
          counter = 2;
        } else {
          doc.setFontSize(fontLableSize);
          doc.text(CDkey[index], 110, 28 + z);
          doc.setFontSize(fontSize);
          doc.text(myod[key], 150, 28 + z);
          z = z + 10;
        }
      }
      counter++;
      index++;
      if (z === 260) {
        doc.addPage();
        counter = 2;
        y = 0;
        z = 0;
        gap=0
        doc.rect(10, 20+gap, 95, 20);
        doc.rect(50, 20+gap, 95, 20);
        for (let i = 0; i < 2; i++) {
          doc.rect(10, 20 + gap, 190, 10);
          gap = gap + 10;
        }
      }
    }
  };


  const ADFunction = () => {


    if(ad.length===1){
      myad = ad[0];
      delete myad["_id"];
      delete myad["user"];
      delete myad["__v"];
      delete myad["date"];

    }
    const ADkey = [
        "Name",
        "Uin Type",
        "Uin",
        "Uin Expiry",
        "Mobile",
        "Email",
        "Mailing Address",
        "City",
        "Province",
        "Country",
        "Phone (Res)",
        "Fax"

    ];

    let counter = 2;
    let index = 0;
    y = y + 20;
    z = z + 20;
    //   BDvalue();
    for (const key in myad) {
      // console.log(`${key}: ${data[key]}`);

      if (counter % 2 === 0) {
        doc.setFontSize(fontLableSize);
        doc.text(ADkey[index], 15, 28 + y);
        doc.setFontSize(fontSize);
        doc.text(myad[key], 55, 28 + y);
        y = y + 10;
      } else {
        if (ADkey[index] === "Permanent Add") {
          doc.setFontSize(fontLableSize);
          doc.text(ADkey[index], 15, 28 + y);
          doc.setFontSize(fontSize);
          doc.text(myad[key], 55, 28 + y);
          y = y + 10;
          z = z + 10;
          counter = 2;
        } else {
          doc.setFontSize(fontLableSize);
          doc.text(ADkey[index], 110, 28 + z);
          doc.setFontSize(fontSize);
          doc.text(myad[key], 150, 28 + z);
          z = z + 10;
        }
      }
      counter++;
      index++;
      if (z === 260) {
        doc.addPage();
        counter = 2;
        y = 0;
        z = 0;
      }
    }
  };

  const NDFunction = () => {

    if(nd.length===1){
      mynd = nd[0];
      delete mynd["_id"];
      delete mynd["user"];
      delete mynd["__v"];
      delete mynd["date"];
    }
    const NDkey = [
        "Name",
        "Relation",
        "UIN",
        "UIN Type",
        "UIN Expiry",
        "Mobile",
        "Address",
    ];

    let counter = 2;
    let index = 0;
    y = y + 20;
    z = z + 10;
    //   BDvalue();
    // console.log(mynd)
    for (const key in mynd) {
      // console.log(`${key}: ${data[key]}`);
// console.log(counter%2)
      if (counter % 2 === 0) {
        doc.setFontSize(fontLableSize);
        doc.text(NDkey[index], 15, 28 + y);
        doc.setFontSize(fontSize);
        doc.text(mynd[key], 55, 28 + y);
        y = y + 10;
      } else {
        doc.setFontSize(fontLableSize);
        // console.log(NDkey[index])
          doc.text(NDkey[index], 110, 28 + z);
          doc.setFontSize(fontSize);
          doc.text(mynd[key], 150, 28 + z);
          z = z + 10;
      }
      counter++;
      index++;
      if (z === 260) {
        doc.addPage();
        counter = 2;
        y = 0;
        z = 0;
      }
    }
  };


  return (
    <>
      {/* <h1 style={{"padding":"100px"}}>Hello from MyPDF</h1> */}
      <div className=' d-flex justify-content-center pt-5 mt-5 mb-5 border '>
        <button className='btn btn-primary' onClick={PreviewDoc}>
          PreView Doc
        </button>
      </div>
    </>
  );
};

export default MyPDF;
