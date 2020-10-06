<?php

$data = file_get_contents('json/pizza.json');
$menupizza = json_decode($data,true);

var_dump($menupizza);

echo '<hr>';
echo '<H2>Daftar Menu</H2><br>';

foreach( $menupizza['menu'] as $menu)
{
    echo 'Nama : ' . $menu['nama'] . '<br>';
    echo 'Deskripsi : ' . $menu['deskripsi'] . '<br>';
    echo 'Harga : Rp. ' . number_format($menu['harga']) . '<br>';
    echo 'Gambar : <br><img src="img/pizza/' . $menu['gambar'] . '"><br>';
    echo '<hr>';
}

?>