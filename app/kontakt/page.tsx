import Header from "@/components/header";
import Footer from "@/components/footer";
import { MessageCircle, Mail, Phone, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonArrow from "@/components/ui/button-arrow";

const supportOptions = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Kontakt",
    description: "Partnerschaften, Verkauf und allgemeine Geschäftsanfragen",
    availability: "Antwort innerhalb 48h",
    action: "Kontakt aufnehmen",
    href: "mailto:servicedesk@arcon.ch?subject=Allgemeine Anfrage",
    color: "bg-[#1bcb80]/10 text-[#005f41]",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "E-Mail Support",
    description: "Detaillierte Anfragen und technische Probleme",
    availability: "Antwort innerhalb 24h",
    action: "Support Anfrage",
    href: "mailto:servicedesk@arcon.ch?subject=Supportanfrage",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Telefon Support",
    description: "Persönliche Beratung für komplexe Anfragen",
    availability: "8:00-12:00 und 13:30-17:30",
    action: "Telefonische Anfrage",
    href: "tel:+41417491000",
    color: "bg-purple-500/10 text-purple-600",
  },
];

export default function KontaktPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative px-4 pb-20 pt-48 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Wir sind für Sie da
            </h1>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-800 text-xl">
              Unser Team hilft Ihnen gerne bei allen Fragen rund um Arcon Agents.
              Finden Sie schnell die Hilfe, die Sie benötigen.
            </p>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {supportOptions.map((option) => (
              <Card
                key={option.title}
                className="border-1 bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-lg"
              >
                <CardHeader>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${option.color}`}>
                    {option.icon}
                  </div>
                  <CardTitle className="mt-4 text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-base text-gray-800">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="mb-6 flex items-center gap-2 text-base text-gray-800">
                    <Clock className="h-4 w-4" />
                    {option.availability}
                  </p>
                  <ButtonArrow
                    href={option.href}
                    name={option.action}
                    variant="dark"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
