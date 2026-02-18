export const validar = (form, reglas) => {

  for (const name in reglas) {
    const campo = form.elements[name];
    const regla = reglas[name];

    console.log(campo);
    
  }
  return true;
}