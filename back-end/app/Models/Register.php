<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Register extends Model
{
    use HasFactory;

    protected $table = 'users';

    protected $fillable = ['name', "surname", 'email', 'password',];

    public function rules()
    {
        return[
            'name' => 'required|regex:/^[\pL\s\-\'çÇ]+$/u',
            'surname' => 'required|regex:/^[\pL\s\-\'çÇ]+$/u',
            'email' => "required|unique:users|email",
            'password' => "required|min:8",
        ];
    }
    
    public function feedback()
    {
        return[
            'name.required' => "O campo nome é obrigátorio.",
            'name.regex' => "O campo nome aceita apenas letras",
            'surname.required' => "O campo sobrenome é obrigátorio",
            'surname.regex' => "O campo sobrenome aceita apenas letras",
            'email.required' => "O campo e-mail é obrigátorio",
            'email.unique' => "Esse e-mail já esta cadastrado",
            'email.email' => "Esse email não é válido",
            'password.required' => "O campo senha é obrigátorio",
            'password.min' => "A senha deve conter no mínimo 8 caracteres",
        ];
    }
}