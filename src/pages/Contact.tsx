import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Kontakt
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">Cena terapie</h2>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-3">120€</div>
                <p className="text-lg text-muted-foreground">Trvanie: 1,5 až 2 hodiny</p>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-card-foreground leading-relaxed text-center">
                  Terapia obsahuje úvodný rozhovor, samotnú terapiu a integráciu po terapii.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">Kontaktné údaje</h2>
              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-card-foreground text-lg mb-1">Martina Strožová</p>
                  <p className="text-muted-foreground">Bajkalská 2337/7, 058 01 Poprad</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:0908306002" className="text-card-foreground hover:text-primary transition-colors text-lg">
                    0908 306002
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:mata.st@centrum.sk" className="text-card-foreground hover:text-primary transition-colors break-all">
                    mata.st@centrum.sk
                  </a>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-card-foreground mb-1">Miesto pôsobenia:</p>
                      <p className="text-muted-foreground">Poprad, Zlaté Klasy (pri Senci)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-accent/10 border-accent/20 mb-8">
            <p className="text-center text-card-foreground font-medium">
              V prípade záujmu ma kontaktujte mailom alebo telefonicky.
            </p>
          </Card>

          <Card className="p-8 bg-card">
            <h2 className="text-2xl font-bold text-primary mb-6">Dôležité informácie</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Pred terapiou</h3>
                <p className="text-card-foreground leading-relaxed">
                  Pred terapiou sa neodporúča 24 hodín užívať žiaden alkohol ani omamné látky, nakoľko tým dochádza k zmenám vnímania a môže to ovplyvniť priebeh a celkový efekt terapie. Ak klient užíva akékoľvek lieky, je potrebné aby ma o nich pred terapiou informoval. Lieky, ktoré vám predpísal lekár neodporúčam vysádzať!
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Po terapii</h3>
                <p className="text-card-foreground leading-relaxed">
                  Po terapii je dobré mať voľnejší režim, oddychovať, piť veľa vody a vnímať zmeny ktoré sa dejú vo vašom vnútri a vo vašom živote.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Počet a úspešnosť terapií</h3>
                <p className="text-card-foreground leading-relaxed">
                  Počet terapií ktoré klient potrebuje je individuálny. Niekomu sa výrazne uľaví už po jednej terapii. Pri hlbokých traumách je niekedy potrebných viac terapií. Terapia nie je vhodná pre každého. Je pre tých, ktorí sú ochotní prevziať zodpovednosť za svoj život. Úspešnosť záleží aj od klienta, jeho vedomie je totiž súčasťou procesu.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-destructive/10 border-destructive/20 mt-8">
            <h3 className="text-xl font-semibold text-destructive mb-3 text-center">UPOZORNENIE</h3>
            <p className="text-card-foreground text-center leading-relaxed font-medium">
              Individuálna terapia nenahrádza lekársku starostlivosť! Terapie sa zúčastňujete na vlastnú zodpovednosť.
            </p>
          </Card>
        </div>
      </main>

      <footer className="py-8 px-4 bg-secondary/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 bg-card/50">
            <p className="text-center text-card-foreground text-sm leading-relaxed">
              <strong className="text-primary">Etický princíp:</strong> Všetky informácie ktoré sa počas terapie od klienta dozvedám zostávajú dôverné. Zaručujem, že všetko zostáva medzi mnou a klientom.
            </p>
          </Card>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
