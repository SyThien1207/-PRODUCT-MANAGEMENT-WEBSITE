<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Topic;

class TopicController extends Controller
{
    // Get all topics
    public function index()
    {
        $topics = Topic::all();

        $result = [
            'status' => true,
            'topics' => $topics,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($topics),
        ];

        return response()->json($result, 200);
    }

    // Get a topic by ID
    public function show($id)
    {
        $topic = Topic::findOrFail($id);
        return response()->json(['topic' => $topic]);
    }

    // Create a new topic
    public function store(Request $request)
    {
        $topic = new Topic;
        $topic->name = $request->name;
        $topic->slug = str_replace(' ', '-', strtolower($request->name));
        $topic->sort_order = $request->sort_order;
        $topic->description = $request->description;
        $topic->created_by = $request->created_by;
        $topic->status = $request->status;
        $topic->save();

        return response()->json(['message' => 'Chủ đề được tạo thành công']);
    }

    // Update a topic
    public function update(Request $request, $id)
    {
        $topic = Topic::findOrFail($id);
        $topic->name = $request->filled('name') ? $request->name : $topic->name;
        $topic->slug = $request->filled('name') ? str_replace(' ', '-', strtolower($request->name)) : $topic->slug;
        $topic->sort_order = $request->filled('sort_order') ? $request->sort_order : $topic->sort_order;
        $topic->description = $request->filled('description') ? $request->description : $topic->description;
        $topic->status = $request->filled('status') ? $request->status : $topic->status;
        $topic->save();

        return response()->json(['message' => 'Chủ đề được cập nhật thành công']);
    }

    // Delete a topic
    public function destroy($id)
    {
        $topic = Topic::findOrFail($id);
        $topic->delete();

        return response()->json(['message' => 'Xoá chủ đề thành công']);
    }
}
