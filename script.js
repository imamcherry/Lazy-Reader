function copyPages() {
    const pdfInput = document.getElementById('pdfInput');
    const pageRangeInput = document.getElementById('pageRange');
    
    const file = pdfInput.files[0];
    const pageRange = pageRangeInput.value;

    if (file && pageRange) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const arrayBuffer = e.target.result;

            // Use a PDF library like pdf-lib (https://pdf-lib.js.org/) to manipulate the PDF
            // Implement logic to copy specified pages here

            const selectedPages = `[selected ${pageRange} pages from the pdf file]`;
            const textToCopy = `"rewrite this 5 pages of text into 1 page of text but don't leave out any important or key information" ${selectedPages}`;

            // Create a temporary textarea element to copy text to the clipboard
            const tempTextArea = document.createElement('textarea');
            tempTextArea.value = textToCopy;
            document.body.appendChild(tempTextArea);

            // Select the text in the textarea
            tempTextArea.select();
            tempTextArea.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text to the clipboard
            document.execCommand('copy');

            // Remove the temporary textarea
            document.body.removeChild(tempTextArea);

            console.log(textToCopy);
        };

        reader.readAsArrayBuffer(file);
    } else {
        console.error('Please select a PDF file and enter a page range.');
    }
}
