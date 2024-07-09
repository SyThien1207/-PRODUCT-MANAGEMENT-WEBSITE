<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderDetail;

class OrderDetailController extends Controller
{
    // Get all order details
    public function index()
    {
        $orderDetails = OrderDetail::all();

        $result = [
            'status' => true,
            'order_details' => $orderDetails,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($orderDetails),
        ];

        return response()->json($result, 200);
    }

    // Get an order detail by ID
    public function show($id)
    {
        $orderDetail = OrderDetail::findOrFail($id);
        return response()->json(['order_detail' => $orderDetail]);
    }

    // Create a new order detail
    public function store(Request $request)
    {
        $orderDetail = new OrderDetail;

        $orderDetail->order_id = $request->order_id;
        $orderDetail->product_id = $request->product_id;
        $orderDetail->price = $request->price;
        $orderDetail->qty = $request->qty;
        $orderDetail->discount = $request->discount;
        $orderDetail->amount = $request->amount;

        $orderDetail->save();

        return response()->json(['message' => 'Chi tiết đơn hàng được tạo thành công']);
    }

    // Update an order detail
    public function update(Request $request, $id)
    {
        $orderDetail = OrderDetail::findOrFail($id);

        // Check if the request has a non-empty value for each field and update accordingly
        $orderDetail->order_id = $request->filled('order_id') ? $request->order_id : $orderDetail->order_id;
        $orderDetail->product_id = $request->filled('product_id') ? $request->product_id : $orderDetail->product_id;
        $orderDetail->price = $request->filled('price') ? $request->price : $orderDetail->price;
        $orderDetail->qty = $request->filled('qty') ? $request->qty : $orderDetail->qty;
        $orderDetail->discount = $request->filled('discount') ? $request->discount : $orderDetail->discount;
        $orderDetail->amount = $request->filled('amount') ? $request->amount : $orderDetail->amount;

        // Save order detail
        $orderDetail->save();

        return response()->json(['message' => 'Chi tiết đơn hàng được cập nhật thành công']);
    }

    // Delete an order detail
    public function destroy($id)
    {
        $orderDetail = OrderDetail::findOrFail($id);
        $orderDetail->delete();

        return response()->json(['message' => 'Xoá chi tiết đơn hàng thành công']);
    }
}
