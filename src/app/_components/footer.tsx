import Container from "@/app/_components/container";
import { Button } from "@/app/_components/button";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Button>
              Hit me up {"->"}
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
