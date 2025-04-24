export default function classMapUtil(classObj: { [k: string]: any }): string {
  return Object.entries(classObj)
    .filter(([name, value]) => name !== "" && value)
    .map(([name]) => name)
    .join(" ")
}
