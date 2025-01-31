<?php

namespace Seed\Playlist;

use Seed\Core\Json\JsonSerializableType;
use Seed\Playlist\Traits\PlaylistCreateRequest;
use Seed\Core\Json\JsonProperty;

class Playlist extends JsonSerializableType
{
    use PlaylistCreateRequest;

    /**
     * @var string $playlistId
     */
    #[JsonProperty('playlist_id')]
    public string $playlistId;

    /**
     * @var string $ownerId
     */
    #[JsonProperty('owner-id')]
    public string $ownerId;

    /**
     * @param array{
     *   playlistId: string,
     *   ownerId: string,
     *   name: string,
     *   problems: array<string>,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->playlistId = $values['playlistId'];
        $this->ownerId = $values['ownerId'];
        $this->name = $values['name'];
        $this->problems = $values['problems'];
    }
}
