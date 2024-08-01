<?php

namespace App\Http\Controllers\Auth;

use App\Models\Register;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class RegisterController extends Controller
{
    protected $register;

    public function __construct(Register $register)
    {
        $this->register = $register;
    }

    public function index()
    {
        return "teste";
    }

    public function store(Request $request)
    {
        // valida a requisição atráves de rules e feedback craidas na model
        $request->validate(
            $this->register->rules(),
            $this->register->feedback()
        );

        // se a validação for verdadeira cria um novo usuario com os atributos recuperados na requisição
        $user = $this->register->create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // retorna json 
        return response()->json(array("success" => true, "success" => $user), 201);
    }
}