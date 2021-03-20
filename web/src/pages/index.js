import Head from "next/head";
import { Fragment } from "react";
import {
  About,
  Contact,
  Landing,
  Navbar,
  Projects,
  Section,
  Skill,
} from "../components";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Section props={{ display: "flex" }} size='big'>
        <Landing />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Skill />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Fragment>
  );
}
