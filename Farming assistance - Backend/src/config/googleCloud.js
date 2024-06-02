import { Storage } from "@google-cloud/storage";
const storage = new Storage({ keyFilename: "./public/file/key.json" });

export default storage;
