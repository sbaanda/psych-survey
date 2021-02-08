<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class PatientsController extends Controller
{

    public function index(Request $request)
    {
        return view('patients');
    }

    public function list(Request $request): \Illuminate\Http\JsonResponse
    {
        $patients = User::target(auth()->user()->id)->get()->map(function($value, $item) {
            return [
                'id' => $value->id,
                'name' => $value->name,
                'email' => $value->email
            ];
        });

        return response()->json(compact('patients'));
    }

    public function edit($type, User $user)
    {
        $patient = !is_null($user->id) ? $user : null;
        return view('patient', ['type' => $type, 'user' => $patient]);
    }

    public function create(Request $request): \Illuminate\Http\JsonResponse
    {
        $request->validate($this->rules($request));

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'target_id' => auth()->user()->id
        ]);

        event(new Registered($user));

        return response()->json(['status' => 'success']);
    }

    public function update(Request $request, User $user): \Illuminate\Http\JsonResponse
    {
        $request->validate($this->rules($request));

        User::find($request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response()->json(['status' => 'success']);
    }

    public function delete(Request $request): \Illuminate\Http\JsonResponse
    {
        User::find($request->id)->delete();

        return response()->json(['status' => 'success']);
    }

    private function rules(Request $request): array
    {
        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ];

        if ($request->isMethod('put')) {
            $rules['email'] .= ',email,' . $request->route('user')->id;
            $rules['password'] = 'string|min:8';
        }

        return $rules;
    }
}
