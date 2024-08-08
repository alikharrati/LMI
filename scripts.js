// Function to show the selected sector
function showSector(sectorId, imageUrl, pdfUrl) {
    // Find the main image and download link elements
    var mainImage = document.getElementById('mainImage');
    var downloadLink = document.getElementById('downloadLink');

    // Update the main image source and alt text
    mainImage.src = imageUrl;
    mainImage.alt = sectorId;

    // Update the download link href and text
    downloadLink.innerHTML = `<a href="${pdfUrl}" target="_blank">Download PDF</a>`;
}

// Attach event listeners to thumbnails
var thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // Extract the data from the clicked thumbnail
        var sectorId = thumbnail.alt;
        var imageUrl = thumbnail.src;
        var pdfUrl = thumbnail.getAttribute('data-pdf');

        // Show the sector
        showSector(sectorId, imageUrl, pdfUrl);
    });
});
