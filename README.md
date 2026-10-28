# NeuroPsynfonía — Sitio Web

## Estructura de archivos
```
neuropsynfonia/
├── index.html       ← página principal
├── style.css        ← estilos
├── script.js        ← interactividad
├── img/
│   ├── logo.png     ← logo del centro (agregar)
│   ├── camila.jpg   ← foto Dra. Cortés (agregar)
│   └── ximena.jpg   ← foto Dra. Badilla (agregar)
└── README.md
```

## Cómo subir a GitHub Pages

```bash
# 1. Navegar a la carpeta del sitio
cd ruta/a/neuropsynfonia

# 2. Inicializar repositorio
git init
git add .
git commit -m "Sitio inicial NeuroPsynfonía"

# 3. Crear repositorio en GitHub (sin README)
# Luego conectar y subir:
git remote add origin https://github.com/TU_USUARIO/neuropsynfonia.git
git branch -M main
git push -u origin main

# 4. Activar GitHub Pages
# GitHub → Settings → Pages → Branch: main → Save

# 5. Conectar dominio neuropsynfonia.cl
# Agregar CNAME con tu registrador apuntando a TU_USUARIO.github.io
```

## Imágenes pendientes
- [ ] logo.png (logo del centro)
- [ ] camila.jpg (foto Dra. Cortés)
- [ ] ximena.jpg (foto Dra. Badilla)
- [ ] Fotos de las consultas (cuando llegue el fotógrafo)

## URL de retorno de pagos Flow (pago-listo.html)

### Configuración temporal (sitio en GitHub Pages)
- **Página:** `pago-listo.html`
- **URL retorno:** `https://camifran.github.io/neuropsynfonia-sitio/pago-listo.html`

### Configuración final (cuando sitio esté en neuropsynfonia.cl)
- **URL retorno:** `https://www.neuropsynfonia.cl/pago-listo.html`

> **TODO:** Actualizar urlReturn en Flow sandbox cuando el sitio se despliegue a producción

## Políticas hacia las familias (registro)

- **28-10-2026, comunicación y urgencias** (aprobado por Camila y Ximena): sección 8 de `terminos.html`. Canales oficiales: WhatsApp de secretaría y contacto@; los correos directos a una profesional pueden tardar hasta una semana; recetas, informes y documentos se piden solo por el formulario de solicitudes (`pacientes.html#solicitudes`); las dudas sobre el tratamiento se resuelven en controles; el centro no atiende urgencias (SAMU 131); los números personales no son canal de contacto.
- **28-10-2026, sin plazos comprometidos** (decisión de Camila): ninguna página promete plazo para informes ni solicitudes, y lo dicen explícitamente (`terminos.html` sección 6, `pacientes.html`, `como-funciona.html`, `agendar.html`). Se quitó la tarjeta «Solicitud de información» de `pacientes.html` y esa opción del formulario de Airtable.
- Reagendamiento, cancelación y reembolsos: ver `docs/politica-cancelacion.md`.

## Pendiente
- [ ] Formulario de control psiquiatría presencial (cuando esté listo)
- [ ] Fotos de las consultas y recepción
- [ ] Actualizar urlReturn de Flow a neuropsynfonia.cl cuando sitio sea productivo
