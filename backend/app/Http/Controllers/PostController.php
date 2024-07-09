<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    // Get all posts
    public function index()
    {
        $posts = Post::all();

        $result = [
            'status' => true,
            'posts' => $posts,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($posts),
        ];

        return response()->json($result, 200);
    }

    // Get a post by ID
    public function show($id)
    {
        $post = Post::findOrFail($id);
        return response()->json(['post' => $post]);
    }

    // Create a new post
    public function store(Request $request)
    {
        $post = new Post;
        $post->topic_id = $request->topic_id;
        $post->slug = str_replace(' ', '-', strtolower($request->name));
        $post->title = $request->title;
        $post->description = $request->description;
        $post->type = $request->type;
        $post->detail = $request->detail;
        $image = $request->image;
        $image = $request->file('image');  // Use the file() method to get the uploaded file
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/product'), $fileName);
                $post->image = $fileName;
            }
        }
        $post->created_by = $request->created_by;
        $post->status = $request->status;
        $post->save();
        return response()->json(['message' => 'Bài viết được tạo thành công']);
    }

    // Update a post
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->topic_id = $request->filled('topic_id') ? $request->topic_id : $post->topic_id;
        $post->title = $request->filled('title') ? $request->title : $post->title;
        $post->slug = $request->filled('title') ? str_replace(' ', '-', strtolower($request->title)) : $post->slug;
        $post->detail = $request->filled('detail') ? $request->detail : $post->detail;
        $post->description = $request->filled('description') ? $request->description : $post->description;
        $post->image = $request->filled('image') ? $request->image : $post->image;
        $post->type = $request->filled('type') ? $request->type : $post->type;
        $post->status = $request->filled('status') ? $request->status : $post->status;

        // Save post
        $post->save();

        return response()->json(['message' => 'Đã cập nhật bài đăng thành công']);
    }

    // Delete a post
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();

        return response()->json(['message' => 'Xoá bài đăng thành công']);
    }
}
