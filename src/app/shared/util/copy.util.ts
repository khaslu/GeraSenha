export class CopyUtil {
  private constructor() { }

  static copiar(valor: string) {
    const input = document.createElement('input');
    input.value = valor;
    document.body.appendChild(input);
    input.select();
    navigator.clipboard.writeText(input.value)
      .then(() => {
        document.body.removeChild(input);
      })
      .catch((error) => {
        console.error('Falha ao copiar o texto: ', error);
      });
  }
}
