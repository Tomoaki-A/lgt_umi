export const getMarkdownImageText = (url: string) => {
  const clipUrl = `[![LGT-umi](${url})]`;
  return clipUrl;
};
