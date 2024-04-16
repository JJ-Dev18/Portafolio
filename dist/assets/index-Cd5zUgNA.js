function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CMwUrjPL.js","assets/index-lLYLUr23.js","assets/index-CUlJapP_.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-lLYLUr23.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CMwUrjPL.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
