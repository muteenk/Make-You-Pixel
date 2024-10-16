import 'next-auth'
import { StaticImageData } from 'next/image';


declare module 'next-auth' {
  interface User {
    username?: string | undefined | null;
    avatar?: StaticImageData | string | null;
  }
}