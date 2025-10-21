<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transactions = Transaction::with('user', 'book')->get();

        if ($transactions -> isEmpty ()) {
            return response() -> json([
                'success' => true,
                'message' => 'Resource data not Found!'
            ], 200);
        }

        return response() -> json([
            'success' => true,
            'message' => 'Get all resources',
            'data' => $transactions
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request -> validate([
            'order_number' => 'required|string|unique:transactions',
            'customer_id' => 'required|exist:users, id',
            'book_id' => 'required|exists:books, id',
            'total_amount' => 'required|numeric'
        ]);

        $transactions = Transaction::create($validated);

        $transactions = Transaction::with(['user', 'book'])->find($transactions->id);

        return response() -> json([
            'success' => true,
            'message' => 'New Transaction Created Successfully.',
            'data' => $transactions
        ], 201);
    }

    public function show($id)
    {
        $transactions = Transaction::with(['user', 'book']) -> find($id);

        if (!$transactions) {
            return response() -> json([
                'success' => false,
                'message' => 'Transaction Not Found'
            ], 404);
        }

        return response() -> json([
            'success' => true,
            'message' => 'Transaction Found',
            'data' => $transactions
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $transactions = Transaction::find($id);

        if (!$transactions) {
            return response() -> json([
                'success' => 'false',
                'message' => 'Transaction Not Found',
            ], 404);
        }

        $validated = $request -> validate([
            'order_number' => 'required|string|unique:transactions',
            'customer_id' => 'required|exist:users, id',
            'book_id' => 'required|exists:books, id',
            'total_amount' => 'required|numeric'
        ]);

        $transactions -> update($validated);

        $transactions = Transaction::with(['user', 'book'])->find($id);

        return response() -> json([
            'success' => true,
            'message' => 'Transaction Update Successfully.',
            'data' => $transactions
        ], 200);
    }

    public function destroy($id)
    {
        $transactions = Transaction::find($id);

        if(!$transactions) {
            return response() -> json([
                'success' => false,
                'message' => 'Transaction Not Found'
            ], 404);
        }

        $transactions -> delete();

        return response() -> json([
            'success' => 'true',
            'message' => 'Transaction Deleted Successfully.'
        ], 200);
    }
}
