# Política de cancelación y reembolsos

Esta política no vive en el sitio (`neuropsynfonia.cl`): se publica en el
formulario de Airtable **"Solicitud Teleconsulta Psiquiatría Infantil"**, junto
al campo Comprobante de Pago. Este documento la deja registrada en el repo del
sitio para que quede como referencia del negocio, junto al resto de la
documentación institucional (`privacidad.html`, condiciones de teleconsulta en
`como-funciona.html`).

La contraparte técnica (trazabilidad de reembolsos en Airtable, estado
`Reembolsado` en el Worker, cálculo de comisiones Flow) está en
[`neuropsynfonia-flow/docs/politica-cancelacion.md`](https://github.com/camifran/neuropsynfonia-flow/blob/main/docs/politica-cancelacion.md).

## Política vigente hoy (publicada en el formulario Airtable)

> Si cancela hasta el mediodía (12h) del día hábil anterior al día de su reserva, se
> le devolverá la totalidad del pago o se utilizará como pago de otra hora según su
> preferencia. Posterior a ello no se realizará devolución. (Ej: si tiene una hora un
> lunes, se devolverá el dinero mientras avise el viernes anterior antes de las 12h.)

Mientras este texto siga publicado, todo pago hecho bajo él se reembolsa al
**100 %** si se cancela a tiempo — la consulta absorbe cualquier comisión de
Flow, no el paciente.

## Texto nuevo (pendiente de publicar en el formulario Airtable)

Conserva el mismo plazo y agrega el desglose por medio de pago. Se aplica
**solo a pagos hechos después de reemplazar el texto vigente** — no de forma
retroactiva.

> **Política de cancelación y reembolsos**
>
> - Puede **reagendar o cancelar** avisando hasta el **mediodía (12:00) del día
>   hábil anterior** al día de su reserva (ej.: para una hora del lunes, avise el
>   viernes anterior antes de las 12:00). En ese caso puede usar el pago para otra
>   hora, o pedir la devolución del dinero.
> - Si pide la devolución, la forma del reembolso depende de cómo pagó:
>   - **Pago por transferencia bancaria directa**: se devuelve el **monto íntegro**
>     por transferencia a la cuenta que nos indique, sin descuentos.
>   - **Pago con tarjeta a través de Flow**: el reembolso se procesa por Flow y
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

- **Hoy**: campo de texto junto a "Comprobante de Pago" en el formulario
  Airtable de teleconsulta (`pagQHD0CK3rYef9oD/form`, base `appo5rFiYgYkeThb0`).
- **No está** replicada en ninguna página del sitio (`agendar.html`,
  `como-funciona.html`, etc.) — si se decide publicarla también ahí, actualizar
  este documento con el enlace a la sección correspondiente.
