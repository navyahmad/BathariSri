<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Seeder Akun Admin
        User::create([
            'name' => 'Admin BathariSri',
            'email' => 'admin@batharisri.com',
            'password' => Hash::make('password123'),
            'role' => 'admin',
            'phone' => '081234567890',
            'address' => 'Kantor Pusat BathariSri, Kediri',
        ]);

        // Seeder Akun Petani
        User::create([
            'name' => 'Petani BathariSri',
            'email' => 'petani@batharisri.com',
            'password' => Hash::make('password123'),
            'role' => 'petani',
            'phone' => '089876543210',
            'address' => 'Area Persawahan Subur, Kediri',
        ]);
    }
}
