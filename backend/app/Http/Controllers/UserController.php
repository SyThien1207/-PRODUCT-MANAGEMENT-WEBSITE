<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use SoftDeletes;
class UserController extends Controller
{
    
    // Get all users
    public function index()
    {
        $users = User::all();

        $result = [
            'status' => true,
            'users' => $users,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($users),
        ];

        return response()->json($result, 200);
    }

    // Get a user by ID
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json(['user' => $user]);
    }

    // Create a new user
    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->username = $request->username;
        $user->password = $request->password;
        $user->gender = $request->gender;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->roles = $request->roles;
        $user->created_by = $request->created_by;
        $user->status = $request->status;
        $user->save();

        return response()->json(['message' => 'Người dùng được tạo thành công']);
    }

    // Update a user
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->name = $request->filled('name') ? $request->name : $user->name;
        $user->username = $request->filled('username') ? $request->username : $user->username;
        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->gender = $request->filled('gender') ? $request->gender : $user->gender;
        $user->phone = $request->filled('phone') ? $request->phone : $user->phone;
        $user->email = $request->filled('email') ? $request->email : $user->email;
        $user->roles = $request->filled('roles') ? $request->roles : $user->roles;
        $user->status = $request->filled('status') ? $request->status : $user->status;

        // Save user
        $user->save();

        return response()->json(['message' => 'Người dùng đã cập nhật thành công']);
    }

    // Delete a user
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'Xoá người dùng thành công']);
    }
    public function moveToTrash($id)
    {
        $user = User::withTrashed()->findOrFail($id); // Sử dụng withTrashed để lấy cả người dùng đã xoá
        $user->delete(); // Di chuyển người dùng vào thùng rác

        return response()->json(['message' => 'Di chuyển người dùng vào thùng rác thành công']);
    }

    // Restore a user from trash
    public function restoreFromTrash($id)
    {
        $user = User::withTrashed()->findOrFail($id);
        $user->restore(); // Khôi phục người dùng từ thùng rác

        return response()->json(['message' => 'Khôi phục người dùng từ thùng rác thành công']);
    }
}
