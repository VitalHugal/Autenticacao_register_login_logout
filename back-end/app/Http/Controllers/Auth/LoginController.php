<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

class LoginController extends Controller
{
    public function store(Request $request)
    {
        // verifica se existe o email solicitado para login, se existir pega o primeiro
        $user = User::where("email", $request->email)->first();

        // Se o usuário não existir ou a senha estiver incorreta, retorna erro
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(["success" => false, "errors" => "E-mail e/ou senha incorretos"], 401);
        }

        // Desconecta de outros dispositivos para permitir login único, deletando todos os tokens existentes do usuário
        $user->tokens()->delete();

        // Inicializa a variável $token
        $token = null;

        // criando token
        $token = $user->createToken('userToken')->plainTextToken;

        // Explode e pega somente o token 
        $token = Str::of($token)->explode('|')[1];

        // Retorna um json com o token manipulado
        return response()->json(["success" => true, "success" => $token], 200);
    }
}