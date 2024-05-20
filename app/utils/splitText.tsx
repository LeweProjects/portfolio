function splitText(inputString: string): string[] {
  const char: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(inputString)) != null) {
    char.push(match[0]);
  }
  return char;
}
export default splitText;
