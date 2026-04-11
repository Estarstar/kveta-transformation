import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import healingStones from "@/assets/healing-stones.jpg";
import martinaPortrait from "@/assets/martina-portrait.jpg";
import martinaCertificate from "@/assets/martina-certificate.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            O mne
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="overflow-hidden">
              <img
                src={healingStones}
                alt="Liečivé kamene v tvare srdca"
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src={martinaPortrait}
                alt="Martina Strožová"
                className="w-full h-64 object-cover"
              />
            </Card>
            <Card className="overflow-hidden">
              <img
                src={martinaCertificate}
                alt="Certifikát metódy KVET"
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>

          <Card className="p-8 bg-card">
            <div className="prose prose-lg max-w-none text-card-foreground">
              <p className="mb-4">
                Pamätám si ako by to bolo včera, keď moja mama využila služby liečiteľa ktorý pracoval s energiou a ja vtedy ešte ako mladé dievča som jej spýtala, že mami ako môžeš veriť na také blbosti?
              </p>
              
              <p className="mb-4">
                Po pár rokoch, keď sa blížil môj rozvod (plnilo sa mi v mnou vyslovené odsúdenie, keď som v minulosti povedala, že nechápem ako sa môžu ľudia rozvádzať keď majú malé deti? Tak mi to život priniesol, aby som pochopila. Chlapci mali vtedy 4 a 7 rokov. Keďže som bola na úplnom dne, rozhodla som sa aj ja vyskúšať pomoc liečiteľa. Vtedy som prvý krát pocítila silu energie. Postupne som v živote ešte prežila pár pádov, keď som natrafila na KVET. Prvý a druhý stupeň (vtedy boli iba 2 stupne) som prvý krát absolvovala pred 10 rokmi. Už vtedy som mala v hlave myšlienku že aj ja by som chcela pomáhať ľuďom.
              </p>
              
              <p className="mb-4">
                Pred pár rokmi, keď som pozorovala absolventov vyšších stupňov, som si hovorila, že aj ja by som chcela absolvovať celú cestu, ale finančne mi to nevychádzalo. Zmenilo sa to minulý rok, keď som zrazu prestala pochybovať a financie prišli. Pochopila som, že všetko k nám chodí v ten správny moment a až vtedy som bola pripravená absolvovať celý kurz. Vďaka kurzu som vystúpila z role obete a pochopila som, že ja sama si vytváram veci ktoré mi do života prichádzajú. Cítim vďačnosť aj za "drobnosti", ktoré som si predtým ani neuvedomovala.
              </p>
              
              <p className="mb-4">
                Zlepšil sa mi vzťah s deťmi, vzťah s ex partnerom, prehĺbil vzťah s partnerom a čo je najdôležitejšie - zmenila som hlavne vzťah k sebe samej. Prijala som svoje telo, svoju ženskosť, začala som piecť, maľovať - robiť veci pre radosť a nie preto že musím.
              </p>
              
              <p className="text-lg font-semibold text-primary">
                Ak by ste mali pocit, že chcete aj vy vo vašom živote niečo zmeniť a volá vás to ku mne, rada sa stanem vaším sprievodcom.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
