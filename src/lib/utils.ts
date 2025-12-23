/**
 * @author Ashraf Morningstar
 * @link https://github.com/AshrafMorningstar
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
