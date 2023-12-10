import React, { Component } from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

export const Frontpage = ({ name, roll, subject,teacher,course }) => {
  console.log(name, roll, subject,teacher);
  const generateDocument = () => {
    loadFile("/front.docx", function (error, content) {
      if (error) {
        throw error;
      }
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render({
        name: name,
        roll: roll,
        subject: subject,
        teacher:teacher,
        course:course,
      });
      const blob = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }); //Output the document using Data-URI
      saveAs(blob, name+".docx");
    });
  };

  return (
    <div className="p-2">
      <button onClick={generateDocument}><h1 >Generate FrontPage</h1></button>
    </div>
  );
};
export default Frontpage;
