import { SpaceLayout, Header, Footer, ThemeToggle } from "solgaleo";
import "solgaleo/solgaleo.css";


export function Blog() {

  return (

    <SpaceLayout two contentCenter={true} title='Storybook'
      header={<Header rightChildren={<ThemeToggle />} />}
      footer={<Footer />}>



    </SpaceLayout>
  )
}
