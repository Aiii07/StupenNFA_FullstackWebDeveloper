<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PhpParser\Builder\Function_;
use PhpParser\Node\Expr\FuncCall;

class Genre extends Model
{
    protected $table = 'genres';
}

?>