import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Metóda KVET®
          </h1>
          <Card className="p-8 mb-6">
            <p className="text-xl md:text-2xl text-card-foreground leading-relaxed mb-4">
              KVET® je jemná a veľmi účinná transformačná metóda, ktorej autorkou je Eva Ďurišová
            </p>
            <a 
              href="https://kvantovetvorenie.sk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors underline font-medium"
            >
              kvantovetvorenie.sk
            </a>
          </Card>
          <Card className="p-8 bg-card">
            <p className="text-lg text-card-foreground leading-relaxed">
              Ku klientovi pristupujem celostne z pohľadu, že myseľ a telo sú prepojené. Na choroby nazeráme cez psychosomatiku.
            </p>
          </Card>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Touto metódou je možné účinne pomôcť pri problémoch fyzických i psychických ako sú:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Vzťahy</h3>
              <p className="text-muted-foreground">
                Partnerské (rozvod, rozchod, žiarlivosť, nevera, problémy s odpustením), rodinné (s rodičmi, súrodencami..), pracovné, s deťmi, susedské
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Sparkles className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Zdravie</h3>
              <p className="text-muted-foreground">
                Zápaly, choroby, zranenia, bolesti, úzkosti, depresie, smútky, nespavosť, problémy s otehotnením
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Strachy a fóbie</h3>
              <p className="text-muted-foreground">
                Zo smrti, zo šoférovania, z výšok, z tmy, z búrok, z lietania, z krvi, z uzavretých priestorov, zo záväzkov, z vystupovania pred ľuďmi, z pavúkov, hadov, hmyzu, žiab...
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Závislosti</h3>
              <p className="text-muted-foreground">
                Alkohol, cigarety, jedlo (sladkosti, prejedanie, poruchy príjmu potravy)
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Traumy</h3>
              <p className="text-muted-foreground">
                Z detstva, z operácii, z nehôd, z obťažovania, z úmrtí blízkych
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Ostatné</h3>
              <p className="text-muted-foreground">
                Nedostatok financií, prepracovanie, vyhorenie, neschopnosť nájsť si prácu, kliatby, urieknutia
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How Therapy Works */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
            Ako terapia prebieha
          </h2>
          
          <Card className="p-8 mb-6">
            <p className="text-lg text-card-foreground leading-relaxed mb-4">
              Terapia metódou KVET® zahŕňa pomenovanie príčiny problému, zbavenie emočného náboja, energie, ktorá v tele zostala zaseknutá, uviaznutá. Nasleduje hlboké pochopenie a spustenie procesu harmonizácie mysle a transformácie vedomia.
            </p>
            
            <p className="text-lg text-card-foreground leading-relaxed mb-4">
              Terapia prebieha pri plnom vedomí klienta, ten v každej chvíli vie, čo sa s ním deje, vie kto je a kde sa nachádza. Klienta neliečim, klienta sprevádzam. V priebehu terapie má oči zatvorené, pracujem na jeho vedomej i podvedomej úrovni, vediem ho otázkami a on so zatvoreným očami odpovedá. Príčinu problému transformujeme dotykom, ktorý má spirituálny presah. Harmonizuje sa tak nervový systém klienta a výrazne sa mu uľaví.
            </p>

            <p className="text-lg text-card-foreground leading-relaxed mb-4">
              Spúšťačom zdravotného problému či nepríjemnej situácie je veľakrát strach, nespracovaná bolesť z detstva, hlboko potlačená do podvedomia. Logickou metódou uvedené nie je možné spracovať, nakoľko práve logika bráni vyčisteniu tohto programu, lebo jej úlohou je chrániť vás, aby sa daná situáciu v budúcnosti znovu nezopakovala.
            </p>

            <p className="text-lg text-card-foreground leading-relaxed">
              Nepríjemné pocity spojené so zdravotným problémom či situáciou čistím veľmi príjemným, rýchlym a mimoriadne účinným spôsobom, v stave otvoreného srdca, vo vyššom stave vedomia cez vysoké vibrácie napojenia.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Čo klient zažíva</h3>
            <p className="text-lg text-card-foreground leading-relaxed">
              Klient tak porozumie čo sa mu deje a prečo sa mu to deje. Počas terapie klient vníma veľmi príjemné, až blažené pocity, pocity vnútorného pokoja, uvoľnenia, teplo. Prechádza stavom hlbokého pochopenia, kedy vníma súvislosti a vie, prečo sa mu to udialo. Lebo len keď niečo hlboko chápeme, vieme to prijať, odpustiť a zmeniť a to vedie k uzdraveniu choroby či situácie.
            </p>
          </Card>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Pred terapiou</h3>
            <p className="text-card-foreground leading-relaxed">
              Pred terapiou sa neodporúča 24 hodín užívať žiaden alkohol ani omamné látky, nakoľko tým dochádza k zmenám vnímania a môže to ovplyvniť priebeh a celkový efekt terapie. Ak klient užíva akékoľvek lieky, je potrebné aby ma o nich pred terapiou informoval. Lieky, ktoré vám predpísal lekár neodporúčam vysádzať!
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Po terapii</h3>
            <p className="text-card-foreground leading-relaxed">
              Po terapii je dobré mať voľnejší režim, oddychovať, piť veľa vody a vnímať zmeny ktoré sa dejú vo vašom vnútri a vo vašom živote.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Počet a úspešnosť terapií</h3>
            <p className="text-card-foreground leading-relaxed">
              Počet terapií ktoré klient potrebuje je individuálny. Niekomu sa výrazne uľaví už po jednej terapii. Pri hlbokých traumách je niekedy potrebných viac terapií. Terapia nie je vhodná pre každého. Je pre tých, ktorí sú ochotní prevziať zodpovednosť za svoj život. Úspešnosť záleží aj od klienta, jeho vedomie je totiž súčasťou procesu.
            </p>
          </Card>

          <Card className="p-8 bg-destructive/10 border-destructive/20">
            <h3 className="text-2xl font-semibold mb-4 text-destructive">UPOZORNENIE</h3>
            <p className="text-card-foreground leading-relaxed font-semibold">
              Individuálna terapia nenahrádza lekársku starostlivosť! Terapie sa zúčastňujete na vlastnú zodpovednosť.
            </p>
          </Card>
        </div>
      </section>

      {/* Pricing & Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Cena terapie a kontakt
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Cena terapie</h3>
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
              <h3 className="text-2xl font-bold text-primary mb-6">Kontakt</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-card-foreground mb-1">Martina Strožová</p>
                  <p className="text-sm text-muted-foreground">Bajkalská 2337/7, 058 01 Poprad</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:0908306002" className="text-card-foreground hover:text-primary transition-colors">
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
                    <p className="text-sm text-muted-foreground">
                      Miesto pôsobenia: Poprad, Zlaté Klasy (pri Senci)
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-accent/10 border-accent/20">
            <p className="text-center text-card-foreground">
              V prípade záujmu ma kontaktujte mailom alebo telefonicky.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
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

export default Index;
