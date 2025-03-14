module.exports = {
    renderView: (res, view, status, data = {}) => {
        const defaultData = {
            mensajeError: null, // Mensaje de error por defecto
            mensajeExito: null, // Puedes añadir mensajes de éxito si lo necesitas
            usuario: null, // Si más adelante manejas sesiones de usuario
        };

        res.status(status);
        res.render(view, { ...defaultData, ...data });
    }
};
