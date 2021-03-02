---
path: instal laravel
date: 2021-03-02T11:41:29.528Z
title: Instal Laravel 8 Dengan Composer
description: Cara menginstal laravel versi 8 menggunakan composer
---
Pada halaman dokumentasi resmi laravel, kita disarankan untuk menginstal laravel menggunakan Docker, bahkan pada platform Windows sekalipun. Nah bagaimana jika kita tidak ingin menggunakan Docker untuk menginstal laravel?

Gampang saja, karena kita masih bisa menginstal laravel menggunakan Composer. Dengan asumsi PHP dan Composer sudah terinstal pada komputer kita jalankan perintah berikut pada command line:

`composer create-project laravel/laravel <nama aplikasi>`

Setelah menjalankan perintah diatas maka kita akan menemukan folder yang namanya sesuai dengan yang kita berikan pada perintah `create-project` tadi. Untuk mulai developing aplikasi kita tinggal pindah ke folder lalu jalankan perintah:

`php artisan serve`

Selamat ngoding!

``
