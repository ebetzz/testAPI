//fungsi tampilin all menu
function tampilkanSemuaMenu() {
    //ambil json
    $.getJSON('json/pizza.json', function (result) {
        let menu = result.menu;
        // console.log(result);
        //tampilkan data dengan tag. foreach itu kalo di js $.each
        $.each(menu, function (i, result) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + result.gambar + ' " class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + result.nama + '</h5><p class="card-text">Rp. ' + result.harga + '</p><p class="card-text">' + result.deskripsi + '</p></div></div></div>');
        });
    });
}

//awal2 itu suruh tampilin semua menu
tampilkanSemuaMenu();

//action kalo ada onclick
$('.nav-link').on('click', function () {
    //mengaktifkan class "active" pada link di menu navbar
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('.judul').html(kategori);

    //bila onclick menu "All Menu",akan menjalankan fungsi 'tampilkanSemuaMenu', yang sebelumnya di hapus dulu kontennya
    if (kategori == 'All Menu') {
        $('#daftar-menu').html('');
        tampilkanSemuaMenu();
        return;
    }

    //fungsi ambil json
    $.getJSON('json/pizza.json', function (result) {
        let menu = result.menu;
        let content = '';

        //kalo ada result menu kategori yang sesuai maka akan tampilkan data sesuai kategori
        $.each(menu, function (i, result) {
            if (result.kategori == kategori.toLowerCase()) {
                //'content' ini di akumulasi, nantinya akan di pakai untuk populate html
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' + result.gambar + ' " class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + result.nama + '</h5><p class="card-text">Rp. ' + result.harga + '</p><p class="card-text">' + result.deskripsi + '</p></div></div></div>'
            }
        });

        //re-load semua isi html dengan 'content'
        $('#daftar-menu').html(content);
    });
});