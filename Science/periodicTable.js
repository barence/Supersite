class Element{
    constructor(AtomNumb, Symbol, AtomMass){
    this.AtomNumb = AtomNumb;
    this.Symbol = Symbol;
    this.AtomMass = AtomMass;
    }
}

const Hydrogen = new Element(1,"H",1.0078);
const Helium = new Element(2,"He",4.0026);
const Lithium = new Element(3,"Li",6.9410);
const Beryllium = new Element(4,"Be",9.0122);
const Boron = new Element(5,"B",10.811);
const Carbon = new Element(6,"C",12.011);
const Nitrogen = new Element(7,"N",14.007);
const Oxygen = new Element(8,"O",15.999);
const Fluorine = new Element(9,"F",18.998);
const Neon = new Element(10,"Ne",20.180);
const Sodium = new Element(11,"Na",22.990);
const Magnesium = new Element(12,"Mg",24.305);
const Aluminum = new Element(13,"Al",26.982);
const Silicon = new Element(14,"Si",28.086);
const Phosphorus = new Element(15,"P",30.974);
const Sulfur = new Element(16,"S",32.065);
const Chlorine = new Element(17,"Cl",35.453);
const Argon = new Element(18,"Ar",39.948);
const Potassium = new Element(19,"K",39.098);
const Calcium = new Element(20,"Ca",40.078);
const Scandium = new Element(21,"Sc",44.956);
const Titanium = new Element(22,"Ti",47.867);
const Vanadium = new Element(23,"V",50.942);
const Chromium = new Element(24,"Cr",51.996);
const Manganese = new Element(25,"Mn",54.938);
const Iron = new Element(26,"Fe",55.845);
const Cobalt = new Element(27,"Co",58.933);
const Nickel = new Element(28,"Ni",58.693);
const Copper = new Element(29,"Cu",63.546);
const Zinc = new Element(30,"Zn",65.380);
const Gallium = new Element(31,"Ga",69.723);
const Germanium = new Element(32,"Ge",72.640);
const Arsenic = new Element(33,"As",74.922);
const Selenium = new Element(34,"Se",78.960);
const Bromine = new Element(35,"Br",79.904);
const Krypton = new Element(36,"Kr",83.798);
const Rubidium = new Element(37,"Rb",85.468);
const Strontium = new Element(38,"Sr",87.620);
const Yttrium = new Element(39,"Y",88.906);
const Zirconium = new Element(40,"Zr",91.224);
const Niobium = new Element(41,"Nb",92.906);
const Molybdenum = new Element(42,"Mo",95.950);
const Technetium = new Element(43,"Tc",98);
const Ruthenium = new Element(44,"Ru",101.07);
const Rhodium = new Element(45,"Rh",102.91);
const Palladium = new Element(46,"Pd",106.42);
const Silver = new Element(47,"Ag",107.87);
const Cadmium = new Element(48,"Cd",112.41);
const Indium = new Element(49,"In",114.82);
const Tin = new Element(50,"Sn",118.71);
const Antimony = new Element(51,"Sb",121.76);
const Tellurium = new Element(52,"Te",127.60);
const Iodine = new Element(53,"I",126.90);
const Xenon = new Element(54,"Xe",131.29);
const Cesium = new Element(55,"Cs",132.91);
const Barium = new Element(56,"Ba",137.33);
const Lanthanum = new Element(57,"La",138.91);
const Cerium = new Element(58,"Ce",140.12);
const Praseodymium = new Element(59,"Pr",140.91);
const Neodymium = new Element(60,"Nd",144.24);
const Promethium = new Element(61,"Pm",145);
const Samarium = new Element(62,"Sm",150.36);
const Europium = new Element(63,"Eu",151.96);
const Gadolinium = new Element(64,"Gd",157.25);
const Terbium = new Element(65,"Tb",158.93);
const Dysprosium = new Element(66,"Dy",162.5);
const Holmium = new Element(67,"Ho",164.93);
const Erbium = new Element(68,"Er",167.26);
const Thulium = new Element(69,"Tm",168.93);
const Ytterbium = new Element(70,"Yb",173.04);
const Lutetium = new Element(71,"Lu",174.97);
const Hafnium = new Element(72,"Hf",178.49);
const Tantalum = new Element(73,"Ta",180.95);
const Tungsten = new Element(74,"W",183.84);
const Rhenium = new Element(75,"Re",186.21);
const Osmium = new Element(76,"Os",190.23);
const Iridium = new Element(77,"Ir",192.22);
const Platinum = new Element(78,"Pt",195.08);
const Gold = new Element(79,"Au",196.97);
const Mercury = new Element(80,"Hg",200.59);
const Thallium = new Element(81,"Tl",204.38);
const Lead = new Element(82,"Pb",207.20);
const Bismuth = new Element(83,"Bi",208.98);
const Polonium = new Element(84,"Po",209);
const Astatine = new Element(85,"At",210);
const Radon = new Element(86,"Rn",222);
const Francium = new Element(87,"Fr",223);
const Radium = new Element(88,"Ra",226);
const Actinium = new Element(89,"Ac",227);
const Thorium = new Element(90,"Th",232.04);
const Protactinium = new Element(91,"Pa",231.04);
const Uranium = new Element(92,"U",238.03);
const Neptunium = new Element(93,"Np",237.05);
const Plutonium = new Element(94,"Pu",244);
const Americium = new Element(95,"Am",243);

