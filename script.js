function submitOrder(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit standar

    // Ambil data dari form
    const product = document.getElementById('product').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const payment = document.getElementById('payment').value;

    // Tampilkan pesan konfirmasi
    document.getElementById('confirmationMessage').style.display = 'block';

    // Tampilkan rincian pemesanan
    document.getElementById('orderProduct').textContent = product;
    document.getElementById('orderName').textContent = name;
    document.getElementById('orderAddress').textContent = address;
    document.getElementById('orderPhone').textContent = phone;
    document.getElementById('orderPayment').textContent = payment;

    // Menampilkan div rincian pemesanan
    document.getElementById('orderDetails').style.display = 'block';

    // Reset form
    document.getElementById('orderForm').reset();
    return false;
}
