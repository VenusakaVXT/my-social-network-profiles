const socialNetworkItems = document.querySelectorAll('.container__my-social-network-item');
const fullName = document.querySelector('.header__user-name').textContent;
const myGmail = 'voxuantuan33@gmail.com';
const myBankAccount = 'Số tài khoản: 9704229207714599259 (MB Bank)';

// Link handling
socialNetworkItems.forEach(item => {
    const linkElement = item.querySelector('.container__my-social-network-link');
    const hrefValue = linkElement.getAttribute('href');
    const nameItem = linkElement.querySelector('.container__social-network-name');
    const nameValue = nameItem.textContent;

    if (hrefValue === '#') {
        linkElement.addEventListener('click', e => {
            e.preventDefault();
            alert(`${fullName} chưa có tài khoản này`);
        });
        
    } else if (hrefValue === '') {
        linkElement.addEventListener('click', e => {
            e.preventDefault();
            if (nameValue === 'Gmail') {
                navigator.clipboard.writeText(myGmail)
                    .then(() => {
                        alert(`Đã sao chép ${myGmail} vào bộ nhớ tạm`);
                    })
                    .catch(err => {
                        console.error('Lỗi khi sao chép vào bộ nhớ tạm:', err);
                    });
            }
            if (nameValue === 'Bank account') {
                navigator.clipboard.writeText(myBankAccount)
                    .then(() => {
                        alert(`Đã sao chép ${myBankAccount} vào bộ nhớ tạm`);
                    })
                    .catch(err => {
                        console.error('Lỗi khi sao chép vào bộ nhớ tạm:', err);
                    });
            }
        });
    } else {
        linkElement.setAttribute('target', '_blank');
    }
});

// Download QRCode when I press the button
function downloadQRCode() {
    // Get the current website address
    // let currentUrl = window.location.href;
    // Get the url on GitHub
    let currentUrl = 'https://venusakavxt.github.io/my-social-network-profiles/'

    // Generate link to download QR code image
    let qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(currentUrl);

    // Create an anchor tag to download the image
    var downloadLink = document.createElement('a');
    downloadLink.href = qrUrl;
    downloadLink.download = 'my_social_network_profile_qrcode.png'; // File name when download
    downloadLink.style.display = 'none';

    // Automatically add body and trigger event on click automatically
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
