import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me



Hey there! I'm Sachin, a final-year B.Tech student majoring in Computer Science. With a passion for technology and innovation, I have developed strong skills in software development, data structures, and algorithms. I am eager to apply my knowledge and experience in real-world projects and contribute to the tech industry I am so passionate about, I am currently looking for opportunities.



This blog is where I'll be documenting my travels, sharing my experiences, and hopefully inspiring others to follow their wanderlust. From trekking through remote villages to savoring local cuisines, I'm on a mission to immerse myself in different cultures and create memories that will last a lifetime.

But this journey isn't just about checking off destinations from a bucket list. It's about self-discovery, personal growth, and finding the courage to live life on my own terms. I'll be honest and raw, sharing the highs and lows, the moments of pure bliss and the inevitable challenges that come with solo travel.

So join me on this adventure, and let's explore the world together! Who knows, maybe my stories will inspire you to take that leap of faith and pursue your own dreams, whatever they may be.

Let's go on an adventure!


Sachin`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Sachin",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
