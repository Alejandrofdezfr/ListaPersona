import { Persona } from "../persona";

export class ServicioPersona {
    private personas : Persona[];

    constructor(){

        this.personas =[
            new Persona("Alejandro","Fernandez",19),
            new Persona("Pepe","Fernandez",49),
            new Persona("Messi","Andrés",39),
            new Persona("Cristiano","Ronaldo",41),
            new Persona("Lamine","Yamal",17),
        ]
    }

    public getAllPersonas(){
        return [...this.personas];
    }
}
