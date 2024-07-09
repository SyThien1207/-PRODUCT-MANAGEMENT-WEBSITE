<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ConfigController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Products
Route::get('/products/index', [ProductController::class, 'index']);
Route::get('/products/show/{id}', [ProductController::class, 'show']);
Route::get('/products/{name}', [ProductController::class, 'show']);
Route::post('/products/store', [ProductController::class, 'store']);
Route::put('/products/update/{id}', [ProductController::class, 'update']);
Route::delete('/products/{id}', [ProductController::class, 'destroy']);
Route::get('/products/search', [ProductController::class, 'searchByName']);

//Brands
Route::get('/brands/index', [BrandController::class, 'index']);
Route::get('brands/show/{id}', [BrandController::class, 'show']);
Route::post('/brands/store', [BrandController::class, 'store']);
Route::put('/brands/update/{id}', [BrandController::class, 'update']);
Route::delete('/brands/{id}', [BrandController::class, 'destroy']);

//Category
Route::get('/categories/index', [CategoryController::class, 'index']);
Route::get('categories/show/{id}', [CategoryController::class, 'show']);
Route::post('/categories/store', [CategoryController::class, 'store']);
Route::put('/categories/update/{id}', [CategoryController::class, 'update']);
Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

//Banner
Route::get('/banners/index', [BannerController::class, 'index']);
Route::get('banners/show/{id}', [BannerController::class, 'show']);
Route::post('/banners/store', [BannerController::class, 'store']);
Route::put('/banners/update/{id}', [BannerController::class, 'update']);
Route::delete('/banners/{id}', [BannerController::class, 'destroy']);

//Contact
Route::get('/contacts/index', [ContactController::class, 'index']);
Route::get('contacts/show/{id}', [ContactController::class, 'show']);
Route::post('/contacts/store', [ContactController::class, 'store']);
Route::put('/contacts/update/{id}', [ContactController::class, 'update']);
Route::delete('/contacts/{id}', [ContactController::class, 'destroy']);

//Menu
Route::get('/menu/index', [MenuController::class, 'index']);
Route::get('menu/show/{id}', [MenuController::class, 'show']);
Route::post('/menu/store', [MenuController::class, 'store']);
Route::put('/menu/update/{id}', [MenuController::class, 'update']);
Route::delete('/menu/{id}', [MenuController::class, 'destroy']);

//Order
Route::get('/orders/index', [OrderController::class, 'index']);
Route::get('orders/show/{id}', [OrderController::class, 'show']);
Route::post('/orders/store', [OrderController::class, 'store']);
Route::put('/orders/update/{id}', [OrderController::class, 'update']);
Route::delete('/orders/{id}', [OrderController::class, 'destroy']);

//OrderDetail
Route::get('/orderdetail/index', [OrderDetailController::class, 'index']);
Route::get('orderdetail/show/{id}', [OrderDetailController::class, 'show']);
Route::post('/orderdetail/store', [OrderDetailController::class, 'store']);
Route::put('/orderdetail/update/{id}', [OrderDetailController::class, 'update']);
Route::delete('/orderdetail/{id}', [OrderDetailController::class, 'destroy']);

//Post
Route::get('/post/index', [PostController::class, 'index']);
Route::get('post/show/{id}', [PostController::class, 'show']);
Route::post('/post/store', [PostController::class, 'store']);
Route::put('/post/update/{id}', [PostController::class, 'update']);
Route::delete('/post/{id}', [PostController::class, 'destroy']);

//Topic
Route::get('/topic/index', [TopicController::class, 'index']);
Route::get('topic/show/{id}', [TopicController::class, 'show']);
Route::post('/topic/store', [TopicController::class, 'store']);
Route::put('/topic/update/{id}', [TopicController::class, 'update']);
Route::delete('/topic/{id}', [TopicController::class, 'destroy']);

//User
Route::get('/users/index', [UserController::class, 'index']);
Route::get('users/show/{id}', [UserController::class, 'show']);
Route::post('/users/store', [UserController::class, 'store']);
Route::put('/users/update/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

//config
Route::get('/config/index', [ConfigController::class, 'index']);
Route::get('/config/show/{id}', [ConfigController::class, 'show']);
Route::post('/config/store', [ConfigController::class, 'store']);
Route::put('/config/update/{id}', [ConfigController::class, 'update']);
Route::delete('/config/{id}', [ConfigController::class, 'destroy']);