import React, { Component } from "react";

import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

export const Frontpage = ({ name, roll }) => {
  console.log(name, roll);
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
      });
      const blob = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }); //Output the document using Data-URI
      saveAs(blob, "output.docx");
    });
  };

  return (
    <div className="p-2">
      <button onClick={generateDocument}>Generate document</button>
    </div>
  );
};
export default Frontpage;
