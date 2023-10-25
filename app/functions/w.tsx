import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function w(...classLists: ClassValue[]) {
  return twMerge(clsx(classLists))
}