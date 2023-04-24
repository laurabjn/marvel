import MD5 from "crypto-js/md5";

export const getHash = (ts: string, privateKey: any, publicKey: any) => {
    return MD5(ts + privateKey + publicKey).toString();
}