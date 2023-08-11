import React from "react";
import "./Output_Screen.css";

export default function Output_Screen({ html, css, js }) {
  const combinedCode = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>
  `;

  return (
    <div className="mt-3">
      <label htmlFor="output">
        <b>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          Output{" "}
        </b>
      </label>
      <div>
        <iframe
          className="output border border-dark rounded mb-3"
          id="output"
          srcDoc={combinedCode}
        ></iframe>
      </div>
    </div>
  );
}
