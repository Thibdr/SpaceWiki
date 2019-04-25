import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  private myService : HttpClient;
  constructor(param_http: HttpClient) {
    this.myService = param_http;
   }
  
  public getImage(param:string): Observable<string[]>{
    // observable gérant le flux de données de la NASA ( çàd, le fait de l'obtenir, de gérer les éventuelles erreurs et si l'on en a besoin, le fait d'avoirt terminé le chargement )
    const obs:Observable<any> = this.myService.get("https://images-api.nasa.gov/search?q=" + param + "&media_type=image");

    // fonction qui permet de transformer les données reçues depuis l'API de la NASA
    const treatment =  (param_data: any) => {


      let collection: any = param_data.collection;
      let items: any[] = collection.items;
      let results: string[] = [];
      let current = null;
      for (let i: number = 0; i < items.length; i++) {
        current = items[i];
        if (current.links.length > 0) {
          results.push(current.links[0].href);
        }
      }
      return results;
    };
    // on retourne l'observable résultant de l'envoi des données du premier observable à une fonction de traitement ( treatment ). 
    // on envoie ces données à la fonction de traitement par le biais de l'opéérateur pipe et on fait en sorte que cette fonction de traitement s'applique à chaque donnée reçue depuis le serveur ( au fur et à mesure ) avec l'opérateur "map"
    // le résultat de tout ceci, nous donne un nouvel observable contenant uniquement les données filtrées / traitées qui nous intéressent.
    return obs.pipe( map(treatment)  );
  }
}

