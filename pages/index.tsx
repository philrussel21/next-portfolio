import { GetStaticProps } from "next";
import Head from "next/head";
import { renderMetaTags } from "react-datocms/seo";
import { getHomeData } from "@app/data";
import { HomeDTO } from "@app/data/home";
import { ExperienceCard, ProjectCard, Snippet } from "@app/components";

type HomePageProperties = {
  data: HomeDTO;
};

const Home = ({ data }: HomePageProperties) => (
  <main className="flex h-screen overflow-hidden bg-black">
    <Head>{renderMetaTags(data.seo)}</Head>
    <section className="h-full w-2/6 py-20 px-12 border-r">
      <div className="w-full h-96 rounded-3xl bg-gray-300" />
    </section>
    <section className="w-4/6 px-24 overflow-y-scroll py-20 space-y-8">
      <Snippet heading="About Me" content="Lorem Ipsum text" />
      <div className="mt-16">
        <h2 className="text-white">Professional Experience</h2>
        <div className="flex flex-col gap-12 mt-12">
          {data.experiences.map((experience) => (
            <div key={experience.id}>
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-white">Projects</h2>
        <div className="flex flex-col gap-12 mt-12">
          {data.projects.map((project) => (
            <div key={project.id} className="max-w-2xl mx-auto">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
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
