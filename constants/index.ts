export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/loom-clone-vkh",
  CDN_URL: "https://loom-clone-vkh.b-cdn.net",
  TRANSCRIPT_URL: "https://vz-db26df1f-937.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-06-30"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-06-30"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "3",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-06-30"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "4",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-06-30"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "5",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-06-30"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "6",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-06-30"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "7",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-06-30"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
]