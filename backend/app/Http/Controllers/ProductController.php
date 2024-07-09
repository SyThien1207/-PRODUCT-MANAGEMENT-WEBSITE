<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductStore;
use Illuminate\Support\Facades\DB;
use App\Models\ProductSale;
use Carbon\Carbon; 
class ProductController extends Controller
{

    public function productsale()
    {
        $productstore = ProductStore::select('product_id', DB::raw('SUM(qty) as sum_qty'))
            ->groupBy('product_id');

        $products = Product::where('product.status', '=', 1)
            ->where('productsale.date_begin', '<=', Carbon::now())
            ->where('productsale.date_end', '>=', Carbon::now())
            ->joinSub($productstore, 'productstore', function ($join) {
                $join->on('productstore.product_id', '=', 'product.id');
            })
            ->leftJoin('productsale', 'productsale.product_id', '=', 'product.id')
            ->orderBy('product.created_at', 'desc')
            ->select("product.id", "product.name", "product.image", "product.price", "product.slug", "productsale.pricesale")
            ->limit(8)
            ->get();

        $result = [
            'status' => true,
            'products' => $products,
            'message' => 'Tai du lieu thanh cong'
        ];

        return response()->json($result, 200);
    }
    public function productnew($limit)
    {
        $productstore = ProductStore::select('product_id', DB::raw('SUM(qty) as sum_qty'))
            ->groupBy('product_id');

        $products = Product::where('product.status', '=', 1)
            ->joinSub($productstore, 'productstore', function ($join) {
                $join->on('productstore.product_id', '=', 'product.id');
            })
            ->orderBy('product.created_at', 'desc')
            ->select("product.id", "product.name", "product.image", "product.price", "product.slug")
            ->limit($limit)
            ->get();
        $result = [
            'status' => true,
            'products' => $products,
            'message' => 'Tai du lieu thanh cong'
        ];
        return response()->json($result, 200);
    }
    //get   
    public function index()
    {
        $products = Product::all();

        $result = [
            'status' => true,
            'products' => $products,
            'message' => 'Tải dữ liệu thành công',
            'total' => count($products),
        ];

        return response()->json($result, 200);
    }

    //get{ID}
    public function show($id)
    {
        $product = Product::findOrFail($id);
        return response()->json(['product' => $product]);
    }
    //post
    public function store(Request $request)
    {
        $product = new Product;
        $product->category_id = $request->category_id; 
        $product->brand_id = $request->brand_id;
        $product->name = $request->name;
        $product->slug = str_replace(' ', '-', strtolower($request->name));
        $product->detail = $request->detail;
        $product->description = $request->description;
        //upload file
        $image = $request->image;
        $image = $request->file('image');  // Use the file() method to get the uploaded file
        if ($image != null) {
            $extension = $image->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'gif', 'png', 'webp'])) {
                $fileName = date('YmdHis') . '.' . $extension;
                $image->move(public_path('images/product'), $fileName);
                $product->image = $fileName;
            }
        }
        //end upload file
        $product->price = $request->price;
        // $product->pricesale = $request->pricesale;
        // $product->qty = $request->qty;
        $product->created_by = $request->created_by;
        $product->updated_by = $request->updated_by;
        $product->status = $request->status;
        $product->save();

        return response()->json(['message' => 'Sản phẩm thêm thành công']);
    }
    //update
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        // Check if the request has a non-empty value for each field and update accordingly
        $product->category_id = $request->filled('category_id') ? $request->category_id : $product->category_id;
        $product->brand_id = $request->filled('brand_id') ? $request->brand_id : $product->brand_id;
        $product->name = $request->filled('name') ? $request->name : $product->name;

        if ($request->filled('name')) {
            $product->slug = str_replace(' ', '-', strtolower($request->name));
        }

        $product->detail = $request->filled('detail') ? $request->detail : $product->detail;


        $product->description = $request->filled('description') ? $request->description : $product->description;
        $product->image = $request->filled('image') ? $request->image : $product->image;
        $product->price = $request->filled('price') ? $request->price : $product->price;

        $product->pricesale = $request->filled('pricesale') ? $request->pricesale : $product->pricesale;
        $product->qty = $request->filled('qty') ? $request->qty : $product->qty;

        $product->created_by = $request->filled('created_by') ? $request->created_by : $product->created_by;
        $product->updated_by = $request->filled('updated_by') ? $request->updated_by : $product->updated_by;
        $product->status = $request->filled('status') ? $request->status : $product->status;

        $product->save();

        return response()->json(['message' => 'Sản phẩm cập nhật thành công']);
    }


    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(['message' => 'Xoá sản phẩm thành công']);
    }
    //Search Name
    public function searchByName(Request $request)
    {
        $name = $request->get('name');
        $products = Product::where('name', 'like', "%{$name}%")->get();
        return response()->json(['products' => $products]);
    }


}