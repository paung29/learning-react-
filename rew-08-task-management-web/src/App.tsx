import { AccordionHeader } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";

export default function App(){
  return(
    <main className="mt-8 mx-16">
      
      <h1 className="text-4xl">Moe Shar</h1>


      <Accordion type="single" collapsible defaultValue="acc-1">
        {Array.from({length : 4}).map((_, index) => 
          <AccordionItem key={index} value={`acc-${index + 1}`}>
            <AccordionTrigger>
              <AccordionHeader>{`Accordion ${index +1}`}</AccordionHeader>
            </AccordionTrigger>

            <AccordionContent>
              {`Content of Accordion ${index + 1}`}
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>

    </main>
  )
}