"use strict"

// on va se baser sur 3 secondes (12)

/**************************************** */
/***************Variables**************** */
/**************************************** */


let buttonValider, counterShow, randomSpawnShow, inputMapLeg, spawn, spawnOn, imageSpawn, pick, randomLegend, imageLegend;



/**************************************** */
/*************** LEGENDS **************** */
/**************************************** */
const legends = [
    {nom : "Bloudhound", imgLeg : "legends/bloodhound.png"},
    {nom : "Gibby", imgLeg : "legends/gibraltar.png"},
    {nom : "Lifeline", imgLeg : "legends/lifeline.png"},
    {nom : "Pathfinder", imgLeg : "legends/pathfinder.png"},
    {nom : "Wraith", imgLeg : "legends/wraith.png"},
    {nom : "Bangalore", imgLeg : "legends/bangalore.png"},
    {nom : "Caustic", imgLeg : "legends/caustic.png"},
    {nom : "Mirage", imgLeg : "legends/mirage.png"},
    {nom : "Octane", imgLeg : "legends/octane.png"},
    {nom : "Wattson", imgLeg : "legends/wattson.png"},
    {nom : "Crypto", imgLeg : "legends/crypto.png"},
    {nom : "Revenant", imgLeg : "legends/revenant.png"},
    {nom : "Loba", imgLeg : "legends/loba.png"},
    {nom : "Rampart", imgLeg : "legends/rampart.png"},
    {nom : "Horizon", imgLeg : "legends/horizon.png"},
    {nom : "Fuse", imgLeg : "legends/fuse.png"},
    {nom : "Valk", imgLeg : "legends/valkyrie.png"},
    {nom : "Seer", imgLeg : "legends/seer.png"},
    {nom : "Ash", imgLeg : "legends/ash.png"},
    {nom : "Maggie", imgLeg : "legends/maggie.png"},
    {nom : "Newcastle", imgLeg : "legends/newcastle.png"}
]


/********************************************* */
/*************** KING'S CANYON *************** */
/********************************************* */

