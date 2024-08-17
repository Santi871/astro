import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (src: string) => {
    try {
        const buffer = await fetch(src).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        );
       
        const { base64 } = await getPlaiceholder(buffer);
        return base64;
      } catch (err) {
        console.log(err);
        return '';
      }
}

export default getBase64;