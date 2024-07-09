<?php
namespace App\Http\Controllers;
use App\Models\Config;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ConfigController extends Controller
{
    // Get all configurations
    public function index(): JsonResponse
    {
        $configurations = Config::all();

        $result = [
            'status' => true,
            'configurations' => $configurations,
            'message' => 'Lấy dữ liệu thành công',
            'total' => $configurations->count(),
        ];

        return response()->json($result, 200);
    }

    // Get a specific configuration by ID
    public function show($id): JsonResponse
    {
        $configuration = Config::findOrFail($id);

        return response()->json(['configuration' => $configuration]);
    }

    // Update a configuration
    public function update(Request $request, $id): JsonResponse
    {
        $configuration = Config::findOrFail($id);
        // $this->validateConfigurationData($request);

        // $configuration->update($request->all());
        $configuration->author = $request->filled('author') ? $request->author : $configuration->author;
        $configuration->email = $request->filled('email') ? $request->email : $configuration->email;
        $configuration->phone = $request->filled('phone') ? $request->phone : $configuration->phone;
        $configuration->zalo = $request->filled('zalo') ? $request->zalo : $configuration->zalo;
        $configuration->facebook = $request->filled('facebook') ? $request->facebook : $configuration->facebook;
        $configuration->address = $request->filled('address') ? $request->address : $configuration->address;
        $configuration->youtube = $request->filled('youtube') ? $request->youtube : $configuration->youtube;
        $configuration->metadesc = $request->filled('metadesc') ? $request->metadesc : $configuration->metadesc;
        $configuration->metakey = $request->filled('metakey') ? $request->metakey : $configuration->metakey;
        $configuration->status = $request->filled('status') ? $request->status : $configuration->status;

        $configuration->save();
        return response()->json(['message' => 'Cập nhật cấu hình thành công']);
    }

    // Delete a configuration
    public function destroy($id): JsonResponse
    {
        $configuration = Config::findOrFail($id);
        $configuration->delete();

        return response()->json(['message' => 'Xóa cấu hình thành công']);
    }

    // Validate configuration data
    protected function validateConfigurationData(Request $request): void
    {
        $request->validate([
            'author' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'zalo' => 'required|string',
            'facebook' => 'required|string',
            'address' => 'required|string',
            'youtube' => 'required|string',
            'metadesc' => 'required|string',
            'metakey' => 'required|string',
            'created_by' => 'required|integer',
            'updated_by' => 'nullable|integer',
            'status' => 'required|integer',
        ]);
    }
}