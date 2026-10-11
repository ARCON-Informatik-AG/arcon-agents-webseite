import { Card, CardContent } from "@/components/ui/card";
import ButtonArrowWhite from "@/components/ui/button-arrow-white";
import { BOOKINGS_URL } from "@/lib/constants";

export default function ContactCtaSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl animate-fade-in-up">
        <Card className="border-0 bg-gradient-to-r from-[#1bcb80] via-[#00b36b] to-[#00a05c] text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Lernen Sie uns kennen
            </h2>
            <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie mehr über Arcon Agents
              erfahren? Wir freuen uns auf den Austausch mit Ihnen.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonArrowWhite
                href={BOOKINGS_URL}
                name="Persönliche Demo anfragen"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
