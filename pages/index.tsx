import { GetStaticProps } from "next";
import Head from "next/head";
import { renderMetaTags } from "react-datocms/seo";
import { getHomeData } from "@app/data";
import { HomeDTO } from "@app/data/home";
import { ProjectCard } from "@app/components";

type HomePageProperties = {
  data: HomeDTO;
};

const Home = ({ data }: HomePageProperties) => (
  <main className="flex h-screen overflow-hidden bg-black">
    <Head>{renderMetaTags(data.seo)}</Head>
    <section className="h-full w-2/6 py-20 px-12 border-r">
      <div className="w-full h-96 rounded-3xl bg-gray-300" />
    </section>
    <section className="w-4/6 px-12 overflow-y-scroll py-20 space-y-8">
      {data.projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  </main>
);

export default Home;

const getStaticProps: GetStaticProps = async ({ preview = false }) => ({
  props: {
    data: await getHomeData(preview),
  },
});

export { getStaticProps };
