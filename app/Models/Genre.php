<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use PhpParser\Builder\Function_;
use PhpParser\Node\Expr\FuncCall;

class Genre extends Model
{
    private $genres = [
        [
            'id' => 1,
            'name' => 'Fiction',
            'description' => 'A literary work based on the imagination and not necessarily on fact.' 
        ],
        [
            'id' => 2,
            'name' => 'Non-Fiction',
            'description' => 'A literary work based on facts and real events.' 
        ],
        [
            'id' => 3,
            'name' => 'Fantasy',
            'description' => 'Stories with magical or supernatural elements.' 
        ],
        [
            'id' => 4,
            'name' => 'Horor',
            'description' => 'Fiction intended to scare or disturb the reader.' 
        ],
        [
            'id' => 5,
            'name' => 'Romance',
            'description' => 'A genre focuses on love and romance.' 
        ],
    ];

    public function getGenres()
    {
        return $this -> genres;
    }
}

?>