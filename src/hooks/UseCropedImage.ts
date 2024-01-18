const useCropedImage = (url: string) => {
  const secondMediaIndex = url.indexOf("media", url.indexOf("media") + 1);

  // Insert "resize/600/-" after the second "media"
  const modifiedUrl =
    url.slice(0, secondMediaIndex + 5) +
    "/resize/600/-" +
    url.slice(secondMediaIndex + 5);

  return modifiedUrl;
};

export default useCropedImage;
