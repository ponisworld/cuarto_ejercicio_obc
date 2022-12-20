const nombre = 'Andrea';
const apellido = 'Bellver García';

const estudiante = `${nombre} ${apellido}`;

const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const longitudEstudiante = estudiante.length;

const primeraLetraNombre = nombre.charAt(0);

const ultimaLetraApellido = apellido[apellido.length - 1];

const estudianteSinEspacios = estudiante.trim();

const bool = estudiante.includes(nombre);
