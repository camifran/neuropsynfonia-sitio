# Site Migration Checkpoint

**Fecha:** 2026-06-29

---

## GitHub Pages

| Campo | Valor |
|---|---|
| Repo | camifran/neuropsynfonia-sitio |
| Commit sitio formalizado | 96f0ba7 |
| Commit dominio / metadatos / CNAME | c3d7f79 |
| Custom domain | www.neuropsynfonia.cl |
| DNS | www CNAME camifran.github.io |
| Estado actual | Sitio sirve por HTTP — falta certificado HTTPS / Enforce HTTPS |

---

## Privacidad

- `privacidad.html` publicada
- Referencias a Make eliminadas
- Cloudflare Worker agregado
- Consentimiento del formulario Airtable actualizado manualmente

---

## Worker (neuropsynfonia-flow)

- `urlReturn` actual sigue temporalmente apuntando a GitHub Pages
- Cambio futuro preparado: `src/payment.ts:137` → `https://www.neuropsynfonia.cl/pago-listo.html`
- **NO ejecutar hasta que HTTPS esté operativo**

---

## Pendientes críticos (en orden)

1. Esperar certificado HTTPS en www.neuropsynfonia.cl
2. Activar Enforce HTTPS en GitHub Pages Settings
3. Verificar carga correcta de `/`, `/privacidad.html` y `/pago-listo.html` por HTTPS
4. Cambiar `urlReturn` en neuropsynfonia-flow (`src/payment.ts:137`)
5. Typecheck / test / deploy sandbox del Worker
6. Prueba de Flow en sandbox
