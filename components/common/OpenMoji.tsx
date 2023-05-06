import Image from "next/image";

const SHORTCUTS: { [key: string]: string } = {
  info: "2139",
  data: "1F4BE",
  newspaper: "1F4F0",
  mail: "2709",
  github: "E045",
};

export default function OpenMoji({
  code,
  fill,
  width,
  height,
}: {
  code: string;
  fill?: boolean;
  width?: number;
  height?: number;
}) {
  let props: { [key: string]: any } = {};
  if (width || height) {
    props.width = width || height;
    props.height = height || width;
  } else if (!!fill) {
    props.fill = fill;
  } else {
    throw Error("width OR fill required");
  }
  return (
    <Image
      src={`/openmojis/${SHORTCUTS[code] || code}.svg`}
      alt={code}
      {...props}
    />
  );
}
