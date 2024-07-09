<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    // Get all contacts
    public function index()
    {
        $contacts = Contact::all();

        $result = [
            'status' => true,
            'contacts' => $contacts,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($contacts),
        ];

        return response()->json($result, 200);
    }

    public function show($id)
    {
        $contact = Contact::findOrFail($id);
        return response()->json(['contact' => $contact]);
    }

    // Create a new contact
    public function store(Request $request)
    {
        $contact = new Contact;
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->title = $request->title;
        $contact->content = $request->content;
        $contact->user_id = $request->user_id;
        $contact->replay_id = $request->replay_id;
        $contact->created_by = $request->created_by;
        $contact->status = $request->status;
        $contact->save();
        return response()->json(['message' => 'Thêm thông tin liên hệ thành công']);
    }

    // Update a contact
    public function update(Request $request, $id)
    {
        $contact = Contact::findOrFail($id);
        $contact->name = $request->filled('name') ? $request->name : $contact->name;
        $contact->email = $request->filled('email') ? $request->email : $contact->email;
        $contact->phone = $request->filled('phone') ? $request->phone : $contact->phone;
        $contact->title = $request->filled('title') ? $request->title : $contact->title;
        $contact->content = $request->filled('content') ? $request->content : $contact->content;
        $contact->user_id = $request->filled('user_id') ? $request->user_id : $contact->user_id;
        $contact->replay_id = $request->filled('replay_id') ? $request->replay_id : $contact->replay_id;
        $contact->updated_by = auth()->id(); // assuming you have user authentication
        $contact->status = $request->filled('status') ? $request->status : $contact->status;

        // Save contact
        $contact->save();

        return response()->json(['message' => 'trả lời thành công']);
    }


    // Delete a contact
    public function destroy($id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();

        return response()->json(['message' => 'Xoá thông tin liên hệ thành công']);
    }
}
