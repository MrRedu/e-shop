import Image from "next/image";
import { getHomeInfo } from "../lib/get-home-info";
import { Section } from "./Section";

// const title = "Hello";
// const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem qui, quia aperiam officia cum obcaecati inventore cumque corrupti doloremque eos nostrum accusamus, voluptatum tempore! Omnis culpa quas consectetur explicabo amet?";
// const image = "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface TextNode {
  type: "text";
  text: string;
}

interface Paragraph {
  type: "paragraph";
  children: TextNode[];
}

export const Hero = async () => {
  const { title, description, image } = await getHomeInfo();

  return (
    <Section className="flex flex-col lg:flex-row gap-6  items-center">
      <div className="flex flex-col gap-4 w-full lg:w-5/12">
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl m-b-4">{title}</h1>
        {description.map((paragraph: Paragraph, index: number) => (
          <p key={index} className="mb-[8px]">
            {paragraph.children[0].text}
          </p>
        ))}
      </div>
      <div className="relative w-full lg:w-7/12 overflow-hidden">
        <Image src={image} width={1380} height={736} alt="image" className="pointer-events-none w-full" />
      </div>
    </Section >
  )
};
