<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Brand;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    function index()
    {
        $brands = Brand::where('status', '!=', 0)
            ->orderBy('created_at', 'desc')
            ->select('id', 'name', 'slug', 'status', 'image')
            ->get();
        $total = Brand::count();
        $result = [
            'status' => true,
            'brands' => $brands,
            'message' => 'Tải dữ liệu thành công',
            'total' => $total,
        ];
        return response()->json($result, 200);
    }
    function show($id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            $result = [
                'status' => false,
                'brand' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        $result = [
            'status' => true,
            'brand' => $brand,
            'message' => 'Tải dữ liệu thành công',
        ];
        return response()->json($result, 200);
    }
    function store(Request $request)
    {
        $brand = new Brand();
        $brand->name = $request->name; //reactjs
        $brand->slug = Str::of($request->name)->slug('-');
        //upload file
        $image = $request->image;
        $image = $request->file('image');  // Use the file() method to get the uploaded file
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/brand'), $fileName);
                $brand->image = $fileName;
            }
        }
        //end upload
        $brand->sort_order = $request->sort_order; //reactjs
        $brand->description = $request->description; //reactjs
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = 1; //tam
        $brand->status = $request->status; //reactjs
        if ($brand->save()) {
            $result = [
                'status' => true,
                'brand' => $brand,
                'message' => 'Thêm dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        //
        $result = [
            'status' => false,
            'brand' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);
    }
    public function update(Request $request, $id)
    {
        $brand = Brand::find($id);

        if ($brand == null) {
            $result = [
                'status' => false,
                'brand' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }

        $brand->name = $request->filled('name') ? $request->name : $brand->name;
        $brand->slug = $request->filled('name') ? Str::of($request->name)->slug('-') : $brand->slug;

        $image = $request->file('image');
        if ($image != null && $image->isValid()) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/brand'), $fileName);
                $brand->image = $fileName;
            }
        }

        $brand->sort_order = $request->filled('sort_order') ? $request->sort_order : $brand->sort_order;
        $brand->description = $request->filled('description') ? $request->description : $brand->description;
        $brand->status = $request->filled('status') ? $request->status : $brand->status;

        $brand->updated_at = now();
        $brand->updated_by = 1;

        if ($brand->save()) {
            $result = [
                'status' => true,
                'brand' => $brand,
                'message' => 'Cập nhật dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }

        $result = [
            'status' => false,
            'brand' => null,
            'message' => 'Không thể cập nhật dữ liệu',
        ];
        return response()->json($result, 200);
    }
    function destroy($id)
    {
        $brand = Brand::find($id);

        if ($brand == null) {
            $result = [
                'status' => false,
                'brand' => null,
                'message' => 'Không tìm thấy dữ liệu',
            ];
            return response()->json($result, 404);
        }
        if ($brand->delete()) {
            $result = [
                'status' => true,
                'brand' => $brand,
                'message' => 'Xoá dữ liệu thành công',
            ];
            return response()->json($result, 200);
        }
        $result = [
            'status' => false,
            'brand' => null,
            'message' => 'Không thể thêm dữ liệu',
        ];
        return response()->json($result, 200);
    }
}
