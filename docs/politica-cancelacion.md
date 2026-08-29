# Política de cancelación y reembolsos

Esta política se publica en dos lugares: el formulario de Airtable
**"Solicitud Teleconsulta Psiquiatría Infantil"** (junto al campo Comprobante
de Pago) y, desde el 29-ago-2026, la página **`terminos.html`** del sitio
(sección "Reagendamiento y cancelación"), enlazada desde el footer de todas
las páginas. Este documento la deja registrada en el repo como referencia del
negocio, junto al resto de la documentación institucional (`privacidad.html`,
condiciones de teleconsulta en `como-funciona.html`).

La contraparte técnica (trazabilidad de reembolsos en Airtable, estado
`Reembolsado` en el Worker, cálculo de comisiones Flow) está en
[`neuropsynfonia-flow/docs/politica-cancelacion.md`](https://github.com/camifran/neuropsynfonia-flow/blob/main/docs/politica-cancelacion.md).

## Texto histórico (ya reemplazado en el formulario)

El formulario publicaba antes: cancelando hasta el mediodía del día hábil
anterior "se le devolverá la totalidad del pago". Camila lo reemplazó por el
texto nuevo (confirmado el 29-ago-2026; el reemplazo fue anterior). Los pagos
hechos **bajo el texto antiguo** se reembolsan al 100 %, absorbiendo la
consulta las comisiones de Flow; el descuento de costos aplica solo a pagos
posteriores al reemplazo.

## Texto vigente (publicado en el formulario y en terminos.html)

Conserva el mismo plazo y agrega el desglose por medio de pago. Nota: el
formulario tiene la versión previa a la corrección del 29-ago ("Pago con
tarjeta a través de Flow"); falta actualizar esa línea a "Pago a través de
Flow (tarjeta, transferencia u otro medio…)" para cubrir la transferencia
dentro del link de Flow. `terminos.html` ya tiene la versión corregida.

Actualización 29-ago-2026: "transferencia directa" es solo la que llega a la
cuenta de la consulta sin pasar por Flow. La transferencia ofrecida **dentro del
link de Flow** también paga comisión de recaudación (tarifa menor que la de
tarjeta), así que el texto agrupa todos los medios pagados vía Flow.

> **Política de cancelación y reembolsos**
>
> - Puede **reagendar o cancelar** avisando hasta el **mediodía (12:00) del día
>   hábil anterior** al día de su reserva (ej.: para una hora del lunes, avise el
>   viernes anterior antes de las 12:00). En ese caso puede usar el pago para otra
>   hora, o pedir la devolución del dinero.
> - Si pide la devolución, la forma del reembolso depende de cómo pagó:
>   - **Pago por transferencia bancaria directa**: se devuelve el **monto íntegro**
>     por transferencia a la cuenta que nos indique, sin descuentos.
>   - **Pago a través de Flow** (tarjeta, transferencia u otro medio ofrecido en
>     la plataforma de pago): el reembolso se procesa por Flow y
>     **se descuentan los costos operativos no recuperables del medio de pago**:
>     la comisión de recaudación del pago original y el cargo por reembolso de
>     Flow ($240, IVA incluido). El monto exacto a devolver se informa por correo
>     antes de procesar el reembolso. El reembolso requiere su **aceptación en la
>     notificación que envía Flow** (tiene 10 días corridos para aceptarla) y
>     puede tardar hasta 10 días hábiles en reflejarse, según su banco.
> - Los avisos **posteriores a ese plazo** y las **inasistencias** no dan derecho a
>   reembolso, ya que la hora quedó reservada y no puede ofrecerse a otra persona.
> - Si la cancelación es responsabilidad de NeuroPsynfonía (indisponibilidad del
>   profesional, error en el cobro o imposibilidad de prestar el servicio), se
>   devuelve el **100 % del monto pagado**, sin descuentos, por el mismo medio en
>   que pagó.

## Dónde vive publicada

- Campo de texto junto a "Comprobante de Pago" en el formulario Airtable de
  teleconsulta (`pagQHD0CK3rYef9oD/form`, base `appo5rFiYgYkeThb0`) — versión
  previa a la corrección del 29-ago (pendiente el ajuste de la línea de Flow).
- `terminos.html` del sitio, sección "Reagendamiento y cancelación" — versión
  vigente completa, enlazada desde el footer de todas las páginas.
