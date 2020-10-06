<?php

// $mahasiswa = [
//     [
//     "nama" => "Aryo Tri",
//     "telp" => "0819232329",
//     "email" => "aryotri@yahoo.com"
//     ],
//     [
//     "nama" => "Triaryo",
//     "telp" => "0819232329",
//     "email" => "tri@yahoo.com"
//     ]
// ];

#echo $mahasiswa;
#var_dump($mahasiswa);

// $data = json_encode($mahasiswa,true);
//  echo $data;

//  $cobates = json_decode($data,true);
//  echo $cobates;

$data = file_get_contents('test.json');
$mahasiswa = json_decode($data, true);
$mahasiswa2 = json_decode($data);

var_dump($mahasiswa);

echo '<hr>';

var_dump($mahasiswa2);

echo '<hr>';
echo 'hasil select array by associate array';
echo '<hr>';

echo $mahasiswa[0]['pekerjaan'][0];

echo '<hr>';

echo $mahasiswa[0]['pembimbing']['pembimbing1'];

echo '<hr>';

echo $mahasiswa[0]['pembimbing']['pembimbing2'];

echo '<hr>';
echo '<hr>';

echo $mahasiswa2;

?>