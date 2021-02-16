<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         \App\Models\Survey::factory(1)->create();
//         \App\Models\Item::factory(1)->create();
//         \App\Models\Question::factory(1)->create();

//        foreach($this->pdsq as $key=>$value) {
//            $item = 0;
//            if($key <= 20) {
//                $item = 1;
//            } else if ($key > 20 && $key <= 35) {
//                $item = 5;
//            } else if ($key > 35 && $key <= 45) {
//                $item = 6;
//            } else if ($key > 45 && $key <= 52) {
//                $item = 7;
//            } else if ($key > 52 && $key <= 60) {
//                $item = 8;
//            } else if ($key > 60 && $key <= 66) {
//                $item = 9;
//            } else if ($key > 66 && $key <= 69) {
//                $item = 10;
//            } else if ($key > 69 && $key <= 76) {
//                $item = 11;
//            } else if ($key > 76 && $key <= 82) {
//                $item = 12;
//            } else if ($key > 82 && $key <= 88) {
//                $item = 13;
//            } else if ($key > 88 && $key <= 98) {
//                $item = 14;
//            } else if ($key > 98 && $key <= 103) {
//                $item = 15;
//            } else if ($key > 103 && $key <= 108) {
//                $item = 16;
//            }
//
//            \App\Models\Question::create([
//                'item_id' => $item,
//                'no' => $key + 1,
//                'name' => $value,
//                'options' => '{}',
//                'isBinary' => 1
//            ]);
//        }

    }

    private $pdsq = [
        "V-aţi simţit trist(ă) sau deprimat(ă)?",
        "V-aţi simţit trist(ă) sau deprimat(ă) în cea mai mare parte a zilei, aproape în fiecare zi?",
        "V-aţi bucurat mai puţin de aproape toate lucrurile care înainte, în mod normal, vă făceau plăcere?",
        "V-aţi pierdut interesul pentru aproape toate activităţile de care, în mod normal, eraţi interesat(ă)?",
        "Aţi avut o poftă de mâncare mult mai scăzută decât de obicei, aproape în fiecare zi?",
        "Aţi avut o poftă de mâncare mult mai crescută decât de obicei, aproape în fiecare zi?",
        "Aţi dormit cu cel puţin una sau două ore mai puţin decât de obicei, aproape în fiecare zi?",
        "Aţi dormit cu cel puţin una sau două ore mai mult decât de obicei, aproape în fiecare zi?",
        "V-aţi simţit foarte agitat(ă), fără astâmpăr şi vi s-a părut dificil să staţi liniştit(ă), într-un loc, aproape în fiecare zi?",
        "V-aţi simţit obosit(ă) aproape în fiecare zi?",
        "V-aţi simţit vinovat(ă) în mod frecvent pentru lucrurile pe care le-aţi făcut?",
        "V-aţi învinovăţit sau aţi avut gânduri negative despre dumneavoastră, aproape în fiecare zi?",
        "V-aţi simţit ca un/o ratat(ă), aproape în fiecare zi?",
        "Aţi avut probleme de concentrare, aproape în fiecare zi?",
        "Luarea unei decizii vi s-a părut mai grea decât de obicei, aproape în fiecare zi?",
        "V-aţi gândit în mod frecvent la ideea de a muri fără să faceţi dumneavoastră ceva, cum ar fi să muriţi în timpul somnului?",
        "V-aţi dorit să fi murit?",
        "V-aţi gândit că v-ar fi mai bine să fi murit?",
        "Aţi avut gânduri de sinucidere, chiar dacă nu aţi face cu adevărat acest lucru?",
        "V-aţi gândit în mod serios să vă luaţi viaţa?",
        "V-aţi gândit la un mod anume în care să vă luaţi viaţa?",
        "Aţi trăit vreodată (ca adult) un eveniment traumatic extrem (atac fizic, hărțuire/bulling, viol, etc.) sau ați trăit (până la vârsta de 18 ani) cel puțin una dintre următoarele experiențe adverse (marcați ce se aplică în cazul dvs): abuz verbal, fizic, sexual, neglijare emoțională, fizică, unul dintre părinți prezenta o problemă psihică, era dependent de alcool sau substanțe, ați pierdut unul dintre părinți (în urma unui deces, divorț sau condamnare la închisoare) ?",
        "Aţi fost vreodată martor (ca adult sau copil) la un eveniment traumatic (violență domestică sau certuri extreme - între părinți/membrii familiei, viol, atac fizic, accident soldat cu deces, etc) sau orice alt eveniment înalt stresant (care simțiți că v-a afectat/rănit, de care poate vă amintiți mai mult sau mai puțin acum)?",
        "V-au venit frecvent în minte gânduri referitoare la un eveniment traumatic?",
        "V-aţi supărat în mod frecvent pentru că v-aţi gândit la un eveniment traumatic?",
        "Aţi fost frecvent deranjat(ă) de prezenţa unor amintiri sau vise legate de un eveniment traumatic?",
        "Amintirile despre un eveniment traumatic v-au produs o suferinţă puternică?",
        "Aţi încercat să blocaţi gândurile sau sentimentele legate de un eveniment traumatic?",
        "Aţi încercat să evitaţi activităţile, locurile sau oamenii care vă aminteau de un eveniment traumatic?",
        "Aţi avut amintiri (flashback-uri) în care să aveţi senzaţia că retrăiţi un eveniment traumatic?",
        "Lucrurile care vă amintesc de un eveniment traumatic v-au făcut să tremuraţi, să transpiraţi sau v-au accelerat ritmul cardiac?",
        "V-aţi simţit distant(ă) sau „rupt(ă)” de ceilalţi oameni din cauză că aţi trăit un eveniment traumatic?",
        "V-aţi simţit „amorţit(ă)” emoţional din cauză că aţi trăit un eveniment traumatic?",
        "Aţi renunţat la planurile dumneavoastră de viitor din cauză că aţi trăit un eveniment traumatic?",
        "Aţi fost excesiv de prudent(ă) din cauză că aţi trăit un eveniment traumatic?",
        "Aţi fost mai irascibil(ă) sau v-aţi speriat mai uşor din cauză că aţi trăit un eveniment traumatic?",
        "S-a întâmplat adesea să mâncaţi compulsiv (să mâncaţi foarte repede, o cantitate foarte mare de alimente, într-un timp foarte scurt)?",
        "Aţi avut adesea senzaţia că nu aveţi control asupra cantităţii de alimente pe care le consumaţi în timpul unui episod de mâncat compulsiv?",
        "Aţi avut episoade de mâncat compulsiv în care aţi mâncat atât de mult încât v-aţi simţit inconfortabil de plin(ă)?",
        "Aţi avut episoade de mâncat compulsiv în care aţi mâncat o cantitate mare de alimente, chiar dacă nu vă era foame?",
        "S-a întâmplat să mâncaţi compulsiv de unul/una singur(ă) deoarece vă era jenă de cât de mult mâncaţi?",
        "S-a întâmplat să mâncaţi compulsiv şi apoi să vă fie silă de dumneavoastră?",
        "V-aţi supărat foarte tare pe dumneavoastră pentru că aţi mâncat compulsiv?",
        "Aţi recurs la diete foarte stricte sau la exerciţii fizice excesive pentru a nu lua în greutate ca urmare a mâncatului compulsiv?",
        "Aţi luat laxative, diuretice sau v-aţi provocat voma pentru a nu lua în greutate ca urmare a mâncatului compulsiv?",
        "Greutatea sau forma corpului dumneavostră au fost unele dintre cele mai importante lucruri care au influenţat felul în care gândiţi despre dumneavoastră?",
        "V-aţi îngrijorat în mod obsesiv în legătură cu mizeria, microbii sau produsele chimice?",
        "V-aţi îngrijorat în mod obsesiv că s-ar putea întâmpla ceva rău, pentru că aţi uitat să faceţi ceva important - cum ar fi să încuiaţi uşa, să opriţi gazul, să scoateţi aparatele electrice din priză?",
        "Au fost lucruri pe care v-aţi simţit constrâns(ă) să le faceţi în mod repetat (pentru cel puţin o jumătate de oră pe zi), fără a vă putea opri atunci când v-aţi propus acest lucru?",
        "Au fost lucruri pe care v-aţi simţit constrâns(ă) să le faceţi în mod repetat, în ciuda faptului că acestea vă împiedicau să finalizaţi alte lucruri pe care le aveaţi de făcut?",
        "Aţi spălat sau aţi curăţat în mod obsesiv şi excesiv lucrurile din jurul dumneavoastră?",
        "Aţi verificat anumite lucruri sau aţi repetat diferite acţiuni la nesfârşit, în mod obsesiv şi excesiv?",
        "Aţi numărat lucruri în mod obsesiv şi excesiv?",
        "V-aţi speriat foarte tare din cauză că inima vă bătea repede?",
        "V-aţi speriat foarte tare din cauză că respiraţi cu dificultate?",
        "V-aţi speriat foarte tare din cauză că v-aţi simţit slăbit(ă) sau pe punctul de a leşina?",
        "Aţi avut stări de teamă intensă sau de disconfort puternic (atacuri de panică), care au apărut pe neaşteptate, fără nici un motiv?",
        "Aţi avut stări de teamă intensă sau de disconfort puternic, în timpul cărora v-aţi gândit că ceva groaznic se poate întâmpla, că aţi putea muri, că aţi putea înnebuni sau că aţi putea pierde controlul?",
        "Aţi avut stări de teamă intensă sau de disconfort puternic, în timpul cărora aţi avut trei sau mai multe din următoarele simptome: bătăi accelerate ale inimii, transpiraţie, tremur, dificultăţi de respiraţie, greaţă, ameţeli sau senzaţia de leşin?",
        "V-aţi îngrijorat foarte mult în legătură cu a avea atacuri de panică neaşteptate?",
        "Aţi avut atacuri de panică din cauza cărora aţi evitat anumite situaţii sau v-aţi modificat comportamentul sau activităţile zilnice?",
        "S-au întâmplat lucruri despre care ştiaţi că sunt adevărate, dar despre care ceilalţi v-au spus că sunt doar în imaginaţia dumneavoastră?",
        "S-a întâmplat să fiţi convins că ceilalţi se uită la dumneavoastră, vorbesc despre dumneavoastră sau vă spionează?",
        "V-aţi gândit că sunteţi în pericol deoarece cineva plănuieşte să vă facă rău?",
        "Aţi considerat că aveţi puteri speciale pe care alţi oameni nu le au?",
        "V-aţi gândit că o forţă exterioară vă controlează corpul sau mintea?",
        "Aţi auzit voci pe care ceilalţi nu le aud sau aţi văzut lucruri pe care ceilalţi nu le văd?",
        "Aţi evitat în mod regulat anumite situaţii deoarece v-a fost teamă că acestea vă vor provoca un atac de panică?",
        "Aţi devenit foarte neliniştit(ă) aproape de fiecare dată când v-aţi aflat într-una din situaţiile de mai sus?",
        "Aţi evitat vreuna din situaţiile de mai sus din cauză că v-au făcut să vă simţiţi neliniştit(ă) sau speriat(ă)?",
        "V-aţi îngrijorat foarte mult că vă veţi face de râs în faţa celorlalţi?",
        "V-aţi îngrijorat foarte mult că s-ar putea să faceţi ceva care i-ar determina pe ceilalţi să vă considere prost/proastă sau ridicol(ă)?",
        "V-aţi simţit foarte agitat(ă) în situaţiile în care era posibil ca oamenii să fie atenţi la dumneavoastră?",
        "V-aţi simţit extrem de agitat(ă) în situaţii sociale?",
        "Aţi evitat cu regularitate anumite situaţii deoarece v-a fost teamă că aţi putea face sau spune ceva prin care să vă faceţi de râs?",
        "Aţi devenit brusc foarte neliniştit(ă) aproape de fiecare dată când v-aţi aflat într-una din situaţiile de mai sus?",
        "Aţi evitat vreuna din situaţiile de mai sus din cauză că v-au făcut să vă simţiţi neliniştit(ă) sau speriat(ă)?",
        "Aţi considerat că aţi consumat prea mult alcool?",
        "Cineva din familia dumneavoastră a considerat sau a susţinut că aţi consumat prea mult alcool sau că aveţi o problemă cu alcoolul?",
        "Prietenii, un medic sau orice altă persoană a considerat sau a susţinut că aţi consumat prea mult alcool?",
        "V-aţi gândit să renunţaţi sau să reduceţi cantitatea de alcool pe care o consumaţi?",
        "V-aţi gândit că aveţi o problemă cu alcoolul?",
        "Consumul de alcool v-a cauzat probleme în căsnicie, la locul de muncă, cu prietenii sau în familie, în îndeplinirea sarcinilor casnice sau în alt domeniu important al vieţii dumneavoastră?",
        "Aţi considerat că aţi luat prea multe medicamente?",
        "Cineva din familia dumneavoastră a considerat sau a susţinut că aţi luat prea multe medicamente sau că aveţi o problemă cu acestea?",
        "Prietenii, un medic, sau oricine altcineva a considerat sau a susţinut că aţi luat prea multe medicamente?",
        "V-aţi gândit să renunţaţi sau să reduceţi consumul de medicamente?",
        "V-aţi gândit că aveţi o problemă cu medicamentele?",
        "Din cauza consumului de medicamente aţi avut probleme în căsnicie, la locul de muncă, cu prietenii sau în familie, în îndeplinirea sarcinilor casnice sau în orice alt segment important al vieţii dumneavoastră?",
        "Aţi fost o persoană agitată în majoritatea zilelor?",
        "V-aţi îngrijorat foarte mult că s-ar putea întâmpla ceva rău cu dumneavoastră sau cuiva apropiat?",
        "V-aţi îngrijorat în legătură cu lucruri despre care ceilalţi v-au spus că nu merită să vă faceţi griji?",
        "V-aţi îngrijorat sau aţi fost neliniştit(ă) în legătură cu mai multe lucruri din viaţa dumneavoastră, în majoritatea zilelor?",
        "V-aţi simţit adesea neliniştit(ă) sau la limită din cauza grijilor pe care vi le-aţi făcut?",
        "Aţi adormit adesea cu greu din cauză că v-aţi îngrijorat pentru tot felul de lucruri?",
        "Aţi simţit adesea tensiune musculară din cauza neliniştii sau a stresului?",
        "Aţi avut adesea probleme de concentrare din cauză că eraţi preocupat(ă) de grijile dumneavoastră?",
        "S-a întâmplat să fiţi adesea certăreţ/certăreaţă sau irascibil(ă) din cauză că eraţi îngrijorat(ă) sau stresat(ă)?",
        "V-a fost greu să vă controlaţi grijile sau să nu vă mai îngrijoraţi deloc, în majoritatea zilelor?",
        "Aţi avut multe probleme cu stomacul sau cu intestinele, cum ar fi greaţă, vomă, gaze în exces, balonare sau diaree?",
        "Aţi avut dureri în mai multe părţi diferite ale corpului?",
        "Vă îmbolnăviţi mai des decât majoritatea oamenilor?",
        "Aţi avut o sănătate fizică precară aproape toată viaţa?",
        "De obicei, medicii nu reuşesc să identifice o cauză fizică pentru simptomele dumneavoastră?",
        "V-aţi făcut adesea griji că s-ar putea să suferiţi de o boală fizică gravă?",
        "V-a fost greu să nu vă mai îngrijoraţi că suferiţi de o boală fizică gravă?",
        "V-a fost greu să nu vă îngrijoraţi în ciuda faptului că medicul v-a spus că nu suferiţi de nicio boală gravă?",
        "V-aţi îngrijorat atât de mult că suferiţi de o boală fizică gravă, încât acest lucru a interferat cu activităţile dumneavoastră zilnice sau v-a cauzat probleme?",
        "Aţi fost la doctor în mod frecvent deoarece eraţi îngrijorat(ă) că suferiţi de o boală fizică gravă?"
    ];
}
