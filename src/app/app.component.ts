import { Component } from '@angular/core';
// Importo el archivo JSON 
import datos_peludos from 'src/assets/json/datos_peludos.json';

//variables
var datos: any;
var isLicencia: string = "";
var isCastrado: string = "";
var isLeishmaniasis: string = "";
var isOperar: string = "";
var isEnfermedades: string = "";
var isTratamiento: string = "";
var isCastrado: string = "";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'pppeludos-web';
  datos: any = datos_peludos;
  ver_peludo: string = "Ver datos de los peludos";
  modificar_datos: string = "Modificar datos";
  aniadir_peludo: string = "Añadir peludo";
  quitar_peludo: string = "Quitar peludo";
  document: undefined;
  formulario = document.getElementById('Formulario');
  hierarchicalData: any;
  datosPerros: boolean | undefined = true;
  form: boolean | undefined = false;
  aniadir: boolean | undefined;
  quitar: boolean | undefined;

  licencia(licencia: any) {

    if (licencia.toLowerCase() === "si") {
      isLicencia = "badge badge-danger  rounded-pill d-inline";
    } else {
      isLicencia = "badge badge-success  rounded-pill d-inline";
    }
    return isLicencia;
  }

  castrado(castrado: any) {

    if (castrado.toLowerCase() === "si") {
      isCastrado = "badge badge-success  rounded-pill d-inline";
    } else {
      isCastrado = "badge badge-danger  rounded-pill d-inline";
    }
    return isCastrado;
  }

  leishmaniasis(Leishmaniasis: any) {

    if (Leishmaniasis.toLowerCase() === "si") {
      isLeishmaniasis = "badge badge-danger  rounded-pill d-inline";
    } else {
      isLeishmaniasis = "badge badge-success  rounded-pill d-inline";
    }
    return isLeishmaniasis;
  }
  pendienteOperar(operar: any) {

    if (operar.toLowerCase() === "si") {
      isOperar = "badge badge-danger  rounded-pill d-inline";
    } else {
      isOperar = "badge badge-success  rounded-pill d-inline";
    }
    return isOperar;
  }
  enfermedades(enfermedades: any) {

    if (enfermedades.toLowerCase() === "si") {
      isEnfermedades = "badge badge-danger  rounded-pill d-inline";
    } else {
      isEnfermedades = "badge badge-success  rounded-pill d-inline";
    }
    return isEnfermedades;
  }

  tratamiento(tratamiento: any) {

    if (tratamiento.toLowerCase() === "si") {
      isTratamiento = "badge badge-danger  rounded-pill d-inline";
    } else {
      isTratamiento = "badge badge-success  rounded-pill d-inline";
    }
    return isTratamiento;
  }

  mostrarPerros() {
    this.datosPerros = true
    this.form = false
    this.quitar = false
    this.aniadir = false;
  }

  modificarPeludo() {
    this.datosPerros = false
    this.form = true
    this.quitar = false
    this.aniadir = false; 
  }
  
  aniadirPeludo() {
    this.form = false
    this.datosPerros = false
    this.quitar = false
    this.aniadir = true;
  }
  quitarPeludo() {
    this.form = false
    this.datosPerros = false
    this.aniadir = false
    this.quitar = true;
  }

  cerrarFormulario() {
    this.datosPerros = true
    this.aniadir = false
    this.quitar = false
    this.form = false
  }

  cerrarAniadir() {
    this.datosPerros = true
    this.aniadir = false
    this.quitar = false
    this.form = false
  }
  cerrarQuitario() {
    this.datosPerros = true
    this.aniadir = false
    this.quitar = false
    this.form = false
  }

}

