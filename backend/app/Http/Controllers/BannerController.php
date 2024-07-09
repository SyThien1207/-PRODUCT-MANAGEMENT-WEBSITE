<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Banner;

class BannerController extends Controller
{
    // Get all banners
    public function index()
    {
        $banners = Banner::all();

        $result = [
            'status' => true,
            'banners' => $banners,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($banners),
        ];

        return response()->json($result, 200);
    }

    // Get a specific banner by ID
    public function show($id)
    {
        $banner = Banner::findOrFail($id);
        return response()->json(['banner' => $banner]);
    }

    // Create a new banner
    public function store(Request $request)
    {

        $banner = new Banner;
        $banner->name = $request->name;

        $banner->link = $request->link;
        $banner->position = $request->position;
        $banner->description = $request->description;
        $banner->created_by = $request->created_by;
        $banner->status = $request->status;
        $image = $request->image;
        // Upload file
        $image = $request->file('image');
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/banner'), $fileName);
                $banner->image = $fileName;
            }
        }

        // End upload file
        $banner->save();

        return response()->json(['message' => 'Thêm banner thành công !']);
    }

    // Update an existing banner
    public function update(Request $request, $id)
    {
        $banner = Banner::findOrFail($id);

        // Check if the request has a non-empty value for each field and update accordingly
        $banner->name = $request->filled('name') ? $request->name : $banner->name;
        $banner->link = $request->filled('link') ? $request->link : $banner->link;
        $banner->position = $request->filled('position') ? $request->position : $banner->position;
        $banner->description = $request->filled('description') ? $request->description : $banner->description;
        $banner->image = $request->filled('image') ? $request->image : $banner->image;
        $banner->updated_by = auth()->id(); // assuming you have user authentication
        $banner->status = $request->filled('status') ? $request->status : $banner->status;

        // Upload file if provided
        $image = $request->file('image');
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/banner'), $fileName);
                $banner->image = $fileName;
            }
        }

        $banner->save();

        return response()->json(['message' => 'Banner cập nhật thành công']);
    }

    // Delete a banner
    public function destroy($id)
    {
        $banner = Banner::findOrFail($id);
        $banner->delete();

        return response()->json(['message' => 'Xoá Banner thành công']);
    }
}
