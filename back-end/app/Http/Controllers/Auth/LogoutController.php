<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(Request $request)
    {
        // pega o usuario que esta logado
        $user = $request->user();
        
        // vai até o token e deleta o mesmo
        $user->tokens()->delete();

        //retorna json
        return response()->json(array("success" => true, "message" => "Usuário desconectado"), 200);
    }
}