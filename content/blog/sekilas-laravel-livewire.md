---
path: sekilas livewire
date: 2021-03-04T12:48:01.062Z
title: Sekilas Laravel Livewire
description: Melihat sekilas apa yang bisa dilakukan Laravel Livewire
---
Ditengah kejenuhan saya membuat aplikasi menggunakan pemisahan antara backend dan frontend (e.g GraphQL + React + Apollo), saya mencoba mencari angin segar. Ada g sih framework fullstack yang g ribet dalam hal setup misalnya? Let's make fullstack development great again, hahaha.

Cari punya cari, saya ketemu [Phoenix LiveView](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html), web framework nya [Elixir](https://elixir-lang.org/). Saya lihat talk tentang LiveView di [youtube](https://www.youtube.com/watch?v=Z2DU0qLfPIY) dan **wow**, ini keren pikir saya. Konsep nya adalah kita bisa bikin aplikasi yang interaktif, seamless, SPA like, tanpa harus menulis kode Javascript. Cuman masalahnya adalah saya tidak familiar dengan Elixir, dan rasanya otak saya sudah tidak ada space untuk belajar bahasa baru lagi. Ketemu beberapa lagi diantaranya ada [Hotwire](https://hotwire.dev/) untuk Ruby on rails, [Unicorn](https://www.django-unicorn.com/) untuk Django dan terakhir [Livewire](https://laravel-livewire.com/) untuk Laravel. Bisa anda lihat? Ternyata konsep ini (HTML over the wire) sudah jadi trend di beberapa framework backend beberapa bahasa pemrograman.

Lalu saya putuskan untuk mencoba Livewire, semata-mata karena PHP merupakan bahasa pemrograman web yang saya sudah familiar sebelumnya. Meskipun saya sebenarnya belum pernah mencoba Laravel di kerjaan. Jadi saya mencicipi Livewire sambil memahami Laravel. Jadi bagaimana sebenarnya cara kerja framework ini secara sederhana? Menurut official website Livewire, saya terjemahkan secara serampangan:

* Livewire me-render initial output dari component seperti layaknya blade template biasa (SEO friendly)
* Ketika interaksi terjadi, Livewire membuat request AJAX ke server bersama data yg akan diupdate
* Server me-render ulang component dan merespon dengan HTML yang baru
* Livewire secara jenius memutasi DOM berdasarkan respon dari server

So, untuk memulai menggunakan Livewire (pastikan sudah membuat project laravel sebelumnya):

`composer require livewire/livewire`

Includekan Javascript nya Livewire (`@livewireStyles` dan `@livewireScripts`) pada blade template (dalam contoh saya pada file `welcome.blade.php`)

```phtml
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Livewire</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
        @livewireStyles
    </head>
    <body class="antialiased">
        @livewireScripts
    </body>
</html>
```

Kemudian buat komponen livewire bernama counter:

`php artisan make:livewire counter`

Setelah menjalankan perintah diatas, akan tersedia 2 file yaitu `app/Http/Livewire/Counter.php` dan `resources/views/livewire/counter.blade.php`

Edit `counter.blade.php` sebagai berikut:

```phtml
<div>
    <h1>Counter</h1>
</div>
```

Lalu includekan komponen pada file `welcome.blade.php`

```phtml
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Livewire</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
        @livewireStyles
    </head>
    <body class="antialiased">
        <livewire:counter />
        @livewireScripts
    </body>
</html>
```

Hidupkan development server dan buka localhost, anda akan melihat halaman dengan tulisan "Counter". Agar lebih menarik kita tambahkan sedikit interaktifitas pada komponen Livewire sebagai berikut:

```php
<?php // app/Http/Livewire/Counter.php

namespace App\Http\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public $count = 0;

    public function increment()
    {
        $this->count++;
    }

    public function render()
    {
        return view('livewire.counter');
    }
}
```

```phtml
<!-- resources/views/livewire/counter.blade.php -->
<div>
    <button wire:click="increment">+</button>
    <h1>{{ $count }}</h1>
</div>
```

Jadi, saya menambahkan public property `$count` serta method `increment` pada komponent Counter. Pada template `counter.blade.php` saya menampilkan nilai dari `$count` dan memanggil method `increment` saat button di click menggunakan directive `wire:click`

Hasil akhir bisa anda lihat pada gif berikut

![result](assets/counter.gif "Livewire in Action")

Magic!
