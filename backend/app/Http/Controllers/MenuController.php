<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    // Get all menus
    public function index()
    {
        $menus = Menu::all();

        $result = [
            'status' => true,
            'menus' => $menus,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($menus),
        ];

        return response()->json($result, 200);
    }

    // Get a menu by ID
    public function show($id)
    {
        $menu = Menu::findOrFail($id);
        return response()->json(['menu' => $menu]);
    }

    // Create a new menu
    public function store(Request $request)
    {
        $menu = new Menu;
        $menu->name = $request->name;
        $menu->link = $request->link;
        $menu->sort_order = $request->sort_order;
        $menu->parent_id = $request->parent_id;
        $menu->type = $request->type;
        $menu->table_id = $request->table_id;
        $menu->description = $request->description;
        $menu->created_by = $request->created_by;
        $menu->status = $request->status;
        $menu->save();

        return response()->json(['message' => 'Menu thêm thành công']);
    }

    // Update a menu
    public function update(Request $request, $id)
    {
       
        $menu = Menu::findOrFail($id);

        // Check if the request has a non-empty value for each field and update accordingly
        $menu->name = $request->filled('name') ? $request->name : $menu->name;
        $menu->link = $request->filled('link') ? $request->link : $menu->link;
        $menu->sort_order = $request->filled('sort_order') ? $request->sort_order : $menu->sort_order;
        $menu->parent_id = $request->filled('parent_id') ? $request->parent_id : $menu->parent_id;
        $menu->type = $request->filled('type') ? $request->type : $menu->type;
        $menu->table_id = $request->filled('table_id') ? $request->table_id : $menu->table_id;
        $menu->description = $request->filled('description') ? $request->description : $menu->description;
        $menu->status = $request->filled('status') ? $request->status : $menu->status;
        $menu->updated_by = auth()->id();

        // Save menu
        $menu->save();

        return response()->json(['message' => 'Menu cập nhật thành công']);
    }

    // Delete a menu
    public function destroy($id)
    {
        $menu = Menu::findOrFail($id);
        $menu->delete();

        return response()->json(['message' => 'Xoá menu thành công']);
    }
}
