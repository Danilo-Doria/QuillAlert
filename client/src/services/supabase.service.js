
import { supabase } from '../config/supabase.client';

export const SupabaseCRUD = {
  
  /**
   * CREAR (Insertar un registro o varios)
   * @param {string} tabla - Nombre de la tabla
   * @param {Object|Object[]} datos - Objeto o array de objetos a insertar
   */
  async create(tabla, datos) {
    const { data, error } = await supabase
      .from(tabla)
      .insert(datos)
      .select();

    if (error) throw error;
    return data;
  },

  /**
   * LEER (Con paginación y un filtro opcional)
   * @param {string} tabla - Nombre de la tabla
   * @param {number} pagina - Número de página (empezando en 1)
   * @param {number} porPagina - Cantidad de registros por página
   * @param {Object} [filtro] - Objeto opcional { columna: 'valor' }
   */
  async read(tabla, pagina = 1, porPagina = 10, filtro = null) {
    // Calcular los rangos para la paginación de Supabase (.range(desde, hasta))
    const desde = (pagina - 1) * porPagina;
    const hasta = desde + porPagina - 1;

    let query = supabase
      .from(tabla)
      .select('*', { count: 'exact' }) // 'exact' nos devuelve el total de filas en la BD
      .range(desde, hasta);

    // Si viene un filtro, lo aplicamos dinámicamente usando .eq()
    if (filtro) {
      Object.entries(filtro).forEach(([columna, valor]) => {
        query = query.eq(columna, valor);
      });
    }

    const { data, error, count } = await query;

    if (error) throw error;
    
    return {
      datos: data,
      totalRegistros: count,
      paginaActual: pagina,
      totalPaginas: Math.ceil(count / porPagina)
    };
  },

  /**
   * ACTUALIZAR (Modificar registros basados en un filtro, ej: por ID)
   * @param {string} tabla - Nombre de la tabla
   * @param {Object} filtro - Objeto para identificar qué actualizar { id: 5 }
   * @param {Object} nuevosDatos - Campos a modificar { nombre: 'Nuevo Nombre' }
   */
  async update(tabla, filtro, nuevosDatos) {
    let query = supabase
      .from(tabla)
      .update(nuevosDatos);

    // Aplicamos los filtros para no actualizar toda la tabla por error
    Object.entries(filtro).forEach(([columna, valor]) => {
      query = query.eq(columna, valor);
    });

    const { data, error } = await query.select();

    if (error) throw error;
    return data;
  },

  /**
   * ELIMINAR (Borrar registros basados en un filtro)
   * @param {string} tabla - Nombre de la tabla
   * @param {Object} filtro - Objeto para identificar qué borrar { id: 5 }
   */
  async delete(tabla, filtro) {
    let query = supabase
      .from(tabla)
      .delete();

    Object.entries(filtro).forEach(([columna, valor]) => {
      query = query.eq(columna, valor);
    });

    const { data, error } = await query.select();

    if (error) throw error;
    return data;
  }
};