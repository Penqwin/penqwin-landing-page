/// <reference types="astro/client" />

declare module "*.vtt" {
  const value: string;
  export default value;
}

declare module "*.srt" {
  const value: string;
  export default value;
}
