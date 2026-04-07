import {
  Ban,
  Droplets,
  ExternalLink,
  FileWarning,
  HelpCircle,
  Scale,
  ShieldAlert,
  ThermometerSnowflake,
  Wind,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function AuditCopropriete() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      {/* HEADER CRITIQUE */}
      <header className="bg-slate-900 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <ShieldAlert size={50} className="text-red-500 animate-pulse" />
            <div>
              <h1 className="text-3xl font-black uppercase leading-none">
                Audit de Vigilance
              </h1>
              <p className="text-red-400 font-bold mt-1 uppercase tracking-widest text-sm">
                Sécurité Financière & Technique
              </p>
            </div>
          </div>
          <div className="bg-red-600/20 border-l-4 border-red-600 p-4 rounded">
            <p className="text-lg leading-snug">
              <strong>Note aux copropriétaires :</strong> Ce document recense
              les questions ignorées et contradictions relevées lors de la
              réunion du 02/04/2026. Voter ce projet en l'état revient à
              accepter un <strong>risque de faillite technique</strong> et le
              remboursement potentiel des aides d'État.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-16">
        {/* THÈME 1 */}
        <section>
          <SectionHeader
            theme="THÈME 1"
            title="Sécurité du Dossier MaPrimeRénov'"
          />
          <div className="grid gap-6 md:grid-cols-2 text-sm">
            <div className="bg-slate-50 p-4 rounded border">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <FileWarning size={16} /> Seuil des 35% de gain
              </h3>
              <p>
                L'aide est conditionnée à un gain réel de 35%. L'étude INSEE
                montre que le gain plafonne souvent à 10%. En cas de contrôle
                Anah négatif :{" "}
                <strong>
                  trou financier de plusieurs centaines de milliers d'euros à
                  charge des copropriétaires.
                </strong>
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded border border-amber-200">
              <h3 className="font-bold mb-2 flex items-center gap-2 text-amber-700">
                <HelpCircle size={16} /> Remises "orales"
              </h3>
              <p>
                L'annonce orale de 280 000 € de remise est dangereuse. L'Anah
                exige des devis stables. L'opacité peut{" "}
                <strong>invalider l'intégralité du dossier.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* THÈME 2 */}
        <section>
          <SectionHeader
            theme="THÈME 2"
            title="Garantie de Performance (CPE)"
            status="STATUT : RÉFUSÉ / IGNORÉ"
          />
          <p className="bg-red-50 p-4 rounded italic">
            "S'ils refusent de garantir leurs chiffres (35% à 50% d'économies),
            c'est qu'ils ne croient pas eux-mêmes à la rentabilité du projet
            pour nous."
          </p>
        </section>

        {/* THÈME 3 */}
        <section>
          <SectionHeader
            theme="THÈME 3"
            title="Alerte Technique - Mur Éponge"
            status="ALERTE TECHNIQUE MAJEURE"
          />
          <div className="flex gap-4 items-start">
            <Droplets size={32} className="text-blue-500 shrink-0" />
            <div>
              <p>
                Poser 14 cm d'isolant et un enduit étanche (Minertex) sur un mur
                humide emprisonne l'eau. L'humidité ressortira fatalement à
                l'intérieur des appartements.
              </p>
              <p className="mt-2 font-bold text-red-700 italic text-sm underline">
                L'Anah ne finance pas de travaux créant de l'insalubrité.
              </p>
            </div>
          </div>
        </section>

        {/* THÈME 4 */}
        <section>
          <SectionHeader theme="THÈME 4" title="Ventilation VNA" />
          <div className="flex gap-4 items-start">
            <Wind size={32} className="text-cyan-500 shrink-0" />
            <p>
              Ce n'est pas une VMC. Si la VNA est jugée insuffisante pour
              évacuer l'humidité générée par l'isolation, l'Anah peut refuser le
              paiement final (non-conformité aux normes).
            </p>
          </div>
        </section>

        {/* THÈME 5 */}
        <section>
          <SectionHeader
            theme="THÈME 2"
            title="Flou Budgétaire et Honoraires"
            status="RÉPONSE IGNORÉE"
          />
          <ul className="list-disc ml-5 space-y-3">
            <li>
              <strong>Honoraires Syndic :</strong> 120 000 € (2%) sont-ils
              inclus dans les 5M€ ?
            </li>
            <li>
              <strong>Simulations Non-Contractuelles :</strong> L'ingénieur
              financier admet que les mensualités n'engagent personne.
            </li>
            <li>
              <strong>Pénalités :</strong> Qui paiera si la copropriété (dette
              de 142k€) n'a plus de trésorerie en plein chantier ?
            </li>
            <li>
              <strong>Guerre en Iran :</strong> Risque d'explosion du prix des
              matériaux (Indice BT01).
            </li>
          </ul>
        </section>

        {/* THÈME 6 */}
        <section>
          <SectionHeader theme="THÈME 6" title="Radiateurs et Fenêtres" />
          <div className="bg-slate-900 text-white p-5 rounded">
            <p className="text-lg">
              Budget de 5 millions voté{" "}
              <strong>SANS connaître le prix unitaire</strong> des équipements
              privatifs. Un manque de transparence inadmissible.
            </p>
          </div>
        </section>

        {/* THÈME 7 */}
        <section>
          <SectionHeader theme="THÈME 7" title="Le Cas des Balcons" />
          <div className="space-y-4">
            <p>
              <strong>Étais :</strong> Nous payons déjà 4 150 €/mois. Seront-ils
              déduits du devis ?
            </p>
            <p>
              <strong>Nuisances :</strong> Risque d'occultation totale (vivre
              dans le noir) et absence de gestion des dégradations des baies
              vitrées.
            </p>
          </div>
        </section>

        {/* THÈME 8 */}
        <section>
          <SectionHeader
            theme="THÈME 8"
            title="Travaux privatifs imposés par défaut"
            status="RISQUE JURIDIQUE"
          />
          <p className="bg-amber-50 p-4 border border-amber-200">
            On impose une dépense de <strong>2 498 € à 4 445 € TTC</strong> par
            appartement sur la simple base d'une absence de réponse. Cette
            méthode expose la copropriété à des contestations judiciaires
            massives.
          </p>
        </section>

        {/* THÈME 9 */}
        <section>
          <SectionHeader theme="THÈME 9" title="L'obsolescence forcée" />
          <div className="flex gap-4 items-start">
            <ThermometerSnowflake
              size={32}
              className="text-blue-400 shrink-0"
            />
            <p>
              Le changement technique du régime de température rend vos
              radiateurs actuels "caducs". C'est une{" "}
              <strong>vente forcée déguisée</strong> : changer à vos frais ou ne
              plus avoir de chauffage efficace.
            </p>
          </div>
        </section>

        {/* THÈME 10 */}
        <section>
          <SectionHeader
            theme="THÈME 10"
            title="Incertitude totale sur les aides"
            status="RISQUE FINANCIER"
          />
          <p className="font-bold text-red-600 mb-2 underline">
            Le vote précède l'accord des financeurs.
          </p>
          <p>
            Si l'Anah refuse le dossier après le vote, la copropriété devra
            payer <strong>100% de la facture (5 millions d'euros)</strong> sans
            recours.
          </p>
        </section>

        {/* THÈME 11 */}
        <section>
          <SectionHeader theme="THÈME 11" title="La Remise commerciale" />
          <div className="flex gap-4 items-start">
            <Ban size={32} className="text-red-500 shrink-0" />
            <p>
              Une remise de 280 000 € annoncée pour "faciliter le vote" n'a
              aucune valeur légale sans inscription au contrat définitif.
              Attention à la compensation occulte par l'indice BT01.
            </p>
          </div>
        </section>

        {/* ANNEXE */}
        <hr className="border-slate-300" />
        <section className="bg-slate-50 p-8 rounded-xl border border-slate-200">
          <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
            <Scale className="text-slate-700" /> ANNEXE 1 : ETUDE INSEE
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-slate-700">
            <p className="font-bold italic mb-4">
              "Effets de l'isolation thermique des logements sur la consommation
              réelle d'énergie résidentielle"
            </p>
            <p>
              L'étude évalue une baisse moyenne de 5,4% à 8,9%, loin des
              promesses théoriques. Elle confirme l'existence d'un{" "}
              <strong>"energy performance gap"</strong>. Les simulations
              présentées n'ont aucune base réelle prouvée.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.insee.fr/fr/statistiques/8607754"
                className="text-blue-600 underline flex items-center gap-1 font-bold"
              >
                Lien INSEE <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 bg-red-700 text-white py-12 px-6 text-center">
        <p className="text-xl font-bold mb-2">
          NE PRENEZ PAS DE RISQUE AVEC VOTRE PATRIMOINE
        </p>
        <p className="text-sm font-bold mb-2">
          {`SI VOUS AVEZ DES QUESTIONS SUPPLEMENTAIRES, N'HESTEZ PAS A INTERROGER LE SYNDIC DE COPROPRIÉTE`}
        </p>
        <p className="opacity-80">
          Document édité pour l'information des copropriétaires - Projet 2026
        </p>
      </footer>
    </div>
  );
}
