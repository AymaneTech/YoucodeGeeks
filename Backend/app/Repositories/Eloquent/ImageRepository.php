<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Contracts\ImageRepositoryInterface;
use App\Services\Contracts\UploadImageInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ImageRepository.
 */
class ImageRepository implements ImageRepositoryInterface
{

    public function __construct(public UploadImageInterface $uploadImage)
    {
    }

    public function create(Model $model, $image)
    {
        $imagePath = $this->uploadImage->upload($image);
        $model->image()->create([
            "path" => $imagePath,
            "imageable_type" => get_class($model),
            "imageable_id" => $model->id,
        ]);
    }

    public function insert(Model $model, $images): void
    {
        $imageEntities = [];
        foreach ($images as $image) {
            $imageEntities[] = [
                "path" => $this->uploadImage->upload($image),
                "imageable_type" => get_class($model),
                "imageable_id" => $model->id
            ];
        }
        $model->images()->insert($imageEntities);
    }
    public function update(Model $model, $image): void
    {
        $imagePath = $this->uploadImage->upload($image);
        $model->image()->update([
            "path" => $imagePath,
            "imageable_type" => get_class($model),
            "imageable_id" => $model->id,
        ]);

    }
}