const kc0 = [
    {nom : "Lacs toxiques / Slum lakes", imgSpwn : "kc/al-slum-lakes-1212x682.png"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Relais / Relay", imgSpwn : "kc/relay.jpg"},
    {nom : "Zone humide / Wetlands", imgSpwn : "kc/Wetlands.jpg"},
    {nom : "Cascades", imgSpwn : "kc/cascades_kc.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Pont (??) / Bridges", imgSpwn : "kc/bridges.jpg"},
    {nom : "Ville cimetière / Skull Town", imgSpwn : "kc/Skulltown.png"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Centre de traitement des eaux / Water treatment", imgSpwn : "kc/Water_Treatment_Location.jpg"},
    {nom : "Dome du tonnerre / Thunderdome", imgSpwn : "kc/thunderdome.jpg"}
]


/*

const kc2_1 = [
    {nom : "Lacs toxiques / Slum lakes", imgSpwn : "kc/al-slum-lakes-1212x682.png"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Relais / Relay", imgSpwn : "kc/relay.jpg"},
    {nom : "Zone humide / Wetlands", imgSpwn : "kc/Wetlands.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Cage", imgSpwn : "kc/the-cage.jpg"},
    {nom : "Ville cimetière / Skull Town", imgSpwn : "kc/Skulltown.png"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Centre de traitement des eaux / Water treatment", imgSpwn : "kc/Water_Treatment_Location.jpg"},
    {nom : "Dome du tonnerre / Thunderdome", imgSpwn : "kc/thunderdome.jpg"},
    {nom : "Repaire / Gauntlet", imgSpwn : "kc/gauntlet.jpg"},
    {nom : "Confinement / Containement", imgSpwn : "kc/containment.jpg"}
]
const kc2_2 = [
    {nom : "Lacs toxiques / Slum lakes", imgSpwn : "kc/al-slum-lakes-1212x682.png"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Relais / Relay", imgSpwn : "kc/relay.jpg"},
    {nom : "Zone humide / Wetlands", imgSpwn : "kc/Wetlands.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Cage", imgSpwn : "kc/the-cage.jpg"},
    {nom : "Ville cimetière / Skull Town", imgSpwn : "kc/Skulltown.png"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Centre de traitement des eaux / Water treatment", imgSpwn : "kc/Water_Treatment_Location.jpg"},
    {nom : "Dome du tonnerre / Thunderdome", imgSpwn : "kc/thunderdome.jpg"},
    {nom : "Repaire / Gauntlet", imgSpwn : "kc/gauntlet.jpg"},
    {nom : "Confinement / Containement", imgSpwn : "kc/containment.jpg"},
    {nom : "Labo / Labs", imgSpwn : "kc/labs.jpg"}
]
const kc5_1 = [
    {nom : "Lacs toxiques / Slum lakes", imgSpwn : "kc/al-slum-lakes-1212x682.png"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Cage", imgSpwn : "kc/the-cage.jpg"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Centre de traitement des eaux / Water treatment", imgSpwn : "kc/Water_Treatment_Location.jpg"},
    {nom : "Repaire / Gauntlet", imgSpwn : "kc/gauntlet.jpg"},
    {nom : "Confinement / Containement", imgSpwn : "kc/containment.jpg"},
    {nom : "Labo / Labs", imgSpwn : "kc/labs.jpg"},
    {nom : "Charnière / Salvage", imgSpwn : "kc/salvage.jpg"},
    {nom : "Condensateur / Capacitor", imgSpwn : "kc/capacitor-apex-legends.jpg"},
    {nom : "Plateforme / Rig", imgSpwn : "kc/rig.jpg"}
]
const kc5_2 = [
    {nom : "Lacs toxiques / Slum lakes", imgSpwn : "kc/al-slum-lakes-1212x682.png"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Cage", imgSpwn : "kc/the-cage.jpg"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Centre de traitement des eaux / Water treatment", imgSpwn : "kc/Water_Treatment_Location.jpg"},
    {nom : "Repaire / Gauntlet", imgSpwn : "kc/gauntlet.jpg"},
    {nom : "Confinement / Containement", imgSpwn : "kc/containment.jpg"},
    {nom : "Labo / Labs", imgSpwn : "kc/labs.jpg"},
    {nom : "Charnière / Salvage", imgSpwn : "kc/salvage.jpg"},
    {nom : "Condensateur / Capacitor", imgSpwn : "kc/capacitor-apex-legends.jpg"},
    {nom : "Plateforme / Rig", imgSpwn : "kc/rig.jpg"},
    {nom : "Salle des cartes / Crypto’s Map Room", imgSpwn : "kc/map-room.png"}
]
const kc8_1 = [
    {nom : "Lacs bigarrés / Spotted lakes", imgSpwn : "kc/spotted lakes.jpg"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Cage", imgSpwn : "kc/the-cage.jpg"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Centre de traitement des eaux / Water treatment", imgSpwn : "kc/Water_Treatment_Location.jpg"},
    {nom : "Repaire / Gauntlet", imgSpwn : "kc/gauntlet.jpg"},
    {nom : "Confinement / Containement", imgSpwn : "kc/containment.jpg"},
    {nom : "Labo / Labs", imgSpwn : "kc/labs.jpg"},
    {nom : "Charnière / Salvage", imgSpwn : "kc/salvage.jpg"},
    {nom : "Condensateur / Capacitor", imgSpwn : "kc/capacitor-apex-legends.jpg"},
    {nom : "Plateforme / Rig", imgSpwn : "kc/rig.jpg"},
    {nom : "Salle des cartes / Crypto’s Map Room", imgSpwn : "kc/map-room.png"},
    {nom : "Site du crash / Site crash", imgSpwn : "kc/site crash.jpg"},
    {nom : "Voyage de Mirage / Voyage Mirage", imgSpwn : "kc/voyage mirage- kc.jpg"}
]
const kc8_2 = [
    {nom : "Lacs bigarrés / Spotted lakes", imgSpwn : "kc/spotted lakes.jpg"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Cage", imgSpwn : "kc/the-cage.jpg"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Traitement de Caustic / Caustic Treatment", imgSpwn : "kc/Caustic-Treatment.jpg"},
    {nom : "Repaire / Gauntlet", imgSpwn : "kc/gauntlet.jpg"},
    {nom : "Confinement / Containement", imgSpwn : "kc/containment.jpg"},
    {nom : "Labo / Labs", imgSpwn : "kc/labs.jpg"},
    {nom : "Charnière / Salvage", imgSpwn : "kc/salvage.jpg"},
    {nom : "Condensateur / Capacitor", imgSpwn : "kc/capacitor-apex-legends.jpg"},
    {nom : "Plateforme / Rig", imgSpwn : "kc/rig.jpg"},
    {nom : "Salle des cartes / Crypto’s Map Room", imgSpwn : "kc/map-room.png"},
    {nom : "Site du crash / Site crash", imgSpwn : "kc/site crash.jpg"},
    {nom : "Voyage de Mirage / Voyage Mirage", imgSpwn : "kc/voyage mirage- kc.jpg"}
]

*/
const kc8_3 = [
    {nom : "Lacs bigarrés / Spotted lakes", imgSpwn : "kc/spotted lakes.jpg"},
    {nom : "Artillerie, Artillery", imgSpwn : "kc/artillery.jpg"},
    {nom : "Arène / Pit", imgSpwn : "kc/The_Pit.jpg"},
    {nom : "Drainage / Runoff", imgSpwn : "kc/Runoff.jpg"},
    {nom : "Base aérienne / Airbase", imgSpwn : "kc/Airbase.jpg"},
    {nom : "Bunker", imgSpwn : "kc/Apex-Legends-bunker-580x334.jpg"},
    {nom : "Marais / Swamps", imgSpwn : "kc/Swamps.jpg"},
    {nom : "Cage", imgSpwn : "kc/the-cage.jpg"},
    {nom : "Marché / Market", imgSpwn : "kc/market.jpg"},
    {nom : "Barrage hydraulique / Hydro Dam", imgSpwn : "kc/Hydro_Dam.jpg"},
    {nom : "Répulseur / Repulsor", imgSpwn : "kc/Repulsor.jpg"},
    {nom : "Traitement de Caustic / Caustic Treatment", imgSpwn : "kc/Caustic-Treatment.jpg"},
    {nom : "Repaire / Gauntlet", imgSpwn : "kc/gauntlet.jpg"},
    {nom : "Confinement / Containement", imgSpwn : "kc/containment.jpg"},
    {nom : "Labo / Labs", imgSpwn : "kc/labs.jpg"},
    {nom : "Charnière / Salvage", imgSpwn : "kc/salvage.jpg"},
    {nom : "Condensateur / Capacitor", imgSpwn : "kc/capacitor-apex-legends.jpg"},
    {nom : "Plateforme / Rig", imgSpwn : "kc/rig.jpg"},
    {nom : "Salle des cartes / Crypto’s Map Room", imgSpwn : "kc/map-room.png"},
    {nom : "Site du crash / Site crash", imgSpwn : "kc/site crash.jpg"}
]


/********************************************* */
/*************** WORLD'S EDGE **************** */
/********************************************* */

const we3_1 = [
    {nom : "Raffinerie / Refinery", imgSpwn : "we/refinery.jpg"},
    {nom : "Skyhook", imgSpwn : "we/skyhook.jpg"},
    {nom : "Site de forage / Drill Site", imgSpwn : "we/drill-site.jpg"},
    {nom : "Crevasse de lave / Lava fissure", imgSpwn : "we/lava fissure.jpg"},
    {nom : "Gare de triage / Train yard", imgSpwn : "we/trainyard.jpg"},
    {nom : "Centrale thermique / Thermal station", imgSpwn : "we/thermal station.jpg"},
    {nom : "Arbre / The tree", imgSpwn : "we/tree.jpg"},
    {nom : "Collecteur / Harvester", imgSpwn : "we/harvester.jpg"},
    {nom : "Usine de tri / Sorting Factory", imgSpwn : "we/sorting factory.jpg"},
    {nom : "Site de lancement / Launch site", imgSpwn : "we/landing-site.jpg"},
    {nom : "Dome", imgSpwn : "we/the-dome-apex-legends.jpg"},
    {nom : "Cité de lave / Lava city", imgSpwn : "we/lava city.png"},
    {nom : "Geyser", imgSpwn : "we/geyser.jpg"},
    {nom : "Belvédère / Overlook", imgSpwn : "we/overlook.png"},
    {nom : "Capitol city", imgSpwn : "we/capitol city.jpg"},
    {nom : "Epicentre / Epicenter", imgSpwn : "we/the-epicenter.jpg"}
]

/*
const we3_2 = [
    {nom : "Raffinerie / Refinery", imgSpwn : "we/refinery.jpg"},
    {nom : "Skyhook", imgSpwn : "we/skyhook.jpg"},
    {nom : "Site de forage / Drill Site", imgSpwn : "we/drill-site.jpg"},
    {nom : "Crevasse de lave / Lava fissure", imgSpwn : "we/lava fissure.jpg"},
    {nom : "Gare de triage / Train yard", imgSpwn : "we/trainyard.jpg"},
    {nom : "Centrale thermique / Thermal station", imgSpwn : "we/thermal station.jpg"},
    {nom : "Arbre / The tree", imgSpwn : "we/tree.jpg"},
    {nom : "Collecteur / Harvester", imgSpwn : "we/harvester.jpg"},
    {nom : "Usine de tri / Sorting Factory", imgSpwn : "we/sorting factory.jpg"},
    {nom : "Site de lancement / Launch site", imgSpwn : "we/landing-site.jpg"},
    {nom : "Dome", imgSpwn : "we/the-dome-apex-legends.jpg"},
    {nom : "Cité de lave / Lava city", imgSpwn : "we/lava city.png"},
    {nom : "Geyser", imgSpwn : "we/geyser.jpg"},
    {nom : "Belvédère / Overlook", imgSpwn : "we/overlook.png"},
    {nom : "Capitol city", imgSpwn : "we/capitol city.jpg"},
    {nom : "Epicentre / Epicenter", imgSpwn : "we/the-epicenter.jpg"},
    {nom : "Voyage de Mirage / Voyage Mirage", imgSpwn : "we/voyage mirage- we.jpg"}
]
const we4_1 = [
    {nom : "Raffinerie / Refinery", imgSpwn : "we/refinery.jpg"},
    {nom : "Skyhook", imgSpwn : "we/skyhook.jpg"},
    {nom : "Site de forage / Drill Site", imgSpwn : "we/drill-site.jpg"},
    {nom : "Crevasse de lave / Lava fissure", imgSpwn : "we/lava fissure.jpg"},
    {nom : "Gare de triage / Train yard", imgSpwn : "we/trainyard.jpg"},
    {nom : "Centrale thermique / Thermal station", imgSpwn : "we/thermal station.jpg"},
    {nom : "Arbre / The tree", imgSpwn : "we/tree.jpg"},
    {nom : "Collecteur / Harvester", imgSpwn : "we/harvester.jpg"},
    {nom : "Usine de tri / Sorting Factory", imgSpwn : "we/sorting factory.jpg"},
    {nom : "Site de lancement / Launch site", imgSpwn : "we/landing-site.jpg"},
    {nom : "Dome", imgSpwn : "we/the-dome-apex-legends.jpg"},
    {nom : "Cité de lave / Lava city", imgSpwn : "we/lava city.png"},
    {nom : "Geyser", imgSpwn : "we/geyser.jpg"},
    {nom : "Belvédère / Overlook", imgSpwn : "we/overlook.png"},
    {nom : "Epicentre / Epicenter", imgSpwn : "we/the-epicenter.jpg"},
    {nom : "Voyage de Mirage / Voyage Mirage", imgSpwn : "we/voyage mirage- we.jpg"},
    {nom : "Campement / Survey Camp", imgSpwn : "we/survey-after.jpg"},
    {nom : "Fragment Est / Fragment East", imgSpwn : "we/Fragment-East.jpg"},
    {nom : "Fragment Ouest / Fragment West", imgSpwn : "we/Fragment-west.jpg"}
]
const we4_2 = [
    {nom : "Raffinerie / Refinery", imgSpwn : "we/refinery.jpg"},
    {nom : "Skyhook", imgSpwn : "we/skyhook.jpg"},
    {nom : "Site de forage / Drill Site", imgSpwn : "we/drill-site.jpg"},
    {nom : "Crevasse de lave / Lava fissure", imgSpwn : "we/lava fissure.jpg"},
    {nom : "Gare de triage / Train yard", imgSpwn : "we/trainyard.jpg"},
    {nom : "Centrale thermique / Thermal station", imgSpwn : "we/thermal station.jpg"},
    {nom : "Arbre / The tree", imgSpwn : "we/tree.jpg"},
    {nom : "Collecteur / Harvester", imgSpwn : "we/harvester.jpg"},
    {nom : "Usine de tri / Sorting Factory", imgSpwn : "we/sorting factory.jpg"},
    {nom : "Site de lancement / Launch site", imgSpwn : "we/landing-site.jpg"},
    {nom : "Dome", imgSpwn : "we/the-dome-apex-legends.jpg"},
    {nom : "Cité de lave / Lava city", imgSpwn : "we/lava city.png"},
    {nom : "Geyser", imgSpwn : "we/geyser.jpg"},
    {nom : "Belvédère / Overlook", imgSpwn : "we/overlook.png"},
    {nom : "Epicentre / Epicenter", imgSpwn : "we/the-epicenter.jpg"},
    {nom : "Voyage de Mirage / Voyage Mirage", imgSpwn : "we/voyage mirage- we.jpg"},
    {nom : "Campement / Survey Camp", imgSpwn : "we/survey-after.jpg"},
    {nom : "Fragment Est / Fragment East", imgSpwn : "we/Fragment-East.jpg"},
    {nom : "Fragment Ouest / Fragment West", imgSpwn : "we/Fragment-west.jpg"},
    {nom : "Epreuves / Trials", imgSpwn : "we/trials.png"}
]
const we6 = [
    {nom : "Raffinerie / Refinery", imgSpwn : "we/refinery.jpg"},
    {nom : "Skyhook", imgSpwn : "we/skyhook.jpg"},
    {nom : "Décompte / Countdown", imgSpwn : "we/countdown.png"},
    {nom : "Crevasse de lave / Lava fissure", imgSpwn : "we/lava fissure.jpg"},
    {nom : "Gare de triage / Train yard", imgSpwn : "we/trainyard.jpg"},
    {nom : "Centrale thermique / Thermal station", imgSpwn : "we/thermal station.jpg"},
    {nom : "Arbre / The tree", imgSpwn : "we/tree.jpg"},
    {nom : "Collecteur / Harvester", imgSpwn : "we/harvester.jpg"},
    {nom : "Usine de tri / Sorting Factory", imgSpwn : "we/sorting factory.jpg"},
    {nom : "Site de lancement / Launch site", imgSpwn : "we/landing-site.jpg"},
    {nom : "Dome", imgSpwn : "we/the-dome-apex-legends.jpg"},
    {nom : "Cité de lave / Lava city", imgSpwn : "we/lava city.png"},
    {nom : "Geyser", imgSpwn : "we/geyser.jpg"},
    {nom : "Belvédère / Overlook", imgSpwn : "we/overlook.png"},
    {nom : "Epicentre / Epicenter", imgSpwn : "we/the-epicenter.jpg"},
    {nom : "Campement / Survey Camp", imgSpwn : "we/survey-after.jpg"},
    {nom : "Fragment Est / Fragment East", imgSpwn : "we/Fragment-East.jpg"},
    {nom : "Fragment Ouest / Fragment West", imgSpwn : "we/Fragment-west.jpg"},
    {nom : "Epreuves / Trials", imgSpwn : "we/trials.png"},
    {nom : "Complexe / Staging", imgSpwn : "we/staging.png"}
]
const we10_1 = [
    {nom : "Climatiseur / Climatizer", imgSpwn : "we/climatizer.jpg"},
    {nom : "Skyhook", imgSpwn : "we/skyhook.jpg"},
    {nom : "Décompte / Countdown", imgSpwn : "we/countdown.png"},
    {nom : "Crevasse de lave / Lava fissure", imgSpwn : "we/lava fissure.jpg"},
    {nom : "Glissement / Landslide", imgSpwn : "we/landslide.jpg"},
    {nom : "Centrale thermique / Thermal station", imgSpwn : "we/thermal station.jpg"},
    {nom : "Arbre / The tree", imgSpwn : "we/tree.jpg"},
    {nom : "Collecteur / Harvester", imgSpwn : "we/harvester.jpg"},
    {nom : "Siphon de lave / Lava siphon", imgSpwn : "we/lava siphon.jpg"},
    {nom : "Site de lancement / Launch site", imgSpwn : "we/landing-site.jpg"},
    {nom : "Dome", imgSpwn : "we/the-dome-apex-legends.jpg"},
    {nom : "Cité de lave / Lava city", imgSpwn : "we/lava city.png"},
    {nom : "Geyser", imgSpwn : "we/geyser.jpg"},
    {nom : "Belvédère / Overlook", imgSpwn : "we/overlook.png"},
    {nom : "Epicentre / Epicenter", imgSpwn : "we/the-epicenter.jpg"},
    {nom : "Campement / Survey Camp", imgSpwn : "we/survey-after.jpg"},
    {nom : "Fragment Est / Fragment East", imgSpwn : "we/Fragment-East.jpg"},
    {nom : "Fragment Ouest / Fragment West", imgSpwn : "we/Fragment-west.jpg"},
    {nom : "Epreuves / Trials", imgSpwn : "we/trials.png"},
    {nom : "Complexe / Staging", imgSpwn : "we/staging.png"}
]

*/
const we10_2 = [
    {nom : "Climatiseur / Climatizer", imgSpwn : "we/climatizer.jpg"},
    {nom : "Skyhook", imgSpwn : "we/skyhook.jpg"},
    {nom : "Décompte / Countdown", imgSpwn : "we/countdown.png"},
    {nom : "Crevasse de lave / Lava fissure", imgSpwn : "we/lava fissure.jpg"},
    {nom : "Glissement / Landslide", imgSpwn : "we/landslide.jpg"},
    {nom : "Centrale thermique / Thermal station", imgSpwn : "we/thermal station.jpg"},
    {nom : "Arbre / The tree", imgSpwn : "we/tree.jpg"},
    {nom : "Collecteur / Harvester", imgSpwn : "we/harvester.jpg"},
    {nom : "Siphon de lave / Lava siphon", imgSpwn : "we/lava siphon.jpg"},
    {nom : "Site de lancement / Launch site", imgSpwn : "we/landing-site.jpg"},
    {nom : "Dome", imgSpwn : "we/the-dome-apex-legends.jpg"},
    {nom : "Cité de lave / Lava city", imgSpwn : "we/lava city.png"},
    {nom : "Geyser", imgSpwn : "we/geyser.jpg"},
    {nom : "Belvédère / Overlook", imgSpwn : "we/overlook.png"},
    {nom : "Epicentre / Epicenter", imgSpwn : "we/the-epicenter.jpg"},
    {nom : "Campement / Survey Camp", imgSpwn : "we/survey-after.jpg"},
    {nom : "Fragment Est / Fragment East", imgSpwn : "we/Fragment-East.jpg"},
    {nom : "Fragment Ouest / Fragment West", imgSpwn : "we/Fragment-west.jpg"},
    {nom : "Epreuves / Trials", imgSpwn : "we/trials.png"},
    {nom : "Complexe / Staging", imgSpwn : "we/staging.png"},
    {nom : "Big Maude", imgSpwn : "we/big maude.jpeg"}
]


/********************************************* */
/****************** OLYMPUS ****************** */
/********************************************* */

const oly7_1 = [
    {nom : "Docks", imgSpwn : "oly/docks.jpg"},
    {nom : "Transporteur / Carrier", imgSpwn : "oly/carrier.jpg"},
    {nom : "Faille / Rift", imgSpwn : "oly/rift.jpg"},
    {nom : "Réseau electrique / Power grid", imgSpwn : "oly/powergrid.jpg"},
    {nom : "Turbine", imgSpwn : "oly/turbine.jpg"},
    {nom : "Oasis", imgSpwn : "oly/oasis.jpg"},
    {nom : "Dépot énergétique / Energy depot", imgSpwn : "oly/energydepot.jpg"},
    {nom : "Jardins / Gardens", imgSpwn : "oly/garden.jpg"},
    {nom : "Quartier des tours / Grow tours", imgSpwn : "oly/growtowers.jpg"},
    {nom : "Hammond labs", imgSpwn : "oly/hammond-labs.jpg"},
    {nom : "Résidences / Estates", imgSpwn : "oly/estates.jpg"},
    {nom : "Elysium", imgSpwn : "oly/elysium.jpg"},
    {nom : "Complexe hydroponique / Hydroponics", imgSpwn : "oly/hydroponics.jpg"},
    {nom : "Place Bonsai / Bonsai Plaza", imgSpwn : "oly/bonsai.jpg"},
    {nom : "Complexe solaire / Solar array", imgSpwn : "oly/solary array.jpg"},
    {nom : "Canon orbital / Orbital cannon", imgSpwn : "oly/orbital cannon.jpg"}
]


/*

const oly7_2 = [
    {nom : "Docks", imgSpwn : "oly/docks.jpg"},
    {nom : "Transporteur / Carrier", imgSpwn : "oly/carrier.jpg"},
    {nom : "Faille / Rift", imgSpwn : "oly/rift.jpg"},
    {nom : "Réseau electrique / Power grid", imgSpwn : "oly/powergrid.jpg"},
    {nom : "Turbine", imgSpwn : "oly/turbine.jpg"},
    {nom : "Oasis", imgSpwn : "oly/oasis.jpg"},
    {nom : "Dépot énergétique / Energy depot", imgSpwn : "oly/energydepot.jpg"},
    {nom : "Jardins / Gardens", imgSpwn : "oly/garden.jpg"},
    {nom : "Quartier des tours / Grow tours", imgSpwn : "oly/growtowers.jpg"},
    {nom : "Hammond labs", imgSpwn : "oly/hammond-labs.jpg"},
    {nom : "Résidences / Estates", imgSpwn : "oly/estates.jpg"},
    {nom : "Elysium", imgSpwn : "oly/elysium.jpg"},
    {nom : "Complexe hydroponique / Hydroponics", imgSpwn : "oly/hydroponics.jpg"},
    {nom : "Place Bonsai / Bonsai Plaza", imgSpwn : "oly/bonsai.jpg"},
    {nom : "Complexe solaire / Solar array", imgSpwn : "oly/solary array.jpg"},
    {nom : "Canon orbital / Orbital cannon", imgSpwn : "oly/orbital cannon.jpg"},
    {nom : "Soir de combat / Fight night", imgSpwn : "oly/fightnightapex.jpg"}
]

*/
const oly9 = [
    {nom : "Docks", imgSpwn : "oly/docks.jpg"},
    {nom : "Transporteur / Carrier", imgSpwn : "oly/carrier.jpg"},
    {nom : "Faille / Rift", imgSpwn : "oly/rift.jpg"},
    {nom : "Réseau electrique / Power grid", imgSpwn : "oly/powergrid.jpg"},
    {nom : "Turbine", imgSpwn : "oly/turbine.jpg"},
    {nom : "Oasis", imgSpwn : "oly/oasis.jpg"},
    {nom : "Dépot énergétique / Energy depot", imgSpwn : "oly/energydepot.jpg"},
    {nom : "Jardins / Gardens", imgSpwn : "oly/garden.jpg"},
    {nom : "Quartier des tours / Grow tours", imgSpwn : "oly/growtowers.jpg"},
    {nom : "Hammond labs", imgSpwn : "oly/hammond-labs.jpg"},
    {nom : "Résidences / Estates", imgSpwn : "oly/estates.jpg"},
    {nom : "Elysium", imgSpwn : "oly/elysium.jpg"},
    {nom : "Complexe hydroponique / Hydroponics", imgSpwn : "oly/hydroponics.jpg"},
    {nom : "Place Bonsai / Bonsai Plaza", imgSpwn : "oly/bonsai.jpg"},
    {nom : "Complexe solaire / Solar array", imgSpwn : "oly/solary array.jpg"},
    {nom : "Canon orbital / Orbital cannon", imgSpwn : "oly/orbital cannon.jpg"},
    {nom : "Soir de combat / Fight night", imgSpwn : "oly/fightnightapex.jpg"},
    {nom : "Icarus", imgSpwn : "oly/icarus.png"}
]

const oly12 = [
    {nom : "Docks", imgSpwn : "oly/docks.jpg"},
    {nom : "Transporteur / Carrier", imgSpwn : "oly/carrier.jpg"},
    {nom : "Faille / Rift", imgSpwn : "oly/rift.jpg"},
    {nom : "Réseau electrique / Power grid", imgSpwn : "oly/powergrid.jpg"},
    {nom : "Turbine", imgSpwn : "oly/turbine.jpg"},
    {nom : "Oasis", imgSpwn : "oly/oasis.jpg"},
    {nom : "Dépot énergétique / Energy depot", imgSpwn : "oly/energydepot.jpg"},
    {nom : "Jardins / Gardens", imgSpwn : "oly/garden.jpg"},
    {nom : "Quartier des tours / Grow tours", imgSpwn : "oly/growtowers.jpg"},
    {nom : "Hammond labs", imgSpwn : "oly/hammond-labs.jpg"},
    {nom : "Résidences / Estates", imgSpwn : "oly/estates.jpg"},
    {nom : "Elysium", imgSpwn : "oly/elysium.jpg"},
    {nom : "Complexe hydroponique / Hydroponics", imgSpwn : "oly/hydroponics.jpg"},
    {nom : "Place Bonsai / Bonsai Plaza", imgSpwn : "oly/bonsai.jpg"},
    {nom : "Complexe solaire / Solar array", imgSpwn : "oly/solary array.jpg"},
    {nom : "Canon orbital / Orbital cannon", imgSpwn : "oly/orbital cannon.jpg"},
    {nom : "Soir de combat / Fight night", imgSpwn : "oly/fightnightapex.jpg"},
    {nom : "Icarus", imgSpwn : "oly/icarus.png"},
    {nom : "Générateur phasique / Phase driver", imgSpwn : "oly/phase-driver.png"},
    {nom : "Terminal", imgSpwn : "oly/terminal.png"}
]


/********************************************* */
/*************** STORM POINT ***************** */
/********************************************* */

const sp11 = [
    {nom : "Point culminant / Highpoint", imgSpwn : "sp/high-point.jpg"},
    {nom : "Paratonnerre / Lightning rod", imgSpwn : "sp/lighnting rod.JPG"},
    {nom : "Poste de surveillance / Thunder watch", imgSpwn : "sp/thunder-watch.jpg"},
    {nom : "Centre de commande / Command center", imgSpwn : "sp/command-center.jpg"},
    {nom : "Mur / Wall", imgSpwn : "sp/the-wall.jpg"},
    {nom : "Tremplin Nord / North pad", imgSpwn : "sp/north-pad.jpg"},
    {nom : "Point de controle / Checkpoint", imgSpwn : "sp/checkpoint.jpg"},
    {nom : "Cascades / Cascade falls", imgSpwn : "sp/cascade-falls.jpg"},
    {nom : "Attrappe-tonnerres / Storm catcher", imgSpwn : "sp/storm-catcher.jpg"},
    {nom : "Tremplin / Launch pad", imgSpwn : "sp/launch-pad.jpg"},
    {nom : "Antenne / Antenna", imgSpwn : "sp/antenna.jpg"},
    {nom : "Moulin / Mill", imgSpwn : "sp/the-mill.jpg"},
    {nom : "Cénoté / Cenote cave", imgSpwn : "sp/cenote.jpg"},
    {nom : "Baromètre / Barometer", imgSpwn : "sp/barometer.jpg"},
    {nom : "Vaisseau échoué / Ship fall", imgSpwn : "sp/shipfall.jpg"},
    {nom : "Station tempête / Gale station", imgSpwn : "sp/gale-station.jpg"},
    {nom : "Fermes piscicoles / Fish farm", imgSpwn : "sp/fish-farms.jpg"}
]
const sp12 = [
    {nom : "Point culminant / Highpoint", imgSpwn : "sp/high-point.jpg"},
    {nom : "Paratonnerre / Lightning rod", imgSpwn : "sp/lighnting rod.JPG"},
    {nom : "Poste de surveillance / Thunder watch", imgSpwn : "sp/thunder-watch.jpg"},
    {nom : "Centre de commande / Command center", imgSpwn : "sp/command-center.jpg"},
    {nom : "Mur / Wall", imgSpwn : "sp/the-wall.jpg"},
    {nom : "Tremplin Nord / North pad", imgSpwn : "sp/north-pad.jpg"},
    {nom : "Point de controle / Checkpoint", imgSpwn : "sp/checkpoint.jpg"},
    {nom : "Cascades / Cascade falls", imgSpwn : "sp/cascade-falls.jpg"},
    {nom : "Attrappe-tonnerres / Storm catcher", imgSpwn : "sp/storm-catcher.jpg"},
    {nom : "Tremplin / Launch pad", imgSpwn : "sp/launch-pad.jpg"},
    {nom : "Antenne / Antenna", imgSpwn : "sp/antenna.jpg"},
    {nom : "Moulin / Mill", imgSpwn : "sp/the-mill.jpg"},
    {nom : "Cénoté / Cenote cave", imgSpwn : "sp/cenote.jpg"},
    {nom : "Baromètre / Barometer", imgSpwn : "sp/barometer.jpg"},
    {nom : "Vaisseau échoué / Ship fall", imgSpwn : "sp/shipfall.jpg"},
    {nom : "Station tempête / Gale station", imgSpwn : "sp/gale-station.jpg"},
    {nom : "Fermes piscicoles / Fish farm", imgSpwn : "sp/fish-farms.jpg"},
    {nom : "Créature térassée / Downed beast", imgSpwn : "sp/monstrous-storm-point-map-update-2.jpg.adapt.320w.jpg"}
]



/**************************************** */
/***************Fonctions**************** */
/**************************************** */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const playSpawnRandom = () => {
    // buttonValider.disabled = true
    const map = inputMapLeg.value;
    if (map === "0") {
        Swal.fire("Veuillez saisir une map ou \"Legends\" !","Please select a map or \"Legends\" !", "warning")
        
    } else{
        if (map === "kc0") {
            spawn = getRandomIntInclusive(0, kc0.length - 1)
            spawnOn = kc0[spawn].nom;
            imageSpawn = kc0[spawn].imgSpwn;
        }
        if (map === "kc2_1") {
            spawn = getRandomIntInclusive(0, kc2_1.length - 1)
            spawnOn = kc2_1[spawn].nom;
            imageSpawn = kc2_1[spawn].imgSpwn;
        }
        if (map === "kc2_2") {
            spawn = getRandomIntInclusive(0, kc2_2.length - 1)
            spawnOn = kc2_2[spawn].nom;
            imageSpawn = kc2_2[spawn].imgSpwn;
        }
        if (map === "kc5_1") {
            spawn = getRandomIntInclusive(0, kc5_1.length - 1)
            spawnOn = kc5_1[spawn].nom
            imageSpawn = kc5_1[spawn].imgSpwn;
        }
        if (map === "kc5_2") {
            spawn = getRandomIntInclusive(0, kc5_2.length - 1)
            spawnOn = kc5_2[spawn].nom;
            imageSpawn = kc5_2[spawn].imgSpwn;
        }
        if (map === "kc8_1") {
            spawn = getRandomIntInclusive(0, kc8_1.length - 1)
            spawnOn = kc8_1[spawn].nom;
            imageSpawn = kc8_1[spawn].imgSpwn;
        }
        if (map === "kc8_2") {
            spawn = getRandomIntInclusive(0, kc8_2.length - 1)
            spawnOn = kc8_2[spawn].nom;
            imageSpawn = kc8_2[spawn].imgSpwn;
        }
        if (map === "kc8_3") {
            spawn = getRandomIntInclusive(0, kc8_3.length - 1)
            spawnOn = kc8_3[spawn].nom;
            imageSpawn = kc8_3[spawn].imgSpwn;
        }
        if (map === "we3_1") {
            spawn = getRandomIntInclusive(0, we3_1.length - 1)
            spawnOn = we3_1[spawn].nom;
            imageSpawn = we3_1[spawn].imgSpwn;
        }
        if (map === "we3_2") {
            spawn = getRandomIntInclusive(0, we3_2.length - 1)
            spawnOn = we3_2[spawn].nom;
            imageSpawn = we3_2[spawn].imgSpwn;
        }
        if (map === "we4_1") {
            spawn = getRandomIntInclusive(0, we4_1.length - 1)
            spawnOn = we4_1[spawn].nom;
            imageSpawn = we4_1[spawn].imgSpwn;
        }
        if (map === "we4_2") {
            spawn = getRandomIntInclusive(0, we4_2.length - 1)
            spawnOn = we4_2[spawn].nom;
            imageSpawn = we4_2[spawn].imgSpwn;
        }
        if (map === "we6") {
            spawn = getRandomIntInclusive(0, we6.length - 1)
            spawnOn = we6[spawn].nom;
            imageSpawn = we6[spawn].imgSpwn;
        }
        if (map === "we10_1") {
            spawn = getRandomIntInclusive(0, we10_1.length - 1)
            spawnOn = we10_1[spawn].nom;
            imageSpawn = we10_1[spawn].imgSpwn;
        }
        if (map === "we10_2") {
            spawn = getRandomIntInclusive(0, we10_2.length - 1)
            spawnOn = we10_2[spawn].nom;
            imageSpawn = we10_2[spawn].imgSpwn;
        }
        if (map === "oly7_1") {
            spawn = getRandomIntInclusive(0, oly7_1.length - 1)
            spawnOn = oly7_1[spawn].nom;
            imageSpawn = oly7_1[spawn].imgSpwn;
        }
        if (map === "oly7_2") {
            spawn = getRandomIntInclusive(0, oly7_2.length - 1)
            spawnOn = oly7_2[spawn].nom;
            imageSpawn = oly7_2[spawn].imgSpwn;
        }
        if (map === "oly9") {
            spawn = getRandomIntInclusive(0, oly9.length - 1)
            spawnOn = oly9[spawn].nom;
            imageSpawn = oly9[spawn].imgSpwn;
        }
        if (map === "oly12") {
            spawn = getRandomIntInclusive(0, oly12.length - 1)
            spawnOn = oly9[spawn].nom;
            imageSpawn = oly12[spawn].imgSpwn;
        }
        if (map === "sp11") {
            spawn = getRandomIntInclusive(0, sp11.length - 1)
            spawnOn = sp11[spawn].nom;
            imageSpawn = sp11[spawn].imgSpwn;
        }
        if (map === "sp12") {
            spawn = getRandomIntInclusive(0, sp12.length - 1)
            spawnOn = sp12[spawn].nom;
            imageSpawn = sp12[spawn].imgSpwn;
        }
        
        // randomSpawnShow.innerHTML = `Aller à / Drop on : <br><br><b>` + spawnOn + `</b><br><br>Soyez prêts, Légendes ! / Be ready, Legends !`;
        Swal.fire({
            title: 'Let\'s go !',
            text: spawnOn,
            imageUrl: imageSpawn,
            // imageWidth: 500,
            // imageHeight: 250,
            imageAlt: 'Custom image',
          })
    }
    
    
}


const playLegendRandom = () => {
    // buttonValider.disabled = true
    const legend = inputMapLeg.value;
    if (legend === "0") {
        Swal.fire("Veuillez saisir une map ou \"Legends\" !","Please select a map or \"Legends\" !", "warning")
        
    } else{
            randomLegend = getRandomIntInclusive(0, legends.length - 1)
            pick = legends[randomLegend].nom;
            imageLegend = legends[randomLegend].imgLeg;
        }
        
        // randomSpawnShow.innerHTML = `Aller à / Drop on : <br><br><b>` + pick + `</b><br><br>Soyez prêts, Légendes ! / Be ready, Legends !`;
        Swal.fire({
            title: 'Let\'s go !',
            text: pick,
            imageUrl: imageLegend,
            // imageWidth: 500,
            // imageHeight: 250,
            imageAlt: 'Custom image',
          })
}



/**************************************** */
/***********Code principal*************** */
/**************************************** */


document.addEventListener('DOMContentLoaded', () => {

    inputMapLeg = document.getElementById('mapLegSelector')
    buttonValider = document.getElementById('valider')
    counterShow = document.getElementById('counter')
    randomSpawnShow = document.getElementById('random-spawn')
    buttonValider.addEventListener('click', ()=>{
        
        if (inputMapLeg.value != "leg") {
            playSpawnRandom()
        } else {
            playLegendRandom()
            
        }
    })
})






/*

1- Récupérer l'id "saisi" dans le bouton Selectionner la map
2- Appuyer sur Valider
3- Générer un nombre random selon id (si id = sp11 -> nb(0,17))
3.1- Aller chercher dans le tableau correspondant à l'id, le nombre généré (stormPoint["Antenne", "Cénoté"...] => stormPoint[random])
4- Afficher le résultat (après une petite animation de défilement des noms comme les couleurs)

*/