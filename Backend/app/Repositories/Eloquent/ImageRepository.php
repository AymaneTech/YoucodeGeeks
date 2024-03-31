<?php

namespace App\Repositories\Eloquent;

use App\Contracts\Services\UploadImageInterface;
use App\Models\Image;
use App\Repositories\ImageRepositoryInterface;
use App\Services\UploadToCloudinaryService;
use Illuminate\Database\Eloquent\Model;
use TimWassenburg\RepositoryGenerator\Repository\BaseRepository;

/**
 * Class ImageRepository.
 */
class ImageRepository implements ImageRepositoryInterface
{

    public function __construct(public UploadImageInterface $uploadImage){}

    public function create(Model $model, $image)
    {
        $imagePath = $this->uploadImage->upload($image);
        $model->image()->create([
            "path" => $imagePath,
            "imageable_type" => get_class($model),
            "imageable_id" => $model->id,
        ]);
    }
}
