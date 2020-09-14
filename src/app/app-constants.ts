export class AppConstants {

    public static get baseServidor(): string {
        return "/api/"
    }

    public static get baseLivro(): string {
        return this.baseServidor + "livraria/livros"
    }

    public static get baseAutor(): string {
        return this.baseServidor + "livraria/autores";
    }
}
