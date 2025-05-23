import { ChangeEvent, useRef, useState } from "react"

export default function useFileInput(maxSize: number) {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [duration, setDuration] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
            const selectedFile = e.target.files[0];

            if (selectedFile.size > maxSize) return;

            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }

            setFile(selectedFile);

            const objectUrl = URL.createObjectURL(selectedFile);

            setPreviewUrl(objectUrl);

            if (selectedFile.type.startsWith("video")) {
                const video = document.createElement("video");

                video.preload = "metadata";

                video.onloadedmetadata = () => {
                    if (isFinite(video.duration) && video.duration > 0) {
                        setDuration(Math.round(video.duration));
                    } else {
                        setDuration(0);
                    }

                    URL.revokeObjectURL(video.src);
                }

                video.src = objectUrl;
            }
        }
    }

    const resetFile = () => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        setFile(null);
        setPreviewUrl("");
        setDuration(0);

        if (inputRef.current) {
            inputRef.current.value = "";
        }
    }

    return {
        file,
        previewUrl,
        duration,
        inputRef,
        handleFileChange,
        resetFile,
    }
}