<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class CloudinaryService
{
    private string $cloudName;

    private string $apiKey;

    private string $apiSecret;

    public function __construct()
    {
        $this->cloudName = config('cloudinary.cloud_name', '');
        $this->apiKey = config('cloudinary.api_key', '');
        $this->apiSecret = config('cloudinary.api_secret', '');

        if ($this->cloudName === '' || $this->apiKey === '' || $this->apiSecret === '') {
            $this->parseCloudinaryUrl(config('cloudinary.url'));
        }
    }

    public function isConfigured(): bool
    {
        return $this->cloudName !== ''
            && $this->apiKey !== ''
            && $this->apiSecret !== '';
    }

    public function upload(UploadedFile $file, ?string $folder = null): array
    {
        if (! $this->isConfigured()) {
            throw new RuntimeException('Cloudinary n\'est pas configuré. Vérifiez les variables CLOUDINARY_* dans .env.');
        }

        $timestamp = time();
        $params = [
            'timestamp' => $timestamp,
        ];

        if ($folder !== null && $folder !== '') {
            $params['folder'] = $folder;
        }

        $signature = $this->generateSignature($params);

        $response = Http::asMultipart()
            ->attach('file', file_get_contents($file->getRealPath()), $file->getClientOriginalName())
            ->post("https://api.cloudinary.com/v1_1/{$this->cloudName}/image/upload", [
                ...$params,
                'api_key' => $this->apiKey,
                'signature' => $signature,
            ]);

        if ($response->failed()) {
            throw new RuntimeException(
                'Échec de l\'upload Cloudinary : '.$response->body()
            );
        }

        $data = $response->json();

        return [
            'public_id' => $data['public_id'] ?? null,
            'url' => $data['secure_url'] ?? $data['url'] ?? null,
            'width' => $data['width'] ?? null,
            'height' => $data['height'] ?? null,
            'format' => $data['format'] ?? null,
        ];
    }

    private function generateSignature(array $params): string
    {
        ksort($params);

        $signatureString = collect($params)
            ->map(fn (mixed $value, string $key): string => "{$key}={$value}")
            ->implode('&');

        return sha1($signatureString.$this->apiSecret);
    }

    private function parseCloudinaryUrl(?string $url): void
    {
        if ($url === null || $url === '') {
            return;
        }

        $parsed = parse_url($url);

        if ($parsed === false) {
            return;
        }

        $this->cloudName = $parsed['host'] ?? $this->cloudName;
        $this->apiKey = $parsed['user'] ?? $this->apiKey;
        $this->apiSecret = $parsed['pass'] ?? $this->apiSecret;
    }
}
