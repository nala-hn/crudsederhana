<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function loadUsers(){
        $users = User::all();
        $user = auth()->user();
        return Inertia::render('User/Users', ['user' => $user, 'users' => $users]);
    }

    public function loadEditForm($user_id){
        $user = auth()->user();
        $userDetails = User::find($user_id);
        return Inertia::render('User/EditForm', ['user' => $user, 'user_detail' => $userDetails]);
    }

    public function update(Request $request, $user_id){
        $user = User::find($user_id);
        if(!$user){
            return redirect()->route('users.index')->with('error', 'User not found');
        }
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->save();
        return redirect()->route('users.index')->with('success', 'User updated successfully');
    }

    public function deleteUser($user_id){
        $user = User::find($user_id);
        if($user){
            $user->delete();
            return redirect()->route('users.index')->with('success', 'User deleted successfully');
        }
        return redirect()->route('users.index')->with('error', 'User not found');
    }
}
