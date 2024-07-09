<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all();

        $result = [
            'status' => true,
            'categories' => $category,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($category),
        ];

        return response()->json($result, 200);
    }

    function show($id)
    {
        $category = Category::find($id);

        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $result = [
            'status' => true,
            'category' => $category,
            'message' => 'Tai du lieu thanh cong',
        ];
        return response()->json($result, 200);
    }

    function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name; // reactjs
        $category->slug = Str::of($request->name)->slug('-');

        // Upload file
        // $image = $request->file('image');  // Use the file() method to get the uploaded file
        // if ($image != null) {
        //     $extension = $image->getClientOriginalExtension();
        //     if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
        //         $fileName = date('YmdHis') . '.' . $extension;
        //         $image->move(public_path('images/category'), $fileName);
        //         $category->image = $fileName;
        //     }
        // }

        $category->sort_order = $request->sort_order; // reactjs
        $category->description = $request->description; // reactjs
        $category->created_at = date('Y-m-d H:i:s');  // Use the now() function to get the current timestamp
        $category->created_by = 1; // tam
        $category->status = $request->status; // reactjs

        if ($category->save()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Them du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'category' => null,
            'message' => 'Không the them du lieu',
        ];
        return response()->json($result, 200);
    }

    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        $category->name = $request->filled('name') ? $request->name : $category->name;
        $category->slug = $request->filled('name') ? Str::of($request->name)->slug('-') : $category->slug;

        $image = $request->file('image');
        if ($image != null && $image->isValid()) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/category'), $fileName);
                $category->image = $fileName;
            }
        }

        $category->sort_order = $request->filled('sort_order') ? $request->sort_order : $category->sort_order;
        $category->description = $request->filled('description') ? $request->description : $category->description;
        $category->status = $request->filled('status') ? $request->status : $category->status;

        $category->updated_at = now();
        $category->updated_by = 1;

        if ($category->save()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Cap nhat du lieu thanh cong',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'category' => null,
            'message' => 'Khong the cap nhat du lieu',
        ];
        return response()->json($result, 200);
    }


    function destroy($id)
    {
        $category = Category::find($id);

        if ($category == null) {
            $result = [
                'status' => false,
                'category' => null,
                'message' => 'Khong tim thay du lieu',
            ];
            return response()->json($result, 404);
        }

        if ($category->delete()) {
            $result = [
                'status' => true,
                'category' => $category,
                'message' => 'Xoá dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'category' => null,
            'message' => 'Khong the xoá du lieu',
        ];
        return response()->json($result, 200);
    }
}
