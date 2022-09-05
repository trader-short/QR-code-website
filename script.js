const form = document.getElementById('entry-form');
const qr = document.getElementById('qrcode');


//create QR code object from the js library
function getQRCode(url, size) {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};


//to clean the UI
function clearUI(){
  qr.innerHTML = "";
  const saveBtn = document.getElementById('save-link');
  if (saveBtn){
    saveBtn.remove()
  }
};

//create download button
const createSaveBtn = (saveUrl) => {
  const link = document.createElement('a');
  link.id = 'save-link';
  link.classList =
    'btn btn-lg';
  link.href = saveUrl;
  link.download = 'qrcode';
  link.innerHTML = 'Save Image';
  document.getElementById('generated').appendChild(link);
};


//callback function on getting submit
function generateQRcode(event) {
  event.preventDefault();
  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  if (url === ""){
    alert('Please enter a valid url')
  } else {
    setTimeout(() => {
      getQRCode(url, size);

      // Generate the save button after the qr code image src is ready
      setTimeout(() => {
        // Get save url
        const saveUrl = qr.querySelector('img').src;
        // Create save button
        createSaveBtn(saveUrl);
      }, 50);
    }, 500);
  }

};


form.addEventListener('submit',generateQRcode);
