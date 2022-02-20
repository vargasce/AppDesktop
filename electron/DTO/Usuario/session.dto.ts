
type Usuario = {
    usuario: string;
    nom_ape: string;
    email: string;
}

type UsuarioSession = {
    usuario: Usuario,
    token: string
}
export default UsuarioSession;