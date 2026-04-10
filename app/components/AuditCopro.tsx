import {
  AlertTriangle,
  CreditCard,
  ExternalLink,
  FileWarning,
  Info,
  Scale,
  ShieldAlert,
} from "lucide-react";
import ThemeBlock from "./SectionHeader";
import Link from "next/link";

export default function AuditCopropriete() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-24">
      {/* HEADER OFFICIEL */}
      <header className="bg-slate-900 text-white py-12 px-6 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <ShieldAlert size={64} className="text-red-500 shrink-0" />
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Audit de Vigilance
              </h1>
              <p className="text-xl text-red-500 font-bold mt-2 uppercase tracking-widest">
                Sécurité Financière et Technique - Projet 5 Millions €
              </p>
            </div>
          </div>
          <div className="bg-white/10 border-l-8 border-red-600 p-6 backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed">
              <strong>Note aux copropriétaires :</strong> Ce document recense
              les questions ignorées et contradictions relevées lors de la
              réunion d'information du <strong>02/04/2026</strong> et les
              risques pesant sur nos finances personnelles. Voter ce projet en
              l'état revient à accepter un risque de faillite technique et le
              remboursement potentiel des aides d'État.
            </p>
            <br />
            <p className="text-lg md:text-xl leading-relaxed italic">
              Cette analyse s'appuie exclusivement sur les documents de
              convocation et les guides officiels de l'Anah concernant
              <strong className="mx-1">MaPrimeRénov' Copropriété.</strong> Les
              risques mentionnés (condition des 35%, non-garantie des aides
              avant vote) sont des faits contractuels extraits des rapports de
              l'AMO et du cabinet Doucet.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-16">
        {/* THÈME 1 */}
        <ThemeBlock
          theme="THÈME 1"
          title="Sécurité du Dossier MaPrimeRénov' (Le risque d'annulation)"
        >
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400">
              <h3 className="font-extrabold text-lg flex items-center gap-2 mb-2">
                <FileWarning size={20} className="text-red-600" /> Le seuil
                critique des 35 % de gain énergétique
              </h3>
              <p>
                <strong>Le problème :</strong> L'aide MaPrimeRénov' est
                conditionnée à un gain réel de 35 %. L'étude INSEE 2023 montre
                que dans la réalité, ce gain plafonne souvent à moins de 10
                %.{" "}
              </p>
              <p>
                <strong>Le risque :</strong> Si l'Anah effectue un contrôle
                après travaux et constate que les performances ne sont pas là (à
                cause de briques humides ou de ponts thermiques mal gérés),
                l'aide peut être annulée ou réclamée.
              </p>
              <p className="text-red-700 font-bold underline italic">
                Conséquence : Un trou de plusieurs centaines de milliers d'euros
                à combler par les copropriétaires.
              </p>
              <Link
                href="/#annexe1"
                className="flex items-center gap-2 w-50 my-2 bg-slate-900 text-white px-6 py-3 rounded hover:bg-slate-700 transition-all font-bold"
              >
                LIEN ANNEXE
              </Link>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400">
              <h3 className="font-extrabold text-lg flex items-center gap-2 mb-2">
                <Info size={20} className="text-blue-600" /> Les remises
                "orales" de dernière minute
              </h3>
              <p>
                <strong>Le constat :</strong> Une remise de 280 000 € a été
                annoncée oralement en séance pour les échafaudages.
              </p>
              <p>
                <strong>Le danger :</strong> L'Anah exige des devis stables et
                certifiés par l'AMO (Assistant à Maîtrise d'Ouvrage). Toute
                opacité ou modification non-contractuelle peut invalider
                l'intégralité du dossier de subvention.
              </p>
            </div>
          </div>
        </ThemeBlock>
        {/* THÈME 2 - TEXTE INTÉGRAL */}
        <ThemeBlock
          theme="THÈME 2"
          title="Garantie de Performance (CPE)"
          status="RÉFUSÉ / IGNORÉ"
        >
          <div className="bg-red-50 p-8 border border-red-200 rounded-xl">
            <h3 className="text-xl font-bold mb-4">
              Théorie vs Facture Réelle
            </h3>
            <p className="text-lg mb-4 italic">
              <strong>Question :</strong> Puisque vous annoncez 35 % à 50 %
              d'économies, acceptez-vous d'inclure une Clause de Garantie de
              Performance Énergétique (CPE) au contrat ?
            </p>
            <div className="flex gap-4 items-start bg-white p-4 rounded shadow-sm">
              <div className="bg-red-600 text-white font-black px-4 py-2 rounded">
                ANALYSE
              </div>
              <p className="font-bold text-red-700 leading-snug">
                S'ils refusent de garantir leurs chiffres, c'est qu'ils ne
                croient pas eux-mêmes à la rentabilité du projet pour nous
                <Link className="ml-2 underline" href="/#annexe1">
                  (Annexe)
                </Link>
              </p>
            </div>
          </div>
        </ThemeBlock>
        {/* THÈME 3 */}
        <ThemeBlock
          theme="THÈME 3"
          title="Obligation de résidence et Remboursement des aides"
          status="PIÈGE À LA REVENTE"
        >
          <div className="bg-amber-50 p-6 border-l-4 border-amber-600 rounded-r-xl shadow-sm text-slate-900">
            <h3 className="text-xl font-extrabold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-amber-600" /> Clause d'occupation
              des 3 ans / 6 ans
            </h3>
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                <strong>Le constat :</strong> Les aides individuelles (1 500 €
                ou 3 000 € selon ressources) est soumises à une condition de
                durée d'occupation.
              </p>
              <div className="bg-white p-4 border border-amber-200 rounded">
                <p className="font-bold text-red-700 underline mb-2">
                  La règle de l'Anah :
                </p>
                <p>
                  Pour conserver le bénéfice des subventions, le logement doit
                  être occupé à titre de <strong>résidence principale</strong>{" "}
                  pendant une durée minimale (généralement fixée à{" "}
                  <strong>3 ans</strong> après le versement de la prime pour
                  MaPrimeRénov', mais pouvant s'étendre à <strong>6 ans</strong>{" "}
                  pour certains dispositifs locaux ou spécifiques).
                </p>
              </div>
              <p>
                <strong>Le risque financier :</strong> Si vous vendez votre
                appartement avant ce délai, ou si vous le mettez en location
                alors que vous aviez déclaré l'occuper, l'Anah est en droit
                d'exiger le <strong>remboursement au prorata</strong> des sommes
                perçues.
              </p>
              <p className="font-bold italic bg-slate-100 p-3 rounded">
                "En clair : ce projet vous 'enchaîne' à votre appartement. En
                cas de mutation professionnelle, de divorce ou d'imprévu
                nécessitant une vente rapide dans les années suivant le
                chantier, vous devrez rendre une partie de vos aides, amputant
                d'autant votre prix de vente."
              </p>
            </div>
          </div>
        </ThemeBlock>
        <ThemeBlock
          theme="THÈME 4"
          title="Alerte Technique - Le Danger du « Mur Éponge »"
          status="ALERTE TECHNIQUE MAJEURE"
        >
          <div className="grid gap-4">
            <p>
              <strong>Séchage des briques et moisissures :</strong> Des
              résidents signalent des murs intérieurs déjà "liquides et
              humides". L'entreprise avoue n'avoir "pas de solution miracle"
              pour sécher les murs avant de poser l'isolant.
            </p>
            <p>
              <strong>Le danger :</strong> Poser 14 cm d'isolant et un enduit
              étanche (Minertex) sur un mur humide emprisonne l'eau. L'humidité
              ressortira fatalement à l'intérieur des appartements.
            </p>
            <p className="bg-amber-100 p-4 border-l-4 border-amber-600 text-amber-900 font-bold">
              L'impayé Anah : L'Anah ne finance pas de travaux créant de
              l'insalubrité. Si le chantier dégrade l'état du bâti (moisissures
              accrues), le versement des aides est en péril.
            </p>
          </div>
        </ThemeBlock>
        {/* THÈME 4 */}
        <ThemeBlock
          theme="THÈME 5"
          title="Ventilation VNA (Ventilation Naturelle Assistée)"
        >
          <div className="space-y-4">
            <p>
              <strong>Conformité et efficacité :</strong> Ce n'est pas une VMC.
              Le moteur ne se déclenche que si la pression naturelle est trop
              basse.
            </p>
            <p>
              <strong>Le risque :</strong> Sur de vieux conduits, l'aspiration
              peut être inégale ou bruyante.
            </p>
            <p>
              <strong>L'enjeu MaPrimeRénov' :</strong> L'aide est liée à une
              ventilation aux normes. Si la VNA est jugée insuffisante pour
              évacuer l'humidité générée par l'isolation, l'Anah peut refuser le
              paiement final.
            </p>
          </div>
        </ThemeBlock>
        {/* THÈME 5 */}
        <ThemeBlock
          theme="THÈME 6"
          title="Flou Budgétaire et Honoraires"
          status="RÉPONSE IGNORÉE"
        >
          <ul className="space-y-6">
            <li className="border-b pb-4">
              <span className="block font-bold text-lg mb-1">
                Honoraires du Syndic (Point 15)
              </span>
              <strong>Question :</strong> Les 120 000 € d'honoraires (2 %)
              sont-ils inclus dans les 5 millions ?
            </li>
            <li className="border-b pb-4">
              <span className="block font-bold text-lg mb-1">
                Simulations "Non-Contractuelles"
              </span>
              <strong>Le constat :</strong> L'ingénieur financier admet que les
              mensualités présentées n'engagent personne.
              <br />
              <strong>Le risque :</strong> Avec une dette de 142 000 € déjà
              existante et un fonds ALUR vide, qui paiera les pénalités si la
              copropriété n'a plus de trésorerie en plein chantier ?
            </li>
            <li className="bg-red-50 p-4 rounded text-red-900 font-bold italic border border-red-200">
              "Le cabinet Doucet a lui aussi avoué ne pas se prononcer sur
              l’éventuelle explosion du prix des matériaux au vu de la situation
              mondiale actuelle (Guerre en Iran)"
            </li>
          </ul>
        </ThemeBlock>
        {/* THÈME 6 */}
        <ThemeBlock
          theme="THÈME 7"
          title="Radiateurs et Fenêtres (Travaux Privatifs Imposés)"
        >
          <div className="space-y-4">
            <p>
              <strong>Absence de prix unitaire :</strong> Le remplacement des
              radiateurs est imposé par défaut. Le prix unitaire est inconnu
              ("On ne l'a pas ici").
            </p>
            <p className="bg-slate-900 text-white p-6 rounded-lg text-lg font-bold italic">
              "Comment voter un budget de 5 millions sans connaître le coût des
              équipements que l'on installe dans votre propre salon ? C'est un
              manque de transparence inadmissible."
            </p>
          </div>
        </ThemeBlock>
        {/* THÈME 7 */}
        <ThemeBlock theme="THÈME 8" title="Le Cas des Balcons">
          <div className="space-y-4">
            <p>
              <strong>Doublons de facturation et Nuisances :</strong> Nous
              payons déjà 4 150 €/mois d'étais. Seront-ils déduits du devis
              final ?
            </p>
            <p>
              <strong>Protections baies vitrées (Point 6) :</strong> Si des
              panneaux bois sont utilisés (occultation totale), nous vivrons
              dans le noir pendant toute la durée du chantier ? Qui gère les
              dégradations ?
            </p>
          </div>
        </ThemeBlock>
        {/* THÈME 8 */}
        <ThemeBlock
          theme="THÈME 9"
          title="Travaux privatifs imposés par défaut (Radiateurs)"
        >
          <div className="space-y-4">
            <p>
              <strong>Le constat :</strong> Le tableau de recensement indique en
              page 1 : « Les lots n'ayant pas répondu au questionnaire et
              n'ayant pas été visités sont considérés par défaut comme à
              remplacer ».
            </p>
            <p className="text-red-700 font-black text-xl">L'ALERTE :</p>
            <p>
              On impose une dépense allant de{" "}
              <strong>2 498 € à 4 445 € TTC par appartement</strong> sur la
              simple base d'une absence de réponse ou d'une visite ratée.
            </p>
            <p className="p-4 bg-slate-100 border-l-4 border-slate-800 italic">
              <strong>Le risque juridique :</strong> Peut-on valider un budget
              de plusieurs millions en incluant des travaux privatifs chiffrés
              sur des suppositions et non sur un accord écrit de chaque
              propriétaire ? C'est une méthode qui expose la copropriété à des
              contestations judiciaires.
            </p>
          </div>
        </ThemeBlock>
        {/* THÈME 9 */}
        <ThemeBlock
          theme="THÈME 10"
          title="L'obsolescence forcée de vos équipements actuels"
        >
          <div className="space-y-4">
            <p>
              <strong>Le constat :</strong> La présentation Doucet Architectes
              (p. 43) affirme que les radiateurs d'origine à ailettes sont «
              caducs » car incompatibles avec le nouveau régime de température
              prévu.
            </p>
            <p>
              <strong>L'alerte :</strong> Le projet technique modifie le
              fonctionnement du chauffage central. Si vous refusez de payer pour
              les nouveaux radiateurs (FINIMETAL Chorus), vous risquez de ne
              plus pouvoir chauffer votre logement car vos anciens radiateurs ne
              seront plus adaptés à la chaleur diffusée.
            </p>
          </div>
        </ThemeBlock>
        {/* THÈME 10 */}
        <ThemeBlock
          theme="THÈME 11"
          title="L'incertitude totale sur le versement des aides"
        >
          <div className="space-y-4">
            <p>
              <strong>Le constat :</strong> Le document Energie Pulse (p. 13 et
              15) précise : « Les financements présentés [...] ne seront
              définitifs qu'après l'accord des financeurs, qui ne peut être
              obtenu qu'après le vote des travaux ».
            </p>
            <p>
              <strong>L'alerte :</strong> On demande aux copropriétaires de
              voter et de s'engager juridiquement sur 5 millions d'euros de
              travaux alors que les subventions (MaPrimeRénov') ne sont
              absolument pas garanties à ce stade.
            </p>
            <p className="bg-amber-100 p-4 border border-amber-300 font-bold text-red-800">
              Risque financier : Si l'Anah refuse le dossier après le vote, la
              copropriété devra payer 100 % de la facture. Les simulations de
              mensualités "rassurantes" n'ont aucune valeur contractuelle.
            </p>
          </div>
        </ThemeBlock>
        {/* THÈME 11 */}
        <ThemeBlock
          theme="THÈME 12"
          title="La « Remise » commerciale non documentée"
        >
          <div className="space-y-4">
            <p>
              <strong>Le constat :</strong> Une remise de 280 000 € a été
              annoncée oralement, mais elle est absente des documents de
              synthèse d'Energie Pulse rédigés en janvier 2025.
            </p>
            <p>
              <strong>L'alerte :</strong> Une remise annoncée en réunion pour
              "faciliter le vote" n'a aucune valeur si elle n'est pas inscrite
              dans le contrat définitif de l'entreprise.
            </p>
            <p>
              <strong>Le point de vigilance :</strong> Pourquoi cette remise
              apparaît-elle soudainement ? Est-elle compensée par l'augmentation
              des prix des matériaux (indice BT01) qui, lui, sera appliqué
              durant les 24 mois de chantier ?
            </p>
          </div>
        </ThemeBlock>
        <ThemeBlock
          theme="THÈME 13"
          title="Risque financier individuel et défaut de crédit"
          status="DANGER FINANCIER"
        >
          <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg border-l-8 border-red-600">
            <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2">
              <CreditCard className="text-red-500" /> Risque financier si un
              copropriétaire ne peut pas souscrire de crédit / que se passe t il
              ?
            </h3>
            <div className="space-y-6 text-slate-200">
              <p>
                <strong>La réalité juridique :</strong> En cas de vote positif,
                le budget de 5 millions devient une créance de la copropriété.
                Si un résident se voit refuser son prêt bancaire ou ne peut pas
                assumer les mensualités réelles (qui ne sont pas contractuelles)
                :
              </p>
              <ul className="list-disc ml-6 space-y-4">
                <li>
                  <span className="text-red-400 font-bold">
                    Appels de fonds immédiats :
                  </span>{" "}
                  Le copropriétaire doit régler sa quote-part intégralement
                  selon l'échéancier des travaux, indépendamment de sa capacité
                  de financement.
                </li>
                <li>
                  <span className="text-red-400 font-bold">
                    Procédure de recouvrement :
                  </span>{" "}
                  Le syndic est dans l'obligation de lancer des poursuites
                  (mises en demeure, hypothèque légale) pour ne pas bloquer le
                  chantier.
                </li>
                <li>
                  <span className="text-red-400 font-bold">
                    Risque de saisie :
                  </span>{" "}
                  À terme, l'impossibilité de payer ces travaux imposés peut
                  mener à la saisie et la vente judiciaire du lot pour couvrir
                  la dette.
                </li>
              </ul>
              <p className="mt-4 p-4 bg-red-600/20 border border-red-600 rounded italic text-sm">
                Aucune garantie n'a été apportée sur l'accompagnement des foyers
                modestes ou des refus de prêt lors de la présentation.
              </p>
            </div>
          </div>
        </ThemeBlock>

        {/* ANNEXE */}
        <div id="annexe1" className="mt-20 pt-10 border-t-4 border-slate-900">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <Scale className="text-slate-700" /> ANNEXE 1 : ÉTUDE INSEE
          </h2>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <p className="font-bold italic mb-6 text-lg">
              "Effets de l'isolation thermique des logements sur la consommation
              réelle d'énergie résidentielle"
            </p>
            <div className="prose prose-slate max-w-none text-slate-700">
              <p>
                En France, le secteur résidentiel représente un quart de la
                consommation finale d’énergie. La rénovation énergétique des
                logements constitue donc un enjeu majeur des politiques de
                sobriété énergétique. Pourtant, les économies d’énergie réelles
                permises par les travaux de rénovation énergétique restent peu
                documentées.
              </p>
              <p>
                Cette étude évalue l’impact des travaux d’isolation thermique
                réalisés dans les maisons individuelles sur la consommation
                réelle d’électricité et de gaz, à partir de données issues de
                compteurs communicants (Linky, Gazpar).
              </p>
              <p className="bg-white p-4 font-bold border-l-4 border-red-600 my-4 shadow-sm">
                En exploitant une variation temporelle de la consommation
                trimestrielle avant et après travaux, nous estimons une baisse
                moyenne de 5,4% de la consommation globale d’électricité pour
                les logements chauffés à l’électricité et de 8,9% pour le gaz
                pour les logements chauffés au gaz.
              </p>
              <p>
                Ces effets sont hétérogènes : les logements ayant une
                consommation énergétique élevée avant travaux présentent des
                économies d’énergie plus élevées, jusqu’à 16,6% pour le gaz.{" "}
                <strong>
                  Toutefois, ces économies demeurent inférieures aux gains
                  estimés par les modèles théoriques, confirmant l’existence
                  d’un energy performance gap.
                </strong>
              </p>
              <p className="mt-6 italic font-semibold">
                Nos résultats soulignent l’importance de prendre en compte
                l’hétérogénéité des comportements et des situations pour mieux
                cibler les politiques publiques de rénovation.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.insee.fr/fr/statistiques/8607754"
                target="_blank"
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded hover:bg-slate-700 transition-all font-bold"
              >
                LIEN DIRECT INSEE <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
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
        <p className="mt-8 text-xs italic">
          *Ce site est une analyse indépendante réalisée par un copropriétaire à
          partir des pièces de la convocation
        </p>
      </footer>
    </div>
  );
}
