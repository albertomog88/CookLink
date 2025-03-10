module.exports = {
    renderView: (res, view, data = {}) => {
        const defaultData = {
            mensajeError: null, // Mensaje de error por defecto
            mensajeExito: null, // Puedes añadir mensajes de éxito si lo necesitas
            usuario: null, // Si más adelante manejas sesiones de usuario
        };

        res.render(view, { ...defaultData, ...data });
    }
};