let UserMolecule;
document.getElementById("Submit").onclick=function(){
    UserMolecule = document.getElementById("MoleculeFormula").value;
    let Mass = 0;
    let NumbChar = UserMolecule.length;
    let Upper = UserMolecule.toUpperCase();
    let StartOfSlice=0;
    let Adding = 0;
    let Multiplying = 1;
    let Error = false
    /*if(UserMolecule[i] == "("){
        StartOfSlice = i;
        if(UserMolecule.slice(StartOfSlice,NumbChar).includes(")"))
        (UserMolecule.slice(StartOfSlice,NumbChar).indexOf(")"));
    }*/
    Error=false;
    for(let i = 1; i <= NumbChar; i++){
        if(UserMolecule[i] == Upper[i]){
            if(isNaN(UserMolecule[0])==false){
                Error = true;
            }
            else if(isNaN(UserMolecule[i])==false){
                for(let d = 1; d <= NumbChar; d++){
                    if(isNaN(UserMolecule.slice(i,i+d))==false){
                        Multiplying=UserMolecule.slice(i,i+d);
                        console.log(Multiplying);
                    }   
                }
                console.log(Multiplying);
            }
            else if(UserMolecule.slice(StartOfSlice,i)==Hydrogen.Symbol){Adding=Hydrogen.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Helium.Symbol){Adding=Helium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Lithium.Symbol){Adding=Lithium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Beryllium.Symbol){Adding=Beryllium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Boron.Symbol){Adding=Boron.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Carbon.Symbol){Adding=Carbon.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Nitrogen.Symbol){Adding=Nitrogen.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Oxygen.Symbol){Adding=Oxygen.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Fluorine.Symbol){Adding=Fluorine.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Neon.Symbol){Adding=Neon.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Sodium.Symbol){Adding=Sodium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Magnesium.Symbol){Adding=Magnesium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Aluminum.Symbol){Adding=Aluminum.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Silicon.Symbol){Adding=Silicon.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Phosphorus.Symbol){Adding=Phosphorus.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Sulfur.Symbol){Adding=Sulfur.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Chlorine.Symbol){Adding=Chlorine.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Argon.Symbol){Adding=Argon.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Potassium.Symbol){Adding=Potassium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Calcium.Symbol){Adding=Calcium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Titanium.Symbol){Adding=Titanium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Vanadium.Symbol){Adding=Vanadium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Chromium.Symbol){Adding=Chromium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Manganese.Symbol){Adding=Manganese.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Iron.Symbol){Adding=Iron.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Cobalt.Symbol){Adding=Cobalt.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Nickel.Symbol){Adding=Nickel.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Copper.Symbol){Adding=Copper.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Zinc.Symbol){Adding=Zinc.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Gallium.Symbol){Adding=Gallium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Germanium.Symbol){Adding=Germanium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Arsenic.Symbol){Adding=Arsenic.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Selenium.Symbol){Adding=Selenium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Bromine.Symbol){Adding=Bromine.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Krypton.Symbol){Adding=Krypton.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Rubidium.Symbol){Adding=Rubidium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Strontium.Symbol){Adding=Strontium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Yttrium.Symbol){Adding=Yttrium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Zirconium.Symbol){Adding=Zirconium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Niobium.Symbol){Adding=Niobium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Molybdenum.Symbol){Adding=Molybdenum.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Technetium.Symbol){Adding=Technetium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Ruthenium.Symbol){Adding=Ruthenium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Rhodium.Symbol){Adding=Rhodium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Palladium.Symbol){Adding=Palladium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Silver.Symbol){Adding=Silver.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Cadmium.Symbol){Adding=Cadmium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Indium.Symbol){Adding=Indium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Tin.Symbol){Adding=Tin.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Antimony.Symbol){Adding=Antimony.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Tellurium.Symbol){Adding=Tellurium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Iodine.Symbol){Adding=Iodine.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Xenon.Symbol){Adding=Xenon.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Cesium.Symbol){Adding=Cesium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Barium.Symbol){Adding=Barium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Lanthanum.Symbol){Adding=Lanthanum.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Cerium.Symbol){Adding=Cerium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Praseodymium.Symbol){Adding=Praseodymium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Neodymium.Symbol){Adding=Neodymium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Promethium.Symbol){Adding=Promethium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Samarium.Symbol){Adding=Samarium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Europium.Symbol){Adding=Europium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Gadolinium.Symbol){Adding=Gadolinium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Terbium.Symbol){Adding=Terbium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Dysprosium.Symbol){Adding=Dysprosium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Holmium.Symbol){Adding=Holmium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Erbium.Symbol){Adding=Erbium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Thulium.Symbol){Adding=Thulium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Ytterbium.Symbol){Adding=Ytterbium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Lutetium.Symbol){Adding=Lutetium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Hafnium.Symbol){Adding=	Hafnium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Tantalum.Symbol){Adding=Tantalum.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Tungsten.Symbol){Adding=Tungsten.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Rhenium.Symbol){Adding=Rhenium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Osmium.Symbol){Adding=Osmium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Iridium.Symbol){Adding=Iridium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Platinum.Symbol){Adding=Platinum.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Gold.Symbol){Adding=Gold.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Mercury.Symbol){Adding=Mercury.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Thallium.Symbol){Adding=Thallium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Lead.Symbol){Adding=Lead.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Bismuth.Symbol){Adding=Bismuth.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Polonium.Symbol){Adding=Polonium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Astatine.Symbol){Adding=Astatine.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Radon.Symbol){Adding=Radon.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Francium.Symbol){Adding=Francium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Radium.Symbol){Adding=Radium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Actinium.Symbol){Adding=Actinium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Thorium.Symbol){Adding=Thorium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Protactinium.Symbol){Adding=Protactinium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Uranium.Symbol){Adding=Uranium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Neptunium.Symbol){Adding=Neptunium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Plutonium.Symbol){Adding=Plutonium.AtomMass;}
            else if(UserMolecule.slice(StartOfSlice,i)==Americium.Symbol){Adding=Americium.AtomMass;}
            else{Adding=0; console.log("ERROR"); Error=true;}
            console.log(UserMolecule.slice(StartOfSlice,i));
            StartOfSlice=i;
            Adding*=Multiplying;
            Mass+=Adding;
            Multiplying=1;
        }   
    }
    if(Error==false){
        ResultElement.textContent = Mass + " amu";
        console.log(Mass);
    }
    if(Error==true){ ResultElement.textContent = "Error";}
}