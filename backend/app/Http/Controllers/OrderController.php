<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    // Get all orders
    public function index()
    {
        $orders = Order::all();

        $result = [
            'status' => true,
            'orders' => $orders,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($orders),
        ];

        return response()->json($result, 200);
    }

    // Get an order by ID
    public function show($id)
    {
        $order = Order::findOrFail($id);
        return response()->json(['order' => $order]);
    }

    // Create a new order
    public function store(Request $request)
    {
        $order = new Order;
        $order->user_id = $request->user_id;
        $order->delivery_name = $request->delivery_name;
        $order->delivery_gender = $request->delivery_gender;
        $order->delivery_email = $request->delivery_email;
        $order->delivery_phone = $request->delivery_phone;
        $order->delivery_address = $request->delivery_address;
        $order->note = $request->note;
        $order->created_by = $request->created_by;
        $order->status = $request->status;
        $order->save();
        return response()->json(['message' => 'Thêm đơn đặt hàng thành công']);
    }

    // Update an order
    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->user_id = $request->filled('user_id') ? $request->user_id : $order->user_id;
        $order->delivery_name = $request->filled('delivery_name') ? $request->delivery_name : $order->delivery_name;
        $order->delivery_gender = $request->filled('delivery_gender') ? $request->delivery_gender : $order->delivery_gender;
        $order->delivery_email = $request->filled('delivery_email') ? $request->delivery_email : $order->delivery_email;
        $order->delivery_phone = $request->filled('delivery_phone') ? $request->delivery_phone : $order->delivery_phone;
        $order->delivery_address = $request->filled('delivery_address') ? $request->delivery_address : $order->delivery_address;
        $order->note = $request->filled('note') ? $request->note : $order->note;
        $order->status = $request->filled('status') ? $request->status : $order->status;
        $order->updated_by = auth()->id();

        // Save order
        $order->save();

        return response()->json(['message' => 'Cập nhật đơn đặt hàng thành công !']);
    }

    // Delete an order
    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();

        return response()->json(['message' => 'Xoá đơn đặt hàng thành công']);
    }
}
