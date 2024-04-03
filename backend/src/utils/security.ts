import cryptoRandomString from "crypto-random-string";
import { pbkdf2Sync } from "pbkdf2";

const ENCODING: BufferEncoding = "utf8";
const DIGEST = "sha512";

export function emailToken() {
  return cryptoRandomString({
    length: 24,
    type: "url-safe",
  });
}

export function salt() {
  return cryptoRandomString({
    length: 12,
    type: "ascii-printable",
  });
}

export function hash(pwd: string, salt: string): string {
  return pbkdf2Sync(pwd, salt, 1, 32, DIGEST).toString(ENCODING);
}
