import Container from "@/app/_components/container";
import { Button } from "@/app/_components/button";

export function Footer() {
  return (
    <footer className=" border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Button href="mailto:brozef.dev@gmail.com">
              Mail me
            </Button>
            <Button square href="http://github.com/brozef">
              <img src="/assets/github.png" className="w-[2em]"/>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
