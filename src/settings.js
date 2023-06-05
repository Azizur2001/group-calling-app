import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";


const appId = "9bff396d4def405987a6c3e5d64cd33e"
const token = "007eJxTYLCOknm5cJn4kXnMGpWZ+7mv5mgZ/xO6f+tX7uvw6Uc3ys5VYLBMSksztjRLMUlJTTMxMLW0ME80SzZONU0xM0lOMTZOlVB9k9wQyMgw5UUhMyMDBIL4LAy5iZl5DAwAbs0gTg=="


export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";