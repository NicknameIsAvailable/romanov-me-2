import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateYearsSince(date: Date): number {
  const today = new Date();
  const yearsDifference = today.getFullYear() - date.getFullYear();
  const monthsDifference = today.getMonth() - date.getMonth();
  const daysDifference = today.getDate() - date.getDate();

  let adjustedYearsDifference = yearsDifference;
  if (monthsDifference < 0 || (monthsDifference === 0 && daysDifference < 0)) {
      adjustedYearsDifference--;
  }

  return adjustedYearsDifference;
}
