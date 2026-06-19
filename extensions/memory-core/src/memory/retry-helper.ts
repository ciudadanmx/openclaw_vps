// Implementación local del reintento para evitar el error de importación
export async function retryTransientMemoryRead<T>(fn: () => Promise<T>): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    // Si falla, hacemos un reintento simple o simplemente lanzamos el error
    // para no bloquear el flujo silenciosamente
    console.warn("Transient memory read failed, retrying...");
    return await fn();
  }
}
