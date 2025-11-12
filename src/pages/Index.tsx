import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, AlertCircle, Users, Brain, Cigarette } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-8">
            Metóda KVET®
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
            Jemná a veľmi účinná transformačná metóda
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Autorka: Eva Ďurišová
          </p>
          <a 
            href="https://kvantovetvorenie.sk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-primary hover:text-accent transition-colors underline text-lg font-medium"
          >
            kvantovetvorenie.sk
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-10 text-center">
            <p className="text-xl text-card-foreground leading-relaxed">
              Ku klientovi pristupujem celostne z pohľadu, že <strong className="text-primary">myseľ a telo sú prepojené</strong>. 
              Na choroby nazeráme cez psychosomatiku.
            </p>
          </Card>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Pri čom môžem pomôcť
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Vzťahy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Partnerské, rodinné, pracovné, s deťmi
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <Sparkles className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Zdravie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Zápaly, bolesti, úzkosti, depresie, nespavosť
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <AlertCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Strachy a fóbie</h3>
              <p className="text-muted-foreground leading-relaxed">
                Zo smrti, z výšok, zo šoférovania, z lietania
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <Cigarette className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Závislosti</h3>
              <p className="text-muted-foreground leading-relaxed">
                Alkohol, cigarety, jedlo, poruchy príjmu potravy
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <Brain className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Traumy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Z detstva, z operácií, z nehôd, z obťažovania
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Ostatné</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vyhorenie, nedostatok financií, kliatby
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
            Ako terapia funguje
          </h2>
          
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Pomenovanie príčiny</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                Terapia metódou KVET® zahŕňa pomenovanie príčiny problému, zbavenie emočného náboja a energie, ktorá v tele zostala zaseknutá.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Transformácia</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                Príčinu problému transformujeme dotykom, ktorý má spirituálny presah. Harmonizuje sa nervový systém klienta a výrazne sa mu uľaví.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Hlboké pochopenie</h3>
              <p className="text-lg text-card-foreground leading-relaxed">
                Klient prechádza stavom hlbokého pochopenia a vníma súvislosti. Len keď niečo hlboko chápeme, vieme to prijať, odpustiť a zmeniť.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Pripravení začať svoju cestu?
            </h2>
            <p className="text-xl text-card-foreground mb-8 leading-relaxed">
              Terapia prebieha pri plnom vedomí. Klienta sprevádzam na jeho ceste k uzdraveniu.
            </p>
            <Link to="/kontakt">
              <Button size="lg" className="text-lg px-8 py-6">
                Kontaktujte ma
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-secondary/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-6 bg-card/50">
            <p className="text-center text-card-foreground text-sm leading-relaxed">
              <strong className="text-primary">Etický princíp:</strong> Všetky informácie ktoré sa počas terapie od klienta dozvedám zostávajú dôverné.
            </p>
          </Card>
        </div>
      </footer>
    </div>
  );
};

export default Index;
