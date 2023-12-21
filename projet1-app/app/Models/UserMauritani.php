<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserMauritani extends Model
{
    protected $fillable = ['nom',
    'prenom',
    'num_passport',
    'NNI',
    'email',
    'image',
    'sex',
    'Adresse',
    'enfant',
    'pays_residence',
    'le_travil',
    'num_telphon',
    'type_identite'
    
];
}
