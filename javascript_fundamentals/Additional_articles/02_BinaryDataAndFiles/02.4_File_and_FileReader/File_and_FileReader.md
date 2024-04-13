### File and FileReader in JavaScript

JavaScript provides the `File` and `FileReader` objects to handle files and read their contents within the browser, extending the capabilities of the `Blob` object with file-specific features.

#### File Object

- **Overview**: Inherits from `Blob` and includes additional properties related to files.
- **How to Obtain**:
    - Through file input elements (`<input type="file">`), drag-and-drop operations, or other file selection dialogs provided by the browser.
    - By creating it programmatically using its constructor.

  ```javascript
  new File(fileParts, fileName, [options]);
  ```

    - `fileParts`: Array of `Blob`/`BufferSource`/`String` values.
    - `fileName`: Name of the file as a string.
    - `options`: Optional object that can specify `lastModified` (timestamp of the last modification).

- **Properties**:
    - `name`: The name of the file.
    - `lastModified`: The timestamp indicating the last time the file was modified.

- **Example** (from an `<input type="file">` element):

  ```html
  <input type="file" onchange="showFile(this)">
  
  <script>
  function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last modified: ${file.lastModified}`);
  }
  </script>
  ```

#### FileReader Object

- **Purpose**: Designed exclusively for reading data from `Blob` (and therefore `File`) objects.
- **Main Methods**:
    - `readAsArrayBuffer(blob)`: Reads data as an `ArrayBuffer`.
    - `readAsText(blob, [encoding])`: Reads data as a text string with an optional encoding (default is "utf-8").
    - `readAsDataURL(blob)`: Reads data and encodes it as a base64 data URL.
    - `abort()`: Cancels the reading operation.

- **Events**:
    - `loadstart`, `progress`, `load`, `abort`, `error`, `loadend`.

- **Accessing Results**:
    - `reader.result`: Contains the read data upon successful completion.
    - `reader.error`: Contains the error object in case of failure.

- **Example** (reading a file selected via `<input type="file">`):

  ```html
  <input type="file" onchange="readFile(this)">
  
  <script>
  function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
      console.log(reader.result);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  }
  </script>
  ```

#### Use Cases for FileReader with Blobs

- `FileReader` can be used to read not only files but any blobs, allowing conversion between different formats (e.g., `ArrayBuffer`, string, base64 URL).
- `FileReaderSync`, a synchronous variant of `FileReader`, is available within Web Workers for blocking read operations.

#### Practical Applications

- Reading file contents for processing or display in web applications.
- Converting binary data to text or data URLs for use in web pages.
- Handling user-selected files for upload or other processing without server-side intervention.

`File` and `FileReader` provide robust client-side file handling capabilities, making it easier to work with user-selected files and binary data in web applications.
