document.getElementById("run-code").addEventListener("click", () => {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = `<style>${document.getElementById("css-code").value}</style>`;
    const jsCode = `<script>${document.getElementById("js-code").value}<\/script>`;
  
    const iframe = document.getElementById("output");
    const outputContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Live Output</title>
        ${cssCode}
      </head>
      <body>
        ${htmlCode}
        ${jsCode}
      </body>
      </html>
    `;
  
    iframe.srcdoc = outputContent;
  });
  