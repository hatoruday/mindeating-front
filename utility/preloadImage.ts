import { useEffect, useState } from "react";

async function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        resolve(objectURL); // 반환값을 resolve를 통해 Object URL로 전달
      })
      .catch((error) => reject(error));
  });
}

export default function useImagePreloader(imageList: string[]) {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);
  const [preloadedImageUrls, setPreloadedImageUrls] = useState<string[]>([]);

  useEffect(() => {
    let isCancelled = false;

    async function effect() {
      if (isCancelled) {
        return;
      }

      const imagesPromiseList: Promise<any>[] = [];
      for (const i of imageList) {
        imagesPromiseList.push(preloadImage(i));
      }

      try {
        const loadedUrls = await Promise.all(imagesPromiseList);
        if (!isCancelled) {
          setPreloadedImageUrls(loadedUrls); // 모든 URL이 로드된 후 상태 업데이트
          setImagesPreloaded(true);
        }
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    }

    effect();

    return () => {
      isCancelled = true;
      // Object URL들을 클린업
      // preloadedImageUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [imageList]);

  return { imagesPreloaded, preloadedImageUrls };
}
