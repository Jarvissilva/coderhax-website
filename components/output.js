export default function Output({ code }) {
  code = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Student Registration</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background-color: #f5f5f5;
          }
          h1 {
              color: #333;
          }
          form {
              max-width: 400px;
              background-color: #fff;
              padding: 20px;
              margin: 0 auto;
              border-radius: 5px;
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }
          .form-group {
              margin-bottom: 20px;
          }
          .form-group label {
              display: block;
              font-weight: bold;
              margin-bottom: 5px;
          }
          .form-group input {
              width: 100%;
              padding: 8px;
              border: 1px solid #ccc;
              border-radius: 3px;
          }
          .form-group button {
              background-color: #4CAF50;
              color: #fff;
              padding: 10px 20px;
              border: none;
              border-radius: 3px;
              cursor: pointer;
          }
          .form-group button:hover {
              background-color: #45a049;
          }
      </style>
  </head>
  <body>
      <h1>Student Registration</h1>
      <form>
          <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
              <label for="course">Course:</label>
              <input type="text" id="course" name="course" required>
          </div>
          <div class="form-group">
              <button type="submit">Register</button>
          </div>
      </form>
      <script>
          console.log(namea)
      </script>
  </body>
  </html>
  
    `;

  const makeFullScreen = () => {
    const iframeElement = document.getElementById("code-output");

    if (iframeElement) {
      if (iframeElement.requestFullscreen) {
        iframeElement.requestFullscreen();
      } else if (iframeElement.mozRequestFullScreen) {
        iframeElement.mozRequestFullScreen();
      } else if (iframeElement.webkitRequestFullscreen) {
        iframeElement.webkitRequestFullscreen();
      } else if (iframeElement.msRequestFullscreen) {
        iframeElement.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold">Output</h2>
      <iframe
        id="code-output"
        className="w-full h-[400px]"
        srcDoc={code}
      ></iframe>
      <button onClick={makeFullScreen}>View full screen</button>
    </div>
  );
}
