import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Si alguna función de blog es necesaria en el cliente, debe importarse dinámicamente o desde utils-node.ts en el backend.
